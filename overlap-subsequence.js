const overlapSubsequence = (str1, str2, start1 = 0, start2 = 0, memo = {}) => {
  if (start1 === str1.length || start2 === str2.length) return 0;

  const key = `${start1},${start2}`;
  if (key in memo) return memo[key];

  if (str1[start1] === str2[start2]) {
    memo[key] = 1 + overlapSubsequence(str1, str2, start1 + 1, start2 + 1, memo);
  } else {
    memo[key] = Math.max(
      overlapSubsequence(str1, str2, start1 + 1, start2, memo),
      overlapSubsequence(str1, str2, start1, start2 + 1, memo)
    );
  }

  return memo[key];
}

module.exports = { overlapSubsequence };
