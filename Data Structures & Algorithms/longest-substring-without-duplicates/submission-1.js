class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charMap={},maxLength=0,L=0,R=0
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
            if(charMap[currentChar]!==undefined){
                for(let i=L;i<charMap[currentChar];i++){
                    delete charMap[s[i]]
                }
                L=charMap[currentChar]+1
            }
            charMap[currentChar]=R
            maxLength=Math.max(maxLength,R-L+1)
            R++
        }
        return maxLength
    }
}
