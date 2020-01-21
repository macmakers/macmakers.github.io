// Sign up
const registerForm = document.querySelector('#registerForm');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); // doesn't refresh page

    // Get user info
    const email = registerForm['email'].value;
    const password = registerForm['password'].value;

    // Sign up user
    // asynchronous task --> takes some time to complete
    // then takes in response from the createUser function
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        return db.collection('users').doc(cred.user.uid).set({
            email: registerForm['email'].value,
            fullName: registerForm['fullName'].value,
            program: registerForm['program'].value,
            yearOfStudy: registerForm['year_of_study'].value
        }).then(() => {
            // once user gets the credential, they are automatically logged in
            // console.log(cred.user); // gets user information
            window.location.href="index.html";
            registerForm.reset();
        });
    }); 
});

// Log in
const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get user info
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;

    auth.signInWithEmailAndPassword(email, password).then((cred) => {
        window.location.href="index.html";
        loginForm.reset();
    });
});