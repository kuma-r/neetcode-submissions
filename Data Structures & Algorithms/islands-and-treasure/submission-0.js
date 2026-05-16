class Solution {
    /**
     * @param {number[][]} grid
     */
    addToQueue(i,j,queue,grid,distance){
        if(i>=0 && j>=0 && i<grid.length && j<grid[0].length && grid[i][j]==2147483647){
            grid[i][j]=distance
            queue.push([i,j])
        }
    }

    islandsAndTreasure(grid) {
        let queue=[]
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[0].length;j++){
                if(!grid[i][j]){
                    queue.push([i,j])
                }
            }
        }
        let distance=1
        while(queue.length){
            let length=queue.length
            for(let i=0;i<length;i++){
                let [i,j]=queue.shift()
                this.addToQueue(i+1,j,queue,grid,distance)
                this.addToQueue(i-1,j,queue,grid,distance)
                this.addToQueue(i,j-1,queue,grid,distance)
                this.addToQueue(i,j+1,queue,grid,distance)
            }
            distance++
        }
    }
}
