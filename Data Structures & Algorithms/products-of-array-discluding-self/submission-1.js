class Solution {
    productExceptSelf(nums) {
        let output=new Array(nums.length)
        output[0]=1
        for(let i=1;i<nums.length;i++){
            output[i]=output[i-1]*nums[i-1]
        }
        let product=1
        for(let j=nums.length-2;j>=0;j--){
            product*=nums[j+1]
            output[j]*=product
        }
        return output
    }
    
}
