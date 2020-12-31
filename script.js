const firstNum = document.querySelector("#firstNum");
const secondNum = document.querySelector("#secondNum");
const button = document.querySelector("#button");
const operator = document.querySelector("#operator");
const answer = document.querySelector("#answer");
const checkResult = document.querySelector("#checkResult");
const outcomeAnswer = document.querySelector("#outcomeAnswer");
const countProblem = document.querySelector("#countProblem");
const totalProblemsElement = document.querySelector("#total-problems");

const totalProblems = 10;
totalProblemsElement.textContent = totalProblems;



button.addEventListener("click", function () {
    generateRandomOperands();
    answer.value = "";
    outcomeAnswer.textContent = "";
    answer.disabled = false;
    numberOfEquation();

})

checkResult.addEventListener("click", function() {
    checkAnswer();
    answer.disabled = true;

})

generateRandomOperands();
operator.innerHTML = randomOperator();


/** 
 * Generate a random number betweem 0 and max (not inclusive)
 * @param {number} max - Maximum number up to which a random number can be chosen (default: 10)
 **/
function randomNumber(max = 10) {
    return Math.floor(Math.random() * max) + 0;
}

/** Generate a random mathematical operator */
function randomOperator(){
    const operators = ["*", "+", "-"];
    const index = randomNumber(operators.length);
    return operators[index];
}

/** Generate random operands for the mathematical operation */
function generateRandomOperands() {
    firstNum.innerHTML = randomNumber();
    secondNum.innerHTML = randomNumber();
}
/**Math calculations */
function solveMathProblem() {
    const num1 = +firstNum.textContent;
    const num2 = +secondNum.textContent;

    switch(operator.textContent) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
    }
    
}
 /**checking to see if answer is correct or incorrect */
function checkAnswer() {
    if(answer.value == solveMathProblem()) {
        outcomeAnswer.textContent = "Your answer is correct!"
    } else {
        outcomeAnswer.textContent = "Your answer is incorrect!";
    }
}

// function numberOfEquation(){
//     const totalProblems = 10;
//     const num = +countProblem.textContent;

//     for(var i = num; i <= totalProblems; i++){
//         countProblem.textContent = i;
//       }
// }



function numberOfEquation(){
    const num = +countProblem.textContent;

    if(num < totalProblems){
        countProblem.textContent++
    }
}

    

 



















     