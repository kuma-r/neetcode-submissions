class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        maxLen,L,freq=0,0,set()
        for i in range(len(s)):
          if s[i] in freq:
            while s[L]!=s[i]:
              freq.discard(s[L])
              L+=1
            L+=1
          else:
            freq.add(s[i])
            maxLen=max(maxLen,i-L+1)
        return maxLen