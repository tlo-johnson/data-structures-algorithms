const hasCycle = graph => {
  const firstLoop = true;
  const queue = [];
  for (let node in graph) queue.push([node, node, firstLoop]);

  while (queue.length) {
    const [curr, node, isFirstLoop] = queue.shift();
    if (curr === node && !isFirstLoop) return true;

    for (let neighbour of graph[curr])
      queue.push([neighbour, node, !firstLoop]);
  }

  return false;
}

module.exports = { hasCycle };
