const water = 'W';

const minimumIsland = grid => {
  let minCount = Infinity;
  const visited = new Set();

  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    const row = grid[rowIndex];

    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      if (row[columnIndex] === water) continue;

      const key = `${rowIndex},${columnIndex}`;
      if (visited.has(key)) continue;

      const count = countNodesInIsland(grid, rowIndex, columnIndex, visited);
      if (count < minCount) minCount = count;
    }
  }

  return minCount;
}

const countNodesInIsland = (grid, rowIndex, columnIndex, visited) => {
  if (rowIndex < 0 || rowIndex >= grid.length) return 0;
  if (columnIndex < 0 || columnIndex >= grid[rowIndex].length) return 0;
  if (grid[rowIndex][columnIndex] === water) return 0;

  const key = `${rowIndex},${columnIndex}`;
  if (visited.has(key)) return 0;
  visited.add(key);

  return 1 +
    countNodesInIsland(grid, rowIndex - 1, columnIndex, visited) +
    countNodesInIsland(grid, rowIndex + 1, columnIndex, visited) +
    countNodesInIsland(grid, rowIndex, columnIndex - 1, visited) +
    countNodesInIsland(grid, rowIndex, columnIndex + 1, visited);
}

module.exports = { minimumIsland };
