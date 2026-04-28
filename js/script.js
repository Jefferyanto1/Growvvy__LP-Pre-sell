/* ======================================== */
/* MOBILE_MENU_TOGGLE */
/* ======================================== */

const menuToggle = document.getElementById("menuToggle");
const mobileDrawer = document.getElementById("mobileDrawer");
const menuClose = document.getElementById("menuClose");

menuToggle.addEventListener("click", function () {
    mobileDrawer.classList.add("active");
});

menuClose.addEventListener("click", function () {
    mobileDrawer.classList.remove("active");
});

/* FAQ_ACCORDION */

const faqCards = document.querySelectorAll('.faq-card');

faqCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});