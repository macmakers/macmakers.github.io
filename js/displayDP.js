// Listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        const ref = firebase.storage().ref();
        var imgRef = ref.child(user.uid + '/profilePicture');
        imgRef.getDownloadURL().then(function(url) {
            document.querySelector('#dp').src = url;
        }).catch(function(error) {
            imgRef = ref.child('defaultDP.png');
            imgRef.getDownloadURL().then(function(url) {
                document.querySelector('#dp').src = url;
            })
            console.log(error.code);
        });
    }
    else {
        // setupAccountUI();
    }
});

// const setupAccountUI = (user) => {
//     if (user) {
//         const ref = firebase.storage().ref();
//         var imgRef = ref.child(user.uid + '/profilePicture');
//         imgRef.getDownloadURL().then(function(url) {
//             document.querySelector('#dp').src = url;
//         }).catch(function(error) {
//             imgRef = ref.child('defaultDP.png');
//             imgRef.getDownloadURL().then(function(url) {
//                 document.querySelector('#dp').src = url;
//             })
//             console.log(error.code);
//         });
//     }
//     else {
        
//     }
// }