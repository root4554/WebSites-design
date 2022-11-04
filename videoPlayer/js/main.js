const main = document.querySelector(".main");
const vid = document.querySelector("video");
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
  vid.src = "../assets/vid/NoSignal.mp4";
  vid.play();
  vid.style.visibility = "visible";
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
    console.log("video");
    vid.src = video.src;
    vid.style.display = "block";
    vid.play();
  } else if (video.type === "iframe") {
    console.log("iframe");
    vid.style.display = "none";
    videoCont.innerHtML = "";
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
  let currentVideo = videos.find((video) =>
    vid.src.includes(video.src.slice(3))
  );
  let currentVideoIndex = videos.indexOf(currentVideo);
  let nextVideoIndex = currentVideoIndex + 1;
  console.log("nextVideoIndex", nextVideoIndex);
  if (nextVideoIndex > videos.length) {
    nextVideoIndex = 0;
  }
  changeVideoFrame(videos[nextVideoIndex]);
};

const PrevVideo = () => {
  let currentVideo = videos.find((video) =>
    vid.src.includes(video.src.slice(3))
  );
  let currentVideoIndex = videos.indexOf(currentVideo);
  let prevVideoIndex = currentVideoIndex - 1;
  console.log("prevVideoIndex", prevVideoIndex);
  if (prevVideoIndex < 0) {
    prevVideoIndex = videos.length - 1;
  }
  changeVideoFrame(videos[prevVideoIndex]);
};

const volumeUpFunc = () => {
  vid.volume += 0.1;
};
const volumeDownFunc = () => {
  vid.volume -= 0.1;
};

onOff.addEventListener("click", toggleONOFF);
nextBtn.addEventListener("click", NextVideo);
prevBtn.addEventListener("click", PrevVideo);
volumeUp.addEventListener("click", volumeUpFunc);
volumeDown.addEventListener("click", volumeDownFunc);
