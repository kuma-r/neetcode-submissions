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
        r=index
        while s[r]!='#':
          r+=1
        slen=int(s[index:r])
        result.append(s[r+1:r+1+slen])
        index=r+1+slen
      return result
