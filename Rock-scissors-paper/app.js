



    let userChosen
    let computerChosen
    let userChoice = document.getElementById("user-choice")
    let result = compare()
    let displayResult
    let possibleChoices = document.querySelectorAll(".choices")
    // get user choice
    possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) =>{
        userChosen = e.target.id
        getComputerChoice()
        compare()
        userChoice.innerHTML = userChosen
        computerChoice.innerHTML = computerChosen
        displayResult.innerHTML = result

    }))

    // computer
    let computerChoice = Math.random();
    function getComputerChoice() {

        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if (computerChoice <= 0.67) {
            computerChoice = "paper";

        } else {
            computerChoice = "scissors";
        }
    }


    function compare(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "it's a tie";
        }
        if (userChoice === "rock") {
            if (computerChoice === "scissors") {
                return result = "You win"
            } else if (computerChoice === "paper") {
                return result = "You lose"

            }
        }
        if (userChoice === "paper") {
            if (computerChoice === "scissors") {
                return result = "You lose"
            } else if (computerChoice === "rock") {
                return result = "You win"
            }
        }
        if (userChoice === "scissors") {
            if (computerChoice === "rock") {
                return result = "You lose"
            } else if (computerChoice === "paper") {
                return result = "You win"
            }


        }

    }

