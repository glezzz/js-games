
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

    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";

    } else {
        computerChoice = "scissors";
    }

    if (userChoice === computerChoice) {
        document.getElementById("result").innerHTML = "it's a draw";
    }
    if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            document.getElementById("result").innerHTML = "you win";

        } else if (computerChoice === "paper") {
            document.getElementById("result").innerHTML = "you lose";

        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            document.getElementById("result").innerHTML = "you lose";

        } else if (computerChoice === "rock") {
            document.getElementById("result").innerHTML = "you win";

        }
    }
    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            document.getElementById("result").innerHTML = "you lose";

        } else if (computerChoice === "paper") {
            document.getElementById("result").innerHTML = "you win";

        }

    }
}

