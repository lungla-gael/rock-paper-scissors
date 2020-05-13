function random(number) {
    return Math.floor(Math.random()*number);
}

function computerPlay() {
    let gameOptions = ["rock", "paper", "scissors"];
    return gameOptions[random(gameOptions.length)];
}

function decideWinner(playerSelection, winningPick) {
    if (playerSelection === winningPick) {
        return "player";
    } else {
        return "computer";
    }
}

let computerWins = 0;
let numberOfRounds = 0;
let playerWins = 0; 

function displayWinner(roundWinner, winningPick, otherPick) {
    const resultsContainer = document.querySelector('#resultsContainer');
    let computerWin = document.createElement('p');
    computerWin.classList.add('computerWin');
    computerWin.textContent = "You Lose! "+winningPick+" beats "+otherPick+" and the "+ roundWinner + " wins!";
    computerWin.style.color = 'red';
    let playerWin = document.createElement('p');
    playerWin.classList.add('playerWin');
    playerWin.textContent = "You Win! "+winningPick+" beats "+otherPick;
    playerWin.style.color = 'blue';
    let tie = document.createElement('p');
    tie.classList.add('tie');
    tie.textContent = "its a tie! you both played " + winningPick;
    tie.style.color = 'green';
    let winner = document.createElement('h2');
    winner.classList.add('winner');
    winner.style.color = 'aqua';         

    if (roundWinner === "computer") {
        resultsContainer.appendChild(computerWin);
        computerWins += 1;
        numberOfRounds += 1;
    } else if(roundWinner === "player"){
        resultsContainer.appendChild(playerWin);
        playerWins += 1;
        numberOfRounds += 1;                                
    }else{
        resultsContainer.appendChild(tie);
        numberOfRounds += 1;              
    }

    let roundResult = document.createElement('p');
    roundResult.classList.add('roundResult');
    roundResult.textContent = "computer Wins : "+ computerWins 
                                + " player wins : " + playerWins 
                                + " number of rounds : " + numberOfRounds;   
    resultsContainer.appendChild(roundResult);

    if (roundWinner === "computer" && computerWins === 5 && computerWins>playerWins) {
        winner.textContent = "The Computer Wins the Game Overall";
        resultsContainer.appendChild(winner);
    } else if (roundWinner === "player" && playerWins === 5 && playerWins>computerWins){
        winner.textContent = "You Win the Game Overall";
        resultsContainer.appendChild(winner);            
    }else{
    }
    return "success";
}

function playRound(playerSelection, computerSelection) {
    
    let entryList = [playerSelection,computerSelection];
    let winner = null;
    let containsRock = entryList.includes("rock");
    let containsPaper = entryList.includes("paper");
    let containsScissors= entryList.includes("scissors");

    if (playerSelection !== computerSelection) {
        if (containsRock && containsPaper) {
            winner = decideWinner(playerSelection, "paper")
            return displayWinner(winner,"paper","rock");
        }else if (containsRock && containsScissors) {
            winner = decideWinner(playerSelection, "rock")
            return displayWinner(winner,"rock","scissors");
        }else{
            winner = decideWinner(playerSelection, "scissors")
            return displayWinner(winner,"scissors","paper");
        }
    } else {
        return displayWinner("Nobody",playerSelection,computerSelection);
    }

}

function game() {
    let playerBtns = Array.from(document.querySelectorAll('.btn'));
    playerBtns.forEach(playerBtn => {
        playerBtn.addEventListener('click', () => playRound(playerBtn.textContent.toLowerCase(),computerPlay()));
    });
}

game();