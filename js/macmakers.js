window.onscroll = function() {stickyNav_Activate()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function stickyNav_Activate() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
