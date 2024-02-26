/* eslint-disable no-case-declarations */
/* eslint-disable indent */
/* eslint-disable no-else-return */
import readlineSync from 'readline-sync';
import greetings from './cli.js';
import getRandomInt from './utils/getRandom.js';
import isEven from './games/brainEven.js';
import { whatsExpression, actionsArray } from './games/brainCalc.js';
import brainProgression from './games/brainProgression.js';
import brainGcd from './games/brainGcd.js';
import brainPrime from './games/brainPrime.js';

let num = getRandomInt();
let firstNum = getRandomInt();
let secondNum = getRandomInt();
let actionIndex = getRandomInt(3);
let primeSqrt = Math.floor(Math.sqrt(num));

let correctAnswer;
export const whatsCorrectAnswer = (gameName) => {
  switch (gameName) {
    case 'brainEven':
      correctAnswer = isEven(num, correctAnswer);
      break;
    case 'brainCalc':
      correctAnswer = whatsExpression(actionIndex, firstNum, secondNum);
      break;
    case 'brainProgression':
      const [arr, correct] = brainProgression();
      console.log(`Question: ${arr.join(' ')}`);
      correctAnswer = correct;
      return correctAnswer;
    case 'brainGcd':
      correctAnswer = brainGcd(firstNum, secondNum, correctAnswer);
      break;
    case 'brainPrime':
      correctAnswer = brainPrime(num, primeSqrt);
      break;
    default:
      console.log('bruh');
  }
  return correctAnswer;
};
export const getGameRule = (game) => {
  let gameRule;
  let question;
  switch (game) {
    case 'brainEven':
      gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
      question = `Question: ${num}`;
      break;
    case 'brainCalc':
      gameRule = 'What is the result of the expression?';
      question = `Question: ${firstNum} ${actionsArray[actionIndex]} ${secondNum}`;
      break;
    case 'brainProgression':
      gameRule = 'What number is missing in the progression?';
      return gameRule;
    case 'brainGcd':
      gameRule = 'Find the greatest common divisor of given numbers.';
      question = `Question: ${firstNum} ${secondNum}`;
      break;
    case 'brainPrime':
      gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
      question = `Question: ${num}`;
      break;
    default:
      console.log('bruh');
  }
  return [gameRule, question];
};
export const getGame = (game) => {
  let counter = 0;
  const name = greetings();
  while (counter < 3) {
    const gameRule = getGameRule(game);
    // строка 67-75 - отработка отдельного случая с игрой progression
    if (counter === 0 && game !== 'brainProgression') {
      console.log(gameRule[0]);
    }
    if (counter === 0 && game === 'brainProgression') {
      console.log(gameRule);
    } else if (Array.isArray(gameRule)) {
      console.log(gameRule[1]);
    }
    correctAnswer = whatsCorrectAnswer(game);
    let userAnswer = readlineSync.question('Your answer: ');
    userAnswer = parseInt(userAnswer, 10) || userAnswer;
    if (userAnswer === correctAnswer) {
      counter += 1;
      console.log('Correct!');
      num = getRandomInt();
      firstNum = getRandomInt();
      secondNum = getRandomInt();
      actionIndex = getRandomInt(3);
      primeSqrt = Math.floor(Math.sqrt(num));
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
      break;
    }
    if (counter === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
