/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//Variable declarations for game
var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

//Hide dice at begining of game
document.querySelector('.dice').style.display = 'none';

//Get element by id method
document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'

//Click on roll dice to change number
document.querySelector('.btn-roll').addEventListener('click', function(){
	//1. random number
	var dice = Math.floor(Math.random() * 6) + 1;
	//2. display result
	var diceDom = document.querySelector('.dice');
	diceDom.style.display = 'block';
	//Change dice image to match number rolled
	diceDom.src = 'img/dice-' + dice + '.png';
	//3. update round score IF the rolled number was NOT a 1
	if(dice !== 1){
		//Add score
		roundScore += dice;
		//show current user inside of interface
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	}else {
		//Switch to Next Player using ternary operator
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		//Set round score back to 0
		roundScore = 0;

		//Set user score to 0 inside of user interface after they roll a one
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';
		//toggle between active players
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		
		//Remove dice in between switching active players
		document.querySelector('.dice').style.display = 'none';
	}
});

//Hold score function
document.querySelector('.btn-hold').addEventListener('click', function(){
	//Add current score to players global score
	scores[activePlayer] += roundScore;
	//Update the ui
	document.querySelector('#score' + activePlayer).textContent = scores[activePlayer];

	//Check if player won the game
});

//Next player function
