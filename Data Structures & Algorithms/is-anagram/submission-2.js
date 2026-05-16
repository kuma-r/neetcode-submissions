class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length) return false
        let mapS=new Map(),mapT=new Map()
        for(let i=0;i<s.length;i++){
            mapS.set(s[i],(mapS.get(s[i])||0)+1)
            mapS.set(t[i],(mapS.get(t[i])||0)-1)
        }
        for(let key of mapS.keys()){
            if(mapS.get(key)!==0) return false
        }
        return true
    }
}
