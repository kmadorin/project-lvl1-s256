import game from '../game';
import { getRandomInt1000, getBalanced } from '../utils';

const intro = 'What is the result of the expression?';

const question = getRandomInt1000;

const ask = (q) => {
  console.log(`Question: ${q}`);
};

const validateAnswer = (value) => {
  if (Number.isInteger(parseInt(value, 10))) {
    return true;
  }
  return false;
};

const checkAnswer = q => getBalanced(q);

const iterationsNumber = 3;

const gameBalance = () => game(intro, question, iterationsNumber, ask, validateAnswer, checkAnswer);

export default gameBalance;
