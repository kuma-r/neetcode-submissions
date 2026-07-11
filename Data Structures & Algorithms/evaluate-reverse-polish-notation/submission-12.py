class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
      stack=[]
      for token in tokens:
        if token not in ['+','-','/','*']:
          stack.append(int(token))
        else:
          if token=='*':
              stack.append(stack.pop()*stack.pop())
          elif token=='+':
              stack.append(stack.pop()+stack.pop())
          elif token=='-':
              v1,v2=stack.pop(),stack.pop()
              stack.append(v2-v1)
          elif token=='/':
              v1,v2=stack.pop(),stack.pop()
              stack.append(int(v2/v1))
      return stack[-1]