import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';

const getRandomInt = (max = 1000) => Math.floor(Math.random() * max);
const name = greetings();
let a = getRandomInt();
let b = getRandomInt();
let count = 0;
const isAnswerTrue = (firstN = a, secondN = b) => {
  const answer = parseInt(readlineSync.question('Your answer: '));
  const correctAnswer = a + b;
  if (answer === a + b) {
    console.log('Correct!');
    count += 1;
    return true;
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}.`
    );
    count += 10;
    return false;
  }
};

while (count < 3) {
  console.log(`Question: ${a} + ${b}`);
  isAnswerTrue();
  a = getRandomInt();
  b = getRandomInt();
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
