class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        presum=[1]*len(nums)
        presum[0]=1
        postsum=[1]*len(nums)
        postsum[len(nums)-1]=1
        for index in range(1,len(nums)):
            presum[index]=presum[index-1]*nums[index-1]
            postsum[len(nums)-index-1]=postsum[len(nums)-index]*nums[len(nums)-index]
        return [presum[i]*postsum[i] for i in range(len(nums))]

