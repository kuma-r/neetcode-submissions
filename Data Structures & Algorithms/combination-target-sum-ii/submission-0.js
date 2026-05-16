class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    helper(candidates,index,target,sum,current,result){
        if(target==sum){
            result.push([...current])
            return
        }
        if(target<sum || index>=candidates.length){
            return
        }
        current.push(candidates[index])
        this.helper(candidates,index+1,target,sum+candidates[index],current,result)
        current.pop()
        index++
        while(index<candidates.length && candidates[index-1]==candidates[index]){
            index++
        }
        this.helper(candidates,index,target,sum,current,result)
    }
    combinationSum2(candidates, target) {
        let current=[],result=[]
        candidates.sort((a,b)=>a-b)
        this.helper(candidates,0,target,0,current,result)
        return result
    }
}
