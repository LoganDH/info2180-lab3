"use strict";

window.onload = function() {
    var boardDivs = document.getElementById('board').getElementsByTagName('div');
    for(var i=0; i<boardDivs.length; i++){
        boardDivs[i].className += 'square';
    }
}