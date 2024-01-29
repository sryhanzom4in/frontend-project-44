import readlineSync from "readline-sync";
import greetings from "../src/cli.js";

const getRandomInt = (max = 1000) => Math.floor(Math.random() * max);
let randomInt = getRandomInt();
const name = greetings();
let count = 0;
const isValEven = (answer) => {
  if (randomInt % 2 === 0 && answer === "yes") {
    console.log("Correct!");
    count += 1;
  } else if (randomInt % 2 !== 0 && answer === "no") {
    console.log("Correct!");
    count += 1;
  } else if (randomInt % 2 !== 0 && answer === "yes") {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log(`Let\'s try again, ${name}!`);
    count += 10;
  } else if (randomInt % 2 === 0 && answer === "no") {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
    console.log(`Let\'s try again, ${name}!`);
    count += 10;
  }
};
console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
while (count < 3) {
  console.log(`Question: ${randomInt}`);
  const answer = readlineSync.question("Your answer: ");
  isValEven(answer);
  randomInt = getRandomInt();
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
