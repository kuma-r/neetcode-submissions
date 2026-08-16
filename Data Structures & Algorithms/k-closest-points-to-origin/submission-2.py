class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        for i in range(len(points)):
          points[i]=(math.sqrt((points[i][0]*points[i][0]+points[i][1]*points[i][1])),points[i])
        points.sort()
        result=[]
        for i in range(k):
          result.append(points[i][1])
        return result