alert("idhar karo faisla");
var name = prompt("enter player1 name ");
var name2 = prompt("enter player2 name ");



var dies = Math.floor(Math.random() * 6) + 1;
var diesmatch = "dice" + dies  + ".png" ;
var diesource = "images/" + diesmatch ;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , diesource);
document.querySelectorAll("p")[0].innerHTML = name ;
//next second die//
var dies2 = Math.floor(Math.random() * 6) + 1;
var diesmatch2 =  "dice" + dies2  + ".png" ;
var diesource2 = "images/" + diesmatch2 ;
document.querySelectorAll("img")[1].setAttribute("src" , diesource2);
document.querySelectorAll("p")[1].innerHTML = name2 ;
//condition time //
if (dies > dies2) {
  document.querySelector("h1").innerHTML = name + "🚩 Wins!";

}
else if (dies < dies2) {
  document.querySelector("h1").innerHTML = name2 + "🚩 Wins!";

}


else {
  document.querySelector("h1").innerHTML = "🚩 draw"
}
