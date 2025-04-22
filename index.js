var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;

    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var drum_w = new Audio("sounds/tom-1.mp3");
      drum_w.play();
      break;

    case "a":
      var drum_a = new Audio("sounds/tom-2.mp3");
      drum_a.play();
      break;

    case "s":
      var drum_s = new Audio("sounds/tom-3.mp3");
      drum_s.play();
      break;

    case "d":
      var drum_d = new Audio("sounds/tom-4.mp3");
      drum_d.play();
      break;

    case "j":
      var drum_j = new Audio("sounds/crash.mp3");
      drum_j.play();
      break;

    case "k":
      var drum_k = new Audio("sounds/kick-bass.mp3");
      drum_k.play();
      break;

    case "l":
      var drum_l = new Audio("sounds/snare.mp3");
      drum_l.play();
      break;

    default:
      console.log(buttonInnerHtml);
  }
}

function buttonAnimation(curentKey) {
  var activeButton = document.querySelector("." + curentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
