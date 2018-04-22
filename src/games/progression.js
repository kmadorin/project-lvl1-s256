import engine from '..';
import { getRandomInt100, getRandomInt } from '../utils';

const intro = 'What number is missing in this progression?';
const gameProgression = () => {

  const getMemberN = (start, delta, n) => start + (delta * (n - 1));

  const genProgression = (start, step, length, missedStep) => {
    const iter = (counter, acc, missedNum) => {
      const progressionNum = getMemberN(start, step, counter);

      if (counter > length) {
        return {
          progressionString: acc,
          missedNum: String(missedNum)
        };
      }

      if (counter === missedStep) {
        return iter(counter + 1, `${acc} ..`, progressionNum);
      }

      return iter(counter + 1, `${acc} ${progressionNum}`, missedNum);
    };
    return iter(1, '', 0);
  };

  const start = getRandomInt100();
  const step = getRandomInt(-10, 10)();
  const length = 10;
  const missedStep = getRandomInt(0,length)();
  const game = genProgression(start, step, length, missedStep);

  return {
    question: game.progressionString,
    correctAnswer: game.missedNum,
  }
}

export default () => engine(intro, gameProgression)