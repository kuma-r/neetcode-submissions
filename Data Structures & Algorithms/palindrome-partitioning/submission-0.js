class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    isPalindrom(s){
        for(let i=0;i<s.length;i++){
            if(s[i]!==s[s.length-1-i]){
                return false
            }
        }
        return true
    }
    helper(s,current,result,index){
        if(index==s.length){
            result.push([...current])
        }
        for(let i=index;i<s.length;i++){
            if(this.isPalindrom(s.slice(index,i+1))){
                current.push(s.slice(index,i+1))
                this.helper(s,current,result,i+1)
                current.pop()
            }
        }
    }
    partition(s) {
        let current=[],result=[]
        this.helper(s,current,result,0)
        return result
    }
}
