const isSubsetSum=(arr,n,sum)=>{
        const dp=[];
        for(let i=0;i<n+1;i++){
            dp.push(Array(sum+1).fill(0));
            dp[i][0]=1;
        }
        dp[0][0]=1;
    for(let i=1;i<n+1;i++){
        for(let j=1;j<sum+1;j++){
            if(arr[i-1]<=j){
                let taken=dp[i-1][j-arr[i-1]];
                let notTaken=dp[i-1][j]
                dp[i][j]=taken || notTaken;
            }
            if(arr[i-1]>j){
                dp[i][j]=dp[i-1][j];
            }
        }
    }
    return dp[n][sum];
}
export default isSubsetSum;