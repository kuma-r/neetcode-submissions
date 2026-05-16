class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const temp = new Set()
        for(let i=0;i<nums.length;i++){
            if(temp.has(nums[i])){
                return true
            }
            temp.add(nums[i])
        }
        return false
    }
}
