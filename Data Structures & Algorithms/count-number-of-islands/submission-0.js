class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    dfs(grid,i,j){
        if(i>=0 && i<grid.length && j>=0 && j<grid[0].length && grid[i][j]=="1"){
            grid[i][j]=0
            this.dfs(grid,i-1,j)
            this.dfs(grid,i+1,j)
            this.dfs(grid,i,j-1)
            this.dfs(grid,i,j+1)
        }
    }
    numIslands(grid) {
        let islands=0
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[0].length;j++){
                if(grid[i][j]=="1"){
                    this.dfs(grid,i,j)
                    islands++
                }
            }
        }
        return islands
    }
}
