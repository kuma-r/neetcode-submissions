class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxLeft=[],maxRight=[],area=0
        maxLeft[0]=0
        maxRight[height.length-1]=0
        for(let i=1;i<height.length;i++){
            maxLeft[i]=Math.max(maxLeft[i-1],height[i-1])
            maxRight[height.length-i-1]=Math.max(maxRight[height.length-i],height[height.length-i])
        }
        for(let i=0;i<height.length;i++){
            area+=Math.max(0,Math.min(maxLeft[i],maxRight[i])-height[i])
        }

        return area
    }
}
