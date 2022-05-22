// Time complexity:
// Space complexity:

const memo = {};

// Passed all test cases but pretty complex solution
const nonAdjacentSumComplex = (nums) => {
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];

  let maxSum = 0;

  for (let [index, num] of nums.entries()) {
    const key = `${JSON.stringify(nums)}|${index}`;
    if (key in memo) return memo[key];

    const leftEnd = index - 2;
    const rightStart = index + 2;

    const leftSum = (leftEnd >= 0) ? nonAdjacentSum(nums.slice(0, leftEnd + 1)) : 0;
    const rightSum = (rightStart < nums.length) ? nonAdjacentSum(nums.slice(rightStart)) : 0;

    const sum = num + leftSum + rightSum;
    memo[key] = sum;
    if (sum > maxSum) maxSum = sum;
  }

  return maxSum;
}

const nonAdjacentSum = nums => {
  if (!nums.length) return 0;

  const key = JSON.stringify(nums);
  if (key in memo) return memo[key];

  const [num, ...rest] = nums;
  const left = num + nonAdjacentSum(rest.slice(1));
  const right = nonAdjacentSum(rest);

  memo[key] = Math.max(left, right);
  return memo[key];
}

module.exports = { nonAdjacentSum };
