const largestComponent = (graph) => {
  if (!graph) return 0;

  const visited = new Set();
  let maxCount = 0;

  for (let node in graph) {
    if (visited.has(String(node))) continue;

    // const count = countNodesInPathRecursively(graph, node, visited);
    // const count = countNodesInPathBfs(graph, node, visited);
    const count = countNodesInPathDfs(graph, node, visited);
    if (maxCount < count) maxCount = count;
  }

  return maxCount;
}

const countNodesInPathRecursively = (graph, node, visited) => {
  if (visited.has(String(node))) return 0;
  visited.add(String(node));

  let sum = 0;
  for (let neighbour of graph[node])
    sum += countNodesInPathRecursively(graph, neighbour, visited);

  return sum + 1;
}

const countNodesInPathBfs = (graph, node, visited) => {
  let count = 0;
  const queue = [node];

  while (queue.length) {
    const curr = queue.shift();
    if (visited.has(String(curr))) continue;
    visited.add(String(curr));

    count++;
    for (let neighbour of graph[curr])
      queue.push(neighbour);
  }

  return count;
}

const countNodesInPathDfs = (graph, node, visited) => {
  let count = 0;
  let stack = [node];

  while (stack.length) {
    const curr = stack.pop();
    if (visited.has(String(curr))) continue;
    visited.add(String(curr));

    count++;
    for (let neighbour of graph[curr])
      stack.push(neighbour);
  }

  return count;
}

module.exports = { largestComponent };
