class PrefixTree:

    def __init__(self,ch=None,end=False):
      self.children={}
      if ch:
        self.children[ch]=PrefixTree()
      self.end=end

    def insert(self, word: str) -> None:
      cur=self
      for i,ch in enumerate(word):
        if ch not in cur.children:
          cur.children[ch]=PrefixTree()
        if i==len(word)-1:
          cur.end=True
        cur=cur.children[ch]

    def search(self, word: str) -> bool:
        cur=self
        for i,ch in enumerate(word):
          if ch not in cur.children:
            return False
          if i==len(word)-1:
            return cur.end
          cur=cur.children[ch]

    def startsWith(self, prefix: str) -> bool:
        cur=self
        for ch in prefix:
          if ch not in cur.children:
            return False
          cur=cur.children[ch]
        return True
        