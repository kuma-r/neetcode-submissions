class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        frequency={}
        for num in nums:
            frequency[num]=frequency.get(num,0)+1
        bucket = [[] for _ in range(len(nums) + 1)]
        for key,value in frequency.items():
            bucket[value].append(key)
        result=[]
        for i in range(len(bucket)-1,-1,-1):
            if k!=0:
                result.extend(bucket[i])
                k-=len(bucket[i])
        return result