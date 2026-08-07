class Solution:
    def search(self, nums: List[int], target: int) -> int:
        L,R,partition=0,len(nums)-1,0
        if nums[L]<=nums[R]:
          return self.find(nums,L,R,target)
        while L<=R:
          if nums[L] <= nums[R]:
            break
          mid=(L+R)//2
          if nums[L]<=nums[mid]:
            L=mid+1
          elif nums[L]>nums[mid]:
            R=mid
        if target>=nums[0] and target<=nums[L-1]:
          return self.find(nums,0,L-1,target)
        return self.find(nums,L,len(nums)-1,target)
    def find(self,nums,L,R,target):
      while L<=R:
        mid=(L+R)//2
        if nums[mid]>target:
          R=mid-1
        elif nums[mid]<target:
          L=mid+1
        else:
          return mid
      return -1