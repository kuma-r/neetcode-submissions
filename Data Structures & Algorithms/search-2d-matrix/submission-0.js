class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let top=0,bottom=matrix.length-1,vMid=0
        while(top<=bottom){
            vMid=Math.floor((top+bottom)/2)
            if(matrix[vMid][0]==target || matrix[vMid][matrix[0].length-1]==target){
                return true
            }
            if(matrix[vMid][0]<target && matrix[vMid][matrix[0].length-1]>target){
                break;
            }
            if(matrix[vMid][0]>target){
                bottom=vMid-1
            }else{
                top=vMid+1
            }
        }
        if(top>bottom){
            return false
        }
        let left=0,right=matrix[0].length-1,mid=0
        while(left<=right){
            mid=Math.floor((left+right)/2)
            if(matrix[vMid][mid]==target){
                return true
            }
            if(matrix[vMid][mid]<target){
                left=mid+1
            }else{
                right=mid-1
            }
        }
        return false
    }
}
