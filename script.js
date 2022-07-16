let main_container = document.getElementById("container");

let high_score=0;
size = 4;
let turn = 0;
let currTile;
let otherTile;

let Number = [];
let forRandom = [];
let forRandom_2D = [];
for (let i = 0; i < size * size; i++) {
  Number[i] = i + 1;
  forRandom[i] = i + 1;
}
let re = [];
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
window.onload = function () {
  for (let i = 0; i < size * size; i++) {
    let first = document.getElementById(`${i + 17}`);
    let temp = first.id;
    first.id = forRandom[i];
    if (forRandom[i] == 16) {
      first.innerText = "";
    } else {
      first.innerText = forRandom[i];
    }
  }
  win();
};
let currentSquare, emptySquare, currentSquare_Child;
shuffle(forRandom);
function changing() {
  for (let i = 1; i <= size * size; i++) {
    let selected = document.getElementById(`${i + 16}`);
    selected.addEventListener("click", function () {
      currentSquare = this.parentNode.id;
      currentSquare_Child = this.id;
      emptySquare = document.getElementById(`${size * size}`).parentNode.id;
      let c = check();
      if (c) {
        let empty = document.getElementById(`${size * size}`);
        let selected = this;
        let temp = selected.id;
        selected.id = empty.id;
        empty.id = temp;
        let temp_content = selected.innerText;
        selected.innerText = "";
        empty.innerText = temp_content;
        turn++;
        let t = document.getElementById("turn");
        t.innerText = `${turn}`;
      }
      win();
    });
  }
}
function check() {
  let currentSquareAfter = currentSquare.split("-");
  let emptySquareAfter = emptySquare.split("-");
  let currentSquareX = parseInt(currentSquareAfter[0], 10);
  let currentSquareY = parseInt(currentSquareAfter[1], 10);
  let emptySquareX = parseInt(emptySquareAfter[0], 10);
  let emptySquareY = parseInt(emptySquareAfter[1], 10);
  if (
    (currentSquareX == emptySquareX &&
      Math.abs(currentSquareY - emptySquareY) == 1) ||
    (currentSquareY == emptySquareY &&
      Math.abs(currentSquareX - emptySquareX) == 1)
  ) {
    return 1;
  }
  return 0;
}
changing();
let count = 0;
let w = [];
function win() {
  
  for (let i = 0, k = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      w[k] = document.getElementById(`${i}-${j}`).innerText;
      let q = document.getElementById("16");

      if (w[k] == k + 1) {
        document.getElementById(
          `${i}-${j}`
        ).childNodes[0].style.backgroundColor = "yellow";
      } else {
        document.getElementById(
          `${i}-${j}`
        ).childNodes[0].style.backgroundColor = `rgb(${239},${130},${130})`;
      }
      q.style.backgroundColor = "white";
      k++;
    }
  }
  if (
    w[0] == "1" &&
    w[1] == "2" &&
    w[2] == "3" &&
    w[3] == "4" &&
    w[4] == "5" &&
    w[5] == "6" &&
    w[6] == "7" &&
    w[7] == "8" &&
    w[8] == "9" &&
    w[9] == "10" &&
    w[10] == "11" &&
    w[11] == "12" &&
    w[12] == "13" &&
    w[13] == "14" &&
    w[14] == "15"
  ) {
    popup.style.visibility = "visible";
    popup.style.opacity = "1";
    popup.style.transitionDuration = "1s";
    console.log("YOU WIN");
    high_score=turn;
    score.innerText=high_score;
    console.log(turn)
  }
}
let score=document.getElementById("score");





let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  if (
    w[0] == "1" &&
    w[1] == "2" &&
    w[2] == "3" &&
    w[3] == "4" &&
    w[4] == "5" &&
    w[5] == "6" &&
    w[6] == "7" &&
    w[7] == "8" &&
    w[8] == "9" &&
    w[9] == "10" &&
    w[10] == "11" &&
    w[11] == "12" &&
    w[12] == "13"
  ) {
    let div_14 = document.getElementById("14");
    let div_15 = document.getElementById("15");
    let temp;
    temp = div_14.id;
    div_14.id = div_15.id;
    div_15.id = temp;
    temp = div_14.innerText;
    div_14.innerText = div_15.innerText;
    div_15.innerText = temp;
  }
  win();
});
let popup = document.getElementById("popup");
let close = document.getElementById("cross");
close.addEventListener("click", function () {
  popup.style.visibility = "hidden";
  window.location.reload();
});
let reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  window.location.reload();
});
