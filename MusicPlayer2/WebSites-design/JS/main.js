const musics = [
  {
    name: "music1",
    src: "../Assets/audios/BobMarley.mp3",
    title: "One Love",
    artist: "Bob Marley",
    album: "Trenchtown Days: Birth of a Legend",
    duration: "2:51",
    info: "Bob Marley was a Jamaican singer, songwriter, musician, and guitarist who achieved international fame and acclaim, blending mostly reggae, ska, and rocksteady in his compositions. Starting out in 1963 with the group the Wailers, he forged a distinctive songwriting and vocal style that would later resonate with audiences worldwide. The Wailers would go on to release some of the earliest reggae records with producer Lee Scratch Perry. After the Wailers disbanded in 1974, Marley pursued a solo career that culminated in the release of the album Exodus in 1977, which established his worldwide reputation and produced his status as one of the world's best-selling artists of all time, with sales of more than 75 million records. He was a committed Rastafari who infused his music with a sense of spirituality. In 1978, he was appointed a UNICEF Goodwill Ambassador, and he continued to support various causes, including funding the education of children and political prisoners. He died from cancer in 1981 at age 36. ",
  },
  {
    name: "music2",
    src: "../Assets/audios/AC-DC.mp3",
    title: "Thunderstruck",
    artist: "AC-DC",
    album: "The Razors Edge",
    duration: "4:52",
    info: "AC/DC are an Australian rock band formed in Sydney in 1973 by Scottish-born brothers Malcolm and Angus Young. A hard rock/blues rock band, they have also been considered a heavy metal band, although they have always dubbed their music simply as 'rock and roll'. AC/DC underwent several line-up changes before",
  },
  {
    name: "music3",
    src: "../Assets/audios/RedHotChiliPeppers.mp3",
    title: "By the Way",
    artist: "Red Hot Chili Peppers",
    album: "By the Way",
    duration: "3:39",
    info: "Red Hot Chili Peppers are an American rock band formed in Los Angeles in 1983. The group's musical style primarily consists of rock with an emphasis on funk, as well as elements from other genres such as punk rock and psychedelic rock. When played live, their music elements of jam band due to the improvised nature of much of their performances. The band consists of founding members vocalist Anthony Kiedis and bassist Flea, longtime drummer Chad Smith, and guitarist Josh Klinghoffer. Klinghoffer became a full member in 2011, following the departure of founding member and guitarist John Frusciante. Frusciante, who had been with the band since its inception, was replaced by Klinghoffer, who had been a touring member since 2009. The band's discography consists of ten studio albums, four live albums, four compilation albums, and twenty-six singles. The band has won six Grammy Awards, and has been nominated for a further sixty-eight. They have sold over 80 million albums worldwide, making them one of the world's best-selling bands of all time. ",
  },
  {
    name: "music4",
    src: "../Assets/audios/Aretha.mp3",
    title: "I Say a Little Prayer",
    artist: "Aretha Franklin",
    album: "Aretha's Gold",
    duration: "3:36",
    info: "Aretha Louise Franklin (March 25, 1942 – August 16, 2018) was an American singer, songwriter, and pianist. Franklin began her career as a child singing gospel at New Bethel Baptist Church in Detroit, Michigan, where her father C. L. Franklin was minister. At the age of 18, she embarked on a secular career recording for Columbia Records, but her success was limited. Following her signing to Atlantic Records in 1967, Franklin achieved commercial acclaim and success with songs such as 'Respect', '(You Make Me Feel Like) ",
  },
];
let checked = false;
const UncheckMusic = () => {
  const musics = document.querySelectorAll(".music");
  musics.forEach((music) => {
    if (music.classList.contains("music-active")) {
      music.classList.remove("music-active");
    }
  });
  checked = false;
};

const checkMusic = (index) => {
  document.querySelectorAll(".music")[index].classList.add("music-active");
  document.querySelector("audio").autoplay = true;
  checked = true;
};

const checkSelected = () => {
  const musics = document.querySelectorAll(".music");
  musics.forEach((music) => {
    if (music.classList.contains("music-active")) {
      return true;
    } else {
      return false;
    }
  });
};

const DiscRotate = () => {
  const discImg = document.querySelector(".disc img");
  discImg.style.animation = "rotate360 2s infinite linear";
};
const DiscStop = () => {
  const discImg = document.querySelector(".disc img");
  discImg.style.animation = "none";
};
const PlayMusic = () => {
  const Audio = document.querySelector("audio");
  Audio.play();
  playBtn.classList.remove("fa-play");
  playBtn.classList.add("fa-pause");
  DiscRotate();
};
const pauseMusic = () => {
  const Audio = document.querySelector("audio");
  Audio.pause();
  playBtn.classList.remove("fa-pause");
  playBtn.classList.add("fa-play");
  DiscStop();
};

const togglePlay = () => {
  const Audio = document.querySelector("audio");
  if (Audio.paused) {
    !checked ? checkMusic(0) : null;
    Audio.play();
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
    DiscRotate();
  } else {
    Audio.pause();
    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");
    DiscStop();
  }
};

const playBtn = document.querySelector(".fa-play");
playBtn.addEventListener("click", togglePlay);

const ArtistName = document.querySelector(".ArtistName h3");
const AlbumName = document.querySelectorAll(".AlbumName h2")[1];
const ArtistInfo = document.querySelector(".AlbumInfo p");

const clearMusicInfo = () => {
  ArtistName.innerHTML = "";
  AlbumName.innerHTML = "";
  ArtistInfo.innerHTML = "";
};

const chooseMusicComp = (index) => {
  let music = musics[index];
  const duration = document.querySelector("#duration");
  const musicsrc = document.querySelector("#music");
  clearMusicInfo();
  ArtistName.textContent = music.artist;
  AlbumName.textContent = music.album;
  ArtistInfo.textContent = music.info;
  duration.textContent = music.duration;
  musicsrc.src = music.src;
};

const changeMusic = () => {
  const musics = document.querySelectorAll(".music");
  musics.forEach((index) => {
    chooseMusicComp(index);
  });
};

// const countdown = (index) => {
//   const duration = musics[index].duration;
//   const durationArr = duration.split(":");
//   const minutes = durationArr[0];
//   const seconds = durationArr[1];

// };

const SelectMusic = (index) => {
  UncheckMusic();
  DiscRotate();
  PlayMusic();
  checkMusic(index);
  chooseMusicComp(index);
  countdown();
};

const ClickedMusic = (index) => {
  document.querySelectorAll(".music")[index].addEventListener("click", () => {
    SelectMusic(index);
  });
};

const nextMusic = () => {
  const activeMusic = document.querySelector(".music-active");
  const musics = document.querySelectorAll(".music");
  let indexN = Array.from(musics).indexOf(activeMusic);
  indexN === musics.length - 1 ? (indexN = 0) : (indexN += 1);
  SelectMusic(indexN);
};

const prevMusic = () => {
  const activeMusic = document.querySelector(".music-active");
  const musics = document.querySelectorAll(".music");
  let indexP = Array.from(musics).indexOf(activeMusic);
  indexP === 0 ? (indexP = musics.length - 1) : (indexP -= 1);
  console.log(indexP);
  SelectMusic(indexP);
};

const replayMusic = () => {
  const Audio = document.querySelector("audio");
  Audio.currentTime = 0;
};
const shuffleMusic = () => {
  const musics = document.querySelectorAll(".music");
  const random = Math.floor(Math.random() * musics.length);
  SelectMusic(random);
};

const nextBtn = document.querySelector(".fa-step-forward");
nextBtn.addEventListener("click", nextMusic);

const prevBtn = document.querySelector(".fa-step-backward");
prevBtn.addEventListener("click", prevMusic);

const replayBtn = document.querySelector(".fa-redo");
replayBtn.addEventListener("click", replayMusic);

const shuffleBtn = document.querySelector(".fa-random");
shuffleBtn.addEventListener("click", shuffleMusic);
