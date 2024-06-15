let gameSeq = [];
let userSeq = [];
let gameStart = false;
let level = 0;
let h3 = document.querySelector("h3");
let btns = ["rosyBrown", "purple", "steelBlue", "lightBlue"];
let allBtns = document.querySelectorAll(".box");
for(button of allBtns) {
    button.addEventListener("click", btnPress);
}

function checkBtnPress(idx) {
    if(userSeq[idx] == gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(), 2000);
        }
    }else {
        h3.innerHTML = `!!Game Over!! Your Score is: <b>${level*10}</b><br>Press any key to start the game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "#bbbaba";
        }, 100)
        resetGame();
    }
}

function btnPress() {
    userFlash(this);
    let userColor = this.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkBtnPress(userSeq.length-1);
}

document.addEventListener("keypress", function() {
    if(gameStart == false) {
        console.log("start game");
        gameStart = true;
        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 100);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 100);
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let randInd = Math.floor(Math.random() *btns.length);
    let randBtn = document.querySelector(`.${btns[randInd]}`);
    let randColor = btns[randInd];
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function resetGame() {
    gameStart = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}