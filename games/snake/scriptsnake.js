let xposition=-100;
let yposition=-100;
//let square = document.querySelector('.square');

for (var i = 0; i < 9; i++) {
    var square = document.querySelector(".square");
var divClone = square.cloneNode(true); // the true is for deep cloning
document.body.appendChild(divClone);
    xposition=xposition+100;
square.style.position = "absolute";
square.style.left = xposition+'px';
square.style.top = yposition+'px';
}
    yposition=yposition+100;
xposition=-100;
for (var i = 0; i < 9; i++) {
    var square = document.querySelector(".square");
var divClone = square.cloneNode(true); // the true is for deep cloning
document.body.appendChild(divClone);
    xposition=xposition+100;
square.style.position = "absolute";
square.style.left = xposition+'px';
square.style.top = yposition+'px';
}
    yposition=yposition+100;
xposition=-100;
for (var i = 0; i < 9; i++) {

var square = document.querySelector(".square");
var divClone = square.cloneNode(true); // the true is for deep cloning
document.body.appendChild(divClone);
    xposition=xposition+100;
square.style.position = "absolute";
square.style.left = xposition+'px';
square.style.top = yposition+'px';



}
    yposition=yposition+100;
xposition=-100;
for (var i = 0; i < 9; i++) {
    var square = document.querySelector(".square");
var divClone = square.cloneNode(true); // the true is for deep cloning
document.body.appendChild(divClone);
    xposition=xposition+100;
square.style.position = "absolute";
square.style.left = xposition+'px';
square.style.top = yposition+'px';
}
    yposition=yposition+100;
xposition=-100;
for (var i = 0; i < 9; i++) {

var square = document.querySelector(".square");
var divClone = square.cloneNode(true); // the true is for deep cloning
document.body.appendChild(divClone);
    xposition=xposition+100;
square.style.position = "absolute";
square.style.left = xposition+'px';
square.style.top = yposition+'px';



}