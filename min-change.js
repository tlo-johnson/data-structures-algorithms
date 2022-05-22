/*
 * c: number of coins
 * a: amount
 * time: O(a * n)
 * space: O(a)
 */

const minChange = (amount, coins) => {
  const queue = [[amount, 0]];
  const memo = new Set();

  while (queue.length) {
    const [change, numCoins] = queue.shift();
    if (change === 0) return numCoins;
    if (change < 0) continue;
    if (memo.has(change)) continue;

    memo.add(change);
    coins.forEach(coin => queue.push([change - coin, numCoins + 1]));
  }

  return -1;
};

module.exports = { minChange };
