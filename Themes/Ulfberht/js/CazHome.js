/***** CazHome.js *****/

/*****
Author: Kreston Lee, Front End Dev for Central Christian Church Arizona
Date Created: 4/16/2015
Last Modified: 5/11/2015

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
		
		img = document.getElementById(imgID); 
		if( img )
		{
			width = img.clientWidth;
			height = img.clientHeight;
			ratio = width / height;
			
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
}

// after page is ready this is called to place a random background on the home page load in.
function randoBack()
{

	// initialize array of possibilities with string values to be parsed
	var my_imgs = new Array();
	var my_imgs_focus = new Array();

	/* Set image URLs */
	my_imgs[0] = "002";
	my_imgs[1] = "003";
	my_imgs[2] = "004";
	my_imgs[3] = "005";
	my_imgs[4] = "007";
	my_imgs[5] = "008";
	my_imgs[6] = "017";
	my_imgs[7] = "018";
	my_imgs[8] = "020";
	my_imgs[9] = "021";
	my_imgs[10] = "022";
	my_imgs[11] = "023";
	my_imgs[12] = "025";
	my_imgs[13] = "026";
	my_imgs[14] = "027";
	my_imgs[15] = "028";
	my_imgs[16] = "029";
	my_imgs[17] = "030";
	my_imgs[18] = "031";
	my_imgs[19] = "032";
	my_imgs[20] = "033";
	my_imgs[21] = "034";
	my_imgs[22] = "035";
	my_imgs[23] = "036";

	/* no longer used as it caused too much trouble to prune and renew images
	// for 6-31 increment/set starting at 17	
	for( var i = 6; i <= 25; i++)
	{
		my_imgs[i] = "0" + (i + 11);
	}
	*/

	/* focal points, hand picked and coded */
	my_imgs_focus[0] = 7820; 
	my_imgs_focus[1] = 7550;
	my_imgs_focus[2] = 6560;
	my_imgs_focus[3] = 5030;
	my_imgs_focus[4] = 5087;
	my_imgs_focus[5] = 2580;
	my_imgs_focus[6] = 4575;
	my_imgs_focus[7] = 5250;
	my_imgs_focus[9] = 2030;
	my_imgs_focus[10] = 4060;
	my_imgs_focus[11] = 3050;
	my_imgs_focus[12] = 7510;
	my_imgs_focus[13] = 2250;
	my_imgs_focus[14] = 5970;
	my_imgs_focus[15] = 5680;
	my_imgs_focus[16] = 1080;
	my_imgs_focus[17] = 1063;
	my_imgs_focus[18] = 4715;
	my_imgs_focus[19] = 7940;
	my_imgs_focus[20] = 4030; 
	my_imgs_focus[21] = 1080;
	my_imgs_focus[22] = 5535;
	my_imgs_focus[23] = 1060;
	
	// seed random numb gen, time?
	var ran_num = Math.floor(Math.random()*(my_imgs.length));
	
	// set image attributes
	$("#section-feature").css("background-image" , "url(/Themes/Ulfberht/img/image-" + my_imgs[ran_num] + ".jpg)");
	
	//set focus
	var Fvalues = String(my_imgs_focus[ran_num]);
	var F1 = Fvalues.substr(0,2);
	var F2 = Fvalues.substr(2);
	
	$("#section-feature").css("background-position", F1 + "% " + F2 + "%");
}











