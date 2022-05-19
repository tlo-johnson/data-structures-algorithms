const land = 'L';

const bestBridge = (grid) => {
  const island = findIsland(grid);
  console.log(island);
  // return findBestBridge(grid, island);
};

const findIsland = grid => {
  for (let [rowIndex, row] of grid.entries())
    for (let [columnIndex, column] of row.entries())
      if (column === land) return exploreIsland(grid, rowIndex, columnIndex);
}

const exploreIsland = (grid, rowIndex, columnIndex, visited = new Set()) => {
  if (!isInBounds(grid, rowIndex, columnIndex)
    || !isLand(grid, rowIndex, columnIndex)
    || isVisited(visited, rowIndex, columnIndex))
    return [];

  visited.add(keyFor(rowIndex, columnIndex));

  const island = [[rowIndex, columnIndex]];
  island.push(...exploreIsland(grid, rowIndex - 1, columnIndex, visited));
  island.push(...exploreIsland(grid, rowIndex + 1, columnIndex, visited));
  island.push(...exploreIsland(grid, rowIndex, columnIndex - 1, visited));
  island.push(...exploreIsland(grid, rowIndex, columnIndex + 1, visited));

  return island;
}

const isInBounds = (grid, rowIndex, columnIndex) =>
  0 <= rowIndex && rowIndex < grid.length &&
    0 <= columnIndex && columnIndex < grid[rowIndex].length;

const isLand = (grid, rowIndex, columnIndex) => grid[rowIndex][columnIndex] === land;

const isVisited = (visited, rowIndex, columnIndex) => visited.has(keyFor(rowIndex, columnIndex));

const keyFor = (rowIndex, columnIndex) => `${rowIndex},${columnIndex}`;

bestBridge([
  ["W", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "L"],
  ["L", "L", "L", "W", "L"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
]);

module.exports = { bestBridge };
