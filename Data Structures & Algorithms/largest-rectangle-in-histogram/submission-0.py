class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        area=0
        for i in range(len(heights)):
            minv=float('inf')
            for j in range(i,len(heights)):
                minv=min(minv,heights[j])
                area=max(area,(j-i+1)*minv)
        return area