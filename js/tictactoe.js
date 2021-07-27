function $(id) {
  return document.getElementById(id);
}
function _$(selector) {
  return document.querySelector(selector);
}
let allbt = document.querySelectorAll(".box");
var attempt;
let counter = 0;
let p1 = $("p1");
let p2 = $("p2");
let toss1 = $("toss1");
let play = $("play");
let p_profile = _$(".player_details");
play.style.display = "none";
function enable1() {
  if (p1.value && p2.value) {
    toss1.removeAttribute("disabled");
  } else {
    toss1.setAttribute("disabled", "true");
  }
}

function toss(btn) {
  let t1 = document.querySelector("#toss_result");
  let rand = Math.random() * 10;
  if (rand >= 5) {
    t1.innerHTML = "<span>" + p1.value + " Won the Toss - X</span>";
    console.log(rand);
    attempt = "X";
    play.style.display = "block";
    p_profile.style.display = "none";
  } else {
    t1.innerHTML = "<span>" + p2.value + " Won the Toss - O</span>";
    console.log(rand);
    attempt = "O";
    play.style.display = "block";
    p_profile.style.display = "none";
  }
  btn.setAttribute("disabled", "true");
}

let winnerCondition = [
  ["box1", "box2", "box3"],
  ["box4", "box5", "box6"],
  ["box7", "box8", "box9"],
  ["box1", "box5", "box9"],
  ["box3", "box5", "box7"],
  ["box1", "box4", "box7"],
  ["box2", "box5", "box8"],
  ["box3", "box6", "box9"],
];

let checked = [];

let checkWinner = function () {
  for (let winner of winnerCondition) {
    let classes = winner.map((e) => "." + e).join(","); //".box1, .box2, .box3" bhaiya aage dot lagana tha aur peeche comma
    let find = document.querySelectorAll(classes);
    let x = Array.from(find).every((e) => e.classList.contains("X"));
    let o = Array.from(find).every((e) => e.classList.contains("O"));
    if (x) {
      setTimeout(() => {
        alert("Congratulation " + p1.value + " ! is the Winner");
      }, 300);
      break;
    }
    if (o) {
      setTimeout(() => {
        alert("Congratulation " + p2.value + " ! is the Winner");
      }, 300);
    }
    // if (x === false && o === false) {
    //   setTimeout(() => {
    //     alert("No one is the Winner");
    //   }, 300);
    //   break;
    // }
  }
};

function game_begin(btn) {
  if (attempt) {
    btn.innerText = attempt;
    btn.classList.add(attempt);
    attempt = attempt == "X" ? "O" : "X";
    btn.setAttribute("disabled", "true");
    counter++;
    let [, classN] = btn.classList;
    checked.push(classN);
  } else alert("Please Toss First");

  if (counter >= 5) checkWinner();
}
