class Solution {
    topKFrequent(nums, k) {
        let obj={}
        let result=[]
        for(const num of nums ){
            obj[num]=(obj[num] || 0)+1
        }
        let arr=new Array(nums.length+1).fill([])
        for(let key in obj){
             arr[obj[key]]=[...arr[obj[key]],key]
        }
        for(let i=arr.length-1;i>=0;i--){
            if(k<=0){
                break
            }
            if(arr[i].length!=0){
                result=[...result,...arr[i]]
                k-=arr[i].length
            }
        }
        
        return result
    }
}
