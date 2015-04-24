////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
/'use strict'/;

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////



function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    
function getWinner(playerMove,computerMove) {
    
    var a = "rock";
    var b = "scissors";
    var c = "paper";

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
      if (playerMove == a && computerMove == b) {
        return ('player');
    }
    else if (playerMove == b && computerMove == c) {
        return ('player');
    }
    else if (playerMove == c && computerMove == a) {
        return ('player');
    }
    else if (playerMove == a && computerMove == c) {
        return ('computer');
    }
    else if (playerMove == b && computerMove == a) {
        return ('computer');
    }
    else if (playerMove == c && computerMove == b) {
        return ('computer');
    }
    else if (playerMove === computerMove) {
        return ('tie');
    }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner = getWinner(playerMove, computerMove);

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.//
    while(playerWins < 5 && computerWins < 5)
if (winner === 'player') {
    playerWins +=1; }
   else if (winner === 'computer') {
        computerWins +=1; }
        else if (winner === 'tie') {
            playerWins +=0;
            computerWins +=0;
        }

    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');   
    console.log(winner);



        return [playerWins, computerWins]; }

        playToFive();