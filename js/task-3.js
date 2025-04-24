const inputElem = document.querySelector('#name-input');
const spanElem = document.querySelector('#name-output');

inputElem.addEventListener('input', handleNameInput);
function handleNameInput(e) {
  const name = e.target.value.trim();
  if (name !== '' && name !== ' ') {
    spanElem.textContent = name;
  } else {
    spanElem.textContent = 'Anonymous';
  }
}
