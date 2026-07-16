class Solution:
    def climbStairs(self, n: int) -> int:
      if n==1:
        return 1
      memory=[-1 for i in range(n+1)]
      memory[0]=0
      memory[1]=1
      memory[2]=2
      self.helper(n,memory)
      return memory[n]
    def helper(self,n,memory):
      if memory[n]==-1:
        acc= self.helper(n-1,memory)+self.helper(n-2,memory)
        memory[n]=acc
        return acc
      return memory[n]
      