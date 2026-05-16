class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        prevMap={}
        for i in range(len(nums)):
            if prevMap.get(target-nums[i])!=None:
                return [prevMap.get(target-nums[i]),i]
            else:
                prevMap[nums[i]]=i