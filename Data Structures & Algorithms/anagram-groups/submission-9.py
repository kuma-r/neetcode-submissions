class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
      keymap={}
      for s in strs:
        key=[0]*26
        for i in range(len(s)):
          index=ord(s[i])-97
          key[index]=key[index]+1
        tupleKey=tuple(key)
        keymap.setdefault(tupleKey,[]).append(s)
      return list(keymap.values())
