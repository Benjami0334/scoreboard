let increaseHomeBtn = document.getElementById("increase-btn")
let homeTeamEl = document.getElementById("home-team")
let homeTeam = 0

let increaseGuestBtn = document.getElementById("increase-btn")
let guestTeamEl = document.getElementById("guest-team")
let guestTeam = 0

function increaseByOne() {
    homeTeam += 1
    homeTeamEl.textContent = homeTeam
}

function increaseByTwo() {
    homeTeam += 2
    homeTeamEl.textContent = homeTeam
}

function increaseByThree() {
    homeTeam += 3
    homeTeamEl.textContent = homeTeam
}

function increaseGuestByOne() {
    guestTeam += 1
    guestTeamEl.textContent = guestTeam
}

function increaseGuestByTwo() {
    guestTeam += 2
    guestTeamEl.textContent = guestTeam
}

function increaseGuestByThree() {
    guestTeam += 3
    guestTeamEl.textContent = guestTeam
}