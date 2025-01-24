const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const formData = new FormData(loginForm);
  const formObject = {};

  for (const [key, value] of formData.entries()) {
    formObject[key] = value.trim(); 
  }

  if (!formObject.email || !formObject.password) {
    alert('All form fields must be filled in');
  } else {
    console.log(formObject);
    loginForm.reset();
  }
});

