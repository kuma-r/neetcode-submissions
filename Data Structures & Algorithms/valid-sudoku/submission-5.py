class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for R in range(9):
            rowSet,columnSet=set(),set()
            for C in range(9):
                if board[R][C]!=".":
                    if board[R][C] in rowSet:
                        return False
                    rowSet.add(board[R][C])
                if board[C][R]!=".":
                    if board[C][R] in columnSet:
                        return False
                    columnSet.add(board[C][R])
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