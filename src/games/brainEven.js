const isEven = (num, correctAnswer) => {
    if (num % 2 === 0) {
        correctAnswer = 'yes';
    } else correctAnswer = 'no';
    console.log(num);
    console.log(correctAnswer);
    return correctAnswer;
};

export default isEven;
