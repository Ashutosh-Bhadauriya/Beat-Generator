window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const mainCircles = document.querySelectorAll(".main-circle");

  mainCircles.forEach((mainCircle, index) => {
    mainCircle.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();
    });
  });
});
