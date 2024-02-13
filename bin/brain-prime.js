/* eslint-disable no-else-return */
import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';

const name = greetings();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const getRandomInt = (max = 20) => Math.floor(Math.random() * max + 1);
let val = getRandomInt();
let primeSqrt =
    Math.floor(Math.sqrt(val)) >= 2 ? Math.floor(Math.sqrt(val)) : 2;
let count = 0;
const whatsCorrect = () => {
    let correctAnswer = '';

    for (let i = 2; i <= primeSqrt; i += 1) {
        if (val === 2) {
            correctAnswer = 'yes';
            return correctAnswer;
        }
        if (val % i === 0) {
            correctAnswer = 'no';
        } else if (val % i !== 0) {
            correctAnswer = 'yes';
        }
        if (i === primeSqrt) {
            return correctAnswer;
        }
    }
};
const isAnswer = whatsCorrect();
const isAnswerCorrect = (answer) => {
    if (answer === isAnswer) {
        count += 1;
        console.log('Correct!');
    } else {
        count += 10;
        console.log(
            `"${answer}" is wrong answer ;(. Correct answer was "${isAnswer}"\nLet's try again, ${name}.`
        );
    }
};
while (count < 3) {
    console.log(val);
    console.log(primeSqrt);
    console.log(`Question: ${val}`);
    const answer = readlineSync.question('Your answer: ');
    isAnswerCorrect(answer);
    val = getRandomInt();
    primeSqrt = Math.floor(Math.sqrt(val));
    if (count === 3) {
        console.log(`Congratulations, ${name}!`);
    }
}
