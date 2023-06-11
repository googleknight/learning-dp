// const w=10,wt=[1,3,4,6], val=[20,30,10,50],n=4;
const usingRecursion = (wt,val,w,n) => {
    if(w===0||n===0)
        return 0;
    if(wt[n-1]<=w){
        let taken = val[n-1]+usingRecursion(wt,val,w-wt[n-1],n-1);
        let notTaken = usingRecursion(wt,val,w,n-1);
        return Math.max(taken,notTaken);
    }
    if(wt[n-1]>w){
        return usingRecursion(wt,val,w,n-1);
    }   
}

export default usingRecursion