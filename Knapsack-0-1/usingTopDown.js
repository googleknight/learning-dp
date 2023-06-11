// const w=10,wt=[1,3,4,6], val=[20,30,10,50],n=4;
const usingTopDown = (wt,val,w,n) => {
    const dp=[];
    for(let i=0;i<=n;i++)
        dp.push(Array(w+1).fill(0));

    for(let i=1;i<=n;i++){
        for(let j=1;j<=w;j++){
            if(wt[i-1]<=j){
                let taken = val[i-1]+dp[i-1][j-wt[i-1]];
                let notTaken = dp[i-1][j];
                dp[i][j]=Math.max(taken,notTaken);
            } else if(wt[i-1]>j){
                dp[i][j]=dp[i-1][j];
            }
        }
    }
    return dp[n][w]
}

export default usingTopDown