import engine from '../engine';
import { getRandomInt1000, getBalanced } from '../utils';

const intro = 'Balance the given number.';

const gameBalance = () => {
  const validateAnswer = (value) => {
    if (Number.isInteger(parseInt(value, 10))) {
      return true;
    }
    return false;
  };
  const checkAnswer = q => getBalanced(q);

  const q = getRandomInt1000();
  const question = `${q}`;
  const correctAnswer = checkAnswer(q);

  return {
    question,
    validateAnswer,
    correctAnswer,
  }
}

export default () => engine(intro, gameBalance)
