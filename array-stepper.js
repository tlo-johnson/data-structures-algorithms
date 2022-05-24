const arrayStepper = (nums, index = 0, memo = new Set()) => {
  if (memo.has(index)) return false;
  if (index === nums.length - 1) return true;

  let result = false;
  for (let i = 1; i <= nums[index]; i++)
    result = result || arrayStepper(nums, index + i, memo);

  memo.add(index);
  return result;
}

module.exports = { arrayStepper };
