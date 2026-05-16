class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        ans = [0]*2*len(nums)
        for i,value in enumerate(nums):
            ans[i]=ans[i+len(nums)]=value
        return ans