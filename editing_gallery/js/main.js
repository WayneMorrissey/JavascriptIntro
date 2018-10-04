// Enter your JavaScript for the solution here...

window.addEventListener('load', function(){

    var thumbs = document.querySelectorAll('.thumbnails img');
    var imgObjs = [];
    var editImg = document.querySelector('.editor img');
    var title = document.querySelector('.title');
    var tags = document.querySelector('.tags');

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
    }
})