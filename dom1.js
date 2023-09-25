console.dir(document) 
  
 document.title = "new title"; 
  
 const headerTitle = document.getElementById('header-title'); 
  
 headerTitle.style.border = 'solid 3px black'; 
  
 const addItems = document.getElementsByClassName('title'); 
  
 addItems.style.color = 'green'; 
 addItems.style.fontWeight = 'bold';

var items = document.getElementsByClass('list-group-item');

items[2].style.backgroundColor = 'green';

for(let i = 0; i < items.length; i++) {
  items[i].style.fontWeigt = 'bold';
}

var item5 = document.getElementsByClass('later-added-item');
item5.style.backgroundColot = 'yellow';

var listItems = document.getElementsByTagName('li');
listItems[4].style.fontWeight = 'bold';
