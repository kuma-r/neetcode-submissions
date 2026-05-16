class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    dfs(digits,index,current,result,charObj){
        if(index==digits.length){
            result.push(current)
            return
        }
        for(const ch of charObj[digits[index]]){
            current+=ch
            this.dfs(digits,index+1,current,result,charObj)
            current=current.slice(0,-1)
        }
    }
    letterCombinations(digits) {
        if(!digits.length) return []
        let result=[],current=""
        let charObj={
            "2":"abc",
            "3":"def",
            "4":"ghi",
            "5":"jkl",
            "6":"mno",
            "7":"pqrs",
            "8":"tuv",
            "9":"wxyz",
        }
        this.dfs(digits,0,current,result,charObj)
        return result
    }
}
