var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var textelems = [];

var textElem = function () {

}

// Calls the draw function, instantiates the textelement and pushes it to the 
// textelems vector
var drawTextElem = function () {
    draw();
    var telem = textElem();
    textelems.push(telem);
}

// Check if a textelement has been pressed and direct to a new adress