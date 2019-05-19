/* your javascript goes here */


$(document).ready(initiateApp);

var pictures = [ 
	'images/landscape-1.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-14.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg'
];

function initiateApp(){
	/* advanced: add jquery sortable call here to make the gallery able to be sorted on change, rebuild the images array into the new order */
	console.log("DOM is ready");

	$( function() {
		$( "#gallery" ).sortable();
		$( "#gallery" ).disableSelection();
	});  
	makeGallery(pictures);
	addModalCloseHandler();
}
function makeGallery(imageArray){
	//use loops and jquery dom creation to make the html structure inside the #gallery section
	//create a loop to go through the pictures
	for (i=0; i<pictures.length; i++) {
		//create the elements needed for each picture, store the elements in variable
		var $figureElement = $("<figure>").addClass("imageGallery col-xs-12 col-sm-6 col-md-4");
		$($figureElement).css('background-image', 'url(' + pictures[i] + ')');

		var figureCap = $("<figurecaption>").text(pictures[i]);
		imageArray = $figureElement.append(figureCap);
		//attach a click handler to the figure you create.  call the "displayImage" function.  
		imageArray.click(displayImage);
		//append the element to the #gallery section
		$("#gallery").append(imageArray);
	}

}

function addModalCloseHandler(){
	//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
	//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp	
	//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
	$(".modal-body").on("click", () => {
		$("#galleryModal").modal("hide");  
	});
}

function displayImage(){
	//find the url of the image by grabbing the background-image source, store it in a variable
	var selectedImage = $(this).css('background-image');

	//grab the direct url of the image by getting rid of the other pieces you don't need
	var modalSelect1 = selectedImage.lastIndexOf("/") + 1; //+1
	var modalSelect2 = selectedImage.lastIndexOf(".");
	var modalTitle = selectedImage.slice(modalSelect1, modalSelect2);
	console.log(modalTitle); //debugging 

	//change the modal-title text to the name you found above
	$(".modal-title").text(modalTitle);

	//change the src of the image in the modal to the url of the image that was clicked on
	var modalSrc1 = selectedImage.lastIndexOf("(") +2; //+2
	var modalSrc2 = selectedImage.lastIndexOf(")") -1; //-1

	$("img").attr("src", selectedImage.slice(modalSrc1 , modalSrc2));

	//show the modal with JS.  
	$("#galleryModal").modal("show");
	// Check for more info here: 
	//https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
}





