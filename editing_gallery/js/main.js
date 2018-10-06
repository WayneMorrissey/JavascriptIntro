// Enter your JavaScript for the solution here...

window.addEventListener('load', function(){

    var thumbs = document.querySelectorAll('.thumbnails img');
    var imgObjs = [];
    var editImg = document.querySelector('.editor img');
    var title = document.querySelector('.title');
    var tags = document.querySelector('.tags');
    var form = document.querySelector('form');
    var tagInput = document.querySelector('#tag');
    var errorElem = document.querySelector('.error');
    var error = '';
    var selectedImg;

    // error messages
    var nullError = "A tag cannot be empty";
    var spacesError = "A tag cannot include spaces";
    var dupeError = "That tag already exists";
    var hashError = "Hashtag can only be at the beginning of the tag";
    var firstCharError = "Tag must start with an alphabet character (a-z)";
    var charError = "Tag can only contain alphanumeric characters and underscores";

    var firstCharRegExp = RegExp("^[^A-Za-z]");
    var charRegExp = RegExp("[^A-z0-9_]");



    // cycles through thumbs array to create a matching obj instance and event listeners
    for(var i = 0; i < thumbs.length; i++)
    {
        imgObjs[i] =
        {
            // the thumbnail image src is slightly different than full image
            src: thumbs[i].src.replace('_thumb', ''),
            alt: thumbs[i].alt,
            title: thumbs[i].title,
            tags: thumbs[i].dataset.tags
        }
        thumbs[i].addEventListener('click', onThumbnailClicked);   
    }
    // sets the default selected img to the first in the array
    selectedImg = imgObjs[0];
    // add event listener for the entire form
    form.addEventListener('submit', onFormSubmit);

    // handles the selection of a thumbnail image
    function onThumbnailClicked(e)
    {
        // index to represent where in the array the img selected is
        var index;
        // sets the index to the array index of the image clicked on
        switch(e.currentTarget)
        {
            case thumbs[0]:
                index = 0;
                break;
            case thumbs[1]:
                index = 1;
                break;
            case thumbs[2]:
                index = 2;
                break;
        }
        // change the html element for the editor image to match selected img
        editImg.src = imgObjs[index].src;
        editImg.alt = imgObjs[index].alt;
        editImg.title = imgObjs[index].title;
        // set html fields for tags and title to match selected img
        tags.innerHTML = imgObjs[index].tags;
        title.innerHTML = imgObjs[index].title;
        // save the selected img obj instance to reference for tag entry
        selectedImg = imgObjs[index];
        // reset error message to null then refresh ui to clear the html message
        error = '';
        refreshUI();
    }

    // Handles the submission of the form
    function onFormSubmit(e)
    {
        e.preventDefault();
        var tag = tagInput.value;
        //trim spaces from front and back of input string
        tag = tag.trim();
        //check if user added their own hashtag, if so, remove it for validation
        if(tag.charAt(0) === '#')
        {
            tag = tag.slice(1);
        }
        // throw error if input is null
        if(tag === "")
        {
            error = nullError;
        }
        // throw error if input includes a space 
        else if (tag.includes(" "))
        {
            error = spacesError;
        }
        // split the tags data string into an array, then check if an identical tag exist
        else if(selectedImg.tags.split(" ").includes('#' + tag))
        {
            error = dupeError;
        }
        // handles the error if there is a hashtag not at the front of the tag
        else if(tag.includes('#'))
        {
            error = hashError;
        }
        // check that the first character is an alpha char
        else if(firstCharRegExp.test(tag))
        {
            error = firstCharError;
        }
        // check that there is no special characters in the tag
        else if(charRegExp.test(tag))
        {
            error = charError;
        }
        // if tag passes error checking, add the tag with a # to our image
        else
        {
            selectedImg.tags += ' #' + tag;
            error = '';
        }
        refreshUI();
    }

    // Refreshes the error messages to either hide or show error info
    // also sets the tags text to the currently selected image
    function refreshUI()
    {
        if(error === '')
        {
            errorElem.classList.add('hidden');
            // clear tag value since either the tag was added or the image was changed
            tagInput.value = "";
        }
        else
        {
            errorElem.classList.remove('hidden');
            errorElem.innerHTML = error;
        }
        tags.innerHTML = selectedImg.tags;
    }
})