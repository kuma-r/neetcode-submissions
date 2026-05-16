class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const current=[],result=[]
        function isPalindrome(left,right){
            while(left<right){
                if(s[left]!==s[right]) return false
                left++
                right--
            }
            return true
        }
        function backtrack(index){
            if(index===s.length){
                result.push([...current])
                return
            }
            for(let i=index;i<s.length;i++){
                if(isPalindrome(index,i)){
                    current.push(s.slice(index,i+1))
                    backtrack(i+1)
                    current.pop()
                }
            }
        }
        backtrack(0)
        return result
    }
}
