document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (validateInputs(username, password)) {
            simulateLogin(username, password);
        }
    });

    function validateInputs(username, password) {
        let isValid = true;

        if (username === '') {
            setError(usernameInput, 'Username is required');
            isValid = false;
        } else {
            setSuccess(usernameInput);
        }

        if (password === '') {
            setError(passwordInput, 'Password is required');
            isValid = false;
        } else if (password.length < 6) {
            setError(passwordInput, 'Password must be at least 6 characters');
            isValid = false;
        } else {
            setSuccess(passwordInput);
        }

        return isValid;
    }

    function setError(input, message) {
        const inputGroup = input.parentElement;
        const errorDisplay = inputGroup.querySelector('.error-message') || createErrorElement(inputGroup);
        errorDisplay.innerText = message;
        inputGroup.classList.add('error');
        inputGroup.classList.remove('success');
    }

    function setSuccess(input) {
        const inputGroup = input.parentElement;
        const errorDisplay = inputGroup.querySelector('.error-message');
        if (errorDisplay) {
            errorDisplay.innerText = '';
        }
        inputGroup.classList.remove('error');
        inputGroup.classList.add('success');
    }

    function createErrorElement(parent) {
        const errorElement = document.createElement('small');
        errorElement.classList.add('error-message');
        parent.appendChild(errorElement);
        return errorElement;
    }

    function simulateLogin(username, password) {
        showLoadingState();
        setTimeout(() => {
            if (username === 'ashita' && password === 'admin@786') {
                loginSuccess();
            } else if (username === 'admin' && password === 'admin@786') {
                adminScreen()
            } else {
                loginFailure();
            }
            hideLoadingState();
        }, 1500);
    }

    function showLoadingState() {
        const button = form.querySelector('button');
        button.disabled = true;
        button.innerHTML = 'Logging in...';
    }

    function hideLoadingState() {
        const button = form.querySelector('button');
        button.disabled = false;
        button.innerHTML = 'Log In';
    }

    function loginSuccess() {
        // alert('Login successful! Redirecting to student profile...');
        window.location.href = 'first_web.html';
    }

    function loginFailure() {
        alert('Login failed. Please check your username and password.');
    }

    function adminScreen() {
        window.location.href = 'http://127.0.0.1:8081/swagger-ui/index.html#/';
    }
});
