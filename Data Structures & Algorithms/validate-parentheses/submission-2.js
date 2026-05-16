class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let obj={
            "}":"{",
            ")":"(",
            "]":"["
        }
        let stack=[]
        for(let e of s){
            if(!obj[e]){
                stack.push(e)
            }else{
                if(stack.pop()!==obj[e]){
                    return false
                }
            }
        }
        if(stack.length!==0) return false
        return true
    }
}
