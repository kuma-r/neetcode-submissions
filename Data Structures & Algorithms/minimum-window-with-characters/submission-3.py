class Solution:
  def minWindow(self, s: str, t: str) -> str:
    need, window, have = {}, {}, 0
    for ch in t:
      need[ch] = need.get(ch, 0) + 1
    L, short = 0, ""
    for R in range(len(s)):
      ch = s[R]
      if ch in need:
        window[ch] = window.get(ch, 0) + 1
        if need[ch]==window[ch]:
          have+=1
      while have==len(need):
        if len(short)>R-L+1 or short=="":
          short=s[L:R+1]
        if s[L] in need:
          window[s[L]]-=1
          if need[s[L]]>window[s[L]]:
            have-=1
        L+=1
    return short
