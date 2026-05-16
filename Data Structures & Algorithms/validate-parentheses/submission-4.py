class Solution:
    def isValid(self, s: str) -> bool:
        stack=[]
        ref={
            "]":"[",
            ")":"(",
            "}":"{"
        }
        for ch in s:
            if ch in ["[","{","("]:
                stack.append(ch)
            elif len(stack)==0 or stack.pop()!=ref[ch]:
                return False
        return len(stack)==0
