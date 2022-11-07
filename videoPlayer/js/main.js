const main = document.querySelector(".main");
const videoCont = document.querySelector(".video");
const onOff = document.querySelector("#OnOff");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const volumeUp = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");

videos = [
  { type: "video", src: "../assets/vid/NoSignal.mp4" },
  { type: "video", src: "../assets/vid/charlie.mp4" },
  { type: "video", src: "../assets/vid/charlie2.ogv" },
  {
    type: "iframe",
    src: "https://www.youtube.com/embed/akMa4H-MI7Y?controls=0",
  },
  {
    type: "iframe",
    src: "https://www.youtube.com/embed/2Z4m4lnjxkY?controls=0",
  },
];

let tvOff = true;

const OffTv = () => {
  tvOff = true;
  vid.style.visibility = "hidden";
};

const OnTv = () => {
  tvOff = false;
  let vid = document.createElement("video");
  vid.src = videos[0].src;
  // video.style.display = "block";
  vid.style.visibility = "visible";
  vid.loop = true;
  vid.play();
  videoCont.appendChild(vid);

  // vid.src = "../assets/vid/NoSignal.mp4";
  // vid.play();
  // vid.style.visibility = "visible";
};

function toggleONOFF() {
  console.log("tvOff func ", tvOff);
  switch (tvOff) {
    case true:
      OnTv();
      break;
    case false:
      OffTv();
      break;
  }
}

const changeVideoFrame = (video) => {
  if (video.type === "video") {
    videoCont.innerHTML = "";
    console.log("video");
    let vid = document.createElement("video");
    vid.src = video.src;
    vid.style.display = "block";
    vid.style.visibility = "visible";
    vid.play();
    videoCont.appendChild(vid);
  } else if (video.type === "iframe") {
    console.log("iframe");
    videoCont.innerHtML = "";
    // vid.style.display = "none";
    videoCont.innerHTML = `<iframe
     width="100%"
      height="100%"
       src="${video.src}"
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen>
             </iframe>`;
  }
};
const NextVideo = () => {
  let vid = document.querySelector("video");
  let iframe = document.querySelector("iframe");
  let currentVideo;
  if (vid !== null) {
    currentVideo = videos.find((video) => vid.src.includes(video.src.slice(3)));
  } else {
    currentVideo = videos.find((video) =>
      iframe.src.includes(video.src.slice(3))
    );
  }
  let currentVideoIndex = videos.indexOf(currentVideo);
  let nextVideoIndex = currentVideoIndex + 1;
  console.log("nextVideoIndex", nextVideoIndex);
  if (nextVideoIndex > videos.length) {
    nextVideoIndex = 0;
  }
  changeVideoFrame(videos[nextVideoIndex]);
};

const PrevVideo = () => {
  let vid = document.querySelector("video");
  let iframe = document.querySelector("iframe");
  let currentVideo;
  if (vid !== null) {
    currentVideo = videos.find((video) => vid.src.includes(video.src.slice(3)));
  } else {
    currentVideo = videos.find((video) =>
      iframe.src.includes(video.src.slice(3))
    );
  }
  let currentVideoIndex = videos.indexOf(currentVideo);
  let prevVideoIndex = currentVideoIndex - 1;
  console.log("prevVideoIndex", prevVideoIndex);
  if (prevVideoIndex < 0) {
    prevVideoIndex = videos.length - 1;
  }
  changeVideoFrame(videos[prevVideoIndex]);
};

const volumeUpFunc = () => {
  const vid = document.querySelector("video");
  vid.volume += 0.1;
};
const volumeDownFunc = () => {
  const vid = document.querySelector("video");
  vid.volume -= 0.1;
};

onOff.addEventListener("click", toggleONOFF);
nextBtn.addEventListener("click", NextVideo);
prevBtn.addEventListener("click", PrevVideo);
volumeUp.addEventListener("click", volumeUpFunc);
volumeDown.addEventListener("click", volumeDownFunc);
