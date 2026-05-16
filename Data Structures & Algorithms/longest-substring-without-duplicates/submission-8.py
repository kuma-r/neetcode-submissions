class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s)==0:
            return 0
        if len(s)==1:
            return 1
        result,L,R,charmap=0,0,1,{s[0]:0}
        while L<R and R<len(s):
            if s[R] in charmap:
                result=max(result,R-L)
                L=charmap[s[R]]+1
                R=L
                charmap={}
            charmap[s[R]]=R
            R+=1
        result=max(result,R-L)
        return result