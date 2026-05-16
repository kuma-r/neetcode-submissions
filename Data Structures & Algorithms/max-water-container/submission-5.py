class Solution:
    def maxArea(self, heights: List[int]) -> int:
        maxArea,i,j=0,0,len(heights)-1
        while i<j:
            maxArea=max(maxArea,min(heights[i],heights[j])*(j-i))
            if heights[i]>heights[j]:
                j-=1
            else:
                i+=1
        return maxArea