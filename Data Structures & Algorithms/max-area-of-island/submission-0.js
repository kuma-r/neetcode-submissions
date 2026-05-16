class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    getArea(grid,i,j){
        if(i>=0 && j>=0 && i<grid.length && j<grid[0].length && grid[i][j]){
            grid[i][j]=0
            return 1+this.getArea(grid,i-1,j)+ 
                     this.getArea(grid,i+1,j)+
                     this.getArea(grid,i,j-1)+
                     this.getArea(grid,i,j+1)
        }
        return 0
    }
    maxAreaOfIsland(grid) {
        let area=0
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[0].length;j++){
                if(grid[i][j]){
                    area=Math.max(area,this.getArea(grid,i,j))
                }
            }
        }
        return area
    }
}
