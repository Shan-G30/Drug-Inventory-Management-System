const registerForm = document.getElementById('registerForm');
const successMessage = document.getElementById('success-message');

registerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    successMessage.textContent = 'Registered Successfully!!!';
    successMessage.style.display = 'block';

    registerForm.reset();
});