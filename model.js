var openModel = document.querySelector(".btn");
var closeModel = document.querySelector(".close-btn");
var section = document.querySelector("section");

openModel.addEventListener("click", function() {
    section.classList.toggle("show");
})

closeModel.addEventListener("click", function() {
    section.classList.toggle("show");
})