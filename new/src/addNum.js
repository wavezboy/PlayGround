function Add(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
      break;
    }
  }
}

console.log(Add([1, 2, 3, 4], 5));
