class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        maxValue,maxIndex=nums[0],0
        for i in range(0,k):
          if nums[i]>=maxValue:
            maxValue=nums[i]
            maxIndex=i
        result=[maxValue]
        def findMax(R,maxValue,maxIndex):
          if nums[R]>maxValue:
            maxValue=nums[R]
            maxIndex=R
            return maxValue,maxIndex
          elif maxIndex<=R-k:
            maxValue,maxIndex=nums[R-k+1],R-k+1
            for i in range(R-k+1,R+1):
              if nums[i]>=maxValue:
                maxValue=nums[i]
                maxIndex=i
            return maxValue,maxIndex
          else:
            return maxValue,maxIndex
        for R in range(k,len(nums)):
          maxValue,maxIndex=findMax(R,maxValue,maxIndex)
          result.append(maxValue)
        return result