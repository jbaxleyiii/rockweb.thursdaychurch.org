var __tracked = 0;
  nwindow["trackVisitorCount"] = function(count) {
        __tracked = 1;
        $(".close - reveal - modal").click();
        ga(" send ", " event ", " Online Service ", " viewer ", count.toString());
        
        var $img = $( < img > );
        $img.attr(" style ", " display: none; ");
        $img.attr(" src ", \" http: //my.thursdaychurch.org/WebHooks/OnlineCampusAttendance.ashx?count=" + count.toString()); $img.appendTo("body");
				   };
				   nsetTimeout(function() {
				   $(".reveal-modal").on("closed", function () {
					   if (!__tracked) {
						   trackVisitorCount(0);
					   }
					   });  
				   }, 0);
","title":"js","once":false},
{
"id":1301,"type":"entrance_url",
	"trigger_value":"",
		"action":"wysiwyg_modal",
			"action_value":"<p><strong>How many people are in the room with you?</strong></p><p class=\"vc-buttons\"></p><p align=\"center\"><button onclick=\"trackVisitorCount(1)\">Just Me></button><button onclick=\"trackVisitorCount(2)\">2</button\><button onclick=\"trackVisitorCount(3)\">3</button><button onclick=\"trackVisitorCount(4)\">4</button><button onclick=\"trackVisitorCount(5)\">5</button><button onclick=\"trackVisitorCount(6)\">6-9</button><button onclick=\"trackVisitorCount(10)\">10+</button></p>","title":"ASK attendance","once":false}],
