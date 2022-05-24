const maxPalinSubsequence = (str, start = 0, end = str.length - 1, memo = {}) => {
  if (end < start) return 0;
  if (end - start === 0) return 1;

  const key = `${start},${end}`;
  if (key in memo) return memo[key];

  if (str[start] === str[end]) {
    memo[key] = maxPalinSubsequence(str, start + 1, end - 1, memo) + 2;
  } else {
    memo[key] = Math.max(
      maxPalinSubsequence(str, start + 1, end, memo),
      maxPalinSubsequence(str, start, end - 1, memo)
    );
  }

  return memo[key];
};

module.exports = { maxPalinSubsequence };
