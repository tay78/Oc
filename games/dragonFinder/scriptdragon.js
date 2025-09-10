// html button elements

let  exploreButton = document.querySelector('.explore-button');
let headButton = document.querySelector('.head-button');
let restartButton = document.querySelector('.restart');
let yesButton = document.querySelector('.yes');
yesButton.style.display ="none";
let noButton = document.querySelector('.no');
noButton.style.display ="none";
// html content elements
let text = document.querySelector('.text');
let pizza = document.querySelector('h2');
let move = false;
let foodTime = false;
// html images elements
let start = document.querySelector('.startSubway');
    
let choiceAimage = document.querySelector('.choiceAimage');
    choiceAimage.style.display ="none";
let ball = document.querySelector('.ball');
    ball.style.display ="none";
let choiceA1image = document.querySelector('.choiceA1image');
    choiceA1image.style.display ="none";
let choiceA2image = document.querySelector('.choiceA2image');
    choiceA2image.style.display ="none";
let choiceA3image = document.querySelector('.choiceA3image');
    choiceA3image.style.display ="none";
let choiceA4image = document.querySelector('.choiceA4image');
    choiceA4image.style.display ="none";
let choiceA5image = document.querySelector('.choiceA5image');
    choiceA5image.style.display ="none";
let choiceA6image = document.querySelector('.choiceA6image');
    choiceA6image.style.display ="none";
let choiceA7image = document.querySelector('.choiceA7image');
    choiceA7image.style.display ="none";
let choiceA8image = document.querySelector('.choiceA8image');
    choiceA8image.style.display ="none";
let choiceA9image = document.querySelector('.choiceA9image');
    choiceA9image.style.display ="none";
let choiceA10image = document.querySelector('.choiceA10image');
    choiceA10image.style.display ="none";

headButton.addEventListener('click', function() {
    restartButton.style.display="none";
    foodTime=true;
    text.innerHTML = "You go inside and start feeling hungry. You hear a loud noise. Double click picture to Investigate OR stay where you are and search the page for food ";
 restartButton.style.display="none";
 yesButton.style.display="none";
 noButton.style.display="none";
 start.style.display = "none";
 choiceAimage.style.display ="block";
 exploreButton.style.display="none";
 headButton.style.display="none";
});
restartButton.addEventListener('click', function() {
    foodTime=false;
text.innerHTML = "You are a dragon trainer while flying your dragon you are caught in a storm landing on an unfamiliar island when your dragon got spooked and ran away somewhere on the island";
start.style.display = "block";
choiceAimage.style.display ="none";
yesButton.style.display="none";
noButton.style.display="none";
exploreButton.style.display="block";
headButton.style.display="block";
    choiceA1image.style.display ="none";
    choiceA2image.style.display ="none";
    choiceA3image.style.display ="none";
    choiceA4image.style.display ="none";
    choiceA5image.style.display ="none";
    choiceA6image.style.display ="none";
    choiceA7image.style.display ="none";
    choiceA8image.style.display ="none";
    choiceA9image.style.display ="none";
    choiceA10image.style.display ="none";
});

choiceAimage.addEventListener('dblclick', function(){
    restartButton.style.display="none";
    choiceAimage.style.display ="none";
    text.innerHTML = "You see a shining light deep in the cave and the chanting sounds grow louder you see people inside of the cave double click the screen to attack click up to try to interupt"
    choiceA6image.style.display ="block";
});

pizza.addEventListener("mouseenter", function(){
    if(foodTime==true){
    choiceAimage.style.display ="none";
    restartButton.style.display="block";
    choiceA1image.style.display ="none";
        choiceA3image.style.display ="none";
        choiceA4image.style.display ="none";
        choiceA5image.style.display ="none";
    text.innerHTML = "You found food. You make it another day to find your dragon after the storm passes"
    choiceA2image.style.display ="block";
    }
});

choiceA6image.addEventListener('dblclick', function(){
    restartButton.style.display="block";
    choiceAimage.style.display ="none";
    choiceA6image.style.display ="none";
    text.innerHTML = "you succeed in fighting off the people you sit next to the fire and warm up and wait out the storm and survive to find your dragon"
    choiceA7image.style.display ="block";
});

