class Solution {
    public boolean isValidSudoku(char[][] board) {

        int m = board.length;
        int n = board[0].length;

        int[] row = new int[10];
        int[] col = new int[10];
        int[] subSudoku = new int[10];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] != '.') {
                    int boardElement = board[i][j] - '0';
                    if (row[boardElement] == 1)
                        return false;
                    row[boardElement]++;
                }
                row = new int[10];
            }
        }

        // for (int i = 0; i < m; i++) {
        // for (int j = 0; j < n; j++) {
        // System.out.println(i / 3);
        // System.out.println(j / 3);
        // System.out.println(board[i / 3][j / 3]);
        // if (board[i / 3][j / 3] != '.') {
        // int boardElement = board[i / 3][j / 3] - '0';
        // if (subSudoku[boardElement] == 1)
        // return false;
        // subSudoku[boardElement]++;
        // }
        // }
        // subSudoku = new int[10];
        // }

        for (int boxRow = 0; boxRow < m; boxRow += 3) {
            for (int boxCol = 0; boxCol < n; boxCol += 3) {
                for (int i = 0; i < 3; i++) {
                    for (int j = 0; j < 3; j++) {
                        if (board[boxRow + i][boxCol + j] != '.') {
                            int boardElement = board[boxRow + i][boxCol + j] - '0';
                            if (subSudoku[boardElement] == 1)
                                return false;
                            subSudoku[boardElement]++;
                        }
                    }
                }
                subSudoku = new int[10];
            }
        }

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[j][i] != '.') {
                    int boardElement = board[j][i] - '0';
                    if (col[boardElement] == 1)
                        return false;
                    col[boardElement]++;
                }
            }
            col = new int[10];
        }

        return true;
    }

    public static void main(String[] args) {
        char[][] inp = {
                { '.', '.', '.', '.', '5', '.', '.', '1', '.' },
                { '.', '4', '.', '3', '.', '.', '.', '.', '.' },
                { '.', '.', '.', '.', '.', '3', '.', '.', '1' },
                { '8', '.', '.', '.', '.', '.', '.', '2', '.' },
                { '.', '.', '2', '.', '7', '.', '.', '.', '.' },
                { '.', '1', '5', '.', '.', '.', '.', '.', '.' },
                { '.', '.', '.', '.', '.', '2', '.', '.', '.' },
                { '.', '2', '.', '9', '.', '.', '.', '.', '.' },
                { '.', '.', '4', '.', '.', '.', '.', '.', '.' }
        };

        Solution sol = new Solution();
        boolean res = sol.isValidSudoku(inp);

        System.out.println(res);

    }

}
