import readlineSync from 'readline-sync';

const engine = (intro, game) => {
  const iterationsNumber = 3;

  console.log('Welcome to the Brain Games!');
  console.log(`${intro}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const gameIter = (iterations) => {
    if (iterations === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const gameObject = game();
    const gameQuestion = gameObject.question;
    console.log(`Question: ${gameQuestion}`);

    const getAnswer = () => {
      const answ = readlineSync.question('Your answer: ');
      if (gameObject.validateAnswer(answ)) {
        return answ;
      }
      return getAnswer();
    };

    const answer = getAnswer();
    const correctAnswer = gameObject.correctAnswer;

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
}

export default engine;

