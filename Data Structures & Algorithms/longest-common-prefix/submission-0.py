class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        result=0
        
        for i in range(len(strs[0])):
            ch,count=strs[0][i],0
            for str in strs:
                if len(str)<=i or str[i]!=ch:
                    break
                count+=1
            if count==len(strs):
                result+=1
            else:
                break
        return strs[0][0:result]