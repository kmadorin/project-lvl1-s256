import game from '../game';
import { getRandomInt100 } from '../utils'

const intro = 'Answer "yes" if number odd otherwise answer "no".';

const question = getRandomInt100;

const ask = (q) => {
  console.log(`Question: ${q}`)
};

const validateAnswer = (value) => {
  if (value === 'yes' || value === 'no') {
    return true;
  }
  return false;
};

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const checkAnswer = (number) => {
  if (isEven(number)) {
    return 'yes';
  }
  return 'no';
};

const iterationsNumber = 3;

const gameEven = () => {
  return game(intro, question, iterationsNumber, ask, validateAnswer, checkAnswer);
}

export default gameEven;