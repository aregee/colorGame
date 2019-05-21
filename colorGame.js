var colors = [
    "rgb(255,0,0)",
    "rgb(255,255,0)",
    "rgb(0,255,0)",
    "rgb(0,255,255)",
    "rgb(0,0,255)",
    "rgb(255,0,255)"
];
var min=0; 
var max=colors.length - 1;  
var random = Math.floor(Math.random() * (+max - +min)) + +min;
var squares = document.querySelectorAll(".square");
var pickedColor = colors[random()];
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.style=`color: ${pickedColor}`;
colorDisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++) {
// add click listners to squares
    (function(i){
        // add initial colors to squares
        squares[i].style.background = colors[i];
        squares[i].addEventListener("click", function() {
        //grab color of picked color
        var clickedColor = this.style.background;
        //compare color to pickedColor
        // replace whitesapce
        if (clickedColor.replace(/\s/g,'') === pickedColor) {
            alert("Correct");
        } else {
            alert("WRONG!!!");
        }
      }.bind(squares[i])); 
    })(i);
}
