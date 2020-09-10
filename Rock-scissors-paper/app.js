(()=>{

    var userChoice = document.getElementsByTagName("button").value;

    console.log(userChoice)
    // computer
    let computerChoice = Math.random();
    if (computerChoice < 0.34){
        computerChoice = "rock";
    }else if (computerChoice <= 0.67){
        computerChoice = "paper";

    }else{
        computerChoice = "scissors";
    }

    function compare(userChoice, computerChoice) {
        if (userChoice === computerChoice){
            return "it's a tie";
        }
        if (userChoice === "rock"){
            if (computerChoice === "scissors"){
                return ("You win");
            }else if (computerChoice === "paper"){
                return ("You lose");

            }
        }
        if (userChoice === "paper"){
            if (computerChoice === "scissors"){
                return ("You lose");
            }else if (computerChoice === "rock"){
                return ("You win");
                }
        }
        if (userChoice === "scissors"){
            if (computerChoice === "rock"){
                return ("You lose");
            }else if (computerChoice === "paper"){
                return ("You win");
            }


    }









})();