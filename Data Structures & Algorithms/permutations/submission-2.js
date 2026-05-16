class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    
    permute(nums) {
        const current=[],result=[],visited=new Array(nums.length).fill(false)
        function backtrack(){
            if(nums.length===current.length){
                result.push([...current])
                return
            }
            for(let i=0;i<nums.length;i++){
                if(visited[i]) continue
                current.push(nums[i])
                visited[i]=true
                backtrack()   
                visited[i]=false
                current.pop()
            }
         }  
        backtrack()    
        return result
    }
}
