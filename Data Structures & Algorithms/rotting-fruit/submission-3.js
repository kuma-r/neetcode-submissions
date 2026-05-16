class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    add(x,y,grid,queue){
        if(x<0 || y<0 || x>=grid.length || y>=grid[0].length || grid[x][y]!==1){
            return
        }
        grid[x][y]=2
        queue.push([x,y])
    }
    orangesRotting(grid) {
        let queue=[],fresh=0
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[0].length;j++){
                if(grid[i][j]==2){
                    queue.push([i,j])
                }else if(grid[i][j]==1){
                    fresh++
                }
            }
        }
        if(!fresh) return 0
        let result=-1
        while(queue.length){
            let length=queue.length
            for(let i=0;i<length;i++){
                let [x,y]=queue.shift()
                this.add(x-1,y,grid,queue)
                this.add(x+1,y,grid,queue)
                this.add(x,y-1,grid,queue)
                this.add(x,y+1,grid,queue)
            }
            result++
        }
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[0].length;j++){
                if(grid[i][j]==1){
                    return -1
                }
            }
        }
        return result
    }
}
