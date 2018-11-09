// your js here...
window.addEventListener("load", function()
{
    var images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg']; 
    var currentImg = 0;

    document.querySelector('.carousel>img').src = 'images/' + images[0];

    document.querySelector('.carousel').addEventListener('click', function (evt)
    {
        var target = evt.target;
        console.log(target);
        if (target.classList.contains('control')) 
        {
            if (target.classList.contains('next')) 
            {
                // move to the next index in the array
                currentImg += currentImg === (images.length - 1) ? 0 : 1;
            } 
            else if (target.classList.contains('prev'))
            {
                // move to the previous index in the array
                currentImg -= currentImg === 0 ? 0 : 1;
            }
            document.querySelector('.carousel>img').src = 'images/'+ images[currentImg];
        }
    }); 
});