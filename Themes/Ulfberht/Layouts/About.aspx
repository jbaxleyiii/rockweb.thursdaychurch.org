<%@ Page Language="C#" MasterPageFile="Site.Master" AutoEventWireup="true" Inherits="Rock.Web.UI.RockPage" %>
<asp:Content ID="ctMain" ContentPlaceHolderID="main" runat="server">
	<main>
        <!-- Start Content Area -->
        <!-- Ajax Error -->
        <div class="alert alert-danger ajax-error" style="display:none">
            <p><strong>Error</strong></p>
            <span class="ajax-error-message"></span>
        </div>
    <section class="main-feature">
        <div class="container-fluid">
            <div class="row">
				<Rock:Zone Name="Feature" runat="server" />
            </div>
        </div>
    </section>
	<section class="container-fluid">
		<Rock:Zone Name="CoreValues" runat="server" />
	</section>
	<section class="container-fluid about-columns bg-image-noise">
		<div class="col-md-4 col-md-offset-1">
			<Rock:Zone Name="BeliefLeft" runat="server" />
		</div>
		<div class="col-md-4 col-md-offset-2">
			<Rock:Zone Name="BeliefRight" runat="server" />
		</div>
	</section>
	<section class="container-fluid">
		<div class="col-xs-12 col-md-12 callout-full-width typ-white bg-image-009" style = "background-position: 50% 90%;">
			<Rock:Zone Name="EFCA" runat="server" />
		</div>
	</section>
        <!-- End Content Area -->
	</main>
</asp:Content>