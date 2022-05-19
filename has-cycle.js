const hasCycle = graph => {
  for (let node in graph)
    if (detectCycle(graph, node)) return true;

  return false;
}

const detectCycle = (graph, node) => {
  const queue = [node];
  let isFirstLoop = true;

  while (queue.length) {
    const curr = queue.shift();
    if (curr === node && !isFirstLoop) return true;
    isFirstLoop = false;

    for (let neighbour of graph[curr])
      queue.push(neighbour);
  }

  return false;
}

module.exports = { hasCycle };
