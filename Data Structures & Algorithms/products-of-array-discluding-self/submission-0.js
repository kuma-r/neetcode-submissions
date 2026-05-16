class Solution {
    productExceptSelf(nums) {
        let output=[]
        output[0]=1
        let product=1
        for(let i=1;i<nums.length;i++){
            output[i]=output[i-1]*nums[i-1]
        }
        for(let i=nums.length-1;i>0;i--){
            product*=nums[i]
            output[i-1]*=product
        }
        return output
    }
}
