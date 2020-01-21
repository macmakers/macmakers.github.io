// add admin cloud function
// const adminForm = document.querySelector('.admin-actions');
// adminForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const adminEmail = document.querySelector('#admin-email').value;
//     const addAdminRole = functions.httpsCallable('addAdminRole');
//     // invoke function
//     addAdminRole({email: adminEmail}).then(result => {
//         console.log(result);
//     });
// });

// Listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        setupAccountUI(user);
    }
    else {
        setupAccountUI();
    }
});

// const loggedOutLinks = document.querySelectorAll('.logged-out');
// const loggedInLinks = document.querySelectorAll('.logged-in');
// const allLinks = document.querySelectorAll('.permanent');

const accountProfile = document.querySelector('.account-details');
// accountProfile.innerHTML = 'asdf';
console.log(accountProfile);

const setupAccountUI = (user) => {
    if (user) {
        // Account Profile
        // const html = `<div>Logged in as ${user.email}</div>`;
        db.collection('users').doc(user.uid).get().then(doc => {
            const html = `
            <p>Your account details are below:</p>
            <table>
                <tr>
                    <td>Name:</td>
                    <td>${doc.data().fullName}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>${doc.data().email}</td>
                </tr>
                <tr>
                    <td>Program:</td>
                    <td>${doc.data().program}</td>
                </tr>
                <tr>
                    <td>Year of Study:</td>
                    <td>${doc.data().yearOfStudy}</td>
                </tr>
            </table>
            `;
            // const html = user;
            accountProfile.innerHTML = html;
        });
        // html = `<h1>asdf</h>`;
        // accountProfile.innerHTML = html;
        // accountProfile.innerHTML = "<h1>asdf</h>";
        // document.querySelector('.account-details').innerHTML = html;
        // Toggle UI elements
        // allLinks.forEach(item => item.style.display = 'block');
        // loggedInLinks.forEach(item => item.style.display = 'block');
        // loggedOutLinks.forEach(item => item.style.display = 'none');
        
    }
    else {
        // Hide account info
        // accountProfile.innerHTML = '';
        // Toggle UI elements
        // allLinks.forEach(item => item.style.display = 'block');
        // loggedInLinks.forEach(item => item.style.display = 'none');
        // loggedOutLinks.forEach(item => item.style.display = 'block');
        // accountProfile.innerHTML = html;
    }
}

// const eventForm = document.querySelector('#eventsForm');
// eventForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     db.collection('events').add({
//         title: eventForm['eventTitle'].value,
//         date: eventForm['eventDate'].value,
//         description: eventForm['eventDescription'].value
//     }).then(() => {
//         window.location.href="events.html";
//         eventsForm.reset();
//     });
// });

// Log out
// const logout = document.querySelector('#logout');
// logout.addEventListener('click', (e) => {
//     e.preventDefault();
//     auth.signOut().then(() => {
//         window.location.href="login.html";
//     });
// });