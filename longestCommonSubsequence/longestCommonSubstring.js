/**
 * @param {number[]} string1
 * @param {number[]} string2
 * @return {number}
 */
const getLCSubstring = function (string1, string2) {
  const m = string1.length;
  const n = string2.length;
  const dp = [];
  for (let i = 0; i < m + 1; i++) {
    dp.push(Array(n + 1).fill(0));
  }
  let longestLength = Number.MIN_VALUE;
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (string1.charAt(i - 1) === string2.charAt(j - 1)) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else dp[i][j] = 0;
      longestLength = Math.max(longestLength, dp[i][j]);
    }
  }
  return longestLength;
};

export default getLCSubstring;
