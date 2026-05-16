class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const result=[],current=[]
        function isPalindrome(left,right){
            while(left<right){
                if(s[left]!==s[right]) return false
                left++
                right--
            }
            return true
        }
        function backtrack(i){
            if(i==s.length){
                result.push([...current])
                return
            }
            for(let k=i;k<=s.length;k++){
                if(isPalindrome(i,k)){
                    current.push(s.slice(i,k+1))
                    backtrack(k+1)
                    current.pop()
                }
            }
        }
        backtrack(0)
        return result
    }
}
