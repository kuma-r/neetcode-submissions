class Solution:
    def trap(self, height: List[int]) -> int:
        leftmax,rightmax=[0]*len(height),[0]*len(height)
        leftmax[0],rightmax[len(height)-1]=0,0
        leftmaxlocal,rightmaxlocal=height[0],height[-1]
        for i in range(1,len(height)):
            leftmax[i]=leftmaxlocal
            leftmaxlocal=max(leftmaxlocal,height[i])
            rightmax[len(height)-i-1]=rightmaxlocal
            rightmaxlocal=max(rightmaxlocal,height[len(height)-i-1])
        water=0
        for i in range(len(height)):
            water+=max(0,min(leftmax[i],rightmax[i])-height[i])
        return water

        