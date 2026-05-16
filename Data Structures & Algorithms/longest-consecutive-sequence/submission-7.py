class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not len(nums):
            return 0
        numset,globalmax=set(nums),0

        for num in nums:
            if num-1 not in numset:
                count,temp=0,num
                while(temp in numset):
                    count+=1
                    temp+=1
                globalmax=max(globalmax,count)
        return globalmax

        

