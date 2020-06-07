/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// adding event listener on button for prevent change URL
document.getElementById("back-to-top").addEventListener("click", function(event){
  event.preventDefault()
})

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  let defaltNav = document.getElementById("defalt-nav")
  let mybutton = document.getElementById("back-to-top");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    defaltNav.classList.add('scroll-nav')
    mybutton.style.display = "block";
  } else {
    defaltNav.classList.remove('scroll-nav')
    mybutton.style.display = "none";
  }
}
