class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for i in range(9):
            rSet,cSet=set(),set()
            for j in range(9):
                if board[i][j]!=".":
                    if board[i][j] in rSet:
                        return False
                    rSet.add(board[i][j])
            for j in range(9):
                if board[j][i]!=".":
                    if board[j][i] in cSet:
                        return False
                    cSet.add(board[j][i])
            for i in range(0,9,3):
                for j in range(0,9,3):
                    seen=set()
                    for r in range(3):
                        for c in range(3):
                            if board[r+i][c+j]!=".":
                                if board[r+i][c+j] in seen:
                                    return False
                                seen.add(board[r+i][c+j])
        return True
