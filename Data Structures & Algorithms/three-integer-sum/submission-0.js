class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let L=0,R=nums.length-1
        let result=[]
        nums=nums.sort((a,b)=>a-b)
        for(let i=0;i<nums.length-2;i++){
            if(i>0 && nums[i]==nums[i-1]){
                continue
            }else{
                L=i+1
                R=nums.length-1
                let target=-nums[i]
                while(L<R){
                    let sum=nums[L]+nums[R]
                    if(sum<target){
                        L++
                    }else if(sum>target){
                        R--
                    }else{
                        result.push([nums[i],nums[L],nums[R]])
                        while(nums[L]===nums[L+1]){
                            L++
                        }
                        while(nums[R]===nums[R-1]){
                            R--
                        }
                        L++
                        R--
                    }
                }
            }
        }
        return result
    }
}
