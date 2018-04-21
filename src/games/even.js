import game from '../game';
import engine from '../engine';
import { getRandomInt100 } from '../utils';

const intro = 'Answer "yes" if number odd otherwise answer "no".';

const gameEven = () => {
  const isEven = (number) => {
    if (number % 2 === 0) {
      return true;
    }
    return false;
  };

  const validateAnswer = (value) => {
    if (value === 'yes' || value === 'no') {
      return true;
    }
    return false;
  };

  const q = getRandomInt100();
  const question = `${q}`;
  const correctAnswer = isEven(q) ? 'yes' : 'no';
  return {
    question,
    validateAnswer,
    correctAnswer
  }
}

export default () => engine(intro, gameEven)
