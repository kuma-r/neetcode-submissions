class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        maxLen,L,freq=0,0,set()
        for i in range(len(s)):
          if s[i] in freq:
            maxLen=max(maxLen,i-L)
            while s[L]!=s[i]:
              freq.discard(s[L])
              L+=1
            L+=1
          else:
            freq.add(s[i])
        return max(maxLen,len(s)-L)