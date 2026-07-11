class Solution:
  def isValid(self, s: str) -> bool:
    stack, charMap = [], {"{": "}", "[": "]", "(": ")"}
    if len(s)%2!=0:
      return False
    for ch in s:
      if ch in charMap:
        stack.append(ch)
      elif stack and charMap[stack[-1]] == ch:
        stack.pop()
      else:
        return False
    return len(stack) == 0
