class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit,buying=0,prices[0]
        for i in range(1,len(prices)):
            profit=max(profit,prices[i]-buying)
            if buying>prices[i]:
                buying=prices[i]
        return profit
