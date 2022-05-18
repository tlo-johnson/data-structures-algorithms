const connectedComponentsCount = (graph) => {
  if (!graph) return 0;

  const visited = new Set();
  let count = 0;

  for (let node in graph) {
    if (visited.has(node)) continue;
    // visitPathsRecursive(graph, node, visited);
    // visitPathsDfs(graph, node, visited);
    visitPathsBfs(graph, node, visited);
    count++;
  }

  return count;
}

const visitPathsRecursive = (graph, node, visited) => {
  visited.add(String(node));
  for (let neighbour of graph[node])
    if (!visited.has(String(neighbour))) visitPathsRecursive(graph, neighbour, visited);
}

const visitPathsDfs = (graph, node, visited) => {
  const queue = [node];

  while (queue.length) {
    const curr = queue.pop();

    if (visited.has(String(curr))) continue;
    visited.add(String(curr));

    for (let neighbour of graph[curr]) queue.push(neighbour);
  }
}

const visitPathsBfs = (graph, node, visited) => {
  const queue = [node];
  while (queue.length) {
    const curr = queue.shift();

    if (visited.has(String(curr))) continue;
    visited.add(String(curr));

    for (let neighbour of graph[curr]) queue.push(neighbour);
  }
}

module.exports = { connectedComponentsCount };
