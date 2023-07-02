import usingRecursion from "./Knapsack-0-1/usingRecursion.js";
import usingMemo from "./Knapsack-0-1/usingMemo.js";
import usingTopDown from "./Knapsack-0-1/usingTopDown.js";
import isSubsetSum from "./Knapsack-0-1/subsetSum.js";
import canPartition from "./Knapsack-0-1/partitionEqualSubsetSum.js";
import getCountOfSubsetSum from "./Knapsack-0-1/countOfSubsetWithSum.js";
import minSumSubsetDiff from "./Knapsack-0-1/minimumSubsetSumDifference.js";
import rodCuttingMaxProfit from "./unbounded-Knapsack/rodCuttingMaxProfit.js";
import coinChangeMaxWaysToSum from "./unbounded-Knapsack/coinChangeMaxWaysToSum.js";
import coinChange from "./unbounded-Knapsack/getMinimumNumberOfCoinChange.js";
import lcsRecursive from "./longestCommonSubsequence/lcsRecursive.js";

let w = 10,
  wt = [1, 3, 4, 6],
  val = [20, 30, 10, 50],
  n = 4;
console.log(usingRecursion(wt, val, w, n));
console.log(usingMemo(wt, val, w, n));
console.log(usingTopDown(wt, val, w, n));
let arr = [3, 34, 4, 12, 5, 2];
n = 6;
let sum = 9;
console.log(isSubsetSum(arr, n, sum));
console.log(canPartition([1, 5, 11, 5]));

console.log(getCountOfSubsetSum([2, 3, 5, 6, 8, 10], 10, 6));
console.log(minSumSubsetDiff([1, 6, 11, 5], 4));

// [1, 5, 8, 9, 10, 17, 17, 2],8 ans 22
console.log(rodCuttingMaxProfit([1, 5, 8, 9, 10, 17, 17, 2], 8));
console.log(coinChangeMaxWaysToSum([1, 2, 3], 5));
console.log(coinChange([1, 2, 3], 5));

console.log(lcsRecursive("abcde", "ace"));
