window.onload = function()
{
    const dataFetchButton = document.querySelector(".get-data-btn");
    const dataRequestObj = new XMLHttpRequest();
    dataRequestObj.onload = onDataReturn;
    const jsonDataURL = "data/data.json";
    let applicationData;
    dataFetchButton.onclick = function(e)
    {
        // create request object
        dataRequestObj.open("GET", jsonDataURL);

        dataRequestObj.send();
    }

    function onDataReturn(e)
    {
        if(dataRequestObj.status === 200)
        {
            applicationData = JSON.parse(dataRequestObj.response);
            console.log(applicationData);
        }
        else
        {

        }
    }
}