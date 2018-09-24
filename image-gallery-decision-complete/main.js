var linksDiv = document.querySelector('.image-links');

linksDiv.addEventListener('click', imageLinkClickHandler);

function imageLinkClickHandler(evt) {
    var targetImage = document.querySelector('.target-image');

    // Prevent the default behaviour
    evt.preventDefault();

    if (evt.target.nodeName === 'A') {
        // Relying on context
        // targetImage.src = this.href;

        // Relying on the event object and setAttribute function
        targetImage.setAttribute('src', evt.target.href);
    }
}
