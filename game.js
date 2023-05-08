/*
This is a rock paper scissors game created with JS, you can play by running playGame() on the console.";
*/
function getComputerChoice(){
    let x = Math.floor(Math.random() * 3 + 1);
    switch(x){
        case 1:
            return "rock"
            break;
        case 2: 
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

var scoreUser = 0;
var scoreComputer = 0;
var lastScore = 0;
function resetScore(){
    scoreUser = 0;
    scoreComputer = 0;
    lastScore = {
        "computer" : scoreComputer,
        "user" : scoreUser,
    }

};
function showScore(){
    console.log(`***********           SCORE           ***********`);
    console.log(`***********          COMPUTER         ***********`);
    console.log(`***********     SCORE: `,scoreComputer,"              ***********");
    console.log(`***********           SCORE           ***********`);
    console.log(`*********-**          PLAYER           ***********`);
    console.log(`***********     SCORE: `,scoreUser,`              ***********`);
}
function playRound(){

    if(scoreUser < 3 && scoreComputer < 3){
        console.clear();
        showScore();
        /*playerChoice = prompt('Type: "rock" for rock; "paper" for paper; "scissors" for scissors');*/
        computerChoice = getComputerChoice();
        // la scelta del computer è determinata dal risultato della funzione Math.floor(Math.random() * 3 + 1); i risultati possibili sono 1, 2 e 3 e ad ogni risultato corrisponde una scelta tra sasso, carta e forbici
        if (playerChoice === "r" || playerChoice === "p" || playerChoice === "s"){
            console.log(`You chose` + playerChoice + `. The computer chose` +computerChoice + `.`);
                if(playerChoice == "r" && computerChoice == "r"){
                    console.log("It's a tie!");
                }
                else if(playerChoice == "r" && computerChoice == "p"){
                    console.log("You lose!");
                    scoreComputer++;
                }
                else if(playerChoice == "r" && computerChoice == "s"){
                    console.log("You win!");
                    scoreUser++;
                }
                else if(playerChoice == "p" && computerChoice == "p"){
                    console.log("It's a tie!");
                }
                else if(playerChoice == "p" && computerChoice == "s"){
                    console.log("You lose!");
                    scoreComputer++;
                }
                else if(playerChoice == "p" && computerChoice == "r"){
                    console.log("You win!");
                    scoreUser++;
                }
                else if(playerChoice == "s" && computerChoice == "s"){
                    console.log("It's a tie!");
                }
                else if(playerChoice == "s" && computerChoice == "r"){
                    console.log("You lose!");
                    scoreComputer++;

                }
                else if(playerChoice == "s" && computerChoice == "p"){
                    console.log("You win!");
                    scoreUser++;
                    scoreComputer--;
                }  
            showScore();
        }
        else {
           /* playerChoice = prompt('Type: "r" for rock; "p" for paper; "s" for scissors');*/
        }
        if(scoreUser === 3){
            alert(`***********          YOU WIN          ***********`);
        }
        else if(scoreComputer === 3){
            alert(`***********          YOU LOSE         ***********`);

        }
    } else {
        alert("play another round by making your next choice!")
    }
}
function playGame(){
    scoreUser = 0;
    scoreComputer = 0;
    alert("Make a choice now!")
};
function choseRock(){
    playerChoice = "r";
    playRound()
}
function chosePaper(){
    playerChoice = "p";
    playRound()
}
function choseScissors(){
    playerChoice = "s";    
    playRound()
}