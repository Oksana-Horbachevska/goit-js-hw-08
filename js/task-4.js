const formElem = document.querySelector('.login-form');
formElem.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(e) {
  e.preventDefault();
  const email = e.target.elements.email.value.trim();
  const password = e.target.elements.password.value.trim();

  const data = {
    email,
    password,
  };

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }
  console.log(data);
  e.target.reset();
}
