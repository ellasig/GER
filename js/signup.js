
// Signup Button
const signUpButton = document.querySelector('#signup button[type="submit"]');

const emailCheck = await fetch("http://localhost:3000/checkEmail");
const usernameCheck = await fetch("http://localhost:3000/checkUsername");

signUpButton.addEventListener('click', (event) => {
    event.preventDefault();
    const form = document.querySelector('#signup form');
    const emailInput = document.querySelector('input[name="email"]');
    module.exports = emailInput;
    const usernameInput = document.querySelector('input[name="username"]');
    module.exports = usernameInput;
    const passwordInput = form.querySelector('input[name="password"]');
    const passwordCheckInput = form.querySelector('input[name="passwordCheck"]');
    const emailValue = emailInput.value;
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;
    const passwordCheckValue = passwordCheckInput.value;

    // Checks input information's.
    if (passwordValue !== passwordCheckValue || passwordValue.length() < 8) {
        alert('Password is too short or passwords do not match.');
        return;
    }
    if (!(emailValue.isEmail().normalizeEmail()) || emailCheck > 0) {
        alert('Invalid Email.');
        return;
    }
    if (!(usernameValue.isLength({min:3, max:15})) || usernameCheck > 0) {
        alert('Invalid username or username already exists');
        return;
    }

    form.action = 'http://localhost:3000/addUser';
    form.submit();
});