window.addEventListener("load", function()
{
    //script the button to load JSON file
    const getDataButton = document.querySelector(".get-data-btn");
    // url location, json file, where the app data lives on load....
    const dataURL = "data/data.txt";
    getDataButton.addEventListener("click", function(e)
    {
        //request object
        let request = new XMLHttpRequest();

        request.open("GET", dataURL);

        // call back function
        request.onload=function(e)
        {
            if(request.status === 200)
            {
                console.log(request.responseText);
            }
            else
            {

            }
        }

        request.send();
    })
})