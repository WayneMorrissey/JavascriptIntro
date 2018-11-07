"use-strict"
window.addEventListener("load", function () {
  // grab the template for the items/product
  const productTemplate = document.querySelector("template").content.children[0];
  // refvar for the shopping cart list items/product
  const cartTemplate = document.querySelector("template").content.children[1];
  // refvar for the shopping list dom container
  const shoppingListContainer = document.querySelector('.items-container');
  // refvar for the products container
  const productContainer = this.document.querySelector(".products-container");
  // mimic the import of the data 
  const productItemData = appData;
  // shopping cart array items
  let shoppingList = []


  // create the display of items/products
  configUI()




  function configUI() {

    productItemData.forEach(function (product, index) {
      let newItem = productTemplate.cloneNode(true);
      // date attribute ======> position of the element in the DataArray
      newItem.querySelector(".add-to-cart-btn").setAttribute("data-index", index);
      newItem.querySelector(".add-to-cart-btn").addEventListener('click', onAddToCart);
      newItem.querySelector('.card-title').innerHTML = product.title;
      newItem.querySelector('.card-thumbnail').src = product.url;
      newItem.querySelector('.card-details').innerHTML = product.short;
      productContainer.appendChild(newItem)
    })
  }

  function onAddToCart(e) {
      // check to see if the cart is empty
    if (shoppingList.length === 0) {
      newShoppingCartItem(e.currentTarget.dataset.index)
    }else{
      // use the find array t see if the item exists in the shopping cart
      let isInCart = shoppingList.find((item)=>{
        
            if(Number(item.dataset.dataid)=== Number(e.currentTarget.dataset.index)){
                 return item
            }
      })
      if(isInCart === undefined){
        newShoppingCartItem(e.currentTarget.dataset.index)
     }else{
      updateShoppingCartItem(isInCart)
     }
    }

   
  }
  //    // Add New Item To Cart
  function newShoppingCartItem(dataIndex) {
    const itemData = productItemData[dataIndex];
    const newCartItem = cartTemplate.cloneNode(true);
    shoppingList.push(newCartItem);
    newCartItem.querySelector('.item-details p').innerHTML = `DOM Position: ${shoppingList.length-1}<p>Data Array #: ${itemData.id}</p>`
    newCartItem.dataset.dataid = itemData.id;
    newCartItem.dataset.quantity = 1;
    newCartItem.querySelector('.remove-item').dataset.cartindex = shoppingList.length - 1;
    newCartItem.querySelector('img').src = itemData.url;
    newCartItem.querySelector('.remove-item').addEventListener('click', onRemoveFromCart)
    shoppingListContainer.appendChild(newCartItem);
  }

  function onRemoveFromCart(e){
    let removeIndex = Number(e.currentTarget.dataset.cartindex);
    shoppingList[removeIndex].querySelector('.remove-item').removeEventListener('click', onRemoveFromCart)  
    shoppingListContainer.removeChild(shoppingListContainer.children[removeIndex]);
    shoppingList.splice(removeIndex,1);    

    shoppingList.forEach((item,index)=>{
         item.querySelector('.remove-item').dataset.cartindex = index;
    })
  }


     function updateShoppingCartItem(theItem){
       console.log(theItem.dataset.dataid)
       theItem.dataset.quantity ++;
       theItem.querySelector('.quantity p:last-of-type').innerHTML = theItem.dataset.quantity;
     }










})