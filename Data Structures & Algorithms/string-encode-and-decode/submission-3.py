class Solution:

    def encode(self, strs: List[str]) -> str:
      result=""
      for s in strs:
        result+=str(len(s))+'#'+s
      print(result)
      return result
    def decode(self, s: str) -> List[str]:
      result=[]
      index=0
      while index<len(s):
        r=index+1
        while s[r]!='#':
          r+=1
        slen=int(s[index:r])
        cur=""
        cur+=s[r+1:r+1+slen]
        result.append(cur)
        index=r+1+slen
      return result
