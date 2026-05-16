class Solution:
    def trap(self, height: List[int]) -> int:
        rightmaxlist,leftmaxlist,templeftmax,temprightmax=[0]*len(height),[0]*len(height),0,0
        for i in range(len(height)):
            leftmaxlist[i]=templeftmax
            templeftmax=max(templeftmax,height[i])
            rightmaxlist[len(height)-i-1]=temprightmax
            temprightmax=max(temprightmax,height[len(height)-i-1])
        area=0
        for i in range(len(height)):
            area+=max(min(rightmaxlist[i],leftmaxlist[i])-height[i],0)
        return area