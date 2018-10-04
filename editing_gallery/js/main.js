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

    var nullError = "A tag cannot be empty";
    var spacesError = "A tag cannot include spaces";
    var dupeError = "That tag already exists";


    for(var i = 0; i < thumbs.length; i++)
    {
        imgObjs[i] =
        {
            src: thumbs[i].src.replace('_thumb', ''),
            alt: thumbs[i].alt,
            title: thumbs[i].title,
            tags: thumbs[i].dataset.tags
        }
        thumbs[i].addEventListener('click', onThumbnailClicked);   
    }
    selectedImg = imgObjs[0];
    form.addEventListener('submit', onFormSubmit);

    function onThumbnailClicked(e)
    {
        console.log(e.currentTarget);
        var index;
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
        editImg.src = imgObjs[index].src;
        editImg.alt = imgObjs[index].alt;
        editImg.title = imgObjs[index].title;
        tags.innerHTML = imgObjs[index].tags;
        title.innerHTML = imgObjs[index].title;
        selectedImg = imgObjs[index];
    }


    function onFormSubmit(e)
    {
        e.preventDefault();
        var tag = tagInput.value;
        tag = tag.trim();
        if(tag === "")
        {
            error = nullError;
        }
        else if (tag.includes(" "))
        {
            error = spacesError;
        }
        
        else if(selectedImg.tags.toString().splt(" ").includes('#' + tag))
        {
            error = dupeError;
        }
        else
        {
            selectedImg.tags += ' #' + tag;
            error = '';
        }
        refreshUI();
    }

    function refreshUI()
    {
        if(error === '')
        {
            errorElem.classList.add('hidden');
        }
        else
        {
            errorElem.classList.remove('hidden');
            errorElem.innerHTML = error;
        }
        tags.innerHTML = selectedImg.tags;
    }
})