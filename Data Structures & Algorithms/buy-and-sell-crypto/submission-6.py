class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        L,R,profit=0,1,0
        while R<len(prices):
          if prices[L]>prices[R]:
            L=R
          else:
            profit=max(profit,prices[R]-prices[L])
          R+=1
        return profit