noButton.addEventListener('click', function(){
    restartButton.style.display="block";
    choiceA9image.style.display ="none";
    choiceA10image.style.display ="none";
    yesButton.style.display ="none";
    noButton.style.display ="none";
    choiceA5image.style.display ="none";
    choiceA4image.style.display ="none";
    text.innerHTML = "you get on your dragon safely and fly away"
    choiceA9image.style.display ="block";
});

yesButton.addEventListener('click', function(){
    restartButton.style.display="block";
    choiceA9image.style.display ="none";
    yesButton.style.display ="none";
    noButton.style.display ="none";
    choiceA10image.style.display ="none";
choiceAimage.style.display ="none";
choiceA5image.style.display ="none";
text.innerHTML = "your dragon can not fly through the heavy winds and falls back to the ground and wind up back where you started"
choiceA10image.style.display ="block";

});
exploreButton.addEventListener("click", function(){
    restartButton.style.display="none";
    start.style.display = "none";
    exploreButton.style.display="none";
headButton.style.display="none";
    text.innerHTML = "You can't see press the right button on keyboard to make fire or press the left button on keyboard to continue wandering"
    choiceA3image.style.display ="block";
});

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
       // alert('Left was pressed');
       start.style.display = "none";
       restartButton.style.display="none";
       exploreButton.style.display="none";
       choiceA3image.style.display ="none";
   headButton.style.display="none";
       text.innerHTML = "you continue wandering becoming soaked in water you eventually come back to where you started and see a tiger click the down arrow key to climb up a tree or look for something to fight it off with and drag it to the tiger"
       choiceA4image.style.display ="block";
       ball.style.display ="block";

    }
    else if(event.keyCode == 39) {
        //alert('Right was pressed');
        start.style.display = "none";
        exploreButton.style.display="none";
        choiceA3image.style.display ="none";
    headButton.style.display="none";
        text.innerHTML = "you find supplies to make a fire you ignite the fire and see footprints on the ground they look like the paw prints of your dragon you follow them finding your dragon click yes to immediately fly away no to wait out the sorm before leaving"
        yesButton.style.display="block";
        noButton.style.display="block";
        choiceA5image.style.display ="block";
    }
    if(event.keyCode == 38) {
        // alert('up was pressed');
            restartButton.style.display="block";
            choiceAimage.style.display ="none";
            choiceA6image.style.display ="none";
            text.innerHTML = "As you approach you feel a sharp pain in your head everything goes dark"
            choiceA1image.style.display ="block";
     }
     else if(event.keyCode == 40) {
        //alert('Right was pressed');
        restartButton.style.display="block";
        start.style.display = "none";
        choiceA4image.style.display ="none";
        exploreButton.style.display="none";
        choiceA3image.style.display ="none";
    headButton.style.display="none";
        text.innerHTML = "the tiger climbs up the tree and starts clawing at you you see a bright light as you die"
        choiceA1image.style.display ="block";

    }
});

ball.onmousedown = function(event) {
    // (1) prepare to moving: make absolute and on top by z-index
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
   
    // move it out of any current parents directly into body
    // to make it positioned relative to the body
    document.body.append(ball);
  
    // centers the ball at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
        move=true;
      ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
      ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
    }



 
    // move our absolutely positioned ball under the pointer
    moveAt(event.pageX, event.pageY);
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // (2) move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // (3) drop the ball, remove unneeded handlers
    ball.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball.onmouseup = null;
    };
  
  };
console.log("pageX,pageY");
  ball.addEventListener('mouseDown',function(){

 


  });
  
    choiceA4image.addEventListener('mouseover', function(){
        if(move==true){
        restartButton.style.display="block";
        choiceAimage.style.display ="none";
        choiceA4image.style.display ="none";
        ball.style.display="none";
        text.innerHTML = "you find a sword in the grass and stab the tiger getting away safely"
        choiceA8image.style.display ="block";
    }
    });
    