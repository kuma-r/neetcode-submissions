class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        function backtrack(i,j,wordI){
            if(wordI===word.length) return true
            if(i<0 || j<0 || i>=board.length || j>=board[0].length || board[i][j]!==word[wordI]) return false
            let temp=board[i][j]
            board[i][j]="#"
            let result= (backtrack(i+1,j,wordI+1) || backtrack(i-1,j,wordI+1) || backtrack(i,j+1,wordI+1)||backtrack(i,j-1,wordI+1))
            board[i][j]=temp
            return result
        }
        for(let i=0;i<board.length;i++){
            for(let j=0;j<board[0].length;j++){
                if(backtrack(i,j,0)) return true
            }
        }
        return false
    }
}
