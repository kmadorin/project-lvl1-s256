import engine from '../engine';
import { getRandomInt100, gcd } from '../utils';

const intro = 'Find the greatest common divisor of given numbers.';

const gameGCD = () => {

  const getQuestion = () => {
    const op1 = getRandomInt100();
    const op2 = getRandomInt100();
    return {
      op1,
      op2,
    };
  };

  const validateAnswer = (value) => {
    if (Number.isInteger(parseInt(value, 10))) {
      return true;
    }
    return false;
  };

  const checkAnswer = q => `${gcd(q.op1, q.op2)}`;

  const q = getQuestion();
  const question = `${q.op1} ${q.op2}`;
  const correctAnswer = checkAnswer(q);

  return {
    question,
    validateAnswer,
    correctAnswer,
  }

};

export default () => engine(intro, gameGCD)
