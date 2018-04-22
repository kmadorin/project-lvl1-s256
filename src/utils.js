export const getRandomInt = (min, max) => () => Math.floor(Math.random() * (max - min)) + min;

export const getRandomInt100 = () => getRandomInt(1, 100)();

export const getRandomInt1000 = () => getRandomInt(101, 10000)();

export const getRandomOp = () => {
  const list = ['+', '-', '*'];
  const index = getRandomInt(0, list.length - 1)();
  return list[index];
};

export const gcd = (a, b) => {
  if (a === b) return a;
  if (a > b) {
    return gcd(a - b, b);
  }
  return gcd(a, b - a);
};

export const getBalanced = (num) => {
  const numArr = num.toString().split('').sort().map(Number);

  const iter = (arr) => {
    const current = arr;
    if ((current[current.length - 1] - current[0]) <= 1) {
      return current.join('');
    }
    current[0] += 1;
    current[current.length - 1] -= 1;
    current.sort();
    return iter(current);
  };

  return iter(numArr);
};

export const isPrime = (n) => {
  const iter = (counter) => {
    if (counter > n / 2) return true;
    if (n % counter === 0) return false;
    if (n % counter > 0) {
      return iter(counter + 1);
    }
    return true;
  };
  return iter(2);
};
