class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max=0
        for(const p of piles){
            max=Math.max(p,max)
        }
        if(piles.length===h){
            return max
        }
        let L=1,R=max,mid=0,hours=0,res=max
        while(L<=R){
            hours=0
            mid=Math.floor((L+R)/2)
            for(const p of piles){
                hours+=Math.ceil(p/mid)
                if(hours>h){
                    break
                }
            }
            if(hours<=h){
                res=Math.min(res,mid)
                R=mid-1
            }else{
                L=mid+1
            }            
        }
        return res
    }
}
