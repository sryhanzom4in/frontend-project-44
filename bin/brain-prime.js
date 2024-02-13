/* eslint-disable no-else-return */
import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';

const name = greetings();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const getRandomInt = (max = 20) => Math.floor(Math.random() * max + 1);
let val = getRandomInt();
let primeSqrt = Math.floor(Math.sqrt(val));
let count = 0;
let correctAnswer = 'yes';
const isAnswerCorrect = (answer) => {
    for (let i = 2; i <= primeSqrt + 1; i += 1) {
        if (val % i === 0 && answer === 'no') {
            return true;
        } else if (val % i !== 0 && answer === 'yes') {
            return true;
        } else if (val % i === 0 && answer === 'yes') {
            correctAnswer = 'no';
        } else if (val % i !== 0 && answer === 'no') {
            correctAnswer = 'yes';
        }
        if (i === primeSqrt) {
            return false;
        }
    }
};
const isPrime = (answer) => {
    if (isAnswerCorrect(answer) === true) {
        count += 1;
        console.log('Correct!');
    } else {
        count += 10;
        console.log(
            `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"\nLet's try again, ${name}.`
        );
    }
};
while (count < 3) {
    console.log(val);
    console.log(primeSqrt);
    console.log(`Question: ${val}`);
    const answer = readlineSync.question('Your answer: ');
    isPrime(answer);
    val = getRandomInt();
    primeSqrt = Math.floor(Math.sqrt(val));
    if (count === 3) {
        console.log(`Congratulations, ${name}!`);
    }
}
