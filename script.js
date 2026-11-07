
function getLocation1()
{
document.getElementById("location").innerHTML = placeA;
}
function getLocation2()
{
document.getElementById("location").innerHTML = placeB;
}
function getLocation3()
{
document.getElementById("location").innerHTML = placeC;
}
function changeSelf()
{
let self = document.getElementById("self");
self.classList.toggle("newClass1");
}
function changeTitle()
{
let title = document.getElementById("title");
title.classList.toggle("newClass2");
}



function MobileNavOpen() {
let MobileNav = document.getElementById("MobileNav");
if (MobileNav.classList.contains("open")) {
MobileNav.classList.remove("open");
let MenuButton = document.getElementById("MenuButton");
MenuButton.textContent = "menu";
}

else {
MobileNav.classList.toggle("open");
let MenuButton = document.getElementById("MenuButton");
MenuButton.textContent = "close";
}

}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}