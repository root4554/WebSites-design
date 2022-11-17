const fZoom = () => {
  document.querySelector(".entrance").classList.add("zoomIn");
  document.querySelector("#myName").classList.add("bigger");
};

/******* HIDE ENTRANCE ***********/
//toggle the visibility between entrance and intro
const toggleviews = () => {
  document.querySelector(".entrance").style.display = "none";
  document.querySelector(".intro").style.display = "block";
  document.querySelector(".intro").classList.add("fadeIn");
};
setTimeout(toggleviews, 3700);
window.onload = fZoom;

/************* DAY/NIGHT SWITCH MODE *************/
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.querySelector(".frontground").classList.toggle("darkerblack");
  document.querySelectorAll(".name").forEach((name) => {
    name.classList.toggle("light");
    document.querySelector("#cv").classList.toggle("light");
  });
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

/******* HOVER GET IN TOUCH ********************** */

const cv_container = document.querySelector(".getCv");
const arrowleft = document.querySelector(".fa-arrow-right");

const changeToCv = () => {
  console.log("change to cv");
  let cv = document.querySelector("#cv");
  cv.innerHTML = "Download CV ?";
  cv.classList.add("cvAnimation");
  arrowleft.style.animationName = "none";
};
const changeToGetInTouch = () => {
  let cv = document.querySelector("#cv");
  cv.innerHTML = "Get in touch";
  cv.classList.remove("cvAnimation");

  arrowleft.style.animationName = "bounceLeft";
};
cv_container.addEventListener("mouseover", changeToCv);
cv_container.addEventListener("mouseout", changeToGetInTouch);
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

  document.querySelector(".about").style.display = "block";

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

  if (scroll <= windowHeight * 0.2) {
    document.querySelector(".about").style.display = "none";
  }

  if (scroll >= windowHeight * 0.5) {
    conts.forEach((cont) => {
      cont.classList.add("animation");
      circle.style.display = "block";
      slideRight.classList.add("shrink");
      slideLeft.classList.add("shrink");
      loaded = true;
      console.log("loaded " + loaded);
    });
  } else {
    conts.forEach((cont) => {
      cont.classList.remove("animation");
      circle.style.display = "none";
      slideRight.classList.remove("shrink");
      slideLeft.classList.remove("shrink");
    });
  }
};

window.addEventListener("scroll", startEffect);

/******* SCROLL TO BOTTOM ********** */

const scrollToBottom = () => {
  const scrollingElement = document.scrollingElement || document.body;
  scrollingElement.scrollTop = scrollingElement.scrollHeight;
};
document.querySelector("#link2").addEventListener("click", scrollToBottom);
