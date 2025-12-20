const email = document.getElementById('email');
const password = document.getElementById('password');
const age = document.getElementById('age');
const message = document.getElementById('message');

email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
age.addEventListener("input", validateAge);

function validateEmail() {
    if (email.value.includes('@') && email.value.includes('.')) {
        setSuccess(email);
        return true;
    } else {
        setError(email);
        return false;
    }
}

function validatePassword() {
    if (password.value.length >= 8) {
        setSuccess(password);
        return true;
    } else {
        setError(password);
        return false;
    }
}

function validateAge() {
    
    if (age.value >= 13 && age.value <= 14) {
        setSuccess(age);
        return true;
    } else {
        setError(age);
        return false;
    }
}

function setSuccess(input) {
    input.classList.add("success");
    input.classList.remove("error");
}

function setError(input) {
    input.classList.add("error");
    input.classList.remove("success");
}

function validate(event) {
    event.preventDefault();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isAgeValid = validateAge();
    
    if (isEmailValid && isPasswordValid && isAgeValid){
        message.style.color = "green";
        message.innerHTML = "Login successful!";
    } else {
        message.style.color = "red";
        message.innerHTML = "Unsuccessful login. Please correct the errors above.";
    }
}
