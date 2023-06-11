import usingRecursion from "./Knapsack-0-1/usingRecursion.js"
import usingMemo from "./Knapsack-0-1/usingMemo.js"
import usingTopDown from "./Knapsack-0-1/usingTopDown.js"
const w=10,wt=[1,3,4,6], val=[20,30,10,50],n=4;
console.log(usingRecursion(wt,val,w,n))
console.log(usingMemo(wt,val,w,n))
console.log(usingTopDown(wt,val,w,n))