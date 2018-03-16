var menuToggler = document.querySelector(".menu-toggle");
var hamMenu = document.querySelector(".main-nav-off");

var subMenuToggler = document.querySelector(".drop-down-toggle");
var aboutUsMenu = document.querySelector(".drop-down-nav");

menuToggler.addEventListener("click", function() {

    hamMenu.classList.toggle("hamburger-menu-open");
    menuToggler.classList.toggle("menu-clicked")
});

subMenuToggler.addEventListener("click", function() {
  aboutUsMenu.classList.toggle("opened");
});


// Accordion 
// var accordions = document.querySelectorAll('.accordion');

// for (var i = 0; i < accordions.length; i++) {
//     accordions[i].addEventListener("click", function() {
//         var content = this.nextElementSibling;
        
//         if (content.classList.contains("is-open")) {
//             content.classList.remove("is-open");
//         } else {
//             content.classList.add("is-open");
//         }
//     });
// }

// var a = document.querySelectorAll('.accordion');
// for(var i = 0; i < a.length; i++) {
//     a[i].addEventListener('click', function() {
//         console.clear();
//         for(var j = 0; j < a.length; j++) {
//             if(this === a[j]) {
//                 // isti
//                 console.log('isti');
//             } else {
//                 // razlicit
//                 console.log('razlicit');
//             }
//         }
//     });
// }


var accordions = document.getElementsByClassName("accordion");
var openAccordion = null;

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    if (openAccordion != null && openAccordion != this) {
      openAccordion.classList.remove('is-open');
      var content = openAccordion.nextElementSibling;
      content.style.maxHeight = null;
    }
    
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
    
    openAccordion = this;
  };
}

$(document).ready(function() {
    $('.slider').slick({
        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
        prevArrow:"<span class='icon-left-open slick-prev'></span>",
        nextArrow:"<span class='icon-right-open slick-next'></span>"
    });
});