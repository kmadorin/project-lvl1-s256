import engine from '..';
import { getRandomInt1000, getBalanced } from '../utils';

const intro = 'Balance the given number.';

const gameBalance = () => {

  const checkAnswer = q => getBalanced(q);

  const q = getRandomInt1000();
  const question = `${q}`;
  const correctAnswer = checkAnswer(q);

  return {
    question,
    correctAnswer,
  }
}

export default () => engine(intro, gameBalance)
