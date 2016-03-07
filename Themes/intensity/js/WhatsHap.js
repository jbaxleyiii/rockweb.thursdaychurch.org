/***** WhatsHap.js *****/

/*****
Author: Kreston Lee, Front End Dev for Central Christian Church Arizona
Date Created: 4/16/2015
Last Modified: 4/16/2015

This function grabs all 8 "What Happening at Central" img items and checks their aspect ratio.
The number created is used to assign a CSS class to more robustly display the image.

The last image loadin calls the onload property.
*****/

function WhatsHap()
{
	// declared variables outside control structure
	var imgID = 'WH-1'; // initialized as first element for simpler flow
	var counter = 0; // controls incrementation of loop
	var width = 1; // the only reason there is a need for these variable and the ratio is not...
	var height = 1; //  just computed is to avoid a crash on divide by 0
	var ratio = 0;

	// To later make this more dynamic add prefix code that calculates the number of images to crunch.
		// if this is done ensure the IDs are generated properly
		
	for(counter = 1; counter < 9; counter++ )
	{
		// increment/set imgID
		imgID = imgID.slice(0,3);
		imgID = imgID.concat(counter);
		
		if( imgID ){
		img = document.getElementById(imgID); 
		width = img.clientWidth;
		height = img.clientHeight;
		ratio = width / height;
		}
		
		//window.alert("Diagnostics Data: " + width + "\nheight: " + height);

		// landscape image
		if(ratio > 1)
		{
			document.getElementById(imgID).className = "landscape";
		}
		else if (ratio < 1) // square or portrait image
		{
			document.getElementById(imgID).className = "portrait";
		}
		else
		{
			document.getElementById(imgID).className = "square";
		}
	}
}