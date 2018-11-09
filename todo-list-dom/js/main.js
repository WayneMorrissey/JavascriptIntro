/*
  Add the required JavaScript to handle form submit and add a new todo item to 
  the page (in the div.todo-list element).  You will need to use a counter to 
  uniquely identify each todo item and use only DOM API functions to interact
  with the document (i.e. create each todo item), DO NOT use innerHTML for this
  exercise.
*/

// required vars
var todos = document.querySelector('.todo-list');
var todoCount = 0;

// todo form submit handler, adds a new todo item to the 'list'
document.querySelector('.todo-frm').addEventListener('submit', function (evt) {
	

	evt.preventDefault();

	var div,
		checkbox,
		label,
		labelText,
		todoText,
		dnbtn,
		dnbtnText,
		upbtn,
		upbtnText;

	todoText = evt.target.elements['todo-item'].value;

	// adding a todo regardless, so might as well increment now...
	todoCount += 1;
	
	if (todoText === '') {
		todoText = 'Todo ' + (todoCount);
	}
	var dn = '\u21e9';
	var up = '\u21e7';
	// create required elements
	div = document.createElement('div');
	checkbox = document.createElement('input');
	label = document.createElement('label');
	labelText = document.createTextNode(todoText);
	dnbtn = document.createElement('span');
	dnbtnText = document.createTextNode(dn);
	upbtn = document.createElement('span');
	upbtnText = document.createTextNode(up);


	// set appropriate attributes
	checkbox.setAttribute('type', 'checkbox');
	checkbox.setAttribute('id', 'todo-' + todoCount);
	label.setAttribute('for', 'todo-' + todoCount);
	label.setAttribute('contenteditable', '');
	dnbtn.setAttribute('class','arrow dn');
	upbtn.setAttribute('class','arrow up');

	// build document fragment
	label.appendChild(labelText);
	dnbtn.appendChild(dnbtnText);
	upbtn.appendChild(upbtnText);
	div.appendChild(checkbox);
	div.appendChild(label);
	div.appendChild(dnbtn);
	div.appendChild(upbtn);

	// add the document fragment to the document for rendering
	todos.appendChild(div);

	// clear the form
	evt.target.reset();

});

document.querySelector('.todo-list').addEventListener('click', function (evt) {
	// check for click on an arrow
	var targetTodo = evt.target.parentNode;
	var todoList = targetTodo.parentNode;
	var siblingTodo;
	if (evt.target.classList.contains('arrow'))
	{
	// identify the type of arrow (i.e. down or up)
		if (evt.target.classList.contains('dn')) 
		{
			siblingTodo = targetTodo.nextElementSibling;
			// insert the sibling before the target
			if(siblingTodo == null)
			{
				siblingTodo = todoList.firstChild;
				todoList.insertBefore(targetTodo, siblingTodo);
			}
			else
			{
				todoList.insertBefore(siblingTodo, targetTodo);
			}
		} 
		else if (evt.target.classList.contains('up')) 
		{
			siblingTodo = targetTodo.previousElementSibling;
			// insert the sibling before the target
			console.log(siblingTodo + "  " + targetTodo);
			todoList.insertBefore(targetTodo, siblingTodo);
		}
	}
});