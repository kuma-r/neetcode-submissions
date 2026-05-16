class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        countset,L,result=set(),0,0
        for R in range(len(s)):
            while s[R] in countset:
                countset.remove(s[L])
                L+=1
            countset.add(s[R])
            result=max(result,R-L+1)
        return result