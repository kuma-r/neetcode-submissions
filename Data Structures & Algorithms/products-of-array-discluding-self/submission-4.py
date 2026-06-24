class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        l=len(nums)
        prefix,suffix=[1]*l,[1]*l
        for i in range(1,l):
          prefix[i]*=prefix[i-1]*nums[i-1]
          suffix[l-i-1]=suffix[l-i]*nums[l-i]
        return [prefix[i]*suffix[i] for i in range(len(nums))]