// 1,2,3 sum=5, ans 5
const coinChangeMaxWaysToSum = (coins, sum) => {
  const n = coins.length;
  const dp = [];
  for (let i = 0; i < n + 1; i++) {
    dp.push(Array(sum + 1).fill(0));
    dp[i][0] = 1;
  }
  for (let i = 1; i < n + 1; i++) {
    for (let j = 0; j < sum + 1; j++) {
      if (coins[i - 1] <= j) {
        dp[i][j] = dp[i][j - coins[i - 1]] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[n][sum];
};

export default coinChangeMaxWaysToSum;
