let xposition=-90;
let yposition=-90;
let player = document.querySelector('.player');
let apple = document.querySelector('.apple');
let xplayer=0;
let yplayer= 0;
let game = document.querySelector('.game');
let s = document.querySelector('body');
        s.width = window.innerWidth;
        s.height = window.innerHeight;

function getRandomMultiple(baseNumber, minMultiple, maxMultiple) {
  // Calculate the minimum and maximum "factors" for the baseNumber
  const minFactor = Math.ceil(minMultiple / baseNumber);
  const maxFactor = Math.floor(maxMultiple / baseNumber);

  // Generate a random integer factor within the calculated range
  const randomFactor = Math.floor(Math.random() * (maxFactor - minFactor + 1)) + minFactor;

  // Return the multiple
  return randomFactor * baseNumber;
}

// Generate a random multiple of 7 between 7 and 70
const randomMultipleOfSeven = getRandomMultiple(90, 0, s.width);
const randomMultipleOfOne = getRandomMultiple(90, 0, s.height);

apple.style.left = randomMultipleOfSeven+'px';
apple.style.top = randomMultipleOfOne+'px';


document.addEventListener('keydown', function(event) {

    if(apple.style.left == player.style.left && apple.style.top == player.style.top){
        const randomMultipleOfSeven = getRandomMultiple(90, 0, s.width);
const randomMultipleOfOne = getRandomMultiple(90, 0, s.height);
       apple.style.left = randomMultipleOfSeven+'px';
apple.style.top = randomMultipleOfOne+'px';
}
 //  if(s.width == player.style.left || player.style.top == s.height||-90 >= player.style.top||-90 >= s.player.style.left){
game.style.opacity=1;
       
}
    if(event.keyCode == 37) {
        //alert('Left was pressed');
 xplayer= -90+ xplayer;
player.style.left = xplayer+'px';
player.style.top = yplayer+'px';
    }
     if(event.keyCode == 39) {
        //alert('Right was pressed');
xplayer = 90+ xplayer;
player.style.left = xplayer+'px';
player.style.top = yplayer+'px';
    }
    if(event.keyCode == 38) {
        // alert('up was pressed');
yplayer = -90+ yplayer;   
player.style.left = xplayer+'px';
player.style.top = yplayer+'px';
     }
      if(event.keyCode == 40) {
        //alert('Down was pressed');
yplayer = 90+ yplayer;   
player.style.left = xplayer+'px';
player.style.top = yplayer+'px';
    }
});
for (var i = 0; i < 9; i++) {
    var square = document.querySelector(".square");
var divClone = square.cloneNode(true); // the true is for deep cloning
document.body.appendChild(divClone);
    xposition=xposition+90;
square.style.position = "absolute";
square.style.left = xposition+'px';
square.style.top = yposition+'px';
}
    yposition=yposition+90;
xposition=-90;
for (var i = 0; i < 9; i++) {
    var square = document.querySelector(".square");
var divClone = square.cloneNode(true); // the true is for deep cloning
document.body.appendChild(divClone);
    xposition=xposition+90;
square.style.position = "absolute";
square.style.left = xposition+'px';
square.style.top = yposition+'px';
}
    yposition=yposition+90;
xposition=-90;
for (var i = 0; i < 9; i++) {

var square = document.querySelector(".square");
var divClone = square.cloneNode(true); // the true is for deep cloning
document.body.appendChild(divClone);
    xposition=xposition+90;
square.style.position = "absolute";
square.style.left = xposition+'px';
square.style.top = yposition+'px';



}
    yposition=yposition+90;
xposition=-90;
for (var i = 0; i < 9; i++) {
    var square = document.querySelector(".square");
var divClone = square.cloneNode(true); // the true is for deep cloning
document.body.appendChild(divClone);
    xposition=xposition+90;
square.style.position = "absolute";
square.style.left = xposition+'px';
square.style.top = yposition+'px';
}
    yposition=yposition+90;
xposition=-90;
for (var i = 0; i < 9; i++) {

var square = document.querySelector(".square");
var divClone = square.cloneNode(true); // the true is for deep cloning
document.body.appendChild(divClone);
    xposition=xposition+90;
square.style.position = "absolute";
square.style.left = xposition+'px';
square.style.top = yposition+'px';
}
   yposition=yposition+90;
xposition=-90;
for (var i = 0; i < 9; i++) {
    var square = document.querySelector(".square");
var divClone = square.cloneNode(true); // the true is for deep cloning
document.body.appendChild(divClone);
    xposition=xposition+90;
square.style.position = "absolute";
square.style.left = xposition+'px';
square.style.top = yposition+'px';
}
    yposition=yposition+90;
xposition=-90;
for (var i = 0; i < 9; i++) {

var square = document.querySelector(".square");
var divClone = square.cloneNode(true); // the true is for deep cloning
document.body.appendChild(divClone);
    xposition=xposition+90;
square.style.position = "absolute";
square.style.left = xposition+'px';
square.style.top = yposition+'px';
}   yposition=yposition+90;
xposition=-90;
for (var i = 0; i < 9; i++) {
    var square = document.querySelector(".square");
var divClone = square.cloneNode(true); // the true is for deep cloning
document.body.appendChild(divClone);
    xposition=xposition+90;
square.style.position = "absolute";
square.style.left = xposition+'px';
square.style.top = yposition+'px';
}
    yposition=yposition+90;
xposition=-90;
for (var i = 0; i < 9; i++) {

var square = document.querySelector(".square");
var divClone = square.cloneNode(true); // the true is for deep cloning
document.body.appendChild(divClone);
    xposition=xposition+90;
square.style.position = "absolute";
square.style.left = xposition+'px';
square.style.top = yposition+'px';
}   yposition=yposition+90;
xposition=-90;
for (var i = 0; i < 9; i++) {
    var square = document.querySelector(".square");
var divClone = square.cloneNode(true); // the true is for deep cloning
document.body.appendChild(divClone);
    xposition=xposition+90;
square.style.position = "absolute";
square.style.left = xposition+'px';
square.style.top = yposition+'px';
}
    yposition=yposition+90;
xposition=-90;
for (var i = 0; i < 9; i++) {

var square = document.querySelector(".square");
var divClone = square.cloneNode(true); // the true is for deep cloning
document.body.appendChild(divClone);
    xposition=xposition+90;
square.style.position = "absolute";
square.style.left = xposition+'px';
square.style.top = yposition+'px';
}   yposition=yposition+90;
xposition=-90;
for (var i = 0; i < 9; i++) {
    var square = document.querySelector(".square");
var divClone = square.cloneNode(true); // the true is for deep cloning
document.body.appendChild(divClone);
    xposition=xposition+90;
square.style.position = "absolute";
square.style.left = xposition+'px';
square.style.top = yposition+'px';
}
    yposition=yposition+90;
xposition=-90;
for (var i = 0; i < 9; i++) {

var square = document.querySelector(".square");
var divClone = square.cloneNode(true); // the true is for deep cloning
document.body.appendChild(divClone);
    xposition=xposition+90;
square.style.position = "absolute";
square.style.left = xposition+'px';
square.style.top = yposition+'px';
}

