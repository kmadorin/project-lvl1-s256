import readlineSync from 'readline-sync';

const game = (intro, question, iterationsNumber, ask, validateAnswer, checkAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${intro}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const gameIter = (iterations) => {
    if (iterations === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const gameQuestion = question();
    ask(gameQuestion);

    const getAnswer = () => {
      const answ = readlineSync.question('Your answer: ');
      if (validateAnswer(answ)) {
        return answ;
      }
      return getAnswer();
    };

    const answer = getAnswer();
    const correctAnswer = checkAnswer(gameQuestion);

    if (answer === correctAnswer) {
      console.log('Correct!');
      gameIter(iterations - 1);
    } else {
      console.log(`'${answer}' is wrong answer ;(
      Correct answer was '${correctAnswer}'.
      Let's try again, ${userName}!`);
    }
  };

  return gameIter(iterationsNumber);
};

export default game;
