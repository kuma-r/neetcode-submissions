class Solution {
    topKFrequent(nums, k) {
        let result = {}
        nums.forEach((item)=>{
            if(result[item]){
                result[item]=result[item]+1
            }else{
                result[item]=1
            }
        })
        let arr = new Array(nums.length+1).fill([])
        let keys= Object.keys(result)
        let values= Object.values(result)
        values.forEach((item,index)=>{
            arr[item]=[...arr[item],keys[index]]
        })
        let kmostresult=[]
        for(let i=arr.length-1;i>=0 && k!=0;i--){
            if(arr[i].length){
                kmostresult=[...kmostresult,...arr[i]]
                k-=arr[i].length
            }
        }
        return kmostresult
    }
}
