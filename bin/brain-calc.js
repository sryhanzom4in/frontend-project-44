import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';

const getRandomInt = (max = 20) => Math.floor(Math.random() * max);
const name = greetings();
let firstNum = getRandomInt();
let secondNum = getRandomInt();
let count = 0;
const actionsArray = ['*', '-', '+'];
let actionIndex = getRandomInt(2);
const isAnswerTrue = (firstN = firstNum, secondN = secondNum) => {
    let correctAnswer;
    const answer = parseInt(readlineSync.question('Your answer: '), 10);
    if (actionsArray[actionIndex] === '*') {
        correctAnswer = firstN * secondN;
    } else if (actionsArray[actionIndex] === '-') {
        correctAnswer = firstN - secondN;
    } else correctAnswer = firstN + secondN;
    if (answer === correctAnswer) {
        count += 1;
        console.log('Correct!');
    } else {
        console.log(
            `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
        );
        console.log(`Let's try again, ${name}`);
        count += 10;
    }
};

while (count < 3) {
    console.log(
        `Question: ${firstNum} ${actionsArray[actionIndex]} ${secondNum}`
    );
    isAnswerTrue();
    a = getRandomInt();
    b = getRandomInt();
    actionIndex = getRandomInt(2);
    if (count === 3) {
        console.log(`Congratulations, ${name}!`);
    }
}
