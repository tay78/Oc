let color = document.querySelector('.color');
let character = document.querySelector('.character');
let activity = document.querySelector('.activity');
let trait = document.querySelector(".trait");
let music = document.querySelector(".music");
let weapon = document.querySelector(".weapon");
let buttons = document.querySelector(".buttons");
let text = document.querySelector("h4");
let percy = document.querySelector('.percy');
let grover = document.querySelector('.grover');
let annabeth = document.querySelector(".annabeth");
let luke = document.querySelector(".luke");
let nico = document.querySelector(".nico");
let reyna = document.querySelector('.reyna');
let frank = document.querySelector('.frank');
let hazel = document.querySelector(".hazel");
let piper = document.querySelector(".piper");
let jason = document.querySelector(".jason");
let leo = document.querySelector('.leo');
let b1 = document.querySelector(".b1");
let b2 = document.querySelector(".b2");
let b3 = document.querySelector(".b3");
let b4 = document.querySelector(".b4");
let b5 = document.querySelector(".b5");
let b6 = document.querySelector(".b6");
let b7 = document.querySelector(".b7");
//let input = document.querySelector(".answer");

//let answer1 = document.querySelector('.answer1');
//let answer2 = document.querySelector('.answer2');
//let answer3 = document.querySelector('.answer3');
//let answer4 = document.querySelector('.answer4');
//let answer = input.value;
let score1 = 0;
let score2 = 0;
let score3 = 0;
let score4 = 0;
let score5 = 0;
let score6 = 0;
let score7 = 0;
let score8 = 0;
let score9 = 0;
let score10 = 0;
let score11 = 0;

activity.style.display = "block";
color.style.display = "none";
character.style.display = "none";
trait.style.display = "none";
music.style.display = "none";
weapon.style.display = "none";

b1.addEventListener('click', function () {
    //activity = activity.value;
   // if (event.keyCode == 13) {
    trait.style.display = "none";
    color.style.display = "block";
    activity.style.display = "none";
   
        let answer1 = document.querySelector(".answer1").value;

    if (answer1 === "water related") {
        score1 = score1 + 1;
    }
    else if (answer1 === "card games") {
        score2 = score2 + 1;
        
    } else if (answer1 === "sports") {
        score3 = score3 + 1;

    } else if (answer1 === "reading") {
        score4 = score4 + 1;

    } else if (answer1 === "cooking") {
        score7 = score7 + 1;

    }if (answer1 === "building") {
        score6 = score6 + 1;

    } else {
        score5 = score5 + 1;

    }

    color.style.display = "block";
    console.log(answer1);
    console.log(score1);
    console.log(score2);
    console.log(score3);
    console.log(score4);
    console.log(score5);
//}
});

