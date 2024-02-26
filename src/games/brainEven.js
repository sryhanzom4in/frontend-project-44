const isEven = (num) => {
  let correctAnsweru;
  if (num % 2 === 0) {
    correctAnsweru = 'yes';
  } else correctAnsweru = 'no';
  return correctAnsweru;
};

export default isEven;
