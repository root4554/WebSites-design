const fZoom = () => {
  document.querySelector(".entrance").classList.add("zoomIn");
  document.querySelector("#myName").classList.add("bigger");
};

/******* HIDE ENTRANCE ***********/
//toggle the visibility between entrance and intro
const toggleviews = () => {
  document.querySelector(".entrance").style.display = "none";
  document.querySelector(".intro").style.display = "block";
  document.querySelector(".about").style.display = "block";
};
setTimeout(toggleviews, 3700);
window.onload = fZoom;

/************* DAY/NIGHT SWITCH MODE *************/
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

/******* BALLS ANIMATION ********** */

let container = document.querySelector(".ballsdiv");
container.addEventListener("animationend", changePosition, true);

function changePosition(event) {
  let balls = event.target;

  balls.style.animationName = "none";

  requestAnimationFrame(() => {
    balls.style.animationName = "";
  });

  let circleStyle = getComputedStyle(balls);
  let finalX = circleStyle.getPropertyValue("--xB");
  let finalY = circleStyle.getPropertyValue("--yB");

  balls.style.setProperty("--xA", finalX);
  balls.style.setProperty("--yA", finalY);

  balls.style.setProperty("--xB", getRandomNumber(0, 90) + "vw");
  balls.style.setProperty("--yB", getRandomNumber(0, 90) + "vh");

  // console.log(balls);
}

function getRandomNumber(low, high) {
  let r = Math.floor(Math.random() * (high - low + 1)) + low;
  return r;
}

/******* ZOOMIN TO ABOUT CONTENT EFFECT ********** */
let body = document.querySelector("body");
let about = document.querySelector(".about");

const createHeight = () => {
  let AboutHeight = about.offsetHeight;
  let windowHeight = window.innerHeight;
  let newHeight = windowHeight * 2;

  body.style.height = newHeight + "px";
};

setTimeout(createHeight, 3700);

const zoomOnScroll = () => {
  let scroll = window.scrollY;

  let zoom = 1 + scroll / 100; // divide by 100 to zoom less

  let opacity = (scroll * 2) / window.innerHeight;

  document.querySelector(".presentingText").style.transform = `scale(${zoom})`;

  about.style.opacity = `${opacity}`;
};

window.addEventListener("scroll", zoomOnScroll);

/******* START EFFECT OF ABOUT CONTENT ********** */

const startEffect = () => {
  let scroll = window.scrollY;
  let windowHeight = window.innerHeight;
  let aboutHeight = about.offsetHeight;
  let aboutTop = about.offsetTop;

  let circle = document.querySelector(".circle");
  let slideRight = document.querySelector(".slideRight");
  let slideLeft = document.querySelector(".slideLeft");

  const conts = document.querySelectorAll(".conts");

  console.log("Scroll " + scroll);
  // console.log("Hieght " + windowHeight);

  if (scroll >= 700) {
    console.log("Scroll more then 700 " + scroll);
    conts.forEach((cont) => {
      about.classList.add("block");
      cont.classList.add("animation");
      circle.style.display = "block";
      slideRight.classList.add("shrink");
      slideLeft.classList.add("shrink");
    });
  } 
  else {
    conts.forEach((cont) => {
      about.classList.remove("block");
      cont.classList.remove("animation");
      circle.style.display = "none";
      slideRight.classList.remove("shrink");
      slideLeft.classList.remove("shrink");
    });
};

window.addEventListener("scroll", startEffect);
