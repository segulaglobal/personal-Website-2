// TABLE OF CONTENT 
// 1. Theme Toggle
// 2. Mobile Navigation button and Menu.
// 3. Intersection Observers.
// 4. Change text with js







// ============= NAVIGATION BUTTON ===============
const navButton = document.querySelector(".nav-btn");
const navList = document.querySelector(".nav-list");
const navOverlay = document.querySelector(".nav-overlay");
const navItem = document.querySelectorAll(".nav-item");
const navEmail = document.querySelector(".nav-email");

let showMenu = false;
navButton.addEventListener("click", openMenu);
navOverlay.addEventListener("click", openMenu);
navItem.forEach(item => {
    item.addEventListener("click", openMenu)
})

function openMenu () {
    if(!showMenu) {
        navButton.classList.add("close");
        navList.classList.add("show");
        navOverlay.classList.add("show");
        navEmail.classList.add("show");
        navItem.forEach(item => {
            item.classList.add("show");
        });
        // document.body.classList.add("no-scroll");
        showMenu = true;
    }else {
        navButton.classList.remove("close");
        navList.classList.remove("show");
        navButton.classList.remove("show");
        navOverlay.classList.remove("show");
        navEmail.classList.remove("show");
        navItem.forEach(item => {
            item.classList.remove("show");
        });
        // document.body.classList.remove("no-scroll");
        showMenu = false;
    }
}









// // ================== INTERSECTION OBSERVER =====================
// const sectionHero = document.querySelector("#hero");
// const toTopButton = document.querySelector('.to-top');
// const navBar = document.querySelector('.nav-bar');
// const options = {
//     rootMargin: "-100px"
// };

// const observer = new IntersectionObserver(function(entries, observer) {
//     entries.forEach(entry => {
//         if(!entry.isIntersecting) {
//             toTopButton.classList.add("visible");
//             navBar.classList.add("box-shadow");
//         }else{
//             toTopButton.classList.remove("visible");
//             navBar.classList.remove("box-shadow");
//         }
//     })
// }, options)

// observer.observe(sectionHero);
















// // ======================== Intersection observer for fade in animation ==============
// const header = document.querySelector("nav-bar");
// const sectionOne = document.querySelector(".section-hero");

// const faders = document.querySelectorAll(".fade-in");
// const sliders = document.querySelectorAll(".slide-in");

// const sectionOneOptions = {
//   rootMargin: "-200px 0px 0px 0px"
// };






// const appearOptions = {
//   threshold: 0,
//   rootMargin: "0px 0px -250px 0px"
// };

// const appearOnScroll = new IntersectionObserver(function(
//   entries,
//   appearOnScroll
// ) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       entry.target.classList.add("appear");
//       appearOnScroll.unobserve(entry.target);
//     }
//   });
// },
// appearOptions);

// faders.forEach(fader => {
//   appearOnScroll.observe(fader);
// });

// sliders.forEach(slider => {
//   appearOnScroll.observe(slider);
// }
// );







// ===================== testimonial carousel ===================

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("testimonial");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}