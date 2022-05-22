const memo = new Set();

const summingSquares = num => {
  let maxPerfectSquare = Math.floor(Math.sqrt(num));

  const subtrahends = [];
  for (maxPerfectSquare; maxPerfectSquare > 0; maxPerfectSquare--)
    subtrahends.push(maxPerfectSquare * maxPerfectSquare);

  // return minNumSummingSquares(num, subtrahends);
  return minNumSummingSquaresRecursive(num, subtrahends);
}

const minNumSummingSquares = (num, subtrahends) => {
  const queue = [[num, 0]];
  while (queue.length) {
    const [curr, count] = queue.shift();

    for (let subtrahend of subtrahends) {
      const difference = curr - subtrahend;
      if (difference === 0) return count + 1;
      if (difference < 0 || memo.has(difference)) continue;

      memo.add(difference);
      queue.push([difference, count + 1]);
    }
  }
}

const minNumSummingSquaresRecursive = (num, subtrahends, count = 0) => {
  if (num === 0) return count;
  if (num < 0) return Infinity;
  if (num in memo) return memo[num];

  let minCount = Infinity;
  for (let subtrahend of subtrahends) {
    const result = minNumSummingSquaresRecursive(num - subtrahend, subtrahends, count + 1);
    if (minCount > result) minCount = result;
  }

  memo[num] = minCount;
  return minCount;
}

module.exports = { summingSquares };
