class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let L=0,R=nums.length-1,mid=0
        while(L<=R){
            mid=Math.floor((L+R)/2)
            if(nums[mid]==target){
                return mid
            }
            if(nums[mid]<target){
                L=mid+1
            }else{
                R=mid-1
            }
        }
        return -1
    }
}
