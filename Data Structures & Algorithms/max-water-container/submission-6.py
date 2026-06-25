class Solution:
    def maxArea(self, heights: List[int]) -> int:
        maxAmount,L,R=0,0,len(heights)-1
        while(L<R):
          maxAmount=max(maxAmount,min(heights[L],heights[R])*(R-L))
          if heights[L]>heights[R]:
            R-=1
          else:
            L+=1
        return maxAmount
