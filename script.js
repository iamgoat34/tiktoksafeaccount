const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  // Send data to backend server using AJAX or fetch API
});
