window.addEventListener("DOMContentLoaded", function(e)
{
    /* var windowViewState = true;
    var button = document.querySelector("button");
    var menu = document.querySelector("div.window");

    button.addEventListener("click", onButtonClick);
    function onButtonClick(e)
    {
        if(windowViewState)
        {
            windowViewState = false;
            menu.classList.add("visuallyhidden");
            console.log(windowViewState);
        }
        else
        {
            windowViewState = true;
            menu.classList.remove("visuallyhidden");
            console.log(windowViewState);
        }
    } */

    var incrementValue = document.querySelector(".counter button:last-of-type");
    var decrementValue = document.querySelector(".counter button:first-of-type");
    var display = document.querySelector(".display");
    var count = 5;

    // setup the user interface dunction... 
    function configUI()
    {
        // read/write property of an element
        display.innerHTML = count;
    }

    incrementValue.addEventListener("click", onUpdateDisplay);
    decrementValue.addEventListener("click", onUpdateDisplay);

    function onUpdateDisplay(e)
    {
        console.log(e.target)
        if(e.target === incrementValue)
        {
            count++;
        }
        else
        {
            count--;
        }
        configUI();
    }
    console.log(count);
    configUI();
})