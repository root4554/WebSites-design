const fZoom = () => {
  document.querySelector(".entrance").classList.add("zoomIn");
  document.querySelector("#myName").classList.add("bigger");
};
const fhide = () => {
  document.querySelector(".entrance").style.display = "none";
};
setTimeout(fhide, 3700);
window.onload = fZoom;

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

  console.log(balls);
}

function getRandomNumber(low, high) {
  let r = Math.floor(Math.random() * (high - low + 1)) + low;
  return r;
}
