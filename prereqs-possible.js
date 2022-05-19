// see has-cycle.js for a more optimal? solution for finding cycles in a graph
// this solution is an implementation of white-gray-black

const prereqsPossible = (numCourses, prereqs) => {
  const graph = createGraph(numCourses, prereqs);
  const visited = new Set();
  for (let course in graph)
    if (hasCycle(graph, course, visited)) return false;
  return true;
}

const createGraph = (numCourses, prereqs) => {
  const graph = {};
  for (let count = 0; count < numCourses; count++) graph[count] = [];
  for (let [courseA, courseB] of prereqs) graph[courseA].push(courseB);
  return graph;
}

const hasCycle = (graph, course, visited, visiting = new Set()) => {
  if (visited.has(course)) return false;
  if (visiting.has(course)) return true;
  visiting.add(course);

  let cycleDetected = false;
  for (let neighbour of graph[course])
    cycleDetected = cycleDetected || hasCycle(graph, neighbour, visited, visiting);

  visited.add(course);
  return cycleDetected;
}

module.exports = { prereqsPossible };
