function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
} // Create a random color with format hexadecimal.

function changeParagraphColor() {
  var paragraphs = document.getElementsByClassName('paragraf');
  for (var i = 0; i < paragraphs.length; i++) {
    var randomColor = getRandomColor();
    paragraphs[i].style.color = randomColor;
  }
}

setInterval(changeParagraphColor, 1000); // Change a color with interval 1 sec.
