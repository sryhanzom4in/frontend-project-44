/* eslint-disable no-param-reassign */
const brainGcd = (firstNum, secondNum) => {
  while (firstNum !== secondNum) {
    if (firstNum > secondNum) {
      firstNum -= secondNum;
    } else secondNum -= firstNum;
  }
  return firstNum;
};

export default brainGcd;
