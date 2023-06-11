// const w=10,wt=[1,3,4,6], val=[20,30,10,50],n=4;
const usingRecursion = (wt,val,w,n,dp) => {
    if(dp[n][w]!==-1)
        return dp[n][w]
    if(w===0||n===0)
        return 0;
    let result=0;
    if(wt[n-1]<=w){
        let taken = val[n-1]+usingRecursion(wt,val,w-wt[n-1],n-1,dp);
        let notTaken = usingRecursion(wt,val,w,n-1,dp);
        result= Math.max(taken,notTaken);
    }
    if(wt[n-1]>w){
        result= usingRecursion(wt,val,w,n-1,dp);
    }
    dp[n][w]=result;
    return dp[n][w];  
}
const usingMemo= (wt,val,w,n) => {
    const dp=[];
    for(let i=0;i<=n;i++){
        dp.push(Array(w+1).fill(-1))
    }
    return usingRecursion(wt,val,w,n,dp);
}
export default usingMemo