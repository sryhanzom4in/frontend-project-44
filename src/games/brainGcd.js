/* eslint-disable no-param-reassign */
const brainGcd = (firstNum, secondNum, correctAnswer) => {
  while (firstNum !== secondNum) {
    if (firstNum > secondNum) {
      firstNum -= secondNum;
    } else secondNum -= firstNum;
  }
  correctAnswer = firstNum;
  return correctAnswer;
};

export default brainGcd;
