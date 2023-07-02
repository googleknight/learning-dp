/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function (text1, text2) {
  let dp = [];
  const m = text1.length;
  const n = text2.length;
  const s1 = Array.from(text1);
  const s2 = Array.from(text2);
  for (let i = 0; i < m + 1; i++) {
    dp.push(Array(n + 1).fill(0));
  }
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
};

export default longestCommonSubsequence;
