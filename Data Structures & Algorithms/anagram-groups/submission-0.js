class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const globalMap={}
        for(let s of strs){
            let arr=new Array(26).fill(0)
            for(let i=0;i<s.length;i++){
                arr[s.charCodeAt(i)-97]+=1
            }
            let str=arr.join("-")
            if(globalMap[str]){
                globalMap[str]=[...globalMap[str],s]
            }else{
                globalMap[str]=[s]
            }
        }
        return Object.values(globalMap)
    }
}
