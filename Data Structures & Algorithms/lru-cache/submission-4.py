class Node:
  def __init__(self,key,val,prev=None,next=None):
    self.val=val
    self.key=key
    self.prev=prev
    self.next=next
class LRUCache:

    def __init__(self, capacity: int):
        self.cache={}
        self.capacity=capacity
        dummyhead,dummytail=Node(-1,0),Node(-1,0)
        self.head=dummyhead
        self.tail=dummytail
        self.head.next=self.tail
        self.tail.prev=self.head
    def removeNode(self,n):
      n.prev.next=n.next
      n.next.prev=n.prev

    def addNode(self,n):
      self.tail.prev.next=n
      n.prev=self.tail.prev
      n.next=self.tail
      self.tail.prev=n
    def get(self, key: int) -> int:
      cur=self.cache.get(key)
      if cur is None:
        return -1
      self.removeNode(cur)
      self.addNode(cur)
      return cur.val

    def put(self, key: int, value: int) -> None:
        cur=self.cache.get(key)
        if cur is None:
          n1=Node(key,value)
          self.addNode(n1)
          self.cache[key]=n1
          if len(self.cache)>self.capacity:
            del self.cache[self.head.next.key]
            self.removeNode(self.head.next)
        else:
          cur.val=value
          self.removeNode(cur)
          self.addNode(cur)