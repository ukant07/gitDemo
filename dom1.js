console.dir(document) 
  
 document.title = "new title"; 
  
 const headerTitle = document.getElementById('header-title'); 
  
 headerTitle.style.border = 'solid 3px black'; 
  
 const addItems = document.getElementsByClassName('title'); 
  
 addItems.style.color = 'green'; 
 addItems.style.fontWeight = 'bold';

var items = document.getElementsgetElementsByClass('list-group-item');

items[2].style.backgroundColor = 'green';

for(let i = 0; i < items.length; i++) {
  items[i].style.fontWeigt = 'bold';
}
