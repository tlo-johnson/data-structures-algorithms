const carrot = 'C';
const wall = 'X';

const closestCarrot = (grid, startRow, startColumn) => {
  if (grid[startRow][startColumn] === wall) return -1;

  const visited = new Set();

  const queue = [ [startRow, startColumn, 0] ];
  while (queue.length) {
    const [currRow, currColumn, count] = queue.shift();
    if (!isValidCell(grid, currRow, currColumn) || isWall(grid, currRow, currColumn)) continue;
    if (isCarrot(grid, currRow, currColumn)) return count;

    const key = `${currRow},${currColumn}`;
    if (visited.has(key)) continue;
    visited.add(key);

    queue.push([currRow + 1, currColumn, count + 1]);
    queue.push([currRow - 1, currColumn, count + 1]);
    queue.push([currRow, currColumn + 1, count + 1]);
    queue.push([currRow, currColumn - 1, count + 1]);
  }

  return -1;
}

const isCarrot = (grid, currRow, currColumn) => grid[currRow][currColumn] === carrot;

const isWall = (grid, currRow, currColumn) => grid[currRow][currColumn] === wall;

const isValidCell = (grid, currRow, currColumn) =>
  0 <= currRow && currRow < grid.length &&
  0 <= currColumn && currColumn < grid[currRow].length;

module.exports = { closestCarrot };
