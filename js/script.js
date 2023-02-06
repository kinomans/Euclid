

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) =>{
    document.getElementById('search-form').classList.add('search-form__show')
  })
  document.getElementById('search-form-close').addEventListener('click', (e) =>{
    document.getElementById('search-form').classList.remove('search-form__show')
  })
  document.getElementById('search-form').addEventListener('submit', (e) =>{
    e.preventDefault()
  })
})

// Burger
const burger = document?.querySelector("[data-burger]");
const nav = document?.querySelector("[data-nav]");
const navItems = nav?.querySelectorAll("a");
const body = document.body;
burger?.addEventListener("click", () => {
  body.classList.toggle("stop-scroll");
  burger?.classList.toggle("burger--active");
  nav.classList.toggle("nav--visible");
});
navItems.forEach((el) => {
  el.addEventListener("click", () => {
    body.classList.remove("stop-scroll");
    burger?.classList.remove("burger--active");
    nav.classList.remove("nav--visible");
  });
});

/* slider */
var swiper = new Swiper(".swiper-container", {
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  allowTouchMove: true,
  loop: true,
});

/* tabs */

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".work__btn").forEach(function (e) {
    e.addEventListener("click", function (e) {
      const tab = e.currentTarget.dataset.path;
      document.querySelectorAll(".tab-content").forEach(function (e) {
        e.classList.remove("tab-content--active");
        document
          .querySelector(`[data-target='${tab}']`)
          .classList.add("tab-content--active");
      });
    });

    e.addEventListener("click", function (e) {
      const tabDefault = e.currentTarget.dataset.default;
      document.querySelectorAll(".work__btn").forEach(function (e) {
        e.classList.remove("work__btn--default");
        document
          .querySelector(`[data-path='${tabDefault}']`)
          .classList.add("work__btn--default");
      });
    });
  });
});

// accordion

$(function () {
  $("#accordion").accordion({
    collapsible: true,
    active: false,
  });
});
