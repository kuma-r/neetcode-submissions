class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    helper(candidates,target,current,result,index,sum){
        if(sum===target) {
            result.push([...current])
            return
        }
        if(index>=candidates.length || sum>target) return
        current.push(candidates[index])
        this.helper(candidates,target,current,result,index+1,sum+candidates[index])
        current.pop()
        index++
        while(index<candidates.length && candidates[index]===candidates[index-1]){
            index++
        }
        this.helper(candidates,target,current,result,index,sum)
    }
    combinationSum2(candidates, target) {
        const current=[],result=[]
        candidates.sort((a,b)=>a-b)
        this.helper(candidates,target,current,result,0,0)
        return result
    }
}
