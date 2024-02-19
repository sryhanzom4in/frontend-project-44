const brainGcd = (firstNum, secondNum, correctAnswer) => {
    console.log(`${firstNum}     ${secondNum}`);
    while (firstNum !== secondNum) {
        if (firstNum > secondNum) {
            firstNum -= secondNum;
        } else secondNum -= firstNum;
    }
    correctAnswer = firstNum;
    console.log(correctAnswer);
};

export default brainGcd;
