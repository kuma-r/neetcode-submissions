class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq={}
        for num in nums:
          freq[num]=freq.get(num,0)+1
        freqList=[[] for _ in nums]
        print(freq)
        for key,value in freq.items():
          freqList[value-1].append(key)
        result=[]
        for i in range(len(nums)-1,-1,-1):
          cur=freqList[i]
          if len(cur):
            result.extend(cur)
            k-=len(cur)
            if not k:
              return result
