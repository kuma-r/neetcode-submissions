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
        cur=cur.children[ch]
      cur.end=True

    def search(self, word: str) -> bool:
        cur=self
        for i,ch in enumerate(word):
          if ch not in cur.children:
            return False
          cur=cur.children[ch]
        return cur.end

    def startsWith(self, prefix: str) -> bool:
        cur=self
        for ch in prefix:
          if ch not in cur.children:
            return False
          cur=cur.children[ch]
        return True
        