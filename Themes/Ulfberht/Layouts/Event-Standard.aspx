<%@ Page Language="C#" MasterPageFile="Site.Master" AutoEventWireup="true" Inherits="Rock.Web.UI.RockPage" %>

<asp:Content ID="ctMain" ContentPlaceHolderID="main" runat="server">

	<div class="row">
        <Rock:Zone Name="Feature" runat="server" />
    </div>
	
    <main class="container">
                
        <!-- Start Content Area -->
        
        <!-- Page Title -->
        <Rock:PageIcon ID="PageIcon" runat="server" />
        
                    
        <!-- Ajax Error -->
        <div class="alert alert-danger ajax-error" style="display:none">
            <p><strong>Error</strong></p>
            <span class="ajax-error-message"></span>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2 event">
                <Rock:Zone Name="Main" runat="server" />
            </div>
        </div>

        <div class="row sign-up">
            <div class="col-md-6 col-md-offset-3">
                <Rock:Zone Name="Form" runat="server" />
            </div>
        </div>

        <!-- End Content Area -->

    </main>

</asp:Content>
