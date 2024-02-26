export const actionsArray = ['', '*', '-', '+'];
export const whatsExpression = (actionIndex, firstNum, secondNum) => {
  let correctAnswer;
  if (actionsArray[actionIndex] === '*') {
    correctAnswer = firstNum * secondNum;
  } else if (actionsArray[actionIndex] === '-') {
    correctAnswer = firstNum - secondNum;
  } else {
    correctAnswer = firstNum + secondNum;
  }
  return +correctAnswer;
};
