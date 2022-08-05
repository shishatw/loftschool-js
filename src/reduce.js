const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce((acc, cur) => {
  return acc + cur
}, 0);

console.log(result);