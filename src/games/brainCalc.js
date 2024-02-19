const whatsExpression = (actionIndex, correctAnswer, firstNum, secondNum) => {
    const actionsArray = ['', '*', '-', '+'];
    if (actionsArray[actionIndex] === '*') {
        correctAnswer = firstNum * secondNum;
    } else if (actionsArray[actionIndex] === '-') {
        correctAnswer = firstNum - secondNum;
    } else {
        correctAnswer = firstNum + secondNum;
    }
    console.log(`${firstNum}    ${secondNum}`);
    console.log(correctAnswer);
};

export default whatsExpression;
