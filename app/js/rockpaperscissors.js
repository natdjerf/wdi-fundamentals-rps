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
    /* TO TROUBLESHOOT ADD: console.log('Player move = ' + playerMove + '; Computer Move = ' + computerMove); */


    if (playerMove === computerMove){
        return 'tie';
    } else if  ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'paper' && computerMove === 'rock') || (playerMove === 'paper' && computerMove === 'scissors'))  {
        return 'player';
    } else if ((playerMove === 'rock' && computerMove === 'paper') || (playerMove === 'scissors' & computerMove === 'paper') || (playerMove === 'scissors' && computerMove === 'rock')) {
        return 'computer';
    }
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    // After each 'round', display some text in the console indicating who played
      // what, who won, and what the current scoreboard looks like.
  	// For example,
  	//  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
 	 //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n')

while (playerWins < 5 && computerWins < 5) {
	var playerMove = getPlayerMove();
	var computerMove = getComputerMove();
	var winner = getWinner(PlayerMove,ComputerMove);

	if (winner === 'player') {
		playerWins ++;
	console.log('Player wins! Player played ' + playerMove + ' while Computer played ' + computerMove);
	console.log('Player win count is ' + playerWins);
	}
	else if (winner === 'computer') {
		computerWins ++;
	console.log('Computer wins! Computer played ' + computerMove + ' while Player played ' + playerMove);
	console.log('Computer win count is ' + computerWins);
	}
	else {
	console.log('Player played ' + playerMove + ' while computer played ' + computerMove + ' therefore a tie');
	}
}

    return [playerWins, computerWins];

}
