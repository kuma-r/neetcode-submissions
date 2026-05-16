class Solution {
    isPalindrome(s) {
        let L=0;
        let R=s.length-1
        s=s.toLowerCase()
        while(L<R){
            if(!this.alphaNum(s[L])){
                L++
                continue
            }
            if(!this.alphaNum(s[R])){
                R--
                continue
            }
            if(s[L]!==s[R]){
                return false
            }
            L++;
            R--;
        }
        return true
    }
    alphaNum(c) {
        const charCode = c.charCodeAt(0);
        return (
            (65 <= charCode && charCode <= 90) ||
            (97 <= charCode && charCode <= 122) ||
            (48 <= charCode && charCode <= 57)
        );
    }
}
