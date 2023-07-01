const coinChange = (coins, amount) => {
  const n = coins.length;
  const dp = [];
  for (let i = 0; i < n + 1; i++) {
    if (i === 0) {
      dp.push(Array(amount + 1).fill(Number.MAX_VALUE));
      dp[i][0] = 0;
    } else dp.push(Array(amount + 1).fill(0));
  }
  for (let i = 1; i < n + 1; i++) {
    for (let j = 0; j < amount + 1; j++) {
      if (coins[i - 1] <= j) {
        dp[i][j] = Math.min(1 + dp[i][j - coins[i - 1]], dp[i - 1][j]);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[n][amount] >= Number.MAX_VALUE ? -1 : dp[n][amount];
};

export default coinChange;
