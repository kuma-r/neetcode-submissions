class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        if k==1:
            return nums
        result,queue=[],[]
        def findmax(queue):
            temp=queue[0]
            for i in queue:
                if i>temp:
                    temp=i
            return temp
        for i in range(0,k):
            queue.append(nums[i])
        result.append(findmax(queue))
        for R in range(k,len(nums)):
            queue.pop(0)
            queue.append(nums[R])
            result.append(findmax(queue))
        return result