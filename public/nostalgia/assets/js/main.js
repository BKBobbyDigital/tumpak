const slimeTrigger = document.querySelector(".footer-link-5");
const modal = document.querySelector(".modal");

slimeTrigger.addEventListener("click", (e) => {
  e.preventDefault();

  modal.classList.remove("active");
  setTimeout(() => {
    modal.classList.add("active");
  }, 100);
});
