class Solution:
    def findMin(self, nums: List[int]) -> int:
        L,R,result=0,len(nums)-1,nums[0]
        while L<=R:
          if nums[L]<=nums[R]:
            result=min(result,nums[L])
            break
          mid=(L+R)//2
          if nums[mid]>=nums[L]:
            result=min(result,nums[L])
            L=mid+1
          elif nums[mid]<nums[L]:
            result=min(result,nums[mid])
            R=mid
        return result
