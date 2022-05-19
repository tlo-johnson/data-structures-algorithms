const longestPath = graph => {
  let maxCount = 0;

  for (let node in graph) {
    const count = countNodes(graph, node);
    if (count > maxCount) maxCount = count;
  }

  return maxCount;
}

const countNodes = (graph, node) => {
  if (!graph[node].length) return 0;

  const counts = [];
  for (let neighbour of graph[node])
    counts.push(countNodes(graph, neighbour));

  return 1 + Math.max(...counts);
}

module.exports = { longestPath };

/*
 * Time: O(e), e is number of edges
 * Space: O(n), n is number of nodes
 */
