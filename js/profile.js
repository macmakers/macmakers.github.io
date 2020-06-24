// Listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        setupAccountUI(user);
    }
    else {
        setupAccountUI();
    }
});

const accountProfile = document.querySelector('.account-details');
const profilePicture = document.querySelector('.profile-picture');
console.log(accountProfile);

const setupAccountUI = (user) => {
    if (user) {
        // Account Profile
        // const html = `<div>Logged in as ${user.email}</div>`;
        db.collection('users').doc(user.uid).get().then(doc => {
            const picture = `
            <div>
                <div class="team-thumb wow fadeInUp" data-wow-delay="0.6s">
                    <img class="img-responsive" alt="" id="dp">
                </div>
            </div>
            `;
            const accountData = `
            <div>
                <div class="team-info">
                    <h3>${doc.data().fullName}</h3>
                    <p>${doc.data().email}</p>
                    <p>${doc.data().program}</p>
                    <p>Year ${doc.data().yearOfStudy}</p>
                </div>
            </div>
            `;
            accountProfile.innerHTML = accountData;
            profilePicture.innerHTML = picture;
        });        
    }
    else {
        accountProfile.innerHTML = "You are not logged in!";
    }
}