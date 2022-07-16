const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
      if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput
      }else {
        console.log('Error, pick either rock, paper, or scissors')
      }
  };
  
  const getComputerChoice = () => {
    const randomResult = Math.floor(Math.random() * 3)
    switch(randomResult){
      case 0:
      return 'rock'
      break;
      case 1:
      return 'paper'
      break;
      case 2:
      return 'scissors' 
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
      return 'The game is a tie.'
    }
  
    if(userChoice === 'rock') {
      if(computerChoice === 'paper'){
        return 'The computer wins.'
      }else {
        return 'Congratulations, you won!'
      }
    } 
  
      if(userChoice === 'paper') {
        if(computerChoice === 'rock') {
          return 'The computer wins.'
        }else {
          return 'Congratulations, you won!'
        }
      } 
  
        if(userChoice === 'scissors') {
          if(computerChoice === 'rock') {
            return 'Congratulations, you won!'
          }else {
            return 'The computer wins.'
          }
        } 
  
          if(userChoice === 'bomb'){
            return 'Congratulations, you won!'
          }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('paper')
    const computerChoice = getComputerChoice()
    console.log(`The user choice: ${userChoice}`)
    console.log(`The computer choice: ${computerChoice}`)
    console.log(determineWinner(userChoice, computerChoice));
  }
  playGame()
  