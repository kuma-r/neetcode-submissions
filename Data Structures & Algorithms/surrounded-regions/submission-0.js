class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    dfs(board,i,j){
        if(i<0 || j<0 || i>board.length-1 || j>board[0].length-1 || board[i][j]!=="O"){
            return
        }
        board[i][j]="N"
        this.dfs(board,i-1,j)
        this.dfs(board,i+1,j)
        this.dfs(board,i,j-1)
        this.dfs(board,i,j+1)
    }
    solve(board) {
        for(let i=0;i<board.length;i++){
            for(let j=0;j<board[0].length;j++){
                if((i==0 || j==0 || i==board.length-1 || j==board[0].length-1) && board[i][j]=="O"){
                    this.dfs(board,i,j)
                }
            }
        }
        for(let i=0;i<board.length;i++){
            for(let j=0;j<board[0].length;j++){
                if(board[i][j]=="O"){
                    board[i][j]="X"
                }else if(board[i][j]=="N"){
                    board[i][j]="O"
                }
            }
        }
    }
}
