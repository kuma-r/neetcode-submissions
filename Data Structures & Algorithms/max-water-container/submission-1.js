class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left=0;
        let right=heights.length-1
        let maxArea=-Infinity
        while(right!==0){
            left=0
            while(left<right){
                let area=[right-left]*Math.min(heights[left],heights[right])
                maxArea=Math.max(area,maxArea)
                left++
            }
            right--
        }
        return maxArea
    }
}
