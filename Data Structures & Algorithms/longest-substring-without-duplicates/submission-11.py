class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if not len(s):
            return 0
        if len(s)==1:
            return 1
        countset,L,R,result=set(s[0]),0,1,0
        while R<len(s):
            while s[R] in countset:
                countset.remove(s[L])
                L+=1
            countset.add(s[R])
            result=max(result,R-L+1)
            R+=1
        return result