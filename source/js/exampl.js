var examplBefore = document.querySelector(".example__image--before");
var examplBeforeBtn = document.querySelector(".example__toggle--before");
var examplAfter = document.querySelector(".example__image--after");
var examplAfterBtn = document.querySelector(".example__toggle--after");
var exempleRangToggl = document.querySelector(".example__range-toggle");

examplAfterBtn.addEventListener("click", function () {
  examplBefore.style.display = "none";
  examplAfter.style.display = "block";
  exempleRangToggl.classList.add("example__range-toggle--after");
});

examplBeforeBtn.addEventListener("click", function () {
  examplBefore.style.display = "block";
  examplAfter.style.display = "none";
  exempleRangToggl.classList.remove("example__range-toggle--after");
});
