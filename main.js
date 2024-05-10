function dice() {
  var img = document.getElementById("img");
  var num = document.getElementById("number");
  var random = Math.round(Math.random() * 6);
  if (random == 1) {
    img.src = "img/dice-1.jpg";
    num.innerText = random;
  } else if (random == 2) {
    img.src = "img/dice-2.jpg";
    num.innerText = random;
  } else if (random == 3) {
    img.src = "img/dice-3.jpg";
    num.innerText = random;
  } else if (random == 4) {
    img.src = "img/dice-4.jpg";
    num.innerText = random;
  } else if (random == 5) {
    img.src = "img/dice-5.jpg";
    num.innerText = random;
  } else if (random == 6) {
    img.src = "img/dice-6.jpg";
    num.innerText = random;
  }
}
