class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if(nums.length==1){
            if(nums[0]==target){
                return 0
            }
            return -1
        }
        let L=0,R=nums.length-1,mid=0
        if(nums[nums.length-1]==target){
            return nums.length-1
        }
        while(L<=R){
            mid=Math.floor((L+R)/2)
            if(nums[mid]==target){
                return mid
            }
            if(nums[L]<=nums[mid]){
                if(nums[L]<=target && nums[mid]>target){
                    R=mid-1
                }else{
                    L=mid+1
                }
            }else{
                if(nums[mid]<target && nums[R]>=target){
                    L=mid+1
                }else{
                    R=mid-1
                }
            }
        }
        return -1
    }
}