b2.addEventListener('click', function () {
    //  activity = activity.value;
  //  if (event.keyCode == 13) {

    color.style.display = "none";
    activity.style.display = "none";
    music.style.display = "block";
        let answer2 = document.querySelector(".answer2").value;
    if (answer2 === "blue") {
        score1 = score1 + 1;
    }
    else if (answer2 === "black") {
        score2 = score2 + 1;
        
    } else if (answer2 === "green") {
        score3 = score3 + 1;

    } else if (answer2 === "pink") {
        score4 = score4 + 1;

    }if (answer2 === "orange") {
        score6 = score6 + 1;

    }if (answer2 === "purple") {
        score11 = score11 + 1;
        score10= score10+1;
    }if (answer2 === "red") {
        score8 = score8 + 1;

    } else {
        score5 = score5 + 1;

    }
    console.log(answer2);
    console.log(score1);
    console.log(score2);
    console.log(score3);
    console.log(score4);
    console.log(score5);
//}
});
b3.addEventListener('click', function () {
    //  activity = activity.value;
    //if (event.keyCode == 13) {
        music.style.display = "none";

    color.style.display = "none";
    activity.style.display = "none";
    weapon.style.display = "block";
        let answer3 = document.querySelector(".answer3").value;
    if (answer3 === "rock") {
        score1 = score1 + 1;
    }
    else if (answer3 === "metal") {
        score2 = score2 + 1;
        
    } else if (answer3 === "pop") {
        score8 = score8 + 1;

    } else if (answer3 === "r and b") {
        score3 = score3 + 1;

    }else if (answer3 === "classical") {
        score4 = score4 + 1;

    }else if (answer3 === "jazz") {
        score7 = score7 + 1;

    }
     else {
        score5 = score5 + 1;

    }
    console.log(answer3);
    console.log(score1);
    console.log(score2);
    console.log(score3);
    console.log(score4);
    console.log(score5);
//}
});
b4.addEventListener('click', function () {
    //  activity = activity.value;
    //if (event.keyCode == 13) {
        weapon.style.display = "none";

    color.style.display = "none";
    activity.style.display = "none";
    trait.style.display = "block";
        let answer4 = document.querySelector(".answer4").value;
    if (answer4 === "pen") {
        score1 = score1 + 1;
    }
    else if (answer4 === "mcdonalds") {
        score2 = score2 + 1;
        
    } else if (answer4 === "baseball bat") {
        score3 = score3 + 1;

    } else if (answer4 === "hat") {
        score4 = score4 + 1;

    } else {
        score5 = score5 + 1;

    }
    console.log(answer4);
    console.log(score1);
    console.log(score2);
    console.log(score3);
    console.log(score4);
    console.log(score5);
//}
});
b5.addEventListener('click', function () {
    //  activity = activity.value;
    music.style.display = "none";

    trait.style.display = "block";
 //   if (event.keyCode == 13) {
        let answer5 = document.querySelector(".answer5").value;
        if (answer5 === "knowledge") {
            score4 = score4 + 1;
        }
        else if (answer5 === "humor") {
            score1 = score1 + 1;
    
        } else if (answer5 === "resourcefulness") {
            score3 = score3 + 1;
    
        } else if (answer5 === "looks") {
            score2 = score2 + 1;
    
        } else if (answer5 === "friendliness") {
            score2 = score2 + 1;
    
        }else if (answer5 === "loyalty") {
            score1 = score1 + 1;
    
        }else {
            score5 = score5 + 1;
    
        }
        console.log(answer5);
        console.log(score1);
        console.log(score2);
        console.log(score3);
        console.log(score4);
        console.log(score5);
        trait.style.display = "block";
    color.style.display = "none";
    character.style.display = "block";
    trait.style.display = "none";

       if (score1 >= score2 && score1 >= score3 && score1 >= score4 && score1 >= score5 && score1 >= score6 && score1 >= score7 && score1 >= score8 && score1 >= score9 && score1 >= score10 && score1 >= score11 ) {
        percy.style.display = "block";
        nico.style.display = "none";
        annabeth.style.display = "none";
        grover.style.display = "none";
        luke.style.display = "none";
                              leo.style.display = "none";
                hazel.style.display = "none";
                piper.style.display = "none";
                frank.style.display = "none";
                reyna.style.display = "none";
                jason.style.display = "none";

            text.innerHTML = "You are Percy";
        }
        if (score2 >= score1 && score2 >= score3 && score2 >= score4 && score2 >= score5 && score2 >= score6 && score2 >= score7 && score2 >= score8 && score2 >= score9 && score2 >= score10 && score2 >= score11) {
            nico.style.display = "block";
            percy.style.display = "none";
            annabeth.style.display = "none";
            grover.style.display = "none";
            luke.style.display = "none";
                                  leo.style.display = "none";
                hazel.style.display = "none";
                piper.style.display = "none";
                frank.style.display = "none";
                reyna.style.display = "none";
                jason.style.display = "none";
            text.innerHTML = "You are Nico";


        } if (score3 >= score2 && score3 >= score1 && score3 >= score4 && score3 >= score5 && score3 >= score6 && score3 >= score7 && score3 >= score8 && score3 >= score9 && score3 >= score10 && score3 >= score11) {
            grover.style.display = "block";
            percy.style.display = "none";
            nico.style.display = "none";
            annabeth.style.display = "none";
            luke.style.display = "none";
                                  leo.style.display = "none";
                hazel.style.display = "none";
                piper.style.display = "none";
                frank.style.display = "none";
                reyna.style.display = "none";
                jason.style.display = "none";
           text.innerHTML = "You are Grover";


       } if (score4 >= score2 && score4 >= score3 && score4 >= score1 && score4 >= score5 && score4 >= score6 && score4 >= score7 && score4 >= score8 && score4 >= score9 && score4 >= score10 && score4 >= score11) {
        annabeth.style.display = "block";
        percy.style.display = "none";
        nico.style.display = "none";
        grover.style.display = "none";
        luke.style.display = "none";
                              leo.style.display = "none";
                hazel.style.display = "none";
                piper.style.display = "none";
                frank.style.display = "none";
                reyna.style.display = "none";
                jason.style.display = "none";
            text.innerHTML = "You are Annabeth";

       } if (score5 >= score2 && score5 >= score3 && score5 >= score4 && score5 >= score1 && score5 >= score6 && score5 >= score7 && score5 >= score8 && score5 >= score9 && score5 >= score10 && score5 >= score11) {
        luke.style.display = "block";
        percy.style.display = "none";
        nico.style.display = "none";
        annabeth.style.display = "none";
                              leo.style.display = "none";
                hazel.style.display = "none";
                piper.style.display = "none";
                frank.style.display = "none";
                reyna.style.display = "none";
                jason.style.display = "none";
        grover.style.display = "none";
            text.innerHTML = "You are Luke";

       }
               if (score6 >= score2 && score6 >= score3 && score6 >= score4 && score6 >= score5 && score6 >= score1 && score6 >= score7 && score6 >= score8 && score6 >= score9 && score6 >= score10 && score6 >= score11) {
                        leo.style.display = "block";
                hazel.style.display = "none";
                piper.style.display = "none";
                frank.style.display = "none";
                reyna.style.display = "none";
                jason.style.display = "none";
        percy.style.display = "none";
        nico.style.display = "none";
        annabeth.style.display = "none";
        grover.style.display = "none";
                        luke.style.display = "none";

            text.innerHTML = "You are Leo";

       }
                      if (score7 >= score2 && score7 >= score3 && score7 >= score4 && score7 >= score5 && score7 >= score1 && score7 >= score1 && score7 >= score8 && score7 >= score9 && score7 >= score10 && score7 >= score11) {
                        leo.style.display = "none";
                hazel.style.display = "block";
                piper.style.display = "none";
                frank.style.display = "none";
                reyna.style.display = "none";
                jason.style.display = "none";
        percy.style.display = "none";
        nico.style.display = "none";
        annabeth.style.display = "none";
        grover.style.display = "none";
                        luke.style.display = "none";

            text.innerHTML = "You are Hazel";

       }               if (score8 >= score2 && score8 >= score3 && score8 >= score4 && score8 >= score5 && score8 >= score1 && score8 >= score7 && score8 >= score1 && score8 >= score9 && score8 >= score10 && score8 >= score11) {
                        leo.style.display = "none";
                hazel.style.display = "none";
                piper.style.display = "block";
                frank.style.display = "none";
                reyna.style.display = "none";
                jason.style.display = "none";
        percy.style.display = "none";
        nico.style.display = "none";
        annabeth.style.display = "none";
        grover.style.display = "none";
                        luke.style.display = "none";

            text.innerHTML = "You are Piper";

       }               if (score9 >= score2 && score9 >= score3 && score9 >= score4 && score9 >= score5 && score9 >= score1 && score9 >= score7 && score9 >= score8 && score9 >= score1 && score9 >= score10 && score9 >= score11) {
                        leo.style.display = "none";
                hazel.style.display = "none";
                piper.style.display = "none";
                frank.style.display = "block";
                reyna.style.display = "none";
                jason.style.display = "none";
        percy.style.display = "none";
        nico.style.display = "none";
        annabeth.style.display = "none";
        grover.style.display = "none";
                        luke.style.display = "none";

            text.innerHTML = "You are Frank";

       }               if (score10 >= score2 && score10 >= score3 && score10 >= score4 && score10 >= score5 && score10 >= score1 && score10 >= score7 && score10 >= score8 && score10 >= score9 && score10 >= score1 && score10 >= score11) {
                        leo.style.display = "none";
                hazel.style.display = "none";
                piper.style.display = "none";
                frank.style.display = "none";
                reyna.style.display = "none";
                jason.style.display = "block";
        percy.style.display = "none";
        nico.style.display = "none";
        annabeth.style.display = "none";
        grover.style.display = "none";
                        luke.style.display = "none";

            text.innerHTML = "You are Jason";

       }               if (score11 >= score2 && score11 >= score3 && score11 >= score4 && score11 >= score5 && score11 >= score1 && score11 >= score7 && score11 >= score8 && score11 >= score9 && score11 >= score10 && score11 >= score1) {
                        leo.style.display = "none";
                hazel.style.display = "none";
                piper.style.display = "none";
                frank.style.display = "none";
                reyna.style.display = "block";
                jason.style.display = "none";
        percy.style.display = "none";
        nico.style.display = "none";
        annabeth.style.display = "none";
        grover.style.display = "none";
                        luke.style.display = "none";

            text.innerHTML = "You are Reyna";

       }
//}
});

