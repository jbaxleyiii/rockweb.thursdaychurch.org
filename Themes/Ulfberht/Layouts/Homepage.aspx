<%@ Page Language="C#" MasterPageFile="Site.Master" AutoEventWireup="true" Inherits="Rock.Web.UI.RockPage" %>
<asp:Content ID="ctFeature" ContentPlaceHolderID="feature" runat="server">
	<script type="text/javascript">
		$("section").fitVids();
		$(document).ready(function() {
	    	$('.video-wrapper button.button').on('click', function(e) {
				$('.video-wrapper iframe').toggleClass("visible");
				$('.video-wrapper button.button').toggleClass("invisible");
				$('.video-wrapper .logo-full').toggleClass("invisible");
				$('.video-wrapper .campus-full').toggleClass("invisible");
				$('#Calwelcome').attr("src", "//player.vimeo.com/video/62172388?color=f0a400&badge=0&autoplay=1");
			 });
	    });
		/* Home for all js page load function calls */
		$(document).ready(function (){
    		randoBack();
			WhatsHap();
		});
	</script>
<section class="main-feature">
	<div class="container-fluid">
		<div class="row">
			<Rock:Zone Name="Feature" runat="server" />
		</div>
	</div>
</section>
</asp:Content>
<asp:Content ID="ctMain" ContentPlaceHolderID="main" runat="server">
	<main>
        <!-- Start Content Area -->
        <div class="container">
        <!-- Ajax Error -->
        <div class="alert alert-danger ajax-error" style="display:none">
            <p><strong>Error</strong></p>
            <span class="ajax-error-message"></span>
        </div>
        <div class="row">
            <div class="col-md-12">
                <Rock:Zone Name="Sub Feature" runat="server" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <Rock:Zone Name="Section A" runat="server" />
            </div>
        </div>
			</div>
		<section class="container-fluid">
			<div class="col-md-6 callout-half-width typ-white bg-image-016 homepage-tab-left-column" style=" background-position: 35% 0%; ">
				<Rock:Zone Name="Verse" runat="server" />
			</div>
			<div class="col-md-6 callout-half-width typ-white bg-color-grey-dark campus-tabs">
				<Rock:Zone Name="Map" runat="server" />
			</div>
			<div class="col-md-6 callout-half-width bg-pattern-dark typ-white">
				<Rock:Zone Name="Prayer" runat="server" />
			</div>
			<div class="col-md-6 callout-half-width bg-image-006 typ-white">
				<Rock:Zone Name="Newsletter" runat="server" />
			</div>
		</section>
        <!-- End Content Area -->
	</main>
</asp:Content>