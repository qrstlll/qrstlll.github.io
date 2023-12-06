function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email) && password.length >= 8) {
        window.location.href = '\index.html'; 

    } else {
        
        errorMessage.textContent = 'Неправильні дані.';
    }
}