Initial version of script to generate impound log reasons with randomized images inserted to the reason.

Requires Node V22+ 

You Can use the supplied image links inside the imagelink.txt, or supply your own, each image link on its own line.  Image links must use https and must be .jpeg or .png
Output is automatically formatted and copied to system keyboard
Images included in command are always added to the imagelinks.txt and always copied to the output
If using a custom reason must use underscores to seperate words
number of total images in output can be modified by changing value of "numberOfImages"


Supported Reasons (int / string)
3: Unauthorized Parking
8: Unpaid Meter
5: Regulations on Recreational Vehicles
6: Regulations on Mobile Kitchens
{insertreason}: Custom Reason



To execute:
1. Open CMD in impound.js folder
2. Type Node impound.js {REASON} {IMAGELINK1} {IMAGELINK2} {IMAGELINKX}



Example: Node impound.js 3 https://imagelink1.jpeg https://imagelink2.jpeg

output: Unauthorized Parking | https://i.imgur.com/Vt06FiL.png https://i.imgur.com/az7aev4.png https://i.imgur.com/GpPEjwX.jpeg https://imagelink1.jpeg https://i.imgur.com/HQP6GZJ.jpeg https://i.imgur.com/GkKbyQ9.jpeg https://i.imgur.com/bE07DFp.jpeg https://i.imgur.com/V8RMorh.jpeg https://imagelink2.jpeg https://i.imgur.com/xL3BHhg.jpeg



Example Node impound.js Parked_Like_A_Jerk https://imagelink1.jpeg https://imagelink2.jpeg

output Parked_Like_A_Jerk | https://i.imgur.com/Vt06FiL.png https://i.imgur.com/az7aev4.png https://i.imgur.com/GpPEjwX.jpeg https://imagelink1.jpeg https://i.imgur.com/HQP6GZJ.jpeg https://i.imgur.com/GkKbyQ9.jpeg https://i.imgur.com/bE07DFp.jpeg https://i.imgur.com/V8RMorh.jpeg https://imagelink2.jpeg https://i.imgur.com/xL3BHhg.jpeg
