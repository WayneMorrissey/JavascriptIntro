window.addEventListener("DOMContentLoaded", function()
{
    // var submitForm = document.querySelector("form");

    // // form needs to use the submit event
    // submitForm.addEventListener('submit', onSubmit)
    
    // // prevent the form from submitting the data
    // // we parse and check the form fields
    // function onSubmit(e)
    // {
    //     e.preventDefault();
    //     console.log("submit the form");
    // }

    // ref object variable

    var imageThing = document.querySelector(".jim");
    var imageObj = {
        id: 1,
        src: "img/visa.png",
        name: "First data object"
    };

    imageThing.addEventListener("click", function(e)
    {
        var whichObj = e.currentTarget.dataset.id;
        switch(whichObj)
        {
            case '1': 
                console.log(imageObj.name);
                break;
            default:
                break;
        }

    })
})