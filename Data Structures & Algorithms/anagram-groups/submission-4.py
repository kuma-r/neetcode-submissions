class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        answers={}
        for temp in strs:
            arr=[0]*26
            for ch in temp:
                arr[ord(ch)-97]+=1
            key=tuple(arr)
            answers[key]=answers.get(key,[])
            answers[key].append(temp)
        answer=[x for x in answers.values()]
        return answer