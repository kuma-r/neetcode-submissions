class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        numsdict={}
        for num in nums:
            numsdict[num]=numsdict.get(num,0)+1
        arr=[[] for _ in range(len(nums)+1)]
        for key,value in numsdict.items():
            arr[value].append(key)
        result=[]
        for index in range(len(arr)-1,-1,-1):
            result+=arr[index]
            if len(result)>=k:
                return result[:k]
