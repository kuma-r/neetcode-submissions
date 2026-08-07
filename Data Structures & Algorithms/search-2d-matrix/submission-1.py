class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        row,column=len(matrix),len(matrix[0])
        Lrow,Rrow=0,row-1
        while (Lrow+Rrow)//2>=Lrow and (Lrow+Rrow)//2<=Rrow:
          midRow=(Lrow+Rrow)//2
          if matrix[midRow][0]<=target and matrix[midRow][column-1]>=target:
            rowMatrix=matrix[midRow]
            L,R=0,column-1
            while (L+R)//2>=L and (L+R)//2<=R:
              mid=(L+R)//2
              if rowMatrix[mid]>target:
                R=mid-1
              elif rowMatrix[mid]<target:
                L=mid+1
              else:
                return True
            return False
          elif target>matrix[midRow][0]:
            Lrow=midRow+1
          else:
            Rrow=midRow-1
        return False
