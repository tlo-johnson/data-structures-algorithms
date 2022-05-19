const tribonacci = (num, memo = {}) => {
  if (num === 0 || num === 1) return 0;
  if (num === 2) return 1;
  if (num in memo) return memo[num];

  memo[num] = tribonacci(num - 1, memo) + tribonacci(num - 2, memo) + tribonacci(num - 3, memo);
  return memo[num];
}

module.exports = { tribonacci };
