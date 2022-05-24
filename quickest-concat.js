const quickestConcat = (str, words) => {
  if (!str.length || !words.length) return -1;

  const queue = [[0, 0]];
  const memo = new Set();

  while (queue.length) {
    const [currIndex, count] = queue.shift();
    if (currIndex === str.length) return count;
    if (memo.has(currIndex)) continue;

    memo.add(currIndex);
    for (let word of words) {
      if (str.slice(currIndex, currIndex + word.length) === word)
        queue.push([currIndex + word.length, count + 1]);
    }
  }

  return -1;
}

module.exports = { quickestConcat };
