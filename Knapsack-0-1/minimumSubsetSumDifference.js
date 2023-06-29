// nums =[1,6,11,5], n
const minSumSubsetDiff = (nums, n) => {
  const range = nums.reduce((acc, cur) => cur + acc, 0);
  const dp = [];
  for (let i = 0; i < n + 1; i++) {
    dp.push(Array(range + 1).fill(0));
    dp[i][0] = 1;
  }
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < range + 1; j++) {
      if (nums[i - 1] <= j) {
        let taken = dp[i - 1][j - nums[i - 1]];
        let notTaken = dp[i - 1][j];
        dp[i][j] = taken || notTaken;
      } else if (nums[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  let max = Number.MIN_VALUE;
  for (let i = 0; i <= Math.floor(range / 2); i++) {
    if (dp[n][i] === 1) max = Math.max(i, max);
  }
  return range - 2 * max;
};

export default minSumSubsetDiff;
