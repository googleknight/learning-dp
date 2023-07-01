// [1, 5, 8, 9, 10, 17, 17, 2],8 ans 22
const rodCuttingMaxProfit = (price, n) => {
  let dp = [];
  for (let i = 0; i < n + 1; i++) {
    dp.push(Array(n + 1).fill(0));
  }
  for (let i = 1; i < n + 1; i++) {
    for (let j = 0; j < n + 1; j++) {
      if (i <= j) {
        let taken = price[i - 1] + dp[i][j - i];
        let notTaken = dp[i - 1][j];
        dp[i][j] = Math.max(taken, notTaken);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[n][n];
};

export default rodCuttingMaxProfit;
