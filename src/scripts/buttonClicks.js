$(document).ready(function () {
	window.highScore = 0;
	window.score = 0;
	window.wins = 0;
	window.winStreak = 0;
	window.gamesPlayed = 0;
	window.buttonClicks = 0;
	window.statsOpen = false;
	window.resetable = false;
	window.easterEgg = 0;
	
	$(".stats").hide();
	$('.menu li ul').hide();
	
		$('.menuImage').hover(
		function () { 
			this.src = "buttonClicks/imagery/menuButtonHover.png";
		},
		function () { 
			this.src = "buttonClicks/imagery/menuButton.png";
		}
	);
	
	$('.menu li').hover(
		function () { //appearing on hover
			$('ul', this).fadeIn();
		},
		function () { //disappearing on hover
			$('ul', this).fadeOut();
		}
	);  
});

function setDifficulty(clickId, clickValue){
	var difficultyButtonClicked = document.getElementById(clickId);
	var difficultyButtonClickedId = difficultyButtonClicked.value;
	var elementInputs = document.getElementsByTagName("input");
	
	window.difficultyValue = clickId;
	
	$(".title").fadeOut(750);
	$(".contentWrap").fadeOut(750);
	$(elementInputs).fadeOut(750);
	
	if(window.statsOpen == true){
		$(".stats").fadeOut(750);
	}
	
	if (difficultyButtonClickedId){
		setTimeout(function(){
			$(elementInputs).remove();
			elementInputs = null;
			difficultySelected(difficultyButtonClickedId);
		}, 750);
	}else{
		alert('ERROR: No Compatiable Difficulty Selected');
	}
	
}

function difficultySelected(difficulty){
	var elementInputs = document.getElementsByTagName("input"); 
	window.difficulty = difficulty; 
	window.easterEgg = Math.floor((Math.random() * 20) + 7); 
	
	setTimeout(function(){
		$(elementInputs).remove(); 
		elementInputs = null; 
		
		$(".title").html("Pick A Grid Size").hide().fadeIn(750);
		if(window.statsOpen == true){
			$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak).hide().fadeIn(750);//stats
		}
		
		for(var i = 1; i < 5; i++){
			buttonGridSize = document.createElement("input");
			buttonGridSize.type = "button";
			buttonGridSize.style.cssFloat = 'left';
			buttonGridSize.style.width = '100px';
			buttonGridSize.value = i * 10;
			buttonGridSize.id = "clickSelection" + i;
			buttonGridSize.onclick = function(){buildComparisonArray(this.value); buildButtonGrid(this.value);};
			$(".contentWrap").hide().fadeIn(750);
			$(".content").append($(buttonGridSize)).hide().fadeIn(750);
		}
	
	}, 750);
}

function buildComparisonArray(gridSize){
	var difficultyValue = window.difficultyValue
	window.gridSize = parseInt(gridSize)
	comparisonArray = [];
	
	for (var count = 0; count <= (gridSize * difficultyValue) + 1; count++){
		comparisonArray[count] = count;
	}
	
	for(var j, x, i = comparisonArray.length; i; j = parseInt(Math.random() * i), x = comparisonArray[--i], comparisonArray[i] = comparisonArray[j], comparisonArray[j] = x);
	window.comparisonArray = comparisonArray;
}

function buildButtonGrid(gridSize){
	var gridSize = parseInt(gridSize);
	var elementInputs = document.getElementsByTagName("input");
	var e = document.body.children[2].children[4].children[0];
	var buttonCounter = 0;
	window.resetable = true;

	$(".title").fadeOut(750);
	if(window.statsOpen == true){
		$(".stats").fadeOut(750);
	}
	$(".contentWrap").fadeOut(750);
	$(elementInputs).fadeOut(750);
	
	setTimeout(function(){
		$(elementInputs).remove();
		elementInputs = null;
		$(".title").html("Score: " + window.score + ", High Score: " + window.highScore ).hide().fadeIn(750);
		if(window.statsOpen == true){
			updateStats();
			$(".stats").hide().fadeIn(750);
		}
		for(var rowCounter = 0; rowCounter < 5; rowCounter++){ 
	        var row = document.createElement("div"); 
	        row.className = "row"; 
			for(var buttonCellCounter = 1; buttonCellCounter <= (gridSize / 5); buttonCellCounter++){
				buttonCounter++;
				buttonCell = document.createElement("input");
				buttonCell.type = "button";
				buttonCell.style.cssFloat = 'left';
				buttonCell.value = buttonCounter;
				buttonCell.id = "clickSelection" + buttonCounter;
				buttonCell.onclick = function(){buttonPress(this.id, this.value);};
				row.appendChild(buttonCell);
			}
			e.appendChild(row);
		}
		$(".contentWrap").hide().fadeIn(750);
		$(".content").hide().fadeIn(750);
	}, 750);
}

function buttonPress(buttonId, buttonValue){
	var buttonClicked = document.getElementById(buttonId);
	var comparisonArray = window.comparisonArray;
	window.buttonClicks = window.buttonClicks +1;

	if (buttonValue != comparisonArray[buttonValue]){
		clickScore();
		buttonClicked.disabled = true;
		buttonClicked.style.backgroundColor = '759999';
		buttonClicked.style.color = '#FFFFFF';
	}
	else {
		window.winStreak = 0;
		
		for(var i = 1; i < window.gridSize + 1; i++){
			buttonToDisable = document.getElementById("clickSelection" + i);
			if (buttonToDisable != buttonClicked){
				buttonToDisable.disabled = true;
				buttonToDisable.style.backgroundColor = '759999';
				buttonToDisable.style.color = '#FFFFFF';
			}else{
				buttonToDisable.disabled = true;
				buttonToDisable.style.backgroundColor = '#FF826F';
				buttonToDisable.style.color = '#FFFFFF';
			}
		}
		window.gamesPlayed = window.gamesPlayed + 1;
		endGame();
	}
	
	if(window.score == window.gridSize){
		window.wins = window.wins + 1;
		window.winStreak = window.winStreak + 1;
		window.gamesPlayed = window.gamesPlayed + 1;
		
		if(window.winStreak == window.easterEgg){
			easterEgg();
		}
		endGame();
	}
}

function clickScore(){
	window.score = window.score + 1;
	tempScore = window.score;
	
	$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak);
	
	if(tempScore == 0){
		window.highScore = 0;
		$(".title").html("Score: " + window.score + ", High Score: " + window.highScore );
	}else if(window.highScore < tempScore){
		window.highScore = tempScore;
		$(".title").html("Score: " + window.score + ", High Score: " + window.highScore );
	}else{
		window.highScore = window.highScore;
		$(".title").html("Score: " + window.score + ", High Score: " + window.highScore );
	}
}

function clickStats(){
	window.statsOpen = true;
	
	if($(".stats").is(':visible')){
		window.statsOpen = false;
		$(".stats").slideUp(350);
	}else{
		$(".stats").slideDown(350);
	}
	$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak);
}

function updateStats(){
	$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak);
}

function endGame(){
	var elementInputs = document.getElementsByTagName("input");
	window.endGameBool = true;

	$(".title").fadeOut(1250);
	if(window.statsOpen == true){
		$(".stats").fadeOut(1250);
	}
	$(".contentWrap").fadeOut(1250);
	$(elementInputs).fadeOut(1250);
	
	setTimeout(function(){
		$(elementInputs).remove();
		elementInputs = null;
		$(".row").remove();
		
		$(".title").html("Final Score: " + window.score + ", High Score: " + window.highScore ).hide().fadeIn(1250);
		if(window.statsOpen == true){
			$(".stats").hide().fadeIn(1250);
			updateStats();
		}
		
		if(window.score == window.gridSize){
			endMessage = document.createElement("h2");
			endMessage.id = 'endMessage';
			endMessage.className = 'endMessage'; 
			endMessage.style.textAlign = 'center';
			endMessage.innerHTML = "You're the Winner!";
			$(".contentWrap").hide().fadeIn(1250);
			$(".content").append($(endMessage)).hide().fadeIn(1250);
		}else{
			endMessage = document.createElement("h2");
			endMessage.id = 'endMessage';
			endMessage.className = 'endMessage'; 
			endMessage.style.textAlign = 'center';
			endMessage.innerHTML = "You've Lost.";
			$(".contentWrap").hide().fadeIn(1250);
			$(".content").append($(endMessage)).hide().fadeIn(1250);
		}
		
		stats = document.createElement("input");
		stats.type = "button";
		stats.style.cssFloat = 'left';
		stats.style.width = '100px';
		stats.value = "View Stats";
		stats.onclick = function(){clickStats();};
		$(".contentWrap").hide().fadeIn(1250);
		$(".content").append($(stats)).hide().fadeIn(1250);
		
		reset = document.createElement("input");
		reset.type = "button";
		reset.style.cssFloat = 'left';
		reset.style.width = '100px';
		reset.value = "Try Again";
		reset.onclick = function(){clickReset();};
		$(".contentWrap").hide().fadeIn(1250);
		$(".content").append($(reset)).hide().fadeIn(1250);
		
		newGame = document.createElement("input");
		newGame.type = "button";
		newGame.style.cssFloat = 'left';
		newGame.style.width = '100px';
		newGame.value = "New Game";
		newGame.onclick = function(){clickNewGame();};
		$(".contentWrap").hide().fadeIn(1250);
		$(".content").append($(newGame)).hide().fadeIn(1250);
		
		quit = document.createElement("input");
		quit.type = "button";
		quit.style.cssFloat = 'left';
		quit.style.width = '100px';
		quit.value = "Quit";
		quit.onclick = function(){document.location.href = "http://ianhutchcraft.com/";};
		$(".contentWrap").hide().fadeIn(1250);
		$(".content").append($(quit)).hide().fadeIn(1250);
	}, 1250);
}

function clickReset(){
	if(window.resetable == true){
		var elementInputs = document.getElementsByTagName("input");
		var endMessage = document.getElementById("endMessage");
	
		$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak);
		
		$("title").fadeOut(750);
		if(window.statsOpen == true){
			$(".stats").fadeOut(750);
		}
		$(".contentWrap").fadeOut(750);
		$(elementInputs).fadeOut(750);
		
		if(elementInputs.length > 9 || window.endGameBool == true){
			setTimeout(function(){
				$(elementInputs).remove();
				elementInputs - null;
				$(endMessage).remove();
				endMessage = null;
				
				window.score = 0;
				window.endGameBool = false;
				buildComparisonArray(window.gridSize);
				buildButtonGrid(window.gridSize);
			}, 750);
		}else{
			this.clickNewGame();
		}
	} else{
		$.jAlert({
		    'title': 'Sorry',
		    'content': 'You can\'t reset the game until after a difficulty and grid size has been selected.',
		    'theme': 'blue',
		    'closeOnClick': true,
		});
	}
}

function clickNewGame(){
	var elementInputs = document.getElementsByTagName("input");
	var endMessage = document.getElementById("endMessage");
	window.highScore = 0;
	window.score = 0;
	window.resetable = false;
	
	$(".title").fadeOut(750);
	if(window.statsOpen == true){
		$(".stats").fadeOut(750);
	}
	$(".contentWrap").fadeOut(750);
	$(elementInputs).fadeOut(750);
	
	setTimeout(function(){
		$(elementInputs).remove();
		elementInputs = null;
		$(endMessage).remove();
		endMessage = null;
		
		$(".title").html("Set Difficulty").hide().fadeIn(750);
		if(window.statsOpen == true){
			$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak).hide().fadeIn(750);
		}
		
		easyButton = document.createElement("input");
		easyButton.type = "button";
		easyButton.style.cssFloat = 'left';
		easyButton.style.width = '100px';
		easyButton.value = "Easy";
		easyButton.id = "4";
		easyButton.onclick = function(){setDifficulty(this.id, this.value.toLowerCase());};
		$(".contentWrap").hide().fadeIn(750);
		$(".content").append($(easyButton)).hide().fadeIn(750);
		
		mediumButton = document.createElement("input");
		mediumButton.type = "button";
		mediumButton.style.cssFloat = 'left';
		mediumButton.style.width = '100px';
		mediumButton.value = "Medium";
		mediumButton.id = "3";
		mediumButton.onclick = function(){setDifficulty(this.id, this.value.toLowerCase());};
		$(".contentWrap").hide().fadeIn(750);
		$(".content").append($(mediumButton)).hide().fadeIn(750);
		
		hardButton = document.createElement("input");
		hardButton.type = "button";
		hardButton.style.cssFloat = 'left';
		hardButton.style.width = '100px';
		hardButton.value = "Hard";
		hardButton.id = "2";
		hardButton.onclick = function(){setDifficulty(this.id, this.value.toLowerCase());};
		$(".contentWrap").hide().fadeIn(750);
		$(".content").append($(hardButton)).hide().fadeIn(750);
		
		insanityButton = document.createElement("input");
		insanityButton.type = "button";
		insanityButton.style.cssFloat = 'left';
		insanityButton.style.width = '100px';
		insanityButton.value = "Insanity";
		insanityButton.id = "1";
		insanityButton.onclick = function(){setDifficulty(this.id, this.value.toLowerCase());};
		$(".contentWrap").hide().fadeIn(750);
		$(".content").append($(insanityButton)).hide().fadeIn(750);
	}, 750);
}

function instructions(){
	$.jAlert({
		'title': 'Instructions',
		'content': 'It\'s simple! Select a difficulty,  a grid size, and then click away at those buttons. It\'s really all up to the luck of the draw. Click the wrong button, and it\'s game over!',
		'theme': 'blue',
		'closeOnClick': true,
	});
}

function easterEgg(){
	e = document.body.childNodes[1].childNodes[1];
	easterEgg = document.createElement("img");
	easterEgg.id = 'egg';
	easterEgg.src = 'buttonClicks/imagery/easterEgg.png';
	easterEgg.style.cssFloat = 'right';
	easterEgg.style.display = 'block';
	easterEgg.style.position = 'absolute';
	e.appendChild(easterEgg);
	$('#egg').hide().fadeIn(300).fadeOut(300);
	setTimeout(function(){
		$('#egg').remove();
		easterEgg = null;
	}, 350);	
}