class Solution:
    def isPalindrome(self, s: str) -> bool:
        filtered=[ch.lower() for ch in s if ch.isalnum()]
        for i in range(len(filtered)//2):
            if filtered[i]!=filtered[len(filtered)-i-1]:
                return False
        return True