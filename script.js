let compchoice = ["rock", "paper", "scissors"]
const playerSelection = "scissors";
const computerSelection = getComputersChoice();


function getComputersChoice(){
         const randomIndex = Math.floor(Math.random() * compchoice.length)
         const item = compchoice[randomIndex]
         return item
        // console.log(item)

}
getComputersChoice()

let playerScore = 0
let computerScore = 0
// playerScore++
// console.log(playerScore)

function game(playerScore, computerScore){
    
    if (playerScore === playerScore){
         console.log('jaja')   
    }else if (computerScore === computerScore){
        console.log('balls')
    }
    playRound()
    playRound()
    playRound()
    playRound()
    console.log(playRound(playerSelection, computerSelection))
}
game()




function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore++ 
        console.log(playerScore)
        return "You Lose! Paper beats Rock"
    }else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        playerScore++ 
        console.log(playerScore)
        return "You Lose! Rock beats Scissors"
    }else {
        playerScore++
        console.log(playerScore)
        console.log(computerScore)
        return "it's a tie"
    }
    
}



//  let compchoice = ["rock", "paper", "scissors"]
//  function getComputersChoice(arr) {
//      const randomIndex = Math.floor(Math.random() * arr.length)

//      const item = arr[randomIndex]
//      return item
//  }

// let result = getComputersChoice(compchoice)
// console.log(result)