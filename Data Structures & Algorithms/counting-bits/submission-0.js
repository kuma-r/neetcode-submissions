class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    getCount(n){
        let count=0
        for(let i=0;i<10;i++){
            if(n&1) count++
            n=n>>1
        }
        return count
    }
    countBits(n) {
        let result =[]
        for(let i=0;i<=n;i++){
            result.push(this.getCount(i))
        }
        return result
    }
}
