class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stackArr = []
        if(s.length%2!==0){
            return false
        }
        for(let i=0;i<s.length;i++){
            if(s[i]==="{" || s[i]==="(" || s[i]==="["){
                stackArr.push(s[i])
            }else{
                let lastChar = stackArr.pop()
                if(s[i]==="}" && lastChar ==="{"){
                    continue
                }else if(s[i]===")" && lastChar ==="("){
                    continue
                }else if(s[i]==="]" && lastChar ==="["){
                    continue
                }else{
                    return false
                }
            }
        }
        if(stackArr.length!==0){
            return false
        }
        return true
    }
}
