"use strict";

var boardDivs;
var newGameBtn;
var circleTurn=false;
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

window.onload = function() {

    boardDivs = Array.from(document.getElementById("board").getElementsByTagName("div"));
    newGameBtn = document.querySelector("button");
    
    newGameBtn.addEventListener("click", e => location.reload());

    boardDivs.forEach(element => {
      element.classList.add("square")
      element.addEventListener("mouseover",e => e.target.classList.add("hover"));
      element.addEventListener("mouseout", e => e.target.classList.remove("hover"));
      element.addEventListener("click", clickHandler, {once:true});
    });
}


function clickHandler(e){
  var boardDiv = e.target;
  var currentClass = circleTurn ? "O" : "X";
  placeMark(boardDiv, currentClass);

  if (checkWin(currentClass)){
    var status = document.getElementById("status");
    status.textContent = "Congratulations! " + currentClass + " is the Winner!";
    status.className += "you-won";
  }

  circleTurn = !circleTurn;
}




function placeMark(boardDiv, currentClass){
  boardDiv.classList.add(currentClass);
  boardDiv.textContent = currentClass;
}




function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return boardDivs[index].classList.contains(currentClass)
    })
  })
}