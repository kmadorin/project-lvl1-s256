import game from '../game';
import { getRandomInt100, gcd } from '../utils';

const intro = 'Find the greatest common divisor of given numbers.';

const question = () => {
  const op1 = getRandomInt100();
  const op2 = getRandomInt100();
  return {
    op1,
    op2,
  };
};

const ask = (q) => {
  console.log(`Question: ${q.op1} ${q.op2}`);
};

const validateAnswer = (value) => {
  if (Number.isInteger(parseInt(value, 10))) {
    return true;
  }
  return false;
};

const checkAnswer = q => `${gcd(q.op1, q.op2)}`;

const iterationsNumber = 3;

const gameGCD = () => game(intro, question, iterationsNumber, ask, validateAnswer, checkAnswer);

export default gameGCD;
