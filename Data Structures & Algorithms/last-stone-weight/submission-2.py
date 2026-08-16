class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        for i in range(len(stones)):
          stones[i]=-stones[i]
        heapq.heapify(stones)
        while len(stones)>1:
          stone1,stone2=-heapq.heappop(stones),-heapq.heappop(stones)
          if stone1!=stone2:
            heapq.heappush(stones,-abs(stone1-stone2))
        if not stones:
          return 0
        return -stones[0]