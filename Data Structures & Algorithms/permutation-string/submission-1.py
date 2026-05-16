class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1)>len(s2):
            return False
        s1dict={}
        for ch in s1:
            s1dict[ch]=1+s1dict.get(ch,0)
        L=0
        s2dict={}
        for R in range(len(s2)):
            if s1dict.get(s2[R],0)==0:
                L=R+1
                s2dict={}
                continue
            s2dict[s2[R]]=1+s2dict.get(s2[R],0)
            if s1dict==s2dict:
                return True      
            while s2dict[s2[R]]>s1dict[s2[R]]:
                s2dict[s2[L]]-=1
                L+=1
        return False