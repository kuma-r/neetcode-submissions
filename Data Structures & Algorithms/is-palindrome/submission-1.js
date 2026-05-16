class Solution {
    isPalindrome(s) {
        if(s.length==1)return true
        let L=0,R=s.length-1
        s=s.toLowerCase()
        while(L<R){
            if(!this.isAlphaNumeric(s[L])){
                L++
            }else if(!this.isAlphaNumeric(s[R])){
                R--
            }else{
                if(s[L]!==s[R]){
                    return false
                }
                R--
                L++
            }
        }
        return true
    }
    isAlphaNumeric(c){
        let code=c.charCodeAt(0)
        if((code>=48 && code<=57) || (code>=65 && code<=90) || (code>=97 && code<=122)){
            return true
        }return false
    }
}
