import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';

const getRandomInt = (max = 20) => Math.floor(Math.random() * max + 1);

const name = greetings();

console.log('Find the greatest common divisor of given numbers.');
let firstNum = getRandomInt();
let secondNum = getRandomInt();
let count = 0;
let nod = 0;

const nodCheck = (answer) => {
    while (firstNum !== secondNum) {
        if (firstNum > secondNum) {
            firstNum -= secondNum;
        } else secondNum -= firstNum;
    }
    nod = firstNum;
    if (answer === nod) {
        count += 1;
        console.log('Correct!');
    } else {
        count += 10;
        console.log(`${answer} is wrong answer ;(. Correct answer was ${nod}.`);
        console.log(`Let's try again, ${name}!`);
    }
};
while (count < 3) {
    console.log(`Question: ${firstNum} ${secondNum}`);
    const answer = parseInt(
        readlineSync.question('Your answer: ') || 'no answer'
    );
    nodCheck(answer);
    firstNum = getRandomInt();
    secondNum = getRandomInt();
    if (count === 3) {
        console.log(`Congratulations, ${name}!`);
    }
}
