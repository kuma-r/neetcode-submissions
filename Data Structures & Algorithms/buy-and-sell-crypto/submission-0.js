class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxRight=new Array(prices.length).fill(0)
        maxRight[prices.length-1]=0
        for(let i=prices.length-2;i>=0;i--){
            maxRight[i]=Math.max(maxRight[i+1],prices[i+1])
        }
        let max=0
        for(let i=0;i<prices.length;i++){
            max=Math.max(max,Math.max(0,maxRight[i]-prices[i]))
        }
        return max
    }
}
