const isEven = (num) => {
  let correctAnswer;
  if (num % 2 === 0) {
    correctAnswer = 'yes';
  } else correctAnswer = 'no';
  return correctAnswer;
};

export default isEven;
