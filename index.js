let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function plus1(team) {
    if (team === "home"){
    homeScore.textContent = parseInt(homeScore.textContent) + 1;
    }
    else{
        guestScore.textContent = parseInt(guestScore.textContent) + 1;
    }
}
function plus2(team) {
    if (team === "home"){
    homeScore.textContent = parseInt(homeScore.textContent) + 2;
    }
    else{
        guestScore.textContent = parseInt(guestScore.textContent) + 2;
    }
}
function plus3(team) {
    if (team === "home"){
    homeScore.textContent = parseInt(homeScore.textContent) + 3;
    }
    else{
        guestScore.textContent = parseInt(guestScore.textContent) + 3;
    }
}
