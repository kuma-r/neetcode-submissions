class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if len(t)>len(s):
            return ""
        tmap={}
        for ch in t:
            tmap[ch]=1+tmap.get(ch,0)
        result=""
        L=0
        smap={}
        def has_chars():
            for ch in tmap.keys():
                if tmap[ch]>smap.get(ch,0):
                    return False
            return True
        for R,ch in enumerate(s):
            if ch in tmap.keys():
                smap[ch]=1+smap.get(ch,0)
                if has_chars():
                    while has_chars():
                        if s[L] in smap.keys():
                            smap[s[L]]-=1
                        L+=1
                    if result=="" or len(result)>(R-L+2):
                        result=s[L-1:R+1]
        return result