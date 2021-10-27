let yourScore = document.getElementById("scoreU")
let houseScore = document.getElementById("scoreComp")
let yourSum = 0
let houseSum = 0
let summary = document.getElementById("result")
let computer = document.getElementById("compVal")
let urself = document.getElementById("yourVal")


function rock() {
    urself.textContent = "🧱"
    let rockk = 1
    let paperr = 2
    let scissorr = 3
    let comp = Math.floor(Math.random()*3)+1
    if(comp === 1) {
        computer.textContent = "🧱"
        console.log("Game tied")
        summary.textContent = "Game Tied"
        summary.style.backgroundColor = "black"
        summary.style.color = "silver"
        yourSum = 0
        houseSum = 0
    } else if (comp == 2) {
        computer.textContent = "📜"
        console.log("computer win")
        summary.textContent = "House Won..!"
        summary.style.backgroundColor = "red"
        if(yourSum===0) {
            yourSum=0
            houseSum++
        } else {
            yourSum--
            houseSum++
        }
    } else {
        computer.textContent = "✂️"
        console.log("YOU wins")
        summary.textContent = "You Won..!"
        summary.style.backgroundColor = "silver"
        summary.style.color = "black"
        if(houseSum===0) {
            houseSum=0
            yourSum++
        } else {
            yourSum++
            houseSum--
        }
    }
    yourScore.textContent = yourSum
    houseScore.textContent = houseSum
}

function paper() {
    urself.textContent = "📜"
    let rockk = 1
    let paperr = 2
    let scissorr = 3
    let comp = Math.floor(Math.random()*3)+1
    if(comp === 2) {
        computer.textContent = "📜"
        console.log("Game tied")
        summary.textContent = "Game Tied"
        summary.style.backgroundColor = "black"
        summary.style.color = "silver"
        yourSum = 0
        houseSum = 0
    } else if (comp == 1) {
        computer.textContent = "🧱"
        console.log("You win win")
        summary.textContent = "You Won..!"
        summary.style.backgroundColor = "silver"
        summary.style.color = "black"
        if(houseSum===0) {
            houseSum=0
            yourSum++
        } else {
            yourSum++
            houseSum--
        }
    } else {
        computer.textContent = "✂️"
        console.log("computer wins")
        summary.textContent = "House Won..!"
        summary.style.backgroundColor = "red"
        if(yourSum===0) {
            yourSum=0
            houseSum++
        } else {
            yourSum--
            houseSum++
        }
    }
    yourScore.textContent = yourSum
    houseScore.textContent = houseSum
}

function scissor() {
    urself.textContent = "✂️"
    let rockk = 1
    let paperr = 2
    let scissorr = 3
    let comp = Math.floor(Math.random()*3)+1
    if(comp === 3) {
        computer.textContent = "✂️"
        console.log("Game tied")
        summary.textContent = "Game Tied"
        summary.style.backgroundColor = "black"
        summary.style.color = "silver"
        yourSum = 0
        houseSum = 0
    } else if (comp == 1) {
        computer.textContent = "🧱"
        console.log("computer win")
        summary.textContent = "House Won..!"
        summary.style.backgroundColor = "red"
        if(yourSum===0) {
            yourSum=0
            houseSum++
        } else {
            yourSum--
            houseSum++
        }
    } else {
        computer.textContent = "📜"
        console.log("you win wins")
        summary.textContent = "You Won..!"
        summary.style.backgroundColor = "silver"
        summary.style.color = "black"
        if(houseSum===0) {
            houseSum=0
            yourSum++
        } else {
            yourSum++
            houseSum--
        }
    }
    yourScore.textContent = yourSum
    houseScore.textContent = houseSum
}
