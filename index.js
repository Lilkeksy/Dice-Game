//document.querySelector("dice");
var randomNumber1 = Math.floor((Math.random() * 6)+1);
var randomNumber2 = Math.floor((Math.random() * 6)+1);
document.querySelector(".img1").setAttribute("src", "./images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src", "./images/dice"+randomNumber2+".png");
var winner = "";

if (randomNumber1 > randomNumber2) {
    winner = "PLAYER 1 WINS";
    document.querySelector("h1").innerHTML = winner;
} else if (randomNumber1 === randomNumber2) {
    winner = "DRAW";
    document.querySelector("h1").innerHTML = winner;
} else {  // Corrected from else (randomNumber1 < randomNumber2)
    winner = "PLAYER 2 WINS";
    document.querySelector("h1").innerHTML = winner;
}