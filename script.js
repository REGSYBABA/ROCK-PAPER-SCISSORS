let compchoice = ["rock", "paper", "scissors"]
let playerSelection = "paper";
const computerSelection = getComputersChoice();
let playerScore = 0
let computerScore = 0


function getComputersChoice(){
         const randomIndex = Math.floor(Math.random() * compchoice.length)
         const item = compchoice[randomIndex]
         return item

}
getComputersChoice()


function game(){
    if (playerScore > computerScore){
        console.log('jaja')
    }else if(computerScore > playerScore){
        console.log('haha')
    }
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
}
game()

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'scissors' && computerSelection == 'paper' 
         || playerSelection == 'paper' && computerSelection == 'rock' 
         || playerSelection == 'rock' && computerSelection == 'scissors'){
        playerScore++ 
        console.log(playerScore)
        console.log(computerScore)
        return "Player Wins"
    }else if (computerSelection == 'scissors' && playerSelection == 'paper' 
        || computerSelection == 'paper' && playerSelection == 'rock' 
        || computerSelection == 'rock' && playerSelection == 'scissors'){
        computerScore++ 
        console.log(computerScore)
        console.log(playerScore)
        return "Computer Wins"
    }else {
        console.log(playerScore)
        console.log(computerScore)
        return "it's a tie"
    }   
}




// function playRound(playerSelection, computerSelection) {
//     if (playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'rock'){
//         playerScore++ 
//         console.log(playerScore)
//         return "You Lose! Paper beats Rock"
//     }else if (playerSelection == 'scissors' && computerSelection == 'rock'){
//         computerScore++ 
//         console.log(computerScore)
//         return "You Lose! Rock beats Scissors"
//     }else {
//         playerScore++
//         console.log(playerScore)
//         console.log(computerScore)
//         return "it's a tie"
//     }   
// }



//  let compchoice = ["rock", "paper", "scissors"]
//  function getComputersChoice(arr) {
//      const randomIndex = Math.floor(Math.random() * arr.length)

//      const item = arr[randomIndex]
//      return item
//  }

// let result = getComputersChoice(compchoice)
// console.log(result)