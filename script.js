"use strict";

const sliders = document.querySelectorAll(".slide");
const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");

let arr = Array.from(sliders);
let imageCount = arr.length;
let currentIndex = 0;
let slideWidthPct = 150;
//slider.width( imageCount * 100 + "vw");

var container = document.querySelector(".container");

//var width = container.offsetWidth;
let containerWidth = 600;

var centerX = (containerWidth / 2) + (slideWidthPct / 2);

var slideLeft = function () {
  if (currentIndex >= imageCount - 1) {
    console.log("Last image reached");
    return;
  }
  currentIndex += 1;
  console.log("Slide left");

  sliders[currentIndex].style.transform =
    "translateX(-" + currentIndex * centerX + "px)";
};

var slideRight = function () {
  if (currentIndex === 0) {
    console.log("First image reached");
    return;
  }
  currentIndex -= 1;
  console.log("Slide right");
  sliders[currentIndex].style.transform = ("translateX(-" + currentIndex * centerX + "px)");
};

btnLeft.addEventListener("click", () => {
  slideLeft();
});

btnRight.addEventListener("click", () => {
  slideRight();
});
