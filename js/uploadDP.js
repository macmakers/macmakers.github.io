//Upload Profile Picture 

const uploader = document.querySelector('#profilePic');
// const submitButton = document.querySelector('#fileButton');
const uploadForm = document.querySelector('#upload-form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
// });
uploadForm.addEventListener('submit', (e) => {    
    e.preventDefault(); // doesn't refresh page

    // var file = e.target.files[0];
    // var file = uploader.value;
    // var email = uploadForm['profilePic'].value;
    const file = document.getElementById('profilePic').files[0];

    // Get current username
    var user = firebase.auth().currentUser.uid;

    // Upload file

    const ref = firebase.storage().ref();
    const name = user + '/profilePicture';
    const metadata = {
        contentType: file.type
    };
    // const task = ref.child(name).put(file, metadata);
    ref.child(name).put(file, metadata).then(function() {
    var imgRef = ref.child(user + '/profilePicture');
        imgRef.getDownloadURL().then(function(url) {
            var userRef = db.collection("users").doc(user);
            console.log(url);
            userRef.update({
                DP: url
            });
        }).then(function() {
            // setTimeout(console.log("Image Uploaded"),5000);
            console.log("Image Uploaded");
            // window.location.reload(true);
            setTimeout(() => {  window.location.reload(true); }, 1000);
        });    
    });
});



// // Log in
// const uploadForm = document.querySelector('#upload-form');
// uploadForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     let file = evt.target.files[0] // upload the first file only
//     // Get current username
//     var user = firebase.auth().currentUser;

//     // Create a Storage Ref w/ username
//     var storageRef = firebase.storage().ref(user + '/profilePicture/dp');

//     // Upload file
//     var task = storageRef.put(file);

//     task.then((value) => {
//         window.location.href="profile.html";
//         uploadForm.reset();
//     });

//     // auth.signInWithEmailAndPassword(email, password).then((cred) => {
//     //     window.location.href="profile.html";
//     //     uploadForm.reset();
//     // });
//     // let storageRef = firebase.storage().ref('photos/myPictureName')
//     // let fileUpload = document.getElementById("u#pload-form")

//     // fileUpload.addEventListener('submit', function(evt) {
//     //     let file = evt.target.files[0] // upload the first file only
//     //     // Get current username
//     //     var user = firebase.auth().currentUser;

//     //     // Create a Storage Ref w/ username
//     //     var storageRef = firebase.storage().ref(user + '/profilePicture/dp');

//     //     // Upload file
//     //     var task = storageRef.put(file);
//     // });
// });