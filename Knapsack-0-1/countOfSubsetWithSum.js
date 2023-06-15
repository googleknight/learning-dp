// [2,3,5,6,8,10],10,6 ans 3
const getCountOfSubsetSum =( nums, sum, n)=>{
    const dp=[];
    for(let i=0;i<n+1;i++){
        dp.push(Array(sum+1).fill(0))
        dp[i][0]=1;
    }
    for(let i=1;i<n+1;i++){
        for(let j=1;j<sum+1;j++){
            if(nums[i-1]<=j){
                dp[i][j]=dp[i-1][j-nums[i-1]]+dp[i-1][j];
            }
            else if(nums[i-1]>j){
                dp[i][j]=dp[i-1][j];
            }
        }
    }
    return dp[n][sum]
}

export default getCountOfSubsetSum;