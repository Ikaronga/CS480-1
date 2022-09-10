var hexInput = 'ffffff';

function changeBackground(hexInput) {
  hexInput = document.getElementById('color_value').value;
  document.body.style.background = '#' + hexInput;
}

function serifFont() {
  document.body.style.fontFamily = 'serif'; 
}

function sansSerifFont() {
  document.body.style.fontFamily = 'sans-serif'; 
}

document.getElementById("submit_button").onclick = function() {changeBackground()};
document.getElementById("serif").onclick = function() {serifFont()};
document.getElementById("sans_serif").onclick = function() {sansSerifFont()};