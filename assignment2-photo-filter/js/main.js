// Enter your JavaScript for the solution here...
window.addEventListener("load", function()
{
    var filterForm = document.querySelector(".frm-filter");
    var filterInput = filterForm.querySelector("#filter");
    var filterReset = filterForm.querySelector(".reset");

    var images = Array.from(document.querySelectorAll(".thumb-display"));

    var imgObjs = images.map(function(item, i)
    {
        var obj = 
        {
            id : i,
            tags : item.querySelector(".tags").innerHTML
        }
        return obj;
    });

    filterInput.addEventListener("input", onFilterKeyPress);
    filterReset.addEventListener("click", onResetClick)

    function onFilterKeyPress(e)
    {
        var filter = e.target.value;
        if(filter === "")
        {
            filterReset.classList.add("hidden");
        }
        else
        {
            filterReset.classList.remove("hidden");
        }
        imgObjs.forEach(function(item)
        {
            if(item.tags.includes(filter))
            {
                images[item.id].classList.remove("hidden");
            }
            else
            {
                images[item.id].classList.add("hidden");
            }
        });
    }

    function onResetClick(e)
    {
        filterInput.value = "";
        images.forEach(function(item)
        {
            item.classList.remove("hidden");
        });
        filterReset.classList.add("hidden");
    }
});