export const getRandomInt = (min, max) => () => Math.floor(Math.random() * (max - min)) + min;

export const getRandomInt100 = () => getRandomInt(1, 100)();

export const getRandomOp = () => {
  const list = ['+', '-', '*'];
  const index = getRandomInt(0, list.length - 1)();
  return list[index];
};

export const gcd = (a,b) => {
  if (a === b) return a;
  if (a > b) {
    return gcd(a - b, b);
  }
  return gcd(a, b - a);
}
