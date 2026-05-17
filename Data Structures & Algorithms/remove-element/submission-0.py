class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        i,n,=0,len(nums)
        while i<n:
            num=nums[i]
            if num==val:
                n -= 1
                nums[i] = nums[n]
            else:
                i+=1
        return n