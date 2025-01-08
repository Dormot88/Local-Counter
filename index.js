
let homeEl = document.getElementById("homeScore") 
let guestEl = document.getElementById("guestScore") 

let homeCount = 0;
let guestCount = 0;

function homeOne(){
    homeCount += 1
    homeEl.textContent = homeCount
}

function homeTwo(){
    homeCount += 2
    homeEl.textContent = homeCount
}

function homeThree(){
    homeCount += 3
    homeEl.textContent = homeCount
}


function guestOne(){
    guestCount += 1
    guestEl.textContent = guestCount
}

function guestTwo(){
    guestCount += 2
    guestEl.textContent = guestCount
}

function guestThree(){
    guestCount += 3
    guestEl.textContent = guestCount
}


function reset(){
    
    homeCount = 0
    guestCount = 0
    
    homeEl.textContent = 0
    guestEl.textContent = 0
}