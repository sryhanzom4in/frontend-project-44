export const actionsArray = ['', '*', '-', '+'];
export const whatsExpression = (actionIndex, correctAnswer, firstNum, secondNum) => {
    if (actionsArray[actionIndex] === '*') {
        correctAnswer = firstNum * secondNum;
    } else if (actionsArray[actionIndex] === '-') {
        correctAnswer = firstNum - secondNum;
    } else {
        correctAnswer = firstNum + secondNum;
    }
    console.log(`${firstNum}    ${secondNum}`);
    console.log(correctAnswer);
    return correctAnswer;
};
