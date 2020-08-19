let clickRock = document.querySelector("#click-on-rock")
clickRock.addEventListener('click', () => {
    roshambo("rock")
})

function roshambo(input) {
    let rps = ["rock", "paper", "scissors"]

    let randomNumber = Math.floor(Math.random() * 3)
    let cc = rps[randomNumber]

    if (input === cc) {
        alert("you tied")
    }
    else if (input === "rock" && cc === "paper") {
        alert("you lose, the winner chose paper")
    }
    else if (input === "rock" && cc === "scissors") {
        alert("you win, the loser chose scissors")
    }
    else if (input === "paper" && cc === "rock") {
        alert("you win, the loser chose rock")
    }
    else if (input === "paper" && cc === "scissors") {
        alert("you lose, the winner chose scissors")
    }
    else if (input === "scissors" && cc === "rock") {
        alert("you lose, the winner chose rock")
    }
    else if (input === "scissors" && cc === "paper") {
        alert("you win, the loser chose paper")
    }
}


let clickPaper = document.querySelector("#click-on-paper")
clickPaper.addEventListener('click', () => {
    roshambo("paper")
})

function roshambo(input) {
    let rps = ["rock", "paper", "scissors"]

    let randomNumber = Math.floor(Math.random() * 3)
    let cc = rps[randomNumber]

    if (input === cc) {
        alert("you tied")
    }
    else if (input === "rock" && cc === "paper") {
        alert("you lose, the winner chose paper")
    }
    else if (input === "rock" && cc === "scissors") {
        alert("you win, the loser chose scissors")
    }
    else if (input === "paper" && cc === "rock") {
        alert("you win, the loser chose rock")
    }
    else if (input === "paper" && cc === "scissors") {
        alert("you lose, the winner chose scissors")
    }
    else if (input === "scissors" && cc === "rock") {
        alert("you lose, the winner chose rock")
    }
    else if (input === "scissors" && cc === "paper") {
        alert("you win, the loser chose paper")
    }
}


let clickScissors = document.querySelector("#click-on-scissors")
clickScissors.addEventListener('click', () => {
    roshambo("scissors")
})

function roshambo(input) {
    let rps = ["rock", "paper", "scissors"]

    let randomNumber = Math.floor(Math.random() * 3)
    let cc = rps[randomNumber]

    if (input === cc) {
        alert("you tied")
    }
    else if (input === "rock" && cc === "paper") {
        alert("you lose, the winner chose paper")
    }
    else if (input === "rock" && cc === "scissors") {
        alert("you win, the loser chose scissors")
    }
    else if (input === "paper" && cc === "rock") {
        alert("you win, the loser chose rock")
    }
    else if (input === "paper" && cc === "scissors") {
        alert("you lose, the winner chose scissors")
    }
    else if (input === "scissors" && cc === "rock") {
        alert("you lose, the winner chose rock")
    }
    else if (input === "scissors" && cc === "paper") {
        alert("you win, the loser chose paper")
    }
}

