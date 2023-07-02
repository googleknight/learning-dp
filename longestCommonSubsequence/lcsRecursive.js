const getLCS = (text1, text2, m, n) => {
  if (m === 0 || n === 0) return 0;
  if (text1[m - 1] === text2[n - 1])
    return 1 + getLCS(text1, text2, m - 1, n - 1);
  else {
    return Math.max(
      getLCS(text1, text2, m - 1, n),
      getLCS(text1, text2, m, n - 1)
    );
  }
};
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function (text1, text2) {
  return getLCS(
    Array.from(text1),
    Array.from(text2),
    text1.length,
    text2.length
  );
};

export default longestCommonSubsequence;
