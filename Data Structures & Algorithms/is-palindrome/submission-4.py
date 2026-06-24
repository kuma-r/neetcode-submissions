class Solution:
    def isPalindrome(self, s: str) -> bool:
        filtered=[ch.lower() for ch in s if ch.isalnum()]
        L,R=0,len(filtered)-1
        while L<R:
            if filtered[L]!=filtered[R]:
                return False
            L+=1
            R-=1
        return True