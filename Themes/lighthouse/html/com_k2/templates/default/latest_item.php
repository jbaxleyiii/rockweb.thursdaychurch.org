<?php

/**
 * @package		K2
 * @author		arrowthemes http://www.arrowthemes.com
 */

// no direct access
defined('_JEXEC') or die('Restricted access');

?>

<article class="itemView" itemscope itemtype="http://schema.org/Article">
	<?php echo $this->item->event->BeforeDisplay; ?>
	<?php echo $this->item->event->K2BeforeDisplay; ?>
	
	<header>
		<?php if($this->item->params->get('latestItemDateCreated')): ?>
	
		<time datetime="<?php echo JHTML::_('date', $this->item->created, JText::_('d M Y h:i')); ?>" itemprop="dateCreated">
			<span class="uk-blog-date">
				<span class="uk-event-date"><?php echo JHTML::_('date', $this->item->created, JText::_('d')); ?></span>
				<span class="uk-event-month"><?php echo JHTML::_('date', $this->item->created, JText::_('M')); ?></span>
			</span>
		</time>
		<?php endif; ?>
		<?php if($this->item->params->get('latestItemTitle')): ?>
		<h1 itemprop="name">
			<?php if ($this->item->params->get('latestItemTitleLinked')): ?>
				<a href="<?php echo $this->item->link; ?>"><?php echo $this->item->title; ?></a>
			<?php else: ?>
				<?php echo $this->item->title; ?>
			<?php endif; ?>
		</h1>
		<?php endif; ?>

		<ul>
	  		
	  		<?php if($this->item->params->get('latestItemDateCreated')): ?>
			<li class="itemDateCreated"><?php echo JHTML::_('date', $this->item->created, JText::_('d F Y')); ?> |</li>
			<?php endif; ?>
						
	  		<?php if($this->item->params->get('latestItemCategory')): ?>
	  		<li class="itemCategory">
	  			<span><?php echo JText::_('K2_PUBLISHED_IN'); ?></span>
	  			<a href="<?php echo $this->item->category->link; ?>"><?php echo $this->item->category->name; ?></a>
	  		</li>
	  		<?php endif; ?>
	  	
	  		<?php if($this->item->params->get('latestItemCommentsAnchor') && ( ($this->item->params->get('comments') == '2' && !$this->user->guest) || ($this->item->params->get('comments') == '1')) ): ?>
	  		<li class="itemComments">
		  		<?php if(!empty($this->item->event->K2CommentsCounter)): ?>
		  			<!-- K2 Plugins: K2CommentsCounter -->
		  			<?php echo $this->item->event->K2CommentsCounter; ?>
		  		<?php else: ?>
		  			<?php if($this->item->numOfComments > 0): ?>
		  			<a href="<?php echo $this->item->link; ?>#itemCommentsAnchor"><i class="uk-icon-comment"></i> 
		  				<?php echo $this->item->numOfComments; ?> <?php echo ($this->item->numOfComments>1) ? JText::_('K2_COMMENTS') : JText::_('K2_COMMENT'); ?>
		  			</a>
		  			<?php else: ?>
		  			<a href="<?php echo $this->item->link; ?>#itemCommentsAnchor"><i class="uk-icon-comment-alt"></i> 
		  				<?php echo JText::_('K2_BE_THE_FIRST_TO_COMMENT'); ?>
		  			</a>
		  			<?php endif; ?>
		  		<?php endif; ?>
	  		</li>
	  		<?php endif; ?>
	  	</ul>
  	</header>

  	<?php echo $this->item->event->AfterDisplayTitle; ?>
  	<?php echo $this->item->event->K2AfterDisplayTitle; ?>

	<?php if($this->item->params->get('latestItemImage') && !empty($this->item->image)): ?>
	<div class="itemImageBlock">
	   	<a class="itemImage uk-overlay uk-image-round" href="<?php echo $this->item->link; ?>" title="<?php if(!empty($this->item->image_caption)) echo K2HelperUtilities::cleanHtml($this->item->image_caption); else echo K2HelperUtilities::cleanHtml($this->item->title); ?>">
			<img class="uk-image-round" src="<?php echo $this->item->image; ?>" alt="<?php if(!empty($this->item->image_caption)) echo K2HelperUtilities::cleanHtml($this->item->image_caption); else echo K2HelperUtilities::cleanHtml($this->item->title); ?>" style="width:<?php echo $this->item->imageWidth; ?>px;height:auto;" />
			<div class="uk-overlay-area"></div>
    	</a>
	</div>
	<?php endif; ?>

  	<div class="itemBody" itemprop="articleBody">
		<?php echo $this->item->event->BeforeDisplayContent; ?>
	  	<?php echo $this->item->event->K2BeforeDisplayContent; ?>

	  	<?php if($this->item->params->get('latestItemIntroText')): ?>
	  	<div class="itemIntroText">
	  		<?php echo $this->item->introtext; ?>
	  	</div>
	  	<?php endif; ?>

	  	<?php echo $this->item->event->AfterDisplayContent; ?>
	  	<?php echo $this->item->event->K2AfterDisplayContent; ?>
	  
	  	<?php if ($this->item->params->get('latestItemReadMore')): ?>
	  	<a class="itemReadMore uk-button uk-button-color uk-align-right" href="<?php echo $this->item->link; ?>">
	  		<?php echo JText::_('K2_READ_MORE'); ?>
	  	</a>
	  	<?php endif; ?>
  	</div>

	<?php if($this->item->params->get('latestItemTags')): ?>
	<div class="itemLinks">
		  <?php if($this->item->params->get('latestItemTags') && count($this->item->tags)): ?>
		  <ul class="itemTags">
		    <?php foreach ($this->item->tags as $tag): ?>
		    <li><a class="tag-body" href="<?php echo $tag->link; ?>"><span class="tag"><?php echo $tag->name; ?></span></a></li>
		    <?php endforeach; ?>
		  </ul>
		  <?php endif; ?>
	</div>
	<?php endif; ?>

  	<?php if($this->params->get('latestItemVideo') && !empty($this->item->video)): ?>
  	<div class="itemVideoBlock">
  		<h3><?php echo JText::_('K2_RELATED_VIDEO'); ?></h3>
	  	<span class="itemVideo<?php if($this->item->videoType=='embedded'): ?> embedded<?php endif; ?>"><?php echo $this->item->video; ?></span>
  	</div>
  	<?php endif; ?>

	<?php echo $this->item->event->AfterDisplay; ?>
  	<?php echo $this->item->event->K2AfterDisplay; ?>
</article>