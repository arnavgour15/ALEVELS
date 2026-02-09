const container = document.querySelector('.container');
const btnSignIn = document.querySelector('.btnSign-in');
const btnSignUp = document.querySelector('.btnSign-up');

// Toggle 'active' class on the container
btnSignIn.addEventListener('click', () => {
    container.classList.add('active');
});

btnSignUp.addEventListener('click', () => {
    container.classList.remove('active');
});

// Handle form submissions
document.getElementById("form_sign_in").addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "http://127.0.0.1:5500"; // Update with your desired URL
});

document.getElementById("form_sign_up").addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "http://127.0.0.1:5500"; // Update with your desired URL
});
