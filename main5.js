//  document.getElementById('my-form').addEventListener('submit', function(event) {
//  event.preventDefault(); 

//  const name = document.getElementById('name').value;
//  const email = document.getElementById('email').value;

//  localStorage.setItem('userName', name);
//  localStorage.setItem('userEmail', email);
    
//  document.getElementById('my-form').reset();

  document.getElementById('my-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
    
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  const newUser = {
    name: name,
    email: email
  };

  let usersArray = [];
  const existingUsers = localStorage.getItem('users');
  if (existingUsers) {
    usersArray = JSON.parse(existingUsers);
  }

  // Add the new user to the array
  usersArray.push(newUser);

  // Store the updated user array in local storage
  localStorage.setItem('users', JSON.stringify(usersArray));

  // Clear the form
  document.getElementById('my-form').reset();
