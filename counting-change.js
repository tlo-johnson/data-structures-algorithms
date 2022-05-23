const memo = {};

const countingChange = (amount, coins, i = 0) => {
  if (amount === 0) return 1;

  const key = `${amount},${i}`;
  if (key in memo) return memo[key];

  const coin = coins[i];

  let total = 0;
  for (let qty = 0; qty * coin <= amount; qty++)
    total += countingChange(amount - (qty * coin), coins, i + 1);

  memo[key] = total;
  return total;
}

module.exports = { countingChange }
