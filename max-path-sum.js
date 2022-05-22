const memo = {};

const maxPathSum = (grid, row = 0, column = 0, maxSum = 0) => {
  if (!inBounds(grid, row, column)) return maxSum;

  const position = `${row},${column}`;
  if (position in memo) return memo[position];

  const bottomPath = maxPathSum(grid, row + 1, column, maxSum);
  const rightPath = maxPathSum(grid, row, column + 1, maxSum);
  memo[position] = grid[row][column] + Math.max(rightPath, bottomPath);
  return memo[position];
};

const inBounds = (grid, row, column) =>
  0 <= row && row < grid.length && 0 <= column && column < grid[row].length;

module.exports = { maxPathSum };
