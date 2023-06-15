const isSubsetSum=(nums,n,sum)=>{
    const dp=[];
    for(let i=0;i<n+1;i++){
        dp.push(Array(sum+1).fill(false))
        dp[i][0]=true;
    }
    for(let i=1;i<n+1;i++){
        for(let j=1;j<sum+1;j++){
            if(nums[i-1]<=j){
                let taken = dp[i-1][j-nums[i-1]];
                let notTaken = dp[i-1][j];
                dp[i][j] = taken || notTaken;
            }else if(nums[i-1]>j)
                dp[i][j] = dp[i-1][j];
        }
    }
    return dp[n][sum];
}
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// [1,5,11,5] ans true, [1,5,5] [11]
const canPartition = (nums) =>{
    const sum=nums.reduce((acc,cur)=>acc+cur,0);
    
    if(sum%2!==0)
        return false;
    if(sum%2===0){
        return isSubsetSum(nums,nums.length,Math.floor(sum/2));
    }
    
};

export default canPartition