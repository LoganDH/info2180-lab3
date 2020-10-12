"use strict";

var boardDivs;

window.onload = function() {

    boardDivs = Array.from(document.getElementById("board").getElementsByTagName("div"));

    boardDivs.forEach(element => element.classList.add("square"));

    boardDivs.forEach(function(element) {
        element.addEventListener("mouseover", function(e) {e.target.classList.add("hover");});
        element.addEventListener("mouseout", function(e) {e.target.classList.remove("hover");});
      });

}