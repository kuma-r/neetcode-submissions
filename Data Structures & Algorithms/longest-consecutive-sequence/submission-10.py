class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        seen=set(nums)
        maxSeq=0
        for n in seen:
            if n-1 not in seen:
                num=n+1
                while num in seen:
                    num+=1
                maxSeq=max(maxSeq,num-n)
        return maxSeq