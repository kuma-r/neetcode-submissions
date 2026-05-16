class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        result,chardict,L=0,{},0
        for R in range(len(s)):
            chardict[s[R]]=chardict.get(s[R],0)+1
            temp=max(chardict.values(),default=0)
            if R-L+1-temp<=k:
                result=max(result,R-L+1)
            else:
                chardict[s[L]]-=1
                L+=1
        return result