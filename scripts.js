let computerSelection;
let playerSelection;
let totalWins = 0;
let totalLoses = 0;
let totalTies = 0;

function computerPlay() {
    let value = randomNum(3, 1);
    //console.log(value);
    switch (value) {
        case 1: return "Rock";
        case 2: return "Paper";
        default: return "Scissors";
    }
} // returns "Rock","Paper", or "Scissors"

function randomNum(max, min) {
    let randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randNum;
} // returns int (inclusive of both min and max)

function playRound(cSelection, pSelection) {
    let win = "You Win!!!";
    let lose = "You Lose.";

    if (cSelection === pSelection) {
        totalTies++;
        return "It's a tie!!!";
    }
    switch (pSelection) {
        case ("Rock"): if (cSelection == "Scissors") {
            totalWins++;
            return win;
        } else {
            totalLoses++;
            return lose;
        }
        case ("Paper"): if (cSelection == "Rock") {
            totalWins++;
            return win;
        } else {
            totalLoses++;
            return lose;
        }
        case ("Scissors"): if (cSelection == "Paper") {
            totalWins++;
            return win;
        } else {
            totalLoses++;
            return lose;
        }
        case ("Fire"): {
            totalWins++;
            return "You win this time, but I'm concerned about your predilections.";
        }
        default: return "Something has gone wrong, could not find a winner.";
    }
} // Determines the results of the match

alert("We're going to play a game of Rock, Paper, Scissors. \nBest 3 out of 5. ")
while (totalWins < 3 && totalLoses < 3){
    computerSelection = computerPlay();
    playerSelection = prompt("Please choose Rock, Paper, or Scissors:");

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    let result = playRound(computerSelection, playerSelection);

    alert("Computer choose: " + computerSelection + "\n" + "You choose: "
        + playerSelection + "\n" + result);
}

alert("Total wins: " + totalWins
    + "\nTotal Loses: " + totalLoses
    + "\nTotal ties: " + totalTies);


