<?php
/**
 * copyright (C) 2008 GWE Systems Ltd - All rights reserved
 */

// Check to ensure this file is included in Joomla!
defined('_JEXEC') or die();

/**
 * HTML View class for the component frontend
 *
 * @static
 */
include_once(JPATH_SITE."/modules/mod_jevents_cal/tmpl/default/calendar.php");


class GeraintModCalView extends DefaultModCalView 
{
		function _displayCalendarMod($time, $startday, $linkString, &$day_name, $monthMustHaveEvent=false, $basedate=false){

		$db	= JFactory::getDBO();
		$cfg = JEVConfig::getInstance();
		$option = JEV_COM_COMPONENT;

		$cal_year=date("Y",$time);
		$cal_month=date("m",$time);
		// do not use $cal_day since it's not reliable due to month offset calculation
		//$cal_day=date("d",$time);
		
		if (!$basedate) $basedate=$time;
		$base_year = date("Y",$basedate);
		$base_month = date("m",$basedate);
		$basefirst_of_month   = JevDate::mktime(0,0,0,$base_month, 1, $base_year);

		$requestYear = JRequest::getInt("year",0);
		$requestMonth = JRequest::getInt("month",0);
		// special case when site link set the dates for the mini-calendar in the URL but not in the ajax request
		if ($requestMonth && $requestYear && JRequest::getString("task","")!="modcal.ajax"  && $this->modparams->get("minical_usedate",0)){
			$requestDay = JRequest::getInt("day",1);

			$requestTime = JevDate::mktime(0,0,0,$requestMonth, $requestDay, $requestYear);
			if ($time-$basedate > 100000) $requestTime = JevDate::strtotime("+1 month",$requestTime);
			else if ($time-$basedate < -100000) $requestTime = JevDate::strtotime("-1 month",$requestTime);
	
			$cal_year = date("Y",$requestTime);
			$cal_month = date("m",$requestTime);

			$base_year = $requestYear;
			$base_month = $requestMonth;
			$basefirst_of_month   = JevDate::mktime(0,0,0,$requestMonth, $requestDay, $requestYear);
		}
		else {
			$cal_year=date("Y",$time);
			$cal_month=date("m",$time);
		}		

		$reg = JFactory::getConfig();
		$reg->set("jev.modparams",$this->modparams);
		if ($this->modparams->get("showtooltips",0)) {
			$data = $this->datamodel->getCalendarData($cal_year,$cal_month,1,false, false);
			$this->hasTooltips	 = true;
		}
		else {
			$data = $this->datamodel->getCalendarData($cal_year,$cal_month,1,true, $this->modparams->get("noeventcheck",0));
		}
		$reg->set("jev.modparams",false);
                $width = $this->modparams->get("mod_cal_width","140px");
                $height = $this->modparams->get("mod_cal_height","");
		

		$month_name = JEVHelper::getMonthName($cal_month);
		$first_of_month = JevDate::mktime(0,0,0,$cal_month, 1, $cal_year);
		//$today = JevDate::mktime(0,0,0,$cal_month, $cal_day, $cal_year);
		$today = JevDate::strtotime(date('Y-m-d', $this->timeWithOffset));

		$content    = '';
		
		if( $this->minical_showlink ){

			$content .= "\n".'<table style="width:'.$width.';" class="mod_events_monthyear" >' . "\n"
			. '<tr >' . "\n";

			if( $this->minical_showlink == 1 ){

				if( $this->minical_prevyear ){
					$content .= $this->monthYearNavigation($basefirst_of_month,"-1 year",'&laquo;',JText::_('JEV_CLICK_TOSWITCH_PY'));
				}

				if( $this->minical_prevmonth ){
					$content .= $this->monthYearNavigation($basefirst_of_month,"-1 month",'&lt;',JText::_('JEV_CLICK_TOSWITCH_PM'));
				}

				if( $this->minical_actmonth == 1 ){
					// combination of actual month and year: view month
					$seflinkActMonth = JRoute::_( $this->linkpref.'month.calendar&month='.$cal_month.'&year='.$cal_year);

					$content .= '<td>';
					$content .= $this->htmlLinkCloaking($seflinkActMonth, $month_name, array('class'=>"mod_events_link",'title'=> JText::_('JEV_CLICK_TOSWITCH_MON')))." ";
					if( $this->minical_actyear < 1 ) $content .= '</td>';
				}elseif( $this->minical_actmonth == 2 ){
					$content .= '<td>';
					$content .= $month_name . "\n";
					if( $this->minical_actyear < 1 ) $content .= '</td>';
				}

				if( $this->minical_actyear == 1 ){
					// combination of actual month and year: view year
					$seflinkActYear = JRoute::_( $this->linkpref . 'year.listevents' . '&month=' . $cal_month
					. '&year=' . $cal_year );

					if( $this->minical_actmonth < 1 )$content .= '<td>';
					$content .= $this->htmlLinkCloaking($seflinkActYear, $cal_year, array('class'=>"mod_events_link",'title'=> JText::_('JEV_CLICK_TOSWITCH_YEAR')))." ";
					$content .= '</td>';
				}elseif( $this->minical_actyear == 2 ){
					if( $this->minical_actmonth < 1 ) $content .= '<td>';
					$content .= $cal_year . "\n";
					$content .= '</td>';
				}

				if( $this->minical_nextmonth ){
					$content .= $this->monthYearNavigation($basefirst_of_month,"+1 month",'&gt;',JText::_('JEV_CLICK_TOSWITCH_NM'));
				}

				if( $this->minical_nextyear ){
					$content .= $this->monthYearNavigation($basefirst_of_month,"+1 year",'&raquo;',JText::_('JEV_CLICK_TOSWITCH_NY'));
				}

				// combination of actual month and year: view year & month [ mic: not used here ]
				// $seflinkActYM   = JRoute::_( $link . 'month.calendar' . '&month=' . $cal_month
				// . '&year=' . $cal_year );
			}else{
				// show only text
				$content .= '<td>';
				$content .= $month_name . ' ' . $cal_year;
				$content .= '</td>';
			}

			$content .= "</tr>\n"
			. "</table>\n";
		}
		$lf = "\n";



		$content	.= '<table style="width:'.$width.';height:'.$height.';" class="mod_events_table" >'.$lf
		. '<tr class="mod_events_dayname">'.$lf;

		// Days name rows
		for ($i=0;$i<7;$i++) {
			$content.="<td class=\"mod_events_td_dayname\">".$day_name[($i+$startday)%7]."</td>".$lf	;
		}

		$content.='</tr>'.$lf;

		$datacount = count($data["dates"]);
		$dn=0;
		for ($w=0;$w<6 && $dn<$datacount;$w++){
			$content .="<tr>\n";
			/*
			echo "<td width='2%' class='cal_td_weeklink'>";
			list($week,$link) = each($data['weeks']);
			echo "<a href='".$link."'>$week</a></td>\n";
			*/
			for ($d=0;$d<7 && $dn<$datacount;$d++){
				$currentDay = $data["dates"][$dn];
				switch ($currentDay["monthType"]){
					case "prior":
					case "following":
						$content .= '<td class="mod_events_td_dayoutofmonth">'.$currentDay["d"]."</td>\n";
						break;
					case "current":
						if ($currentDay["events"] || $this->modparams->get("noeventcheck",0)){
							$class = ($currentDay["cellDate"] == $today) ? "mod_events_td_todaywithevents" : "mod_events_td_daywithevents";
						}
						else {
							$class = ($currentDay["cellDate"] == $today) ? "mod_events_td_todaynoevents" : "mod_events_td_daynoevents";
						}
						$content .= "<td class='".$class."'>\n";
						$tooltip = $this->getTooltip($currentDay, array('class'=>"mod_events_daylink"));
						if ($tooltip) {
							$content .= $tooltip;
						}
						else {
							$content .= $this->htmlLinkCloaking($currentDay["link"], $currentDay['d'], array('class'=>"mod_events_daylink",'title'=> JText::_('JEV_CLICK_TOSWITCH_DAY')));
						}
						$content .="</td>\n";

						break;
				}
				$dn++;
			}
			$content .= "</tr>\n";
		}

		$content .= '</table>'.$lf;

		return $content;
	}
}
