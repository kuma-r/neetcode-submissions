class WordDictionary:

    def __init__(self):
        self.children={}
        self.end=False
    def addWord(self, word: str) -> None:
        cur=self
        for ch in word:
          if ch not in cur.children:
            cur.children[ch]=WordDictionary()
          cur=cur.children[ch]
        cur.end=True

    def search(self, word: str) -> bool:
      return self.dfs(self,0,word)
    def dfs(self,cur,index,word):
      if index==len(word):
          return cur.end
      for i in range(index,len(word)):
        if word[i]!='.':
          if word[i] not in cur.children:
            return False
          return self.dfs(cur.children[word[i]],i+1,word)
        else:
          for ch in cur.children.keys():
            if self.dfs(cur.children[ch],i+1,word):
              return True
          return False

