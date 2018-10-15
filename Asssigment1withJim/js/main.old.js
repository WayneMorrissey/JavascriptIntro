window.addEventListener("DOMContentLoaded",function(){
    //reference variables
    var imgObjectList = [];  
    var form = document.querySelector('form');
    var newTag = document.querySelector('form input:first-of-type');
    var tags = document.querySelector('.tags');
    var largeImg = document.querySelector('.editor img'); 
    largeImg.dataset.id = "0"; 
    imageList = document.querySelector('.thumbnails');
    var children = imageList.children;
    var error = document.querySelector('.error');
    var title = document.querySelector('.title');

    //create list of objects and push to array
    for (var i = 0; i < children.length; i++) {
        var imgObject = {
            id: i,
            thumbnailsrc: children[i].firstChild.src,
            largesrc: children[i].firstChild.src.replace('_thumb', ''),
            tags:[],
            alt: children[i].firstChild.alt,
            title: children[i].firstChild.title
        }
        children[i].firstChild.dataset.id = i; //add a dataset to the img tag
        imgObjectList.push(imgObject);
    }

    //populate the large img and its tags 
    imageList.addEventListener('click',function(e){
        setImg(e.target.dataset.id);
        error.classList.add('hidden');
    });  

    //handle form submission
    form.addEventListener('submit',function(e){
        e.preventDefault();
        var imgObject = imgObjectList[largeImg.dataset.id];
        var testVar = newTag.value.split(' ');
        if(newTag.value == ""){
            error.innerHTML = "You must enter a value";
            error.classList.remove('hidden');
        }else if(testVar.length > 1){
            error.innerHTML = "You can't have any spaces";
            error.classList.remove('hidden');
        }else{
            imgObject.tags.push('#' + newTag.value);
            setImg(imgObject.id);
            error.innerHTML = "";
            error.classList.add('hidden');
        }
    });

    //sets the img and the tags to the selected object
    function setImg(id){
        var imgObject = imgObjectList[id];
        largeImg.src = imgObject.largesrc;
        largeImg.dataset.id = id;
        largeImg.alt = imgObject.alt;
        largeImg.title = imgObject.title;
        title.innerHTML= imgObject.title;
        tags.innerHTML = imgObject.tags;
    };   
});