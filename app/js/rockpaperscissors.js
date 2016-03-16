////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
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

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    console.log('Player move = ' + playerMove + '; Computer Move = ' + computerMove);


    if (playerMove === computerMove){
        return 'tie';
    } else if  ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'scissors' & computerMove === 'paper') || (playerMove === 'paper' && computerMove === 'rock'))  {
        return 'player';
    } else if ((playerMove === 'rock' && computerMove === 'paper') || (playerMove === 'scissors' && computerMove === 'rock') || (playerMove === 'paper' && computerMove === 'scissors')) {
        return 'computer';
    }
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors!");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    // After each 'round', display some text in the console indicating who played
      // what, who won, and what the current scoreboard looks like.
  	// For example,
  	//  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
 	 //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n')

while (playerWins < 5 && computerWins < 5) {
	var playerMove;
	var computerMove;
	var winner = getWinner(playerMove,computerMove);

	if (winner === 'player') {
		playerWins ++;
	console.log('Player wins!');
	console.log('SCOREBOARD Player: ' + playerWins + ' Computer: ' + computerWins);
	}
	else if (winner === 'computer') {
		computerWins ++;
	console.log('Computer wins!');
	console.log('SCOREBOARD Player: ' + playerWins + ' Computer: ' + computerWins);
	}
	else {
	console.log('Tie game.');
	}
}

    return [playerWins, computerWins];

}

/* 
WITH:   var playerMove = getPlayerMove();
        var computerMove = getComputerMove();

Requires TWO inputs from Player. The winner is determined by the result of the second one, but the console log is printing the first one. WEIRD. 

WITH:   var playerMove;
        var computerMove;

ONLY ONE INPUT IS REQUIRED! And the winner is determined by the initial pick per my testing the console log in getWinner. 
However, still getting an undefined in the consoles. Removing them because they are lies! 
*/


