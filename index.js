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


    //  <div class="container">
    //         <div class="home">
    //             <h3>HOME</h3>
    //             <h2 id="home-score score-board">0</h2>
    //             <button type="button" onclick="plus1()">+1</button>
    //             <button type="button" onclick="plus2()">+2</button>
    //             <button type="button" onclick="plus3()">+3</button>
    //         </div>
    //         <div class="guest">
    //             <h3>GUEST</h3>
    //             <h2 id="guest-score score-board">0</h2>
    //             <button type="button" onclick="plus1()">+1</button>
    //             <button type="button" onclick="plus2()">+2</button>
    //             <button type="button" onclick="plus3()">+3</button>
    //         </div>