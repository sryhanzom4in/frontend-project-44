const getRandomInt = (max = 1000) => Math.floor(Math.random() * max);
const isValEven = (answer) => {
  if (randomInt % 2 === 0 && answer === "yes") {
    console.log("Correct!");
  } else if (randomInt % 2 !== 0 && answer === "no") {
    console.log("Correct!");
  } else if (randomInt % 2 !== 0 && answer === "yes") {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log(`Let\'s try again, ${name}!`);
  } else if (randomInt % 2 === 0 && answer === "no") {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
    console.log(`Let\'s try again, ${name}!`);
  }
};
