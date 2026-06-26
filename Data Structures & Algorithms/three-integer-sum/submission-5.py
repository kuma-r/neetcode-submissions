class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        result=set()
        nums.sort()
        for i in range(len(nums)-2):
          a,b=i+1,len(nums)-1
          while a<b:
            complement=nums[a]+nums[b]
            if nums[i]==-complement:
              result.add((nums[i],nums[a],nums[b]))
            if complement>-nums[i]:
              b-=1
            else:
              a+=1
        return ([list(i) for i in result])
          
