var aud = document.querySelector("audio");
var btn = document.querySelectorAll("button");
var range = document.getElementsByTagName("input");
var raws = document.querySelectorAll("tr");
var image = document.querySelector("img");

window.addEventListener("load", function () {
  range[0].max = aud.duration;
});

aud.addEventListener("timeupdate", function () {
  range[0].value = aud.currentTime;
});

function changeTime(t) {
  range[0].max = aud.duration;
  aud.currentTime = t.value;
}

raws[0].addEventListener("click", function () {
  aud.src = "./assets/audio/Super Mario Bros.mp3";
  image.src = "./assets/images/1.jpg";
  aud.load();
});

raws[1].addEventListener("click", function () {
  aud.src = "./assets/audio/1.mp3";
  image.src = "./assets/images/2.jpg";
  aud.load();
});

raws[2].addEventListener("click", function () {
  aud.src = "./assets/audio/2.mp3";
  image.src = "./assets/images/3.jpg";
  aud.load();
});

btn[0].addEventListener("click", function () {
  aud.play();
});

btn[1].addEventListener("click", function () {
  aud.pause();
});

btn[2].addEventListener("click", function () {
  aud.load();
  aud.pause();
});

function changeVolume(v) {
  aud.volume = v.value;
}
