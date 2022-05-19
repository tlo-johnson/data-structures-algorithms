const water = 'W';

const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;

  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    const row = grid[rowIndex];

    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      const curr = grid[rowIndex][columnIndex];
      if (curr === water) continue;

      const key = `${rowIndex},${columnIndex}`;
      if (visited.has(key)) continue;

      exploreIsland(grid, rowIndex, columnIndex, visited);
      count++;
    }
  }

  return count;
};

const exploreIsland = (grid, rowIndex, columnIndex, visited) => {
  if (!isValidCell(grid, rowIndex, columnIndex)) return;
  if (grid[rowIndex][columnIndex] === water) return;

  const key = `${rowIndex},${columnIndex}`;
  if (visited.has(key)) return;
  visited.add(key);
  exploreIsland(grid, rowIndex - 1, columnIndex, visited);
  exploreIsland(grid, rowIndex + 1, columnIndex, visited);
  exploreIsland(grid, rowIndex, columnIndex - 1, visited);
  exploreIsland(grid, rowIndex, columnIndex + 1, visited);
}

const isValidCell = (grid, rowIndex, columnIndex) => {
  const minRowIndex = 0;
  const minColumnIndex = 0;
  const maxRowIndex = grid.length;
  
  if (rowIndex < minRowIndex || columnIndex < minColumnIndex || rowIndex >= maxRowIndex)
    return false;

  const maxColumnIndex = grid[rowIndex].length;
  if (columnIndex >= maxColumnIndex) return false;

  return true;
}
module.exports = { islandCount };
