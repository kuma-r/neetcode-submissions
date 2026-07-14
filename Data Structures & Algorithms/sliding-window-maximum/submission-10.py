class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        dq,result=deque(),[]  
        for i,val in enumerate(nums[0:k]):
          while dq and nums[dq[-1]]<=val:
            dq.pop()
          dq.append(i)
        result.append(nums[dq[0]])
        for i in range(k,len(nums)):
          val=nums[i]
          while dq and nums[dq[-1]]<=val:
            dq.pop()
          dq.append(i)
          while dq[0]<i-k+1:
            dq.popleft()
          result.append(nums[dq[0]])
        return result