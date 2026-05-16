class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */

    calculateStr(s){
        let arr=this.createFrequencyArr(s)
        let res=""
        for(let i=0;i<arr.length;i++){
            if(arr[i]){
                res+=(arr[i]).toString()+String.fromCharCode(i+97)     
            }
        }
        return res
    }
    createFrequencyArr(s){
        let arr=new Array(26).fill(0)
        for(let ch of s){
            arr[ch.charCodeAt(0)-97]++
        }
        return arr
    }
    checkInclusion(s1, s2) {
        if(s1.length>s2.length){
            return false
        }
        let key1 = this.calculateStr(s1)
        let P=s1.length-1
        while(P<s2.length){
            let key2=this.calculateStr(s2.slice(P-(s1.length-1),P+1))
            if(key1 == key2){
                return true
            }
            P++
        }
        return false
    }
}
