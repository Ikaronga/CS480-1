let button = document.querySelector(".button");
var CountClicks = 0;

button.addEventListener("click", function () {
  CountClicks += 1;

  document.getElementById("numberResult").innerHTML = CountClicks;
});