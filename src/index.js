/* eslint-disable no-else-return */
import getRandomInt from './utils/getRandom.js';
import isEven from './games/brainEven.js';
import whatsExpression from './games/brainCalc.js';
import brainProgression from './games/brainProgression.js';
import brainGcd from './games/brainGcd.js';
import brainPrime from './games/brainPrime.js';

let num = getRandomInt();
let firstNum = getRandomInt();
let secondNum = getRandomInt();
let actionIndex = getRandomInt(3);
let primeSqrt = Math.floor(Math.sqrt(num));

const whatsCorrectAnswer = (gameName) => {
    let correctAnswer;
    if (gameName === 'brainEven') {
        isEven(num, correctAnswer);
    } else if (gameName === 'brainCalc') {
        whatsExpression(actionIndex, correctAnswer, firstNum, secondNum);
        // создание верного ответа для игры калькулятора
    } else if (gameName === 'brainProgression') {
        brainProgression(correctAnswer);
        // создание верного ответа и массива для игры на арифметическую прогрессию
    } else if (gameName === 'brainGcd') {
        brainGcd(firstNum, secondNum, correctAnswer);
        // создание верного ответа для игры НОД
    } else if (gameName === 'brainPrime') {
        brainPrime(num, correctAnswer, primeSqrt);
        // создание верного ответа для игры на простое число
    }
    return correctAnswer;
};
whatsCorrectAnswer('brainPrime');
// const getGame = (game) => {
//     while (counter < 3) {
// const answer = parseInt(readlineSync.question('Your answer: '));
//         if (answer === correctAnswer) {
//             counter += 1;
//             console.log(`Correct!`);
//         } else {
//             console.log(
//                 `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`
//             );
//             break;
//         }
//     }
// };
