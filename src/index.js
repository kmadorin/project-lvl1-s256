import readlineSync from 'readline-sync';
import { getRandomInt } from './utils';

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

  const question = () => getRandomInt(1, 100);


  const ask = number => readlineSync.question(`Question: ${number} \n`);





  return gameIter(gameIterationsNumber);
};

