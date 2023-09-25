console.dir(document)

document.title = "new title";

const headerTitle = document.getElementById('header-title');

headerTitle.style.border = 'solid 3px black';

const addItems = document.getElementsByClassName('title');

addItems.style.color = 'green';
addItems.style.fontWeight = 'bold';