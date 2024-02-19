import getRandomInt from '../utils/getRandom.js';

const brainProgression = (correctAnswer) => {
    const gameResult = [];
    const arr = [];
    let firstProgressionVal = getRandomInt(100);
    const progressionDiff = getRandomInt(10);
    while (arr.length !== 10) {
        const result = progressionDiff + firstProgressionVal;
        arr.push(result);
        firstProgressionVal = result;
    }
    const index = getRandomInt(8);
    arr[index] = '..';
    correctAnswer = arr[index - 1] + (arr[index + 1] - arr[index - 1]) / 2;
    gameResult.push(arr);
    gameResult.push(correctAnswer);
    console.log(gameResult);
    return gameResult;
};

export default brainProgression;
