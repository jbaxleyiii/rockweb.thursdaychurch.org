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
