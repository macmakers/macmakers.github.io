// Sign up
const registerForm = document.querySelector('#register-form');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); // doesn't refresh page

    // Get user info
    const email = registerForm['cf-email'].value;
    const password = registerForm['cf-password'].value;

    // Sign up user
    // asynchronous task --> takes some time to complete
    // then takes in response from the createUser function
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        return db.collection('users').doc(cred.user.uid).set({
            email: registerForm['cf-email'].value,
            fullName: registerForm['cf-fullName'].value,
            program: registerForm['cf-program'].value,
            yearOfStudy: registerForm['cf-year-of-study'].value
        }).then(() => {
            // once user gets the credential, they are automatically logged in
            // console.log(cred.user); // gets user information
            window.location.href="index.html";
            registerForm.reset();
        });
    }); 
});

// Log in
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    console.log("logging in");
    e.preventDefault();

    // Get user info
    const email = loginForm['cf-email'].value;
    const password = loginForm['cf-password'].value;

    auth.signInWithEmailAndPassword(email, password).then((cred) => {
        window.location.href="index.html";
        loginForm.reset();
    });
});