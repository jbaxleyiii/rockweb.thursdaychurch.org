/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

(function($){

	"use strict";

	$(document).ready(function() {

		var config = $('html').data('config') || {};

		// Social buttons
		$('article[data-permalink]').socialButtons(config);

		// Accordion menu
		$('.menu-sidebar').accordionMenu({ 
			mode:'slide',
			transition: "easeOutQuad",
			duration: 500,
			display: 'show'
		});

		// canvas menu
		$('.uk-nav-offcanvas .level1.parent').addClass('uk-nav-offcanvas');

		// Dropdown menu
		$('#menu').dropdownMenu({ 
			mode: 'height', 
			dropdownSelector: 'div.dropdown', 
			transition:"easeOutExpo",
			duration:500
		});

		// remove empty p tags
		$('p').each(function() {
		    var $this = $(this);
		    if($this.html().replace(/\s|&nbsp;/g, '').length === 0)
		        $this.remove();
		});

		// add icon to menu
		$('.menu-dropdown li a.level1, .menu-dropdown li a.level2, .menu-dropdown li a.level3, .menu-dropdown li a.level4, .menu-dropdown li a.level5, #offcanvas .canvas-menu a').each(function() {
			var drop_m = $(this);
	        var all = drop_m.attr('class').split(' ');
	        for (var i = 0; i < all.length; ++i) {
	            var cls = all[i];
	            if (cls.indexOf('icon-') == 0) {
	                drop_m.prepend('<i class="uk-' + cls + '"></i>');
	                drop_m.removeClass(cls).addClass('has-icon');
	            }
	        }
	    });

		// Smoothscroller
		$('a[href="#page"]').smoothScroller({ duration: 500 });

		// article meta-data
	    $('.email span.icon-envelope').removeClass('icon-envelope').addClass('uk-icon-envelope-o');
	    $('.print span.icon-print').removeClass('icon-print').addClass('uk-icon-print');

		// style the zoo blog buttons
		$('p.links').each(function() {
		    var $this = $(this);
		    $this.children().eq(0).addClass("button-color");
		    $this.children().eq(1).addClass("button");
		});		

		//modules styling
		$('.mod-color').closest('section').addClass('at-mod-color');
		$('.mod-dark').closest('section').addClass('at-mod-dark');
		$('.mod-overlay').closest('.at-parent').addClass('overlay-margin');
		$('.mod-color').parents('.uk-modal-dialog').addClass('mod-color');
		$('.mod-dark').parents('.uk-modal-dialog').addClass('mod-dark');

		// toggles
		if ($('.showhide li').length > 0) {
			var showhide = $('.showhide li');
			showhide.each(function () {
			var q = $(this);
		  
				if (q.children('div').css('display') === 'block') {
					q.children('h4').prev().addClass('uk-icon-minus');
				} else if (q.children('div').css('display') === 'none') {
					q.children('h4').prev().addClass('uk-icon-plus');;
				}

				q.children('h4, i').click(function () {
					q.children('div').slideToggle(700, 'easeOutQuint', function () {
						if (q.children('div').css('display') === 'block') {
							q.children('h4').prev().addClass('uk-icon-minus').removeClass('uk-icon-plus');
						} else if (q.children('div').css('display') === 'none') {
							q.children('h4').prev().addClass('uk-icon-plus').removeClass('uk-icon-minus');
						}
					});
				});
			});
		};
	
		// add styling to images
		$('.element-image img, .zoo-item-list img, .zoo-comments-list img, .itemAuthorBlock > .gkAvatar > img, .k2Avatar img, .gkAvatar > img, .kwho-admin img, img.kavatar').each(function() {
		    var $this = $(this);
		    $this.addClass("pic3d");
		});


		// blog tags
		$('.element-itemtag a, .zoo-tagcloud a, .itemTags a, .k2TagCloudBlock a, .moduleItemTags a, p.taxonomy a, div.tags a').each(function(i, elem) {
		    var $this = $(this);
		    var html = $(elem).html();
		    var final = '<span class="tag">' + html + '</span>';
		    $(this).html(final );
		    $this.addClass("tag-body");	   
		});

		//add button styling
		$('.jev_back, a.readon').addClass('button-color');

		//block-number
		$('.block-number').each(function(i, elem){
		    var html = $(elem).html();
		    var final = '<span class="digit">' + html + '</span>';
		    $(this).html(final );
		});


		//yoo vertical menu fix
		$('.colored li.level2.active').closest('div').addClass('open-menu');


		//event date/time block
		$('.event-time').each(function(i, elem){
		    var html = $(elem).html();
		    var dt =  html.split(":");
		    var final = '<span class="month">' + dt[1] + '</span><span class="date">' + dt[0] + '</span>';
		    $(this).html(final );
		    $(this).parent().addClass('event');
		});

		//back to top
		if ($("#totop-scroller").length) {
			$().UItoTop({scrollSpeed: 500, easingType: 'easeOutExpo' });
		}

		// titles
		$('#contact-form, form.submission').prev().addClass('module-title');
		
		//li span
		$('#page ul.style li').each(function(i, elem){
		    var html = $(elem).html();
		    var final = '<span>' + html + '</span>';
		    $(this).html(final );
		});

		// add icon to widgetkit spotlight
		$('a[data-spotlight] img').each(function(i, elem){
			$(this).load(function() {
				$(this).parent().children('.overlay-default').addClass('uk-icon-plus').css("line-height", $(this).parent().height() + "px");
			});
		});

		$('#cntdwn').parent().addClass('countdown-div');
		
		// apply modal-box sizes		
		$('.module.modal-small').each(function() {
		    $(this).closest('.uk-modal-dialog').addClass('md-small');
		});	
		$('.module.modal-large').each(function() {
		    $(this).closest('.uk-modal-dialog').addClass('md-large');
		});	

		// badges
		$('.uk-badge.badge-primary').addClass('uk-badge');
		$('.uk-badge.badge-danger').addClass('uk-badge-danger').parent().removeClass('badge-danger');
		$('.uk-badge.badge-success').addClass('uk-badge-success').parent().removeClass('badge-success');
		$('.uk-badge.badge-warning').addClass('uk-badge-warning').parent().removeClass('badge-warning');
				

		$('.deepest > .uk-badge').each(function() {
	        var all = $(this).parent().attr('class').split(' ');
	        for (var i = 0; i < all.length; ++i) {
	            var bdg = all[i];
	            if (bdg.indexOf('deepest') != 0) {
	                $(this).text(bdg);
	            }
	        }
	    });



	});

	$.onMediaQuery('(min-width: 960px)', {
		init: function() {
			if (!this.supported) this.matches = true;
		},
		valid: function() {
			$.matchWidth('grid-block', '.grid-block', '.grid-h').match();
			$.matchHeight('top-a', '#top-a .grid-h', '.deepest').match();
			$.matchHeight('top-b', '#top-b .grid-h', '.deepest').match();
			$.matchHeight('bottom-a', '#bottom-a .grid-h', '.deepest').match();
			$.matchHeight('bottom-b', '#bottom-b .grid-h', '.deepest').match();
			$.matchHeight('bottom-c', '#bottom-c .grid-h', '.deepest').match();
			$.matchHeight('bottom-d', '#bottom-d .grid-h', '.deepest').match();
			$.matchHeight('innertop-a', '#innertop-a .grid-h', '.deepest').match();
			$.matchHeight('innertop-b', '#innertop-b .grid-h', '.deepest').match();
			$.matchHeight('main', '#maininner, #sidebar-a, #sidebar-b').match();
			$.matchHeight('innerbottom-a', '#innerbottom-a .grid-h', '.deepest').match();
			$.matchHeight('innerbottom-b', '#innerbottom-b .grid-h', '.deepest').match();
		},
		invalid: function() {
			$.matchWidth('grid-block').remove();
			$.matchHeight('main').remove();
			$.matchHeight('top-a').remove();
			$.matchHeight('top-b').remove();
			$.matchHeight('bottom-a').remove();
			$.matchHeight('bottom-b').remove();
			$.matchHeight('bottom-c').remove();
			$.matchHeight('bottom-d').remove();
			$.matchHeight('innertop-a').remove();
			$.matchHeight('innertop-b').remove();
			$.matchHeight('innerbottom-a').remove();
			$.matchHeight('innerbottom-b').remove();
		}
	});

	var pairs = [];

	$.onMediaQuery('(min-width: 480px) and (max-width: 959px)', {
		valid: function() {
			$.matchHeight('sidebars', '.sidebars-2 #sidebar-a, .sidebars-2 #sidebar-b').match();
			pairs = [];
			$.each(['.sidebars-1 #sidebar-a > .grid-box', '.sidebars-1 #sidebar-b > .grid-box', '#top-a .grid-h', '#top-b .grid-h', '#bottom-a .grid-h', '#bottom-b .grid-h', '#innertop .grid-h', '#innerbottom .grid-h', '#bottom-c .grid-h', '#bottom-d .grid-h'], function(i, selector) {
				for (var i = 0, elms = $(selector), len = parseInt(elms.length / 2); i < len; i++) {
					var id = 'pair-' + pairs.length;
					$.matchHeight(id, [elms.get(i * 2), elms.get(i * 2 + 1)], '.deepest').match();
					pairs.push(id);
				}
			});
		},
		invalid: function() {
			$.matchHeight('sidebars').remove();
			$.each(pairs, function() { $.matchHeight(this).remove(); });
		}
	});

	$.onMediaQuery('(max-width: 767px)', {
		valid: function() {
			var header = $('#header-responsive');
			if (!header.length) {
				header = $('<div id="header-responsive"/>').prependTo('#header');
				$('#logo').clone().removeAttr('id').addClass('logo').appendTo(header);
				$('#banner').clone().removeAttr('id').addClass('banner').appendTo(header);
				$('#counter').clone().removeAttr('id').addClass('counter').appendTo(header);
			}
		}
	});

})(jQuery);


