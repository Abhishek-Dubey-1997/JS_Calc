let userinput = document.getElementById("input");
userinput.value = 0;

let expression = "";

function click1(num) {

    expression = expression + num;
    userinput.value = expression;
}

function erase() {
    expression = ""
    userinput.value = expression
}

function delete_one() {
    expression = expression.slice(0, -1)
    userinput.value = expression

}


function calc() {
    expression = eval(expression)
    userinput.value = expression
}
let bg = document.querySelector("article")

function dark() {
    cal_bg.style.background = "black"
    document.body.style.color = "white"
    bg.style.background = "white"
}

function light() {
    document.body.style.background = "white"
    document.body.style.color = "black"
    bg.style.background = "black"
}