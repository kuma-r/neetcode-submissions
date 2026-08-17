class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        taskmap={}
        for task in tasks:
          if task not in taskmap:
            taskmap[task]=0
          taskmap[task]-=1
        heap=list(taskmap.values())
        heapq.heapify(heap)
        queue,time=deque(),0
        while (len(heap) or len(queue)):
          time+=1
          if queue and queue[0][1]==time:
            heapq.heappush(heap,queue.popleft()[0])
          if heap:
            el=heapq.heappop(heap)
            el+=1
            if el!=0:
              queue.append([el,1+n+time])
        return time