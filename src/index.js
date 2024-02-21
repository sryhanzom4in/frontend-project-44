/* eslint-disable no-else-return */
import readlineSync from 'readline-sync';
import greetings from './cli.js';
import getRandomInt from './utils/getRandom.js';
import isEven from './games/brainEven.js';
import { whatsExpression } from './games/brainCalc.js';
import brainProgression from './games/brainProgression.js';
import brainGcd from './games/brainGcd.js';
import brainPrime from './games/brainPrime.js';
import { actionsArray } from './games/brainCalc.js';

let num = getRandomInt();
let firstNum = getRandomInt();
let secondNum = getRandomInt();
let actionIndex = getRandomInt(3);
let primeSqrt = Math.floor(Math.sqrt(num));

let correctAnswer;
const whatsCorrectAnswer = (gameName) => {
    if (gameName === 'brainEven') {
        correctAnswer = isEven(num, correctAnswer);
    } else if (gameName === 'brainCalc') {
        correctAnswer = whatsExpression(actionIndex, correctAnswer, firstNum, secondNum);
        // создание верного ответа для игры калькулятора
    } else if (gameName === 'brainProgression') {
        let [arr, correctAnswery] = brainProgression();
        console.log(arr);
        console.log(correctAnswery);
        // создание верного ответа и массива для игры на арифметическую прогрессию
        correctAnswer = correctAnswery;
        return arr;
    } else if (gameName === 'brainGcd') {
        correctAnswer = brainGcd(firstNum, secondNum, correctAnswer);
        // создание верного ответа для игры НОД
    } else if (gameName === 'brainPrime') {
        correctAnswer = brainPrime(num, correctAnswer, primeSqrt);
        // создание верного ответа для игры на простое число
    }
    return correctAnswer;
};
const getGameRule = (game) => {
    let gameRule;
    let question;
    if (game === 'brainEven') {
        gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
        question = `Question: ${num}`;
    } else if (game === 'brainCalc') {
        gameRule = 'What is the result of the expression?';
        question = `Question: ${firstNum} ${actionsArray[actionIndex]} ${secondNum}`;
    } else if (game === 'brainProgression') {
        gameRule = 'What number is missing in the progression?';
        question = `Question: ${arr}`;
    } else if (game === 'brainGcd') {
        gameRule = 'Find the greatest common divisor of given numbers.';
        question = `Question: ${firstNum} ${secondNum}`;
    } else if (game === 'brainPrime') {
        gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
        question = `Question: ${num}`;
    }
    return [gameRule, question];
};
const getGame = (game) => {
    let counter = 0;
    const name = greetings();
    while (counter < 3) {
        const gameRule = getGameRule(game);
        if (counter === 0) {
            console.log(gameRule[0]);
        }
        console.log(gameRule[1]);
        const correctAnsweru = whatsCorrectAnswer(game);
        let userAnswer = readlineSync.question('Your answer: ');
        userAnswer = parseInt(userAnswer) || userAnswer;
        if (userAnswer === correctAnsweru) {
            counter += 1;
            console.log('Correct!');
        } else {
            console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnsweru}".\nLet's try again, ${name}!`);
            break;
        }
        if (counter === 3) {
            console.log(`Congratulations, ${name}!`);
        }
        num = getRandomInt();
        firstNum = getRandomInt();
        secondNum = getRandomInt();
        actionIndex = getRandomInt(3);
        primeSqrt = Math.floor(Math.sqrt(num));
    }
};
getGame('brainPrime');
