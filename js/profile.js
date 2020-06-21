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
console.log(accountProfile);

const setupAccountUI = (user) => {
    if (user) {
        // Account Profile
        // const html = `<div>Logged in as ${user.email}</div>`;
        db.collection('users').doc(user.uid).get().then(doc => {
            const html = `
            <div class="col-md-4 col-sm-4">
                <div class="team-thumb wow fadeInUp" data-wow-delay="0.6s">
                    <img class="img-responsive" alt="" id="dp">
                </div>
            </div>
            <div class="col-md-4 col-sm-4">
                <div class="team-info">
                    <h3>${doc.data().fullName}</h3>
                    <p>${doc.data().email}</p>
                    <p>${doc.data().program}</p>
                    <p>Year ${doc.data().yearOfStudy}</p>
                </div>
            </div>
            `;
            accountProfile.innerHTML = html;
        });
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