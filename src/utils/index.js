export const getRandomInt = (min, max) => {
  return () => {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

export const getRandomInt100 = () => {
  return getRandomInt(1, 100)();
}

export const getRandomOp = () => {
  const list = ['+', '-', '*'];
  const index = getRandomInt(0,list.length-1)();
  return list[index];
}