<%@ Page Language="C#" MasterPageFile="Site.Master" AutoEventWireup="true" Inherits="Rock.Web.UI.RockPage" %>

<asp:Content ID="ctMain" ContentPlaceHolderID="main" runat="server">

  <!-- Start Content Area -->

  <!-- Ajax Error -->
  <div class="alert alert-danger ajax-error" style="display:none">
    <p><strong>Error</strong></p>
    <span class="ajax-error-message"></span>
  </div>

  <Rock:Zone Name="Main" runat="server" />

  <script>
    $(document).ready(function () {
      $('.block-configuration').css('display', 'none');
      $('.zone-configuration').css('display', 'none');
    });
  </script>

  <!-- End Content Area -->

</asp:Content>

