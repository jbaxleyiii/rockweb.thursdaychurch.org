<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Error.aspx.cs" Inherits="RockWeb.Themes.NewSpring.Layouts.Error" %>

<!DOCTYPE html>

<!--

  @@@   @@@@@@@@    @@@@@@@@         @@@@@@@@    @@@@@@@@    @@@@@@@@
 @@@@  @@@@@@@@@@  @@@@@@@@@@       @@@@@@@@@@  @@@@@@@@@@  @@@@@@@@@@
@@@!!  @@!   @@@@  @@!   @@@@       @@!   @@@@  @@!   @@@@  @@!   @@@@
  !@!  !@!  @!@!@  !@!  @!@!@       !@!  @!@!@  !@!  @!@!@  !@!  @!@!@
  @!@  @!@ @! !@!  @!@ @! !@!       @!@ @! !@!  @!@ @! !@!  @!@ @! !@!
  !@!  !@!!!  !!!  !@!!!  !!!       !@!!!  !!!  !@!!!  !!!  !@!!!  !!!
  !!:  !!:!   !!!  !!:!   !!!       !!:!   !!!  !!:!   !!!  !!:!   !!!
  :!:  :!:    !:!  :!:    !:!  :!:  :!:    !:!  :!:    !:!  :!:    !:!
  :::  ::::::: ::  ::::::: ::   ::  ::::::: ::  ::::::: ::  ::::::: ::
   ::   : : :  :    : : :  :   ::    : : :  :    : : :  :    : : :  :

-->

<html xmlns="http://www.w3.org/1999/xhtml">
  <head runat="server">
    
      <!-- Set the viewport width to device width for mobile -->
      <meta name="viewport" content="width=device-width">
      <meta name="viewport" content="user-scalable=1, width=device-width, initial-scale=1.0, maximum-scale=2.0">
    
      <meta http-equiv="X-UA-Compatible" content="IE=10" />
      <title>NewSpring - Error</title>
      
      <link rel="stylesheet" href="<%= Page.ResolveUrl("~/Themes/NewSpring/Styles/theme.css") %>" />
      
      <!-- Icons -->
    <link rel="shortcut icon" href="<%= Page.ResolveUrl("~/Themes/NewSpring/Assets/Icons/favicon.ico") %>">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="<%= Page.ResolveUrl("~/Themes/NewSpring/Assets/Icons/apple.touch.large.png") %>">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="<%= Page.ResolveUrl("~/Themes/NewSpring/Assets/Icons/apple.touch.medium.png") %>">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="<%= Page.ResolveUrl("~/Themes/NewSpring/Assets/Icons/apple.touch.small.png") %>">
    <link rel="apple-touch-icon-precomposed" href="<%= Page.ResolveUrl("~/Themes/NewSpring/Assets/Icons/apple.touch.small.png") %>">

      <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
      
  </head>
  <body id="error" class="error">
      <form id="form1" runat="server">

          <div id="content">
              
              <div id="content-box">
                  <div class="row row--fullscreen text-center">
                      <div class="col-md-12 align--middle ">
                          <div class="error-wrap">
                              <h1 class="push--bottom">That Wasn't Supposed To Happen...</h1>

                              <p>An error has occurred while processing your request. Your organization's administrators have been notified of this problem.</p>

                              <p><a onclick="history.go(-1);" class="btn btn-lg btn-primary"><span class="fa fa-arrow-left"></span> Go Back One Page</a></p>

                              <p>
                                  <a class="btn btn-sm btn-primary" role="button" data-collapse-toggle="rockError">
                                      View Error Message
                                  </a>
                              </p>

                              
                              <div class="row text-center">
                                  <div class="col-md-10 col-md-offset-1">
                                      <div class="collapse" data-collapse-target="rockError">
                                          <asp:Literal ID="lErrorInfo" runat="server"></asp:Literal>
                                          
                                      </div>
                                  </div>
                              </div>
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <script>
              $(document).ready(function () {

                  //toggle the componenet with class msg_body
                  //$(".exception-type").click(function () {
                  //    $(this).next(".stack-trace").slideToggle(500);
                  //});

                  var collapseTrigger = document.querySelector('[data-collapse-toggle="rockError"]');

                  console.log(collapseTrigger);
                  <%--$(".stack-trace").hide();--%>

                  //toggle the componenet with class msg_body
                  $(collapseTrigger).on("click", function () {
                      console.log('clicked');
                      var collapseTarget = document.querySelector('[data-collapse-target="rockError"]');
                      $(collapseTarget).toggleClass('in');
                  });
              });
          </script>

      </form>
  </body>
</html>
