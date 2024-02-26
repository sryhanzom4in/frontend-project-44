export const actionsArray = ['', '*', '-', '+'];
export const whatsExpression = (actionIndex, correctAnswer, firstNum, secondNum) => {
  let correctAnsweru;
  if (actionsArray[actionIndex] === '*') {
    correctAnsweru = firstNum * secondNum;
  } else if (actionsArray[actionIndex] === '-') {
    correctAnsweru = firstNum - secondNum;
  } else {
    correctAnsweru = firstNum + secondNum;
  }
  return +correctAnsweru;
};
