class Solution:
    def maxArea(self, heights: List[int]) -> int:
        L,R,area=0,len(heights)-1,0
        while L<R:
            area=max(area,min(heights[L],heights[R])*(R-L))
            if heights[L]>heights[R]:
                R-=1
            else:
                L+=1
        return area

