class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        L,R=1,max(piles)
        least=max(piles)
        while L<=R:
          speed,hours=(L+R)//2,0
          for pile in piles:
            hours+=math.ceil(pile/speed)
          if hours>h:
            L=speed+1
          elif hours<=h:
            least=speed
            R=speed-1
        return least





