/* eslint-disable no-else-return */
const brainPrime = (num, primeSqrt) => {
  let correctAnswer;
  if (num === 1 || num === 2 || num === 3) {
    correctAnswer = 'yes';
    return correctAnswer;
  } else {
    for (let i = 2; i <= primeSqrt; i += 1) {
      if (num % i === 0) {
        correctAnswer = 'no';
        return correctAnswer;
      } else if (num % i !== 0) {
        correctAnswer = 'yes';
      }
      if (i === primeSqrt && num % i === 0) {
        return correctAnswer;
      }
    }
  }
  return correctAnswer;
};

export default brainPrime;
