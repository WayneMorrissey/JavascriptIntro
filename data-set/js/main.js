

window.addEventListener("load", function(loadEvent){
    var dataArray = [];
    // use a loop to build our objects
    var cardObj=
    {
        id:1,
        src: "img/strain-1.jpg"
    };

    dataArray.push(cardObj);
    
    var objectsView = document.querySelector(".card");
    objectsView.addEventListener("click", function(e){
        console.log(e.currentTarget.dataset.index);
    })

})