/* eslint-disable max-len */
import getRandomInt from '../utils/getRandom.js';

const brainProgression = () => {
  const gameResult = [];
  const progressionArray = [];
  let firstProgressionVal = getRandomInt(100);
  const progressionDiff = getRandomInt(10);
  while (progressionArray.length !== 10) {
    const result = progressionDiff + firstProgressionVal;
    progressionArray.push(result);
    firstProgressionVal = result;
  }
  const index = getRandomInt(8);
  const correctAnswer = progressionArray[index];
  progressionArray[index] = '..';
  gameResult.push(progressionArray);
  gameResult.push(correctAnswer);
  return gameResult;
};
export default brainProgression;
