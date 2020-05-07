function random(number) {
    return Math.floor(Math.random()*number);
}

function computerPlay() {
    let gameOptions = ["rock", "paper", "scissors"];
    return gameOptions[random(gameOptions.length)];
}

function playRound(playerSelection, computerSelection) {
    
    let entryList = [playerSelection,computerSelection];
    let winner = null;
    let containsRock = entryList.includes("rock");
    let containsPaper = entryList.includes("paper");
    let containsScissors= entryList.includes("scissors");

    if (playerSelection !== computerSelection) {
        if (containsRock && containsPaper) {
            if (playerSelection === "paper") {
                    winner = "player";                    
            }else{
                winner = "computer";
            }
            return "You Lose! Paper beats Rock and the "+ winner + " wins!";
        }else if (containsRock && containsScissors) {
                if (playerSelection === "rock") {
                        winner = "player";                    
                }else{
                    winner = "computer";
                }
                return "You Lose! Rock beats Scissors and the "+ winner + " wins!";
        }else if(containsPaper && containsScissors){
                if (playerSelection === "scissors") {
                     winner = "player";                    
                }else{
                    winner = "computer";
                }
                return "You Lose! Scissors beats Paper and the "+ winner + " wins!";
        }else{
            return "invalid entries";
        } 
    } else {
        return "you both have the same entries";
    }

}

function game() {
    let playAgain = null;
    let computerWins = 0;
    let playerWins = 0;
    let numberOfRounds = 0; 

    do {      
        let playerEntry = prompt("enter rock, paper or scissors").toLowerCase();
        console.log("you have played : " + playerEntry);  
        let computerEntry = computerPlay();
        console.log("the computer has played : "+ computerEntry); 
        let result = playRound(playerEntry, computerEntry);
        console.log(result);
        
        if (result.includes("computer")) {
            computerWins += 1;
            numberOfRounds += 1;
        }else if (result.includes("player")){
            playerWins += 1;
            numberOfRounds += 1;
        }else{
            numberOfRounds += 1;
            console.log("please try again");
        }

        console.log("computer Wins : "+ computerWins + "\n"
        + "player wins : " + playerWins + "\n"
        + "number of rounds : " + numberOfRounds);

        playAgain = prompt("enter y to play again or n not to")
    } while (playAgain === "y");

    if (playerWins > computerWins) {
        console.log("the player is the overall winner");
    } else if(computerWins > playerWins){
        console.log("the computer is the overall winner");        
    }else{
        console.log("no winner");          
    }
}

game();