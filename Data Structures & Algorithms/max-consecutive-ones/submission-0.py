class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        globalMax,localMax=0,0
        for num in nums:
            if num==1:
                localMax+=1
            else:
                globalMax=max(globalMax,localMax)
                localMax=0
        return max(localMax,globalMax)