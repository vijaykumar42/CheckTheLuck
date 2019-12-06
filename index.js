
let rNum1;
let finalNum0;
let finalNum1;
let finalNum2;
let attempts = 0;
let won = 0;
let lose = 0;


function randomNumGenerator(){
let a = Math.floor((Math.random() * 10) + 0);
let b = Math.floor((Math.random() * 10) + 0);
rNum1 = ""+a+b;
document.getElementById("randomNum").innerHTML = rNum1;
return rNum1;
}

function randomNumGenerator1(){
let c = Math.floor((Math.random() * 10) + 0);
let d = Math.floor((Math.random() * 10) + 0);
let e = Math.floor((Math.random() * 10) + 0);
let f = Math.floor((Math.random() * 10) + 0);
finalNum0 = randomNumGenerator();
finalNum1 = ""+c+d;
finalNum2 = ""+e+f;

document.getElementById("button1").style.display = "none";
document.getElementById("button2").style.display = "none";
document.getElementById("button3").style.display = "none";

attempts++;
if(attempts <10){
  document.getElementById("attempts").innerHTML = "Attempts : " + attempts + "/10";
}else{
  document.getElementById("attempts").innerHTML = "Attempts : " + "10" + "/10";
  result();
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
let a = ["num1", "num2", "num3"];
shuffle(a);
document.getElementById(a[0]).innerHTML = finalNum0;
document.getElementById(a[1]).innerHTML = finalNum1;
document.getElementById(a[2]).innerHTML = finalNum2;
document.getElementById(a[0]).value = finalNum0;
document.getElementById(a[1]).value = finalNum1;
document.getElementById(a[2]).value = finalNum2;

}



document.querySelector("#buttonId1").addEventListener("click", function(){

  if((document.getElementById("num1").value) === rNum1){
    won++;
    document.getElementById("won").innerHTML = "Lucky Attempts : " + won;
  }else {
    lose++;
    document.getElementById("lose").innerHTML = "UnLucky Attempts : " + lose;
  }
});

document.querySelector("#buttonId2").addEventListener("click", function(){

  if((document.getElementById("num2").value) === rNum1){
    won++;
    document.getElementById("won").innerHTML = "Lucky Attempts : " + won;
  }else {
    lose++;
    document.getElementById("lose").innerHTML = "UnLucky Attempts : " + lose;
  }
});

document.querySelector("#buttonId3").addEventListener("click", function(){

  if((document.getElementById("num3").value) === rNum1){
    won++;
    document.getElementById("won").innerHTML = "Lucky Attempts : " + won;
  }else {
    lose++;
    document.getElementById("lose").innerHTML = "UnLucky Attempts : " + lose;
  }
});




function result(){
  if(won<4){
    document.getElementById("container").innerHTML = "<h3>BAD LUCK</h3>";
  }else if (won>3 && won<7) {
    document.getElementById("container").innerHTML = "<h3>GOOD LUCK</h3>";
  }else {
    document.getElementById("container").innerHTML = "<h3>EXCELLENT LUCK</h3>";
  }
}
