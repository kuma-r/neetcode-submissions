class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let L=0,R=heights.length-1
        let maxArea=0
        while(L<R){
            maxArea=Math.max(maxArea,Math.min(heights[L],heights[R])*(R-L))
            if(heights[L]>heights[R]){
                R--
            }else{
                L++
            }
        }
        return maxArea
    }
}
