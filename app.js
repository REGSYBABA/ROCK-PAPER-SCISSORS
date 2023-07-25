let compchoice = ["rock", "paper", "scissors"]
const playerSelection = "scissors";
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
    function playRound(playerSelection, computerSelection) {
        if (computerSelection === 'rock' && playerSelection === 'rock') {
            console.log("It's a tie. Two rocks.");
          } if (computerSelection === 'rock' && playerSelection === 'paper') {
            playerScore++;
            console.log( 'Paper covers rock. You win!');
            console.log(playerScore)
          } if (computerSelection === 'rock' && playerSelection === 'scissors') {
            console.log( 'Rock breaks scissors. You lose.');
            computerScore++;
          } if (computerSelection === 'paper' && playerSelection === 'rock') {
            console.log( 'Paper covers rock. You lose.');
            computerScore++;
          } if (computerSelection === 'paper' && playerSelection === 'paper') {
            console.log( 'Two papers. You tie.');
          } if (computerSelection === 'paper' && playerSelection === 'scissors') {
            playerScore++;
            console.log(playerScore)
            console.log( 'Scissors cut paper. You win!');
          } if (computerSelection === 'scissors' && playerSelection === 'rock') {
            playerScore++;
            console.log(pl)
            console.log( 'Rock breaks scissors. You win!');
          } if (computerSelection === 'scissors' && playerSelection === 'paper') {
            computerScore++;
            console.log(computerScore)
            console.log( 'Scissors cut paper. You los)e.');
          } if (computerSelection === 'scissors' && playerSelection === 'scissors') {
            console.log( 'Two scissors. You tie.');
          }
          
    }   
    
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
}

// function getPlayerChoice(){
//     let validatedInput = false
//     while(validatedInput == false){
//         const userChoice = prompt('Choose Your Weapon', 'Rock, Paper, Scissors')
//         if(userChoice == null){
//             continue;
//         }
//         const choiceInLower = userChoice.toLowerCase()
//         if(options.includes(choiceInLower)){
//             validatedInput = true
//             return choiceInLower
//         }
//     }
// }


game()
