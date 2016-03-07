<%@ Page Language="C#" MasterPageFile="Site.Master" AutoEventWireup="true" Inherits="Rock.Web.UI.RockPage" %>
<asp:Content ID="ctMain" ContentPlaceHolderID="main" runat="server">
	<main>
        <!-- Start Content Area -->
        <!-- Ajax Error -->
        <div class="alert alert-danger ajax-error" style="display:none">
            <p><strong>Error</strong></p>
            <span class="ajax-error-message"></span>
        </div>
		<section>
			<div class="container-fluid">
				<div class="row">
					<Rock:Zone Name="Feature" runat="server" />
				</div>
			</div>
    	</section>
		<section class="container-fluid">
			<div class="row">
				<div class="col-md-12">
					<Rock:Zone Name="Main" runat="server" />
				</div>
        	</div>
		</section>
		<section class="container">
			<div class="row">
				<div class="col-md-12">
					<Rock:Zone Name="Section A" runat="server" />
				</div>
			</div>
		</section>
		<section class="container-fluid">
			<div class="row">
				<div class="col-md-12">
					<Rock:Zone Name="Secondary" runat="server" />
				</div>
        	</div>
		</section>
        <!-- End Content Area -->
	</main>
</asp:Content>

