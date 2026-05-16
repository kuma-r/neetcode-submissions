class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    findMax(arr){
        let max=arr[0];
        for(let num of arr){
            max=Math.max(num,max)
        }
        return max
    }
    maxSlidingWindow(nums, k) {
        let result=[],R=k-1;
        if(k>nums.length){
            return []
        }
        while(R!==nums.length){
            result.push(this.findMax(nums.slice(R-k+1,R+1)))
            R++
        }
        return result
    }
}
