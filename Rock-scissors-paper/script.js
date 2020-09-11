
// get user choice
document.getElementById("rock").addEventListener("click", function () {
    userChoice = "rock";
    playGame()

})
document.getElementById("paper").addEventListener("click", function () {
    userChoice = "paper";
    playGame()

})
document.getElementById("scissors").addEventListener("click", function () {
    userChoice = "scissors";
    playGame()

})


// get computer choice & play game
function playGame() {

    let computerChoice = Math.random();

    if (computerChoice < 0.34) {
        computerChoice = "rock";
        document.getElementById("computer-choice").innerHTML = "Computer picks rock";

    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
        document.getElementById("computer-choice").innerHTML = "Computer picks paper";

    } else {
        computerChoice = "scissors";
        document.getElementById("computer-choice").innerHTML = "Computer picks scissors";
    }

    if (userChoice === computerChoice) {
        document.getElementById("result").innerHTML = "It's a draw";
    }
    if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            document.getElementById("result").innerHTML = "You pick rock, you win";

        } else if (computerChoice === "paper") {
            document.getElementById("result").innerHTML = "You pick rock, you lose";

        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            document.getElementById("result").innerHTML = "You pick paper, you lose";

        } else if (computerChoice === "rock") {
            document.getElementById("result").innerHTML = "You pick paper, you win";

        }
    }
    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            document.getElementById("result").innerHTML = "You pick scissors, you lose";

        } else if (computerChoice === "paper") {
            document.getElementById("result").innerHTML = "You pick scissors, you win";

        }

    }
}

