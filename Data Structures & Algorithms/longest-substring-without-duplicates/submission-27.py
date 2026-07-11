class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        L,maxLen,freq=0,0,set()
        for R in range(len(s)):
            if s[R] in freq:
              for i in range(L,R):
                freq.discard(s[i])
                if s[R]==s[i]:
                  L=i+1
                  break
            freq.add(s[R])
            maxLen=max(maxLen,R-L+1)
        return maxLen

