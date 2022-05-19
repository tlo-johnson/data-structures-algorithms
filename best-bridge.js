/*
 * e: # edges
 * n: # nodes
 *
 * time: O(e)
 * space: O(n)
 */

const land = 'L';

const bestBridge = (grid) => {
  const island = findIsland(grid);
  return findBestBridge(grid, island);
};

const findIsland = grid => {
  for (let [rowIndex, row] of grid.entries())
    for (let [columnIndex, column] of row.entries())
      if (column === land) return exploreIsland(grid, rowIndex, columnIndex);
}

const exploreIsland = (grid, rowIndex, columnIndex, visited = new Set(), islands = []) => {
  if (!isInBounds(grid, rowIndex, columnIndex)
    || !isLand(grid, rowIndex, columnIndex)
    || isVisited(visited, rowIndex, columnIndex))
    return islands;

  visited.add(keyFor(rowIndex, columnIndex));

  islands.push([rowIndex, columnIndex]);
  exploreIsland(grid, rowIndex - 1, columnIndex, visited, islands);
  exploreIsland(grid, rowIndex + 1, columnIndex, visited, islands);
  exploreIsland(grid, rowIndex, columnIndex - 1, visited, islands);
  exploreIsland(grid, rowIndex, columnIndex + 1, visited, islands);

  return islands;
}

const isInBounds = (grid, rowIndex, columnIndex) =>
  0 <= rowIndex && rowIndex < grid.length &&
    0 <= columnIndex && columnIndex < grid[rowIndex].length;

const isLand = (grid, rowIndex, columnIndex) => grid[rowIndex][columnIndex] === land;

const isVisited = (visited, rowIndex, columnIndex) => visited.has(keyFor(rowIndex, columnIndex));

const keyFor = (rowIndex, columnIndex) => `${rowIndex},${columnIndex}`;

const findBestBridge = (grid, island) => {
  const queue = [];
  for (let node of island) queue.push([node, 0]);

  const visited = new Set();

  while (queue.length) {
    const [[rowIndex, columnIndex], count] = queue.shift();
    if (!isInBounds(grid, rowIndex, columnIndex) || isVisited(visited, rowIndex, columnIndex))
      continue;

    if (isLand(grid, rowIndex, columnIndex) && !inIsland(island, rowIndex, columnIndex))
      return count - 1;

    visited.add(keyFor(rowIndex, columnIndex));
    queue.push([[rowIndex + 1, columnIndex], count + 1])
    queue.push([[rowIndex - 1, columnIndex], count + 1])
    queue.push([[rowIndex, columnIndex + 1], count + 1])
    queue.push([[rowIndex, columnIndex - 1], count + 1])
  }
}

const inIsland = (island, rowIndex, columnIndex) =>
  island.some(([row, column]) => row === rowIndex && column === columnIndex);

module.exports = { bestBridge };
