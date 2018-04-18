import readlineSync from 'readline-sync';

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}!`);
};

export const game = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');

  const gameIterationsNumber = 3; // number of questions for user to answer

  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  const question = () => getRandomInt(1, 100);

  const ask = number => readlineSync.question(`Question: ${number} \n`);

  const checkAnswer = (answer, number) => {
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    const result = answer === correctAnswer;
    return {
      result,
      correctAnswer,
    };
  };


  const gameIter = (iterations) => {
    if (iterations === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const gameQuestion = question();
    const answer = ask(gameQuestion);

    const checkedAnswer = checkAnswer(answer, gameQuestion);

    if (checkedAnswer.result) {
      console.log('Correct!');
      gameIter(iterations - 1);
    } else {
      console.log(`'${answer}' is wrong answer ;(
      Correct answer was '${checkedAnswer.correctAnswer}'.
      Let's try again, ${userName}!`);
    }
  };

  return gameIter(gameIterationsNumber);
};

