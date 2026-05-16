class Solution:
    def isValid(self, s: str) -> bool:
        stack=[]
        bracketsMap={
            "}":"{",
            ")":"(",
            "]":"["
        }
        for ch in s:
            if ch not in bracketsMap:
                stack.append(ch)
            elif len(stack)==0 or stack[-1]!=bracketsMap[ch]:
                return False
            else:
                stack.pop()
        return len(stack)==0