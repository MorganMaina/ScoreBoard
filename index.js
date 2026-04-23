let homescore = 0
let guestscore = 0

document.getElementById("score-no").textContent = homescore
document.getElementById("score-no").textContent = guestscore

function onePoint(){
    homescore += 1
    document.getElementById("homescore").textContent = homescore 

    }
function twoPoint(){
    homescore += 2
    document.getElementById("homescore").textContent = homescore 

    }
function threePoint(){
    homescore += 3
    document.getElementById("homescore").textContent = homescore 

    }
    
    function guestOnePoint(){
    guestscore += 1
    document.getElementById("guestscore").textContent = guestscore 

    }
function guestTwoPoint(){
    guestscore += 2
    document.getElementById("guestscore").textContent = guestscore 

    }
function guestThreePoint(){
    guestscore += 3
    document.getElementById("guestscore").textContent = guestscore 

    }
        



