
{
  clearMessages
  
  const playGame = function(playerInput) {
  
  const getMoveName = function(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }

    else if(argMoveId == 2){
      return 'papier';
    }

    else if(argMoveId == 3){
      return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  
  const displayResult = function(argComputerMove, argPlayerMove) {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if( computerMove == 'kamień' && playerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    }

    else if( computerMove == 'nożyce' && playerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
    }

    else if( computerMove == 'papier' && playerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
    }

    else if ( computerMove == 'kamień' && playerMove == 'kamień'){
      printMessage('Remis!');
    }

    else if ( computerMove == 'papier' && playerMove == 'papier'){
      printMessage('Remis!');
    }

    else if ( computerMove == 'nożyce' && playerMove == 'nożyce'){
      printMessage('Remis!');
    }

    else if ( playerMove == 'nieznany ruch'){
      printMessage('Błędny wybór! Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    }

    else {
      printMessage('Przegrywasz!');
    }
  }

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);
  const computerMove = getMoveName(randomNumber); // 1 -> 'kamień'

  const playerMove = getMoveName(playerInput); // 2 -> 'papier'

  displayResult(computerMove, playerMove);
  
}

const paperBtn = document.getElementById("paper-btn");
const rockBtn = document.getElementById("rock-btn");
const scissorsBtn = document.getElementById("scissors-btn");

paperBtn.addEventListener("click", function() { playGame(1) });
rockBtn.addEventListener("click", function() { playGame(2) });
scissorsBtn.addEventListener("click", function() { playGame(3) });
}