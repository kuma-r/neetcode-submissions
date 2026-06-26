class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        result=set()
        nums.sort()
        for i in range(len(nums)-2):
          a,b=i+1,len(nums)-1
          while a<b:
            total = nums[i] + nums[a] + nums[b]
            if not total:
              result.add((nums[i],nums[a],nums[b]))
            if total>0:
              b-=1
            else:
              a+=1
        return ([list(i) for i in result])
          
