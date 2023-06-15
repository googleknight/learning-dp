import usingRecursion from "./Knapsack-0-1/usingRecursion.js"
import usingMemo from "./Knapsack-0-1/usingMemo.js"
import usingTopDown from "./Knapsack-0-1/usingTopDown.js"
import isSubsetSum from "./Knapsack-0-1/subsetSum.js"
import canPartition from "./Knapsack-0-1/partitionEqualSubsetSum.js"
let w=10,wt=[1,3,4,6], val=[20,30,10,50],n=4;
console.log(usingRecursion(wt,val,w,n))
console.log(usingMemo(wt,val,w,n))
console.log(usingTopDown(wt,val,w,n))
let arr=[3, 34, 4, 12, 5, 2]; n=6; let sum=9;
console.log(isSubsetSum(arr,n,sum))
console.log(canPartition([1,5,11,5]))