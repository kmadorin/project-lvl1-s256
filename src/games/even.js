import engine from '..';
import { getRandomInt100 } from '../utils';

const intro = 'Answer "yes" if number odd otherwise answer "no".';

const gameEven = () => {
  const isEven = (number) => {
    if (number % 2 === 0) {
      return true;
    }
    return false;
  };

  const q = getRandomInt100();
  const question = `${q}`;
  const correctAnswer = isEven(q) ? 'yes' : 'no';
  return {
    question,
    correctAnswer
  }
}

export default () => engine(intro, gameEven)
