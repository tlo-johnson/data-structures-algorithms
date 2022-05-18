// https://structy.net/problems/undirected-path

const undirectedPath = (edges, nodeA, nodeB) => {
  const adjacencyList = createAdjacencyList(edges);
  // return findNodeRecursive(adjacencyList, nodeA, nodeB);
  // return findNodeDfs(adjacencyList, nodeA, nodeB);
  return findNodeBfs(adjacencyList, nodeA, nodeB);
}

const createAdjacencyList = edges => {
  const list = {};
  for (let [nodeA, nodeB] of edges) {
    if (!(nodeA in list)) list[nodeA] = [];
    list[nodeA].push(nodeB);

    if (!(nodeB in list)) list[nodeB] = [];
    list[nodeB].push(nodeA);
  }

  return list;
}

const findNodeRecursive = (graph, src, dst, visited = new Set()) => {
  if (src === dst) return true;

  if (visited.has(src)) return false;
  visited.add(src);

  for (let neighbour of graph[src])
    if (findNodeRecursive(graph, neighbour, dst, visited)) return true;

  return false;
}

const findNodeDfs = (graph, src, dst) => {
  const stack = [src];
  const visited = new Set();

  while (stack.length) {
    const curr = stack.pop();
    if (visited.has(curr)) continue;
    visited.add(curr);

    if (curr === dst) return true;
    for (let neighbour of graph[curr]) stack.push(neighbour);
  }

  return false;
}

const findNodeBfs = (graph, src, dst) => {
  const queue = [src];
  const visited = new Set();

  while (queue.length) {
    const curr = queue.shift();

    if (visited.has(curr)) continue;
    visited.add(curr);

    if (curr === dst) return true;
    for (let neighbour of graph[curr]) queue.push(neighbour);
  }

  return false;
}

module.exports = { undirectedPath };
