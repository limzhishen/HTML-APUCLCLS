// Get the button
let mybutton = document.getElementById("myBtn");
var prevScrollpos = window.pageYOffset;
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction(),Hidebaronscroll()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Hide bar on scroll
function Hidebaronscroll() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }