class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        strList=[{} for _ in strs]
        result={}
        for index,s in enumerate(strs):
            tempMap={}
            for i in s:
                tempMap[i]=tempMap.get(i,0)+1
            hashkey=[0 for _ in range(26)]
            for key,value in tempMap.items():
                hashkey[ord(key)-97]=value
            result.setdefault(tuple(hashkey),[]).append(s)
        return list(result.values())