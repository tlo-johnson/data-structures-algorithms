const maxPalinSubsequence = (str, memo = {}) => {
  if (str.length === 0) return 0;
  if (str.length === 1) return 1;
  if (str in memo) return memo[str];

  if (str[0] === str[str.length - 1]) {
    const substring = str.slice(1, -1);
    memo[str] = maxPalinSubsequence(substring, memo) + 2;
  } else {
    memo[str] = Math.max(
      maxPalinSubsequence(str.slice(1), memo),
      maxPalinSubsequence(str.slice(0, -1), memo)
    );
  }

  return memo[str];
};

module.exports = { maxPalinSubsequence };
