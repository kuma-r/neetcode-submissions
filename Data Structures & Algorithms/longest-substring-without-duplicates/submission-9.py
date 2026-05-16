class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        n=len(s)
        if n==0 or n==1:
            return n
        charset,L,R,result={s[0]},0,1,0
        while L<R and R<n:
            if s[R] in charset:
                result=max(result,R-L)
                while s[R] in charset:
                    charset.remove(s[L])
                    L+=1
            charset.add(s[R])
            R+=1
        return max(result,R-L)