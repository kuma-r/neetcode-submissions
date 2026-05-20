class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        freqMap={}
        for num in nums:
            freqMap[num]=freqMap.get(num,0)+1
        for key,value in freqMap.items():
            if value>=len(nums)//2:
                return key