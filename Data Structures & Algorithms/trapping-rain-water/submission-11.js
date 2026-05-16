class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxRight=0
        let maxLeft=0
        let maxLeftArray=[]
        let maxRightArray=[]
        let result=0
        for(let i=0;i<height.length;i++){
            maxLeftArray[i]=maxLeft
            if(maxLeft<height[i]){
                maxLeft=height[i]
            }
        }
        for(let i=height.length-1;i>=0;i--){
            maxRightArray[i]=maxRight
            if(maxRight<height[i]){
                maxRight=height[i]
            }
        }
        for(let i=0;i<height.length;i++){
            let water=Math.min(maxLeftArray[i],maxRightArray[i])-height[i]
            if(water>0){
                result+=water
            }
        }
        return result
    }
}