// css helper
(function($) {
var data = [
    {str:navigator.userAgent,sub:'Chrome',ver:'Chrome',name:'chrome'},
    {str:navigator.vendor,sub:'Apple',ver:'Version',name:'safari'},
    {prop:window.opera,ver:'Opera',name:'opera'},
    {str:navigator.userAgent,sub:'Firefox',ver:'Firefox',name:'firefox'},
    {str:navigator.userAgent,sub:'MSIE',ver:'MSIE',name:'ie'}];
for (var n=0;n<data.length;n++)	{
    if ((data[n].str && (data[n].str.indexOf(data[n].sub) != -1)) || data[n].prop) {
        var v = function(s){var i=s.indexOf(data[n].ver);return (i!=-1)?parseInt(s.substring(i+data[n].ver.length+1)):'';};
        $('html').addClass(data[n].name+' '+data[n].name+v(navigator.userAgent) || v(navigator.appVersion)); break;			
    }
}
})(jQuery);


/*UITop jquery*/
(function(a){a.fn.UItoTop=function(b){var c={text:"",min:200,inDelay:600,outDelay:400,containerID:"toTop",containerHoverID:"toTopHover",scrollSpeed:1e3,easingType:"linear"};var d=a.extend(c,b);var e="#"+d.containerID;var f="#"+d.containerHoverID;a("body").append('<a href="#" class="uk-icon-chevron-up" title="" id="'+d.containerID+'">'+d.text+"</a>");a(e).hide().click(function(){a("html, body").animate({scrollTop:0},d.scrollSpeed,d.easingType);a("#"+d.containerHoverID,this).stop().animate({opacity:0},d.inDelay,d.easingType);return false}).prepend('<span id="'+d.containerHoverID+'"></span>').hover(function(){a(f,this).stop().animate({opacity:1},600,"linear")},function(){a(f,this).stop().animate({opacity:0},700,"linear")});a(window).scroll(function(){var b=a(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){a(e).css({position:"absolute",top:a(window).scrollTop()+a(window).height()-50})}if(b>d.min)a(e).fadeIn(d.inDelay);else a(e).fadeOut(d.Outdelay)})}})(jQuery);