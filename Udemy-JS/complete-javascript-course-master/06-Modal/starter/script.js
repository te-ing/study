"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden"); // 클래스지정 .은 사용하지 않음
  overlay.classList.remove("hidden"); //modal.style.display = 'block'; 같은 기능, 하지만 번거로움}
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
//  const closeModal = function ()의 중복을 대체하는 기능
// btnCloseModal.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");});

document.addEventListener("keydown", function (abc) {
  if (abc.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
