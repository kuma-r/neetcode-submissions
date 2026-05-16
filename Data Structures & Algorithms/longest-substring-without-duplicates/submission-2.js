class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charMap=new Map(),maxLength=0,L=0,R=0
        if(!s.length){
            return 0
        }
        while(R<s.length){
            // let currentChar=s[R]
            // if(charMap[currentChar]>=L){
            //     L=charMap[currentChar]+1
            // }
            // charMap[currentChar]=R
            // maxLength=Math.max(maxLength,R-L+1)
            // R++

            let currentChar=s[R]
            if(charMap.has(currentChar)){
                for(let i=L;i<charMap.get(currentChar);i++){
                    charMap.delete(s[i])
                }
                L=charMap.get(currentChar)+1
            }
            charMap.set(currentChar,R)
            maxLength=Math.max(maxLength,R-L+1)
            R++
        }
        return maxLength
    }
}
