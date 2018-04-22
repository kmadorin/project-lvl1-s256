import { cons, car, cdr } from 'hexlet-pairs';
import { getRandomInt100, getRandomOp } from '../utils';
import engine from '..';

const intro = 'What is the result of the expression?';

const gameCalc = () => {
  const generateQuestion = () => {
    const op1 = getRandomInt100();
    const op2 = getRandomInt100();
    const operator = getRandomOp();
    return cons(cons(op1, op2), operator);
  };

  const questionString = (q) => {
    const op1 = car(car(q));
    const op2 = cdr(car(q));
    const operator = cdr(q);
    return `${op1} ${operator} ${op2}`;
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

  const q = generateQuestion();
  const correctAnswer = checkAnswer(q);
  const question = questionString(q);

  return {
    question,
    correctAnswer,
  }
}

export default () => engine(intro, gameCalc)
