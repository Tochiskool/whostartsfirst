//Global variables
var clickedCells = [];
var interval;
var started = false;
var time = 0;

console.log("We are here");
doIt();
function setLis() {
  var arr = [1, 2, 3, 4, 5];
  arr.sort(function (item) {
    return 0.5 - Math.random();
  });
  return arr;
}

function doIt() {
  var objEl = document.querySelectorAll("li");
  var listEL = setLis();
  console.log(typeof listEL, listEL);

  for (var i = 0; i < objEl.length; i++) {
    var cells = objEl[i];
    cells.completed = false;
    cells.clicked = false;
    console.log(cells);
    cells.value = listEL[i];

    cells.addEventListener("mouseenter", function () {
      if (this.completed == false && this.clicked == false) {
        this.style.background = "orange";
      }
    });
    cells.addEventListener("mouseleave", function () {
      if (this.completed == false && this.clicked == false) {
        this.style.background = "blue";
      }
    });
    cells.addEventListener("click", function () {
      startTimer();
      if (this.clicked == false && this.completed == false) {
        clickedCells.push(this);
        reveal(this);
      }
    });
  }
}

function reveal(cells) {
  cells.style.backgroundColor = "red";
  cells.innerHTML = cells.value;
  cells.clicked = true;
}

//Start timer

function startTimer() {
  if (started == false) {
    interval = setInterval(function () {
      time++;
      document.getElementById("timer").innerHTML = "Time Elapsed: " + time;
      if (time >= 10) {
        clearInterval(interval);
      }
    }, 1000);
    started = true;
  }
}
