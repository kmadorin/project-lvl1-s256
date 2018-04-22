import engine from '..';
import { getRandomInt100, isPrime } from '../utils';

const intro = 'Is this number prime?';

const gamePrime = () => {
  const q = getRandomInt100();
  const question = `${q}`;
  const correctAnswer = isPrime(q) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  }
}

export default () => engine(intro, gamePrime)