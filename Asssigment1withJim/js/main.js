"use strict"

window.addEventListener("load", function()
{
    const nodes = Array.from(document.querySelectorAll(".thumbnails img"));
    const dataObj = nodes.map(function(value, index)
    {
        value.addEventListener("click", onUpdateGalleryDisplay);
        value.attributes("data-index", index);
        var tempObj = {
            id:index,
            src:("/img/" + value.alt + ".png").toLowerCase(),
            tags:""
        }
        return tempObj;
    });

    function onUpdateGalleryDisplay (e)
    {

    }

    // submit action
    function onEditTags()
    {
        validateTags(e.element.tags);
        if(tags.value == "")
        {
            
        }
        else if(tags.value.includes(" "))
        {

        }
        else
        {
            
        }
    }

    

})