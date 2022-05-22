// Time complexity: O(number of rows * number of columns)
// Space complexity: O(number of rows * number of columns)

const countPaths = grid => {
  const numRows = grid.length;
  const numColumns = grid[numRows - 1].length;
  const lastRow = [numRows - 1];
  const lastColumn = [numColumns - 1];

  if (grid[lastRow][lastColumn] === 'X') return 0;

  return _countPaths(grid, '0,0', `${lastRow},${lastColumn}`);
}

const memo = {};

const _countPaths = (grid, src, dst, count = 0) => {
  if (src === dst) return ++count;
  if (src in memo) return memo[src];

  const parts = src.split(',');
  const row = Number(parts[0]);
  const column = Number(parts[1]);
  if (!inBounds(grid, row, column) || grid[row][column] === 'X') return count;

  const rightNode = `${row},${column + 1}`;
  const downNode = `${row + 1},${column}`;
  const paths =  _countPaths(grid, rightNode, dst, count) + _countPaths(grid, downNode, dst, count);

  memo[src] = paths;
  return paths;
}

const inBounds = (grid, row, column) =>
  0 <= row && row < grid.length && 0 <= column && column < grid[row].length;

module.exports = { countPaths };
