class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const result=[],vMap=new Set()
const current=new Array(n).fill(".");
for(let i=0;i<n;i++){
    current[i]=new Array(n).fill(".");
}
        function isLeftValid(i,j){
            while(i>=0 && j>=0){
                if(current[i][j]==="Q") return false
                i--
                j--
            }
            return true
        }
        function isRightValid(i,j){
            while(i>=0 && j<n){
                if(current[i][j]==="Q") return false
                i--
                j++
            }
            return true
        }
        function isValid(i,j){
            if(vMap.has(j)) return false
            return (isLeftValid(i,j) && isRightValid(i,j))
        }
        function backtrack(index){
            if(index==n){
            result.push(current.map(row => row.join("")));
                return
            }
            for(let i=0;i<n;i++){
                if(isValid(index,i)){
                    current[index][i]="Q"
                    vMap.add(i)
                    backtrack(index+1)
                    vMap.delete(i)
                    current[index][i]="."
                }
            }
        }
        backtrack(0)
        return result
    }
}
