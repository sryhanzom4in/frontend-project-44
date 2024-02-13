import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';

const getRandomInt = (max = 20) => Math.floor(Math.random() * max + 1);

const name = greetings();
let count = 0;
const progressionVal = (answer, trueVal) => {
    if (answer === trueVal) {
        console.log('Correct!');
        count += 1;
    } else {
        count += 10;
        console.log(
            `${answer} is wrong answer ;(. Correct answer was ${trueVal}.\nLet's try again, ${name}`
        );
    }
};
while (count < 3) {
    const arr = [];
    let firstProgressionVal = getRandomInt(100);
    const progressionDiff = getRandomInt(10);
    while (arr.length !== 10) {
        const result = progressionDiff + firstProgressionVal;
        arr.push(result);
        firstProgressionVal = result;
    }
    const index = getRandomInt(9);
    const trueVal = arr[index - 1] + (arr[index + 1] - arr[index - 1]) / 2;
    arr[index] = '..';
    console.log(`Question: ${arr}`);
    const answer = parseInt(
        readlineSync.question('Your answer: ') || 'no answer'
    );
    progressionVal(answer, trueVal);
    if (count === 3) {
        console.log(`Congratulations, ${name}!`);
    }
}
