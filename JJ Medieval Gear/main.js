window.onscroll = function() {myFunction()};
var nav__links = document.getElementById("nav__links");
var sticky = nav__links.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav__links.classList.add("sticky")
  } else {
    nav__links.classList.remove("sticky");
  }
}

var typed = new Typed(".typing", {
    strings: ["Developer", "Consultant", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

