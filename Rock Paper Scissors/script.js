let btn = document.getElementById("st-btn")
let res = document.getElementById("result")
let plscore = document.getElementById("playerscore")
let computerscore = document.getElementById("comscore")
var comscore = 0;
var playerscore =0;

btn.addEventListener("click",()=>{
    let pin = prompt("Player choice: Scissors(s/S), Rock(r/R) and Paper(p/P)");
    let ko = pin.toLowerCase();
    let j;
    if (ko == "s" || ko == "scissors"){
        j = 0;
    } else if (ko == "r" || ko == "rock"){
        j = 1;
    } else if (ko == "p" || ko == "paper"){
        j = 2;
    }
    console.log(j)
    
    let rand = Math.floor((Math.random())*3)
    if (rand == j){
        alert(`Computer chose ${pin} too`)
        res.innerHTML = "Result: Tie" 
    } else if(rand == 0 && j == 1){
        alert("Computer chose scissors")
        res.innerHTML = "Result: Player Won"
        playerscore += 1;
    } else if(rand == 0 && j == 2){
        alert("Computer chose scissors")
        res.innerHTML = "Result: Player Lost"
        comscore += 1
    } else if(rand == 1 && j == 0){
        alert("Computer chose scissors")
        res.innerHTML = "Result: Player Lost"
        comscore += 1
    } else if(rand == 1 && j == 2){
        alert("Computer chose scissors")
        res.innerHTML = "Result: Player Won"
        playerscore += 1
    } else if(rand == 2 && j == 1){
        alert("Computer chose scissors")
        res.innerHTML = "Result: Player Lost"
        comscore += 1
    } else if(rand == 2 && j == 0){
        alert("Computer chose scissors")
        res.innerHTML = "Result: Player Won"
        playerscore += 1
    } 
    plscore.innerHTML = "Player Score: " + playerscore;
    computerscore.innerHTML = "Computer Score: " + comscore;
    btn.innerHTML = "Play Again"

})
// 0 = scissor
// 1 = rock
// 2 = paper