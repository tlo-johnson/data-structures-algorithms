const memo = new Set();

const sumPossible = (amount, numbers) => {
  if (amount === 0) return true;
  if (amount < 0) return false;

  if (memo.has(amount)) return false;
  memo.add(amount);

  for (let number of numbers)
    if (sumPossible(amount - number, numbers)) return true;

  return false;
}

module.exports = { sumPossible };
