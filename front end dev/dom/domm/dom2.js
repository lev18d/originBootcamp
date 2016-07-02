/**
 * Created by itc_user on 6/28/2016.
 */


window.onload = function () {
    var btn = document.createElement("BUTTON");
    document.body.appendChild(btn);
}
document.getElementById("myBtn").onclick = printSmile;



// function myFunction() {
//     var btn = document.createElement("BUTTON");
//     document.body.appendChild(btn);
// }

// Global variables
var savedColor = "red";
var colorArr = ["red", "yellow", "blue","green","pink","orange", "white"];
var defaultSize = 50;
var span = document.createElement("span");
document.body.appendChild(span);


var changeCanvasSize = function () {
    // read input - put in var.
    var userInput = document.getElementById('sizeInput').value;

    //remove canvas
    document.getElementById("canvas").remove();

    //create new canvas
    createCanvas(userInput);
};

//setting the color
var changeColor = function(click) {
    savedColor=click.target.value;
};
var paint = function (event) {
    event.target.style.backgroundColor = savedColor;
};

var createCanvas = function (userInput) {
    defaultSize = userInput;
    var canvas = document.createElement("div");
    canvas.id = "canvas";
    span.appendChild(canvas);

    for (var j = 0; j < defaultSize; j++) {
        var column = document.createElement("div");
        column.className = "columns";
        canvas.appendChild(column);

        for (var i = 0; i < defaultSize; i++) {
            var pix = document.createElement("div");
            pix.className = "pixels";
            column.appendChild(pix);
            pix.addEventListener('mouseover', paint);
            pix.addEventListener('contextmenu', erase);
        }
    }
};

//creating elements
window.onload = function () {
    for (var i = 0; i < colorArr.length; i++) {
        var btn = document.createElement('button');
        btn.classList.add(colorArr[i]);
        btn.value=colorArr[i];
        btn.addEventListener('click', changeColor);         //adding event listeners to the buttons
        span.appendChild(btn);
    }

    var inspan = document.createElement("span");
    var changeSize = document.createElement('input');
    changeSize.type = 'number';
    changeSize.id = "sizeInput";

    inspan.appendChild(changeSize);

    var submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.id = "submitSize";
    inspan.appendChild(submit);
    submit.addEventListener('click', changeCanvasSize);

    // changeSize.addEventListener('click', changeCanvasSize)
    document.body.appendChild(inspan);
    createCanvas(defaultSize);
};

// create an eraser on right click
var erase = function (click) {
    event.preventDefault();
    event.target.style.backgroundColor = "white";

}