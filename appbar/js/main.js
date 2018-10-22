'use strict'
window.addEventListener("load", function()
{
    const menu = document.querySelector(".mobile-menu-panel");
    const menuButton = document.querySelector(".mobile-menu-btn");
    const menuItems = document.createElement("ul");
    let state = false;

    configUI();

    function configUI()
    {
        let menuItemObj = 
        {
            ref:"http://www.google.com",
            text: "google"
        }
        let info = [];
        info.push(menuItemObj);
        info.forEach(function(item, index)
        {
            let listElm = document.createElement("li");
            let anchorElm = document.createElement("a");
            listElm.appendChild(anchorElm);
            menuItems.appendChild(listElm);

            anchorElm.setAttribute("href", item.ref);
            anchorElm.innerHTML = item.text;
        });
        menu.appendChild(menuItems);
    }

    console.log(menuButton);

    menuButton.addEventListener("click", function(e)
    {
        state = !state;
        console.log("press");

        if(state)
        {
        console.log("close the menu");
        TweenLite.to(menu, 0.25, {left:"0vh"});
        }
        else
        {
            console.log("open the menu");
            TweenLite.to(menu, 0.25, {left:"-10vh"});
        }
    });

    
});