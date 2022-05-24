const canConcat = (str, words, index = 0, memo = {}) => {
  if (index === str.length) return true;
  if (String(index) in memo) return memo[index];

  const matches = words.filter(word => {
    for (let count = 0; count < word.length; count++)
      if (word[count] !== str[index + count]) return false;
    return true;
  });

  memo[index] = false;
  for (let match of matches)
    memo[index] = memo[index] || canConcat(str, words, index + match.length, memo);

  return memo[index];
}

module.exports = { canConcat };
