// console.log()

/* 
EMCAScript
- standard
- ES5 spec
- ES6
- ES2017
- ES2018

Rules ECM
- dot syntax
statment js
obj.prop/method.value

Property Statement
obj.prop = value;
navigatior.name //read only
window.name = "new window";  Read/Write or Read only

method statement
obj.method(arg);
console.log('message')

Variables 25
var name assignment operator value
var logidID = 123;
*/

/* var userID = 123;
console.log("finally some js");

 */

 /* 
    Let
    Const
 */

/*  var cogListItem;
 cogListItem = document.querySelector('.icon-view li:last-child');
 console.log(cogListItem);
 var userName;
 userName = "username";
 console.log(userName); */

/**
 * Functions
 * - task (format, create a formated dom node)
 * - return 
 * function calculateTax(price, formate)
 * {
 *     return price;
 * }
 * 
 * calculateTax(100, "$");
 */

 // anonymous function
 // var aFunction = funtion()

 /**
  * Events
  * JS is an event driven language
  * add event to a dom element you use the
  * addEventListener()
  */

  var shoppingCart = document.querySelector('#cart');
  var readInput = shoppingCart.querySelector('input:first-of-type');
  var writeInput = shoppingCart.querySelector('input:last-of-type');
  shoppingCart.addEventListener('click', onCheckOut)
  function onCheckOut(e){
    var value = readInput.value;
    writeInput.value = "$" + value;
  }