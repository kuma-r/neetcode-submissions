class TimeMap:

    def __init__(self):
        self.store={}

    def set(self, key: str, value: str, timestamp: int) -> None:
        if key in self.store:
          self.store[key].append({"timestamp": timestamp,"value": value})
        else:
          self.store[key]=[{"timestamp": timestamp,"value": value}]

    def get(self, key: str, timestamp: int) -> str:
      if not key in self.store:
        return ""
      item=self.store[key]
      L,R=0,len(item)-1
      while L<=R:
        mid=(L+R)//2
        if item[mid]["timestamp"]>timestamp:
          R=mid-1
        else:
          L=mid+1
      if R>=0:
        return item[R]["value"]
      return ""
      
        
