
var x =  Math.floor(Math.random()*6);
var img1;
var img2;

if (x===0) {
    img1 = "./images/dice1.png";
}else if (x===1){
     img1 = "./images/dice2.png";
}else if (x===2){
     img1 = "./images/dice3.png";
}else if (x===3){
     img1 = "./images/dice4.png";
}
else if (x===4){
     img1 = "./images/dice5.png";
}
else{
     img1 = "./images/dice6.png";
}



    var y =  Math.floor(Math.random()*6);
if (y===0) {
    img2 = "./images/dice1.png";
}else if (y===1){
     img2 = "./images/dice2.png";
}else if (y===2){
     img2 = "./images/dice3.png";
}else if (y===3){
     img2 = "./images/dice4.png";
}
else if (y===4){
     img2 = "./images/dice5.png";
}
else{
     img2 = "./images/dice6.png";
}

document.querySelector(".img1").setAttribute("src",img1);
document.querySelector(".img2").setAttribute("src",img2);

if(x===y){


document.querySelector("h1").textContent ="Its a Tie";

}else if (x>y){
    
document.querySelector("h1").textContent ="Player 1 wins";
}
else {

    document.querySelector("h1").textContent ="Player 2 wins";
}