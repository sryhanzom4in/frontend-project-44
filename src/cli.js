/* eslint-disable no-unused-vars */
import readlineSync from 'readline-sync';

const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ') || 'User';
  console.log(`Hello, ${name}`);
  return name;
};
export default greetings;
