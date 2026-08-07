class Solution:
    def findMin(self, nums: List[int]) -> int:
        L,R,result=0,len(nums)-1,nums[0]
        if nums[L]<=nums[R]:
          return result
        while L<=R: 
          mid=(L+R)//2
          if nums[L]<=nums[mid]:
            result=min(result,nums[L])
            L=mid+1
          elif nums[mid]<nums[L]:
            R=mid
        return result
