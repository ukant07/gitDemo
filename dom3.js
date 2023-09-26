var itemList = document.querySelector('#items');

//parentNode
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode);

//parentElement
itemList.parentElement.parentElement.style.backgroundColor = 'red';

//childNode --> gives NodeList
//console.log(itemList.childNodes);

//children --> gives HTML collection
itemList.children[1].style.backgroundColor = 'yellow';

//firstChild
//console.log(itemList.firstChild);

//firstElementChild
itemList.firstElementChild.textContent = 'Hello 1';

//lastChild
//console.log(itemList.lastChild);

//lastElementChild
itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling
//console.log(itemList.nextSibling);

//nextElementSibling
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log( itemList.previousSibling);

//previousElementSibling
itemList.previousElementSibling.style.color = 'green';


//createElement --

//create a div
var newDiv = document.createElement('div');
//adding class
newDiv.className = 'hello';
//adding id
newDiv.id = 'hello1';

//add attribute
newDiv.setAttribute('title','Hello Div');

//createTextNode
var newDivText = document.createTextNode ('Hello World');

//now adding the created text node to div
newDiv.appendChild(newDivText);

var container = document.querySelector ('header .container');
var h1 = document.querySelector ('header h1');

container.insertBefore(newDiv, h1);


