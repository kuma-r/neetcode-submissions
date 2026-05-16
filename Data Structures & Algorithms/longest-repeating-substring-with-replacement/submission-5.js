class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */

    mostRepeatedCharCount(arr){
        let maxFreq=0
        for(const f of arr){
            maxFreq=Math.max(maxFreq,f)
        }
        return maxFreq
    }
    characterReplacement(s, k) {
        if(s.length==1) return 1
        let L=0,R=0,res=0,frequencyArr=new Array(26).fill(0)
        while(R<s.length){
            frequencyArr[s[R].charCodeAt(0)-65]++
            while(R-L+1-this.mostRepeatedCharCount(frequencyArr)>k){
                frequencyArr[s[L].charCodeAt(0)-65]--
                L++
            }
            res=Math.max(res,R-L+1)
            R++
            
        }
        return res
    }
}
