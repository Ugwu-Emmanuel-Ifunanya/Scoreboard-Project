let homeEL = document.getElementById("homePoints")
let guestEL = document.getElementById("guestPoints")

let homeScore = 0 
let guestScore = 0


function homeOneP() {
    homeScore += 1
    homeEL.innerHTML = homeScore

}

function homeTwoP() {
    homeScore += 2
    homeEL.innerHTML = homeScore
}

function homeThreeP() {
    homeScore += 3
    homeEL.innerHTML = homeScore
}

function guestOneP() {
    guestScore += 1
    guestEL.innerHTML = guestScore
}

function guestTwoP() {
    guestScore += 2
    guestEL.innerHTML = guestScore
}

function guestThreeP() {
    guestScore += 3
    guestEL.innerHTML = guestScore
}