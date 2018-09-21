window.addEventListener("DOMContentLoaded", function(){
    // all code is global to the function
    var gallery = document.querySelector(".gallery");
    var button = document.querySelector("#gallery button")
    var galleryDisplay = document.querySelector(".gallery-display");
    //console.log(gallery);
    // inline style on the element
    //gallery.style.backgroundcolor = "blue";
    //add remove a class from the attached css file
    //elm.classList.add()
    //elm.classList.remove()
    //elm.classList.toggle()
    gallery.classList.add("red");

    button.addEventListener("click", onClickToggle);
    function onClickToggle(e){
        galleryDisplay.classList.toggle("visuallyhidden");
    }
    
})