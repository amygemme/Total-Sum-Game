// As soon as the page loads
window.onload = function () {
    console.log("open window")
    document.getElementById("crystal1").onclick = function () { crystal1() };
    document.getElementById("crystal2").onclick = function () { crystal2() };
    document.getElementById("crystal3").onclick = function () { crystal3() };
    document.getElementById("crystal4").onclick = function () { crystal4() };

};

var randomNumber;
var crystal1value;
var crystal2value;
var crystal3vlaue;
var crystal4value;
var totalPoints;
var wins =0;
var loss = 0;

function newgame() {
    randomNumber = Math.floor(((Math.random() * 100) +20));
    console.log(randomNumber);
    crystal1value = Math.floor(((Math.random() * 12)));
    crystal2value = Math.floor(((Math.random() * 12)));
    crystal3value = Math.floor(((Math.random() * 12)));
    crystal4value = Math.floor(((Math.random() * 12)));
    console.log(crystal1value);
    console.log(crystal2value);
    console.log(crystal3value);
    console.log(crystal4value);
    totalPoints = 0;
    $("#random").text(randomNumber); //displays correctly
    $("#points").text(totalPoints);  //displays correctly
    $("#score").text("Total Wins: " + wins + "Total Losses: " + loss);
}

function youwon() {
    wins++;
    console.log("wins" + wins)
    alert("You won!");
    newgame();
}

function youlost(){
    loss = loss +1;
    console.log("losses:" + loss);
    alert("You lost");
    newgame();
}

function test(){
    if (randomNumber === totalPoints){
        youwon();
    }
    else if (randomNumber < totalPoints) {
        youlost();
    }
}

function crystal1() {
    totalPoints = totalPoints + crystal1value;
    $("#random").text(randomNumber); //displays correctly
    $("#points").text(totalPoints);  //displays correctly
    test();
}

function crystal2() {
    totalPoints = totalPoints + crystal2value;
    console.log(totalPoints);
    $("#random").text(randomNumber); //displays correctly
    $("#points").text(totalPoints);  //displays correctly
    test();
}

function crystal3() {
    totalPoints = totalPoints + crystal3value;
    console.log(totalPoints);
    $("#random").text(randomNumber); //displays correctly
    $("#points").text(totalPoints);  //displays correctly
    test();
}

function crystal4() {
    totalPoints = totalPoints + crystal4value;
    console.log(totalPoints);
    $("#random").text("The Number to get is:" + randomNumber); //displays correctly
    $("#points").text(totalPoints);  //displays correctly
    test();
}

newgame();
