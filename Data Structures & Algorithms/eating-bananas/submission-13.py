class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        L,R=1,max(piles)
        least=max(piles)
        while L<=R:
          speed=(L+R)//2
          hours=self.calculateHours(piles.copy(),speed)
          if hours>h:
            L=speed+1
          elif hours<=h:
            least=speed
            R=speed-1
        return least


    def calculateHours(self,piles,speed):
      hours=0
      for i in range(len(piles)):
        hours+=math.ceil(piles[i] / speed)
      return hours






