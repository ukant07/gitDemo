  document.getElementById('my-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  localStorage.setItem('userName', name);
  localStorage.setItem('userEmail', email);
    
  document.getElementById('my-form').reset();
