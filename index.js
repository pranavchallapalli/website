var randomnum1 = Math.floor(Math.random()*2)+1;
console.log(randomnum1)
var coinimage1 = "image/coin"+randomnum1+".jpeg";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",coinimage1);
var randomnumber2 = Math.floor(Math.random()*2)+1;
var coinimage2 =`image/coin${randomnumber2}.jpeg`;
console.log(randomnumber2)
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",coinimage2);
if(randomnum1 > randomnumber2){
    document.querySelector("h1").innerHTML= "Player 1 won 😍😊👌";
}
else if(randomnumber2 > randomnum1){
    document.querySelector("h1").innerHTML = "Player 2 won 😊👌🫡";
}
else{
    document.querySelector("h1").innerHTML = "It's a tie! 🙃😐😑 ";
}
