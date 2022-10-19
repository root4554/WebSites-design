const musics = [
  {
    name: "music1",
    src: "../Assets/audios/BobMarley.mp3",
    music: "One Love",
    artist: "Bob Marley",
    album: "Trenchtown Days: Birth of a Legend",
    info: "Bob Marley was a Jamaican singer, songwriter, musician, and guitarist who achieved international fame and acclaim, blending mostly reggae, ska, and rocksteady in his compositions. Starting out in 1963 with the group the Wailers, he forged a distinctive songwriting and vocal style that would later resonate with audiences worldwide. The Wailers would go on to release some of the earliest reggae records with producer Lee Scratch Perry. After the Wailers disbanded in 1974, Marley pursued a solo career that culminated in the release of the album Exodus in 1977, which established his worldwide reputation and produced his status as one of the world's best-selling artists of all time, with sales of more than 75 million records. He was a committed Rastafari who infused his music with a sense of spirituality. In 1978, he was appointed a UNICEF Goodwill Ambassador, and he continued to support various causes, including funding the education of children and political prisoners. He died from cancer in 1981 at age 36. ",
  },
  {
    name: "music2",
    src: "../Assets/audios/AC-DC.mp3",
    music: "Thunderstruck",
    artist: "AC-DC",
    album: "The Razors Edge",
    info: "AC/DC are an Australian rock band formed in Sydney in 1973 by Scottish-born brothers Malcolm and Angus Young. A hard rock/blues rock band, they have also been considered a heavy metal band, although they have always dubbed their music simply as 'rock and roll'. AC/DC underwent several line-up changes before",
  },
  {
    name: "music3",
    src: "../Assets/audios/RedHotChiliPeppers.mp3",
    music: "By the Way",
    artist: "Red Hot Chili Peppers",
    album: "By the Way",
    info: "Red Hot Chili Peppers are an American rock band formed in Los Angeles in 1983. The group's musical style primarily consists of rock with an emphasis on funk, as well as elements from other genres such as punk rock and psychedelic rock. When played live, their music elements of jam band due to the improvised nature of much of their performances. The band consists of founding members vocalist Anthony Kiedis and bassist Flea, longtime drummer Chad Smith, and guitarist Josh Klinghoffer. Klinghoffer became a full member in 2011, following the departure of founding member and guitarist John Frusciante. Frusciante, who had been with the band since its inception, was replaced by Klinghoffer, who had been a touring member since 2009. The band's discography consists of ten studio albums, four live albums, four compilation albums, and twenty-six singles. The band has won six Grammy Awards, and has been nominated for a further sixty-eight. They have sold over 80 million albums worldwide, making them one of the world's best-selling bands of all time. ",
  },
  {
    name: "music4",
    src: "../Assets/audios/Aretha.mp3",
    music: "I Say a Little Prayer",
    artist: "Aretha Franklin",
    album: "Aretha's Gold",
    info: "Aretha Louise Franklin (March 25, 1942 – August 16, 2018) was an American singer, songwriter, and pianist. Franklin began her career as a child singing gospel at New Bethel Baptist Church in Detroit, Michigan, where her father C. L. Franklin was minister. At the age of 18, she embarked on a secular career recording for Columbia Records, but her success was limited. Following her signing to Atlantic Records in 1967, Franklin achieved commercial acclaim and success with songs such as 'Respect', '(You Make Me Feel Like) ",
  },
];

const UncheckSelected = () => {
  const musics = document.querySelectorAll(".music");
  musics.forEach((music) => {
    if (music.classList.contains("music-active")) {
      music.classList.remove("music-active");
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
const PlayMusic = (index) => {
  const music = musics[index];
  const Audio = document.querySelector("audio");
  // Audio.src = music.src;
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

// const togglePlay = () => {
//   const Audio = document.querySelector("audio");
//   if (Audio.paused) {
//     Audio.play();
//     playBtn.classList.remove("fa-play");
//     playBtn.classList.add("fa-pause");
//     DiscRotate();
//   } else {
//     Audio.pause();
//     playBtn.classList.remove("fa-pause");
//     playBtn.classList.add("fa-play");
//     DiscStop();
//   }
// };
// const outClickedMusic = () => {
//   const musicList = document.querySelectorAll(".music");
//   window.addEventListener("click", (e) => {
//     if (musicList.contains(e.target)) {
//       return console.log("clicked");
//     } else {
//       UncheckSelected();
//     }
//   });
// };

const ClickedMusic = (index) => {
  if (index === null) {
    document.querySelector(".music")[0].classList.add("music-active");
  } else {
    document.querySelectorAll(".music")[index].addEventListener("click", () => {
      UncheckSelected();
      DiscRotate();
      // togglePlay();
      PlayMusic(index);
      document
        .querySelectorAll(".music")
        [index].classList.toggle("music-active");
    });
  }
};
const playBtn = document.querySelector(".fa-play");
playBtn.addEventListener("click", togglePlay);
