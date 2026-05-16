class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const temp = new Set()
        let found=false
        nums.forEach((item)=>{
            if(temp.has(item)){
                found=true
                return
            }
            temp.add(item)
        })
        return found
    }
}
