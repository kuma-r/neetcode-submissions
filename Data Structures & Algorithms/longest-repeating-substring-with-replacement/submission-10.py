class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
      L,freq,maxRepeated,count=0,{},0,0
      for R in range(len(s)):
        freq[s[R]]=freq.get(s[R],0)+1
        maxRepeated=max(maxRepeated,freq[s[R]])
        if R-L-maxRepeated<k:
          count=max(count,R-L)
        else:
          freq[s[L]]-=1
          L+=1
      return count+1