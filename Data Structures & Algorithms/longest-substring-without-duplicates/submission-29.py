class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        L,maxLen,freq=0,0,set()
        for R in range(len(s)):
            while s[R] in freq:
              freq.remove(s[L])
              L+=1
            freq.add(s[R])
            maxLen=max(maxLen,R-L+1)
        return maxLen

