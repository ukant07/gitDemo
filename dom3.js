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
