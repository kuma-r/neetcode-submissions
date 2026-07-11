class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        s1Map,s2Map={},{}
        for ch in s1:
          s1Map[ch]=s1Map.get(ch,0)+1
        L,R=0,0
        for R in range(len(s2)):
          ch=s2[R]
          if ch in s1Map:
            s2Map[ch]=s2Map.get(ch,0)+1
            if s1Map[ch]<s2Map[ch]:
              while s1Map[ch]!=s2Map[ch]:
                s2Map[s2[L]]-=1
                L+=1
            elif s1Map==s2Map:
              return True
          else:
            s2Map={}
            L=R+1
        return False