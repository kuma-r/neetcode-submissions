class Solution:
  def minWindow(self, s: str, t: str) -> str:
    def isSub(need, window):
      print("")
      for key, value in need.items():
        if key not in window or window[key] < value:
          return False
      return True

    need, window = {}, {}
    for ch in t:
      need[ch] = need.get(ch, 0) + 1
    L, short = 0, ""
    for R in range(len(s)):
      ch = s[R]
      if ch in need:
        window[ch] = window.get(ch, 0) + 1
      while isSub(need,window):
        if len(short)>R-L+1 or short=="":
          short=s[L:R+1]
        if s[L] in window:
          window[s[L]]-=1
        L+=1
    return short
