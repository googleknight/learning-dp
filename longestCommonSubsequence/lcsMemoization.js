const getLCS = (dp, text1, text2, m, n) => {
  if (dp[m][n] !== -1) {
    return dp[m][n];
  }
  if (m === 0 || n === 0) return 0;
  let ans = 0;
  if (text1[m - 1] === text2[n - 1])
    ans = 1 + getLCS(dp, text1, text2, m - 1, n - 1);
  else {
    ans = Math.max(
      getLCS(dp, text1, text2, m - 1, n),
      getLCS(dp, text1, text2, m, n - 1)
    );
  }
  dp[m][n] = ans;
  return dp[m][n];
};
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function (text1, text2) {
  let dp = [];
  const m = text1.length;
  const n = text2.length;
  for (let i = 0; i < m + 1; i++) {
    dp.push(Array(n + 1).fill(-1));
  }
  return getLCS(dp, Array.from(text1), Array.from(text2), m, n);
};

export default longestCommonSubsequence;
