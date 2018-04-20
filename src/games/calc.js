import { cons, car, cdr } from 'hexlet-pairs';
import game from '../game';
import { getRandomInt100, getRandomOp } from '../utils';

const intro = 'What is the result of the expression?';

const question = () => {
  const op1 = getRandomInt100();
  const op2 = getRandomInt100();
  const operator = getRandomOp();
  return cons(cons(op1, op2), operator);
};

const ask = (q) => {
  const op1 = car(car(q));
  const op2 = cdr(car(q));
  const operator = cdr(q);
  console.log(`Question: ${op1} ${operator} ${op2}`);
};

const validateAnswer = (value) => {
  if (Number.isInteger(parseInt(value))) {
    return true;
  }
  return false;
};

const checkAnswer = (q) => {
  const op1 = car(car(q));
  const op2 = cdr(car(q));
  const operator = cdr(q);
  switch (operator) {
    case '+':
      return `${(op1 + op2)}`;
    case '-':
      return `${(op1 - op2)}`;
    case '*':
      return `${(op1 * op2)}`;
    default:
      return 'Undefined operator';
  }
};

const iterationsNumber = 3;

const gameCalc = () => game(intro, question, iterationsNumber, ask, validateAnswer, checkAnswer);

export default gameCalc;
