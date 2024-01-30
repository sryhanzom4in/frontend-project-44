import isValEven from '../bin/brain-even.js';
import isAnswerTrue from '../bin/brain-calc.js';

const getGame = (game, [a], [b]) => {
  while (count < 3) {
    console.log(`Question: ${randomInt}`);
    const answer = readlineSync.question('Your answer: ');
    game();
  }
};
