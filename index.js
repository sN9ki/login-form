const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const password = document.querySelector('#password');
const showPassword = document.querySelector('#show-password');
const successReg = new SuccessReg();

showPassword.addEventListener('change', () => {
    password.type = showPassword.checked ? 'text' : 'password';
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    successReg.writeName(nameInput.value);
});
