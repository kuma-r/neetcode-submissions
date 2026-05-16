class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        numSet,result=set(),0
        for n in nums:
            numSet.add(n)
        for n in nums:
            if n-1 not in numSet:
                res=1
                while n+1 in numSet:
                    res+=1
                    n+=1
                if result<res:
                    result=res
        return result