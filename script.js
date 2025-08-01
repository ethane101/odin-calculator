// add the buttons to the calculator in JS to make attaching event 
// listeners easier
const topSection = document.querySelector("#top-sect");
const clearButton = document.createElement("button");
clearButton.id = "AC";
clearButton.textContent = "AC";
topSection.appendChild(clearButton)

// different color for each button row
const buttonBgColors = ["#FFCBE1", "#D6E5BD", "#F9E1A8", "#DCCCEC", "#FFDAB4"];
const buttonBorderColors = ["#876d78ff", "#879275ff", "#938463ff", "#8b7d98ff", "#9f8266ff"];

// add number buttons
const numpadNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbers = document.querySelector("#numbers");

numpadNumbers.forEach(num => {
    const button = document.createElement("button");
    button.classList.add("number-button");
    button.id = `${num}`;
    button.textContent = `${num}`;
    button.style = `background-color: ${buttonBgColors[Math.ceil(num/3 + 0.1)]}; border: 0.25vw solid ${buttonBorderColors[Math.ceil(num/3 + 0.1)]};`;
    numbers.appendChild(button);
});

// add operator buttons
const operatorSymbols = ['+', '-', 'x', '/', '='];
const operators = document.querySelector("#operators");

let operatorCount = 0;
operatorSymbols.forEach(operator => {
    const button = document.createElement("button");
    button.classList.add("operator-button");
    button.id = `${operator}`;
    button.textContent = `${operator}`;
    button.style = `background-color: ${buttonBgColors[operatorCount]}; border: 0.25vw solid ${buttonBorderColors[operatorCount]};`;
    operators.appendChild(button);
    operatorCount++;
});

// create mechanism for keeping track of the number and operation
// maybe have a virtual element representing the screen element?

const screen = document.querySelector("#screen");
let screenContent = "";

numbers.addEventListener('click', (e) => {
    let num = e.target.id;
    screenContent += num;
    screen.textContent = screenContent;
});

clearButton.addEventListener('click', (e) => {
    screenContent = "";
    screen.textContent = screenContent;
});

operators.addEventListener('click', (e) => {
    let operator = e.target.id;
    console.log(operator);
});