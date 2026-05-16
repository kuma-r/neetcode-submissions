class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for i in range(9):
            rowset,columnset=set(),set()
            for j in range(9):
                if board[i][j]!=".":
                    if board[i][j] in rowset:
                        return False
                    rowset.add(board[i][j])
                if board[j][i]!=".":
                    if board[j][i] in columnset:
                        return False
                    columnset.add(board[j][i])
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