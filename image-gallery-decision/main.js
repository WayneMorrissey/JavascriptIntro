/*
	Update the function below so that it will set the src of the .target-image only
	when the target is in fact an 'a' element.  Research how to determine the type
	of element for this exercise.	
*/

var linksDiv = document.querySelector('.image-links');

linksDiv.addEventListener('click', imageLinkClickHandler);

function imageLinkClickHandler(evt) {
	var targetImage = document.querySelector('.target-image');
	
	// Prevent the default behaviour DOM
	evt.preventDefault();

	// Relying on context
	// targetImage.src = this.href;

	// Relying on the event object
	targetImage.setAttribute('src', evt.target.href);
}