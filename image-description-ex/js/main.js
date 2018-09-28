window.addEventListener('DOMContentLoaded', function()
{
    var featureLink = document.querySelector(".feature");
    console.log(featureLink);

    featureLink.addEventListener('click', featureLinkHandler);
    
    function featureLinkHandler(e)
    {

        var featureImage = document.querySelector('img.feature');
        featureImage.src = featureLink.href;
        featureImage.classList.remove('hidden');

        
        e.preventDefault();
    }
})