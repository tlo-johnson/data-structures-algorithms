const semestersRequired = (numCourses, prereqs) => {
  let maxSemesters = 0;

  const graph = createGraph(numCourses, prereqs);

  for (let course in graph) {
    const numSemesters = countSemestersDfs(graph, course);
    if (numSemesters > maxSemesters) maxSemesters = numSemesters;
  }

  return maxSemesters;
}

const createGraph = (numCourses, prereqs) => {
  const graph = {};
  for (let count = 0; count < numCourses; count++) graph[count] = [];
  for (let [courseA, courseB] of prereqs) graph[courseA].push(courseB);

  return graph;
}

const countSemesters = (graph, course) => {
  if (!graph[course].length) return 1;

  const subSemesters = [];
  for (let nextCourse of graph[course])
    subSemesters.push(countSemesters(graph, nextCourse));

  return 1 + Math.max(...subSemesters);
}

const countSemestersDfs = (graph, course) => {
  let maxCount = 0;
  const queue = [ [course, 1] ];

  while (queue.length) {
    const [curr, count] = queue.pop();
    if (count > maxCount) maxCount = count;
    for (let nextCourse of graph[curr]) queue.push([nextCourse, count + 1]);
  }

  return maxCount;
}

module.exports = { semestersRequired };

/*
 * Time: O(p), p is number of prereqs
 * Space: O(c), c is number of courses
 */
