const fibs = {};

const fib = n => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (fibs[n]) return fibs[n];

  const result = fib(n - 1) + fib(n - 2);
  fibs[n] = result;

  return result;
}

module.exports = { fib };
