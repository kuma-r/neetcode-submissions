class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        freq={}
        for task in tasks:
          freq[task]=freq.get(task,0)-1
        heap=list(freq.values())
        heapq.heapify(heap)
        cooldown,time=deque(),0
        while heap or cooldown:
          time+=1
          if cooldown and cooldown[0][1]==time:
            heapq.heappush(heap,cooldown.popleft()[0])
          if heap:
            count=heapq.heappop(heap)
            count+=1
            if count!=0:
              cooldown.append([count,1+n+time])
        return time