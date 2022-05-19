const shortestPath = (edges, nodeA, nodeB) => {
  if (!edges.length) return -1;

  const graph = createGraph(edges);
  return findShortestPathBfs(graph, nodeA, nodeB);
}

const createGraph = edges => {
  const graph = {};

  for (let [nodeA, nodeB] of edges) {
    if (!(nodeA in graph)) graph[nodeA] = [];
    if (!(nodeB in graph)) graph[nodeB] = [];

    graph[nodeA].push(nodeB);
    graph[nodeB].push(nodeA);
  }

  return graph;
}

const findShortestPathBfs = (graph, src, dst) => {
  const queue = [ [src, 0] ];
  const visited = new Set();

  while (queue.length) {
    const [curr, count] = queue.shift();

    if (visited.has(String(curr))) continue;
    visited.add(String(curr));

    if (curr === dst) return count;
    for (let neighbour of graph[curr])
      queue.push([neighbour, count + 1]);
  }

  return -1;
}

module.exports = { shortestPath };
