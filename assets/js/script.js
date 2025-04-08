'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}
const images = [
  " https://www.bodycraft.co.in/wp-content/uploads/young-woman-lying-cosmetologist-s-table-during-rejuvenation-procedure-2.jpg",
  " https://www.bodycraft.co.in/wp-content/uploads/young-woman-lying-cosmetologist-s-table-during-rejuvenation-procedure-2.jpg",
  " https://www.bodycraft.co.in/wp-content/uploads/young-woman-lying-cosmetologist-s-table-during-rejuvenation-procedure-2.jpg",
  "https://www.bodycraft.co.in/wp-content/uploads/young-woman-lying-cosmetologist-s-table-during-rejuvenation-procedure-2.jpg"
];

let current = 0;
const sliderImage = document.getElementById("sliderImage");

function changeImage() {
  current = (current + 1) % images.length;
  sliderImage.style.opacity = 0;

  setTimeout(() => {
    sliderImage.src = images[current];
    sliderImage.style.opacity = 1;
  }, 500);
}

setInterval(changeImage, 3000); // Change every 3 seconds


/**
 * add active class on header when scrolled 200px from top
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 200 ? header.classList.add("active")
    : header.classList.remove("active");
})