// Listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        setupUI(user);
    }
    else {
        setupUI();
    }
});

const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const allLinks = document.querySelectorAll('.permanent');

// const accountProfile = document.querySelector('.profile');

const setupUI = (user) => {
    if (user) {
        // Toggle UI elements
        allLinks.forEach(item => item.style.display = 'block');
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
        
    }
    else {
        // Toggle UI elements
        allLinks.forEach(item => item.style.display = 'block');
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
        
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
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        window.location.href="login.html";
    });
});