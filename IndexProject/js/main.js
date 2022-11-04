const fZoom = () => {
  document.querySelector(".entrance").classList.add("zoomIn");
  document.querySelector("#myname").classList.add("zoomIn");
};
const fhide = () => {
  document.querySelector(".entrance").style.display = "none";
};
setTimeout(fhide, 3500);
window.onload = fZoom;

/******* BALLLS ANIMATION ********** */

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

  balls.style.setProperty("--xB", getRandomNumber(0, 200) + "%");
  balls.style.setProperty("--yB", getRandomNumber(0, 200) + "%");

  console.log(balls);
}

function getRandomNumber(low, high) {
  let r = Math.floor(Math.random() * (high - low + 1)) + low;
  return r;
}
