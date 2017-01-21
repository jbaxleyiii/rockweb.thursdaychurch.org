<%@ Control Language="C#" AutoEventWireup="true" CodeFile="CampusMenu.ascx.cs" Inherits="Plugins_org_newpointe_CampusMenu_CampusMenu" %>

<div class="col-lg-12 desktop-only" style="margin-top: -23px;">
    <h5  style="letter-spacing: .1px;"><%= LiveServiceText %></h5>
</div>

<!-- Live Service Modal -->
<div id="liveModal" class="modal fade" role="dialog">
    
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h3 class="modal-title">Service are Live Now!</h3>
      </div>
      <div class="modal-body text-center">
          <div class="text-center"><i class="fa fa-5x fa-video-camera"></i></div>
        <a class="btn btn-newpointe" href="http://live.newpointe.org">WATCH LIVE NOW</a>
        <button type="button" class="btn btn-newpointe" data-dismiss="modal">CONTINUE TO OUR SITE</button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">GOT IT</button>
      </div>
    </div>
</div>


<style type="text/css">
  #churchonline_counter { overflow: auto; width: 200px; padding: 10px; display: none; }
  #churchonline_counter .description, #churchonline_counter .time li .label { font-size: 0.8em; }
  #churchonline_counter .time { list-style: none; padding: 0; margin: 10px 0 0 0; }
  #churchonline_counter .time li { float: left; padding: 0 10px; text-align: center; }
  #churchonline_counter .time li:first-child { padding-left: 0; }
  #churchonline_counter .time li span { font-size: 1.2em; }
  #churchonline_counter .live { display: none; font-weight: bold; }
</style>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript">
  jQuery(function() {
    var days, goLive, hours, intervalId, minutes, seconds;

    // Your churchonline.org url
    var churchUrl = "http://live.thursdaychurch.org"

    goLive = function() {
      $("#churchonline_counter .time").hide();
      $("#churchonline_counter .live").show();
    };
    loadCountdown = function(data){
      var seconds_till;
      $("#churchonline_counter").show();
      if (data.response.item.isLive) {
        return goLive();
      } else {
        // Parse ISO 8601 date string
        date = data.response.item.eventStartTime.match(/^(\d{4})-0?(\d+)-0?(\d+)[T ]0?(\d+):0?(\d+):0?(\d+)Z$/)
        dateString = date[2] + "/" + date[3] + "/" + date[1] + " " + date[4] + ":" + date[5] + ":" + date[6] + " +0000"
        seconds_till = ((new Date(dateString)) - (new Date())) / 1000;
        days = Math.floor(seconds_till / 86400);
        hours = Math.floor((seconds_till % 86400) / 3600);
        minutes = Math.floor((seconds_till % 3600) / 60);
        seconds = Math.floor(seconds_till % 60);
        return intervalId = setInterval(function() {
          if (--seconds < 0) {
            seconds = 59;
            if (--minutes < 0) {
              minutes = 59;
              if (--hours < 0) {
                hours = 23;
                if (--days < 0) {
                  days = 0;
                }
              }
            }
          }
          $("#churchonline_counter .days").html((days.toString().length < 2) ? "0" + days : days);
          $("#churchonline_counter .hours").html((hours.toString().length < 2 ? "0" + hours : hours));
          $("#churchonline_counter .minutes").html((minutes.toString().length < 2 ? "0" + minutes : minutes));
          $("#churchonline_counter .seconds").html((seconds.toString().length < 2 ? "0" + seconds : seconds));
          if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
            goLive();
            return clearInterval(intervalId);
          }
        }, 1000);
      }
    }
    days = void 0;
    hours = void 0;
    minutes = void 0;
    seconds = void 0;
    intervalId = void 0;
    eventUrl = churchUrl + "/api/v1/events/current"
    msie = /msie/.test(navigator.userAgent.toLowerCase())
    if (msie && window.XDomainRequest) {
        var xdr = new XDomainRequest();
        xdr.open("get", eventUrl);
        xdr.onload = function() {
          loadCountdown(jQuery.parseJSON(xdr.responseText))
        };
        xdr.send();
    } else {
      $.ajax({
        url: eventUrl,
        dataType: "json",
        crossDomain: true,
        success: function(data) {
          loadCountdown(data);
        },
        error: function(xhr, ajaxOptions, thrownError) {
          return console.log(thrownError);
        }
      });
    }
  });
</script>

 <script type="text/javascript">
    function openModal() {
        $('#liveModal').modal('show');
    }
</script>

