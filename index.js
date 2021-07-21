var randomNumber1 =Math.floor( Math.random()*6)+1;
var img = "dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src","images/"+img);

var randomNumber2 =Math.floor( Math.random()*6)+1;
var img2 = "dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src","images/"+img2);
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Computer Wins!";
} 

else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "You Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!"; 
}