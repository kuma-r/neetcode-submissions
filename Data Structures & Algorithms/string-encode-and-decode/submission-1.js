class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded=""
        for(const str of strs){
            encoded+=str.length+'#'+str
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded=[]
        let currentIndex=0
        for(let i=0;i<str.length;i++){
            if(str[i]=="#"){
                let len=parseInt(str.slice(currentIndex,i))
                decoded.push(str.slice(i+1,i+len+1))
                i=i+len+1
                currentIndex=i
            }
        }
        return decoded
    }
}
