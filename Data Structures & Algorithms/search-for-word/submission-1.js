class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    helper(board,word,index,cSet,row,column,rLen,cLen){
        if(word.length==index){
            return true
        }
        if(row>=rLen || row<0 || column<0 || column>=cLen || word[index]!==board[row][column] || cSet.has(`${row},${column}`)){
            return false
        }
        cSet.add(`${row},${column}`)
        if (
            this.helper(board,word,index+1,cSet,row,column-1,rLen,cLen) ||
            this.helper(board,word,index+1,cSet,row,column+1,rLen,cLen) ||
            this.helper(board,word,index+1,cSet,row+1,column,rLen,cLen) ||
            this.helper(board,word,index+1,cSet,row-1,column,rLen,cLen)
        ) return true
        cSet.delete(`${row},${column}`)
        return false
    }
    exist(board, word) {
        let cSet=new Set()
        
        for(let i=0;i<board.length;i++){
            for(let j=0;j<board[0].length;j++){
                if(this.helper(board,word,0,cSet,i,j,board.length,board[0].length)){
                    return true
                }
            }
        }
        return false
    }
}
