<?php
/**
* @package   yoo_master
* @author    YOOtheme http://www.yootheme.com
* @copyright Copyright (C) YOOtheme GmbH
* @license   http://www.gnu.org/licenses/gpl.html GNU/GPL
*/

defined('_JEXEC') or die;

// include config and layout
$base = dirname(dirname(dirname(__FILE__)));
include($base.'/config.php');

?>

<?php if (($this->params->get('address_check') > 0) &&  ($this->contact->address || $this->contact->suburb  || $this->contact->state || $this->contact->country || $this->contact->postcode)) : ?>
<div class="address" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
	<h3><?php echo JText::_('COM_CONTACT_ADDRESS'); ?></h3>
	<ul class="blank">
	
		<?php if ($this->contact->address && $this->params->get('show_street_address')) : ?>
		<li class="street" itemprop="streetAddress"><?php echo nl2br($this->contact->address); ?></li>
		<?php endif; ?>
		
		<?php if ($this->contact->suburb && $this->params->get('show_suburb')) : ?>
		<li class="suburb" itemprop="addressLocality"><?php echo $this->contact->suburb; ?></li>
		<?php endif; ?>
		
		<?php if ($this->contact->state && $this->params->get('show_state')) : ?>
		<li class="state" itemprop="addressRegion"><?php echo $this->contact->state; ?></li>
		<?php endif; ?>
		
		<?php if ($this->contact->postcode && $this->params->get('show_postcode')) : ?>
		<li class="postcode" itemprop="postalCode"><?php echo $this->contact->postcode; ?></li>
		<?php endif; ?>
		
		<?php if ($this->contact->country && $this->params->get('show_country')) : ?>
		<li class="country" itemprop="addressCountry"><?php echo $this->contact->country; ?></li>
		<?php endif; ?>

	</ul>
</div>
<?php endif; ?>

<?php if ( ($this->contact->email_to && $this->params->get('show_email')) || 
			($this->contact->telephone && $this->params->get('show_telephone')) || 
			($this->contact->fax && $this->params->get('show_fax')) || 
			($this->contact->mobile && $this->params->get('show_mobile')) || 
			($this->contact->webpage && $this->params->get('show_webpage'))) : ?>
<div class="contact">
	<h3><?php echo JText::_('COM_CONTACT_DETAILS'); ?></h3>
	<ul class="blank">
	
		<?php if ($this->contact->email_to && $this->params->get('show_email')) : ?>
		<li itemprop="email"><?php echo $this->contact->email_to; ?></li>
		<?php endif; ?>
	
		<?php if ($this->contact->telephone && $this->params->get('show_telephone')) : ?>
		<li itemprop="telephone"><?php echo nl2br($this->contact->telephone); ?></li>
		<?php endif; ?>
		
		<?php if ($this->contact->fax && $this->params->get('show_fax')) : ?>
		<li itemprop="faxNumber"><?php echo nl2br($this->contact->fax); ?></li>
		<?php endif; ?>
		
		<?php if ($this->contact->mobile && $this->params->get('show_mobile')) :?>
		<li itemprop="telephone"><?php echo nl2br($this->contact->mobile); ?></li>
		<?php endif; ?>
		
		<?php if ($this->contact->webpage && $this->params->get('show_webpage')) : ?>
		<li itemprop="url"><a href="<?php echo $this->contact->webpage; ?>" target="_blank"><?php echo $this->contact->webpage; ?></a></li>
		<?php endif; ?>

	</ul>
</div>
<?php endif;