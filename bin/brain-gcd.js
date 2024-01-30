import greetings from '../src/cli.js';

const getRandomInt = (max = 20) => Math.floor(Math.random() * max);

greetings();

console.log('Find the greatest common divisor of given numbers.');
// таким образом улучшается юзер-экспириенс, избегаем кейсов с НОД = 1.
let nod = getRandomInt();
let firstNum = nod * getRandomInt();
let secondNum = nod * getRandomInt();
const nodCheck = () => {};
