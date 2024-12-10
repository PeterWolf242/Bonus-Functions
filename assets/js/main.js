let body = document.querySelector("body");
let Highlight = document.querySelector("h2");
let resetButton = document.querySelector("button");

let ballEins = document.querySelector(".ball1");
let ballZwei = document.querySelector(".ball2");
let ballDrei = document.querySelector(".ball3");
let ballVier = document.querySelector(".ball4");

let Balls = document.querySelector(".SuperBalls");
let aktivBox = document.querySelector(".aktiv_box");

let aktivBoxEins = document.querySelector(".aktiv_box1");
let aktivBoxZwei = document.querySelector(".aktiv_box2");
let aktivBoxDrei = document.querySelector(".aktiv_box3");
let aktivBoxVier = document.querySelector(".aktiv_box4");

function ball1() {
    body.style.backgroundColor = "#213a58";
    Highlight.style.color = "#46dfb1";
    // ballEins.style.boxShadow = "0 0 20px lime";
    aktivBoxEins.style.display = "block";
    noEffekt2();
    noEffekt3();
    noEffekt4();
}

function ball2() {
    body.style.backgroundColor = "#42131d";
    Highlight.style.color = "#fe8491";
    // ballZwei.style.border = "6px solid lime";
    aktivBoxZwei.style.display = "block";
    noEffekt1();
    noEffekt3();
    noEffekt4();
}

function ball3() {
    body.style.backgroundColor = "#101720";
    Highlight.style.color = "#b3e5fc";
    // ballDrei.style.border = "6px solid lime";
    aktivBoxDrei.style.display = "block";
    noEffekt1();
    noEffekt2();
    noEffekt4();
}

function ball4() {
    body.style.backgroundColor = "#0d1e4c";
    Highlight.style.color = "#c48cb3";
    // ballVier.style.border = "6px solid lime";
    aktivBoxVier.style.display = "block";
    noEffekt1();
    noEffekt2();
    noEffekt3();
}

function ColorReset() {
    body.style.backgroundColor = "var(--color_black)";
    Highlight.style.color = "var(--color_white)";
    resetButton.style.backgroundColor = "#ffffff";
    resetButton.style.Color = "#000000";
    resetButton.style.boxShadow = "none";
    ballZwei.style.border = "none";
    noEffekt1();
    noEffekt2();
    noEffekt3();
    noEffekt4();
}

function noEffekt1() {
    ballEins.style.border = "none";
    ballEins.style.boxShadow = "none";
    aktivBoxEins.style.display = "none";
}

function noEffekt2() {
    ballZwei.style.border = "none";
    ballZwei.style.boxShadow = "none";
    aktivBoxZwei.style.display = "none";
}

function noEffekt3() {
    ballDrei.style.border = "none";
    ballDrei.style.boxShadow = "none";
    aktivBoxDrei.style.display = "none";
}

function noEffekt4() {
    ballVier.style.border = "none";
    ballVier.style.boxShadow = "none";
    aktivBoxVier.style.display = "none";
}


