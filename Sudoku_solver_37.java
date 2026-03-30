class Sudoku_solver_37 {

    private final int[] row = new int[9];
    private final int[] col = new int[9];
    private final int[] box = new int[9];

    // blanks positions
    private final int[] br = new int[81];
    private final int[] bc = new int[81];
    private int n = 0;

    public void solveSudoku(char[][] board) {
        // init masks & collect blanks
        for (int r = 0; r < 9; r++) {
            for (int c = 0; c < 9; c++) {
                char ch = board[r][c];
                if (ch == '.') {
                    br[n] = r;
                    bc[n] = c;
                    n++;
                } else {
                    int d = ch - '0';
                    int bit = 1 << d;
                    row[r] |= bit;
                    col[c] |= bit;
                    box[bid(r, c)] |= bit;
                }
            }
        }
        dfs(board, 0);
    }

    private int bid(int r, int c) { // box id
        return (r / 3) * 3 + (c / 3);
    }

    private int candMask(int r, int c) {
        return ALL & ~(row[r] | col[c] | box[bid(r, c)]);
    }

    // pick index of blank with fewest candidates among [k..n)
    private int pickIndex(char[][] board, int k) {
        int best = -1, bestCnt = 10;
        for (int i = k; i < n; i++) {
            int r = br[i], c = bc[i];
            if (board[r][c] != '.')
                continue; // may be pre-filled by deeper recursion
            int m = candMask(r, c);
            if (m == 0)
                return i; // dead-end; still return to fail fast
            int cnt = Integer.bitCount(m);
            if (cnt < bestCnt) {
                bestCnt = cnt;
                best = i;
                if (cnt == 1)
                    break;
            }
        }
        return best == -1 ? k : best;
    }

    private boolean dfs(char[][] board, int k) {
        if (k == n)
            return true;

        // choose most constrained blank and swap into slot k
        int idx = pickIndex(board, k);
        swap( k, idx); // logically swap br/bc entries
        int tmpR = br[k], tmpC = bc[k];
        br[k] = br[idx];
        bc[k] = bc[idx];
        br[idx] = tmpR;
        bc[idx] = tmpC;

        int r = br[k], c = bc[k];
        int m = candMask(r, c);
        while (m != 0) {
            int bit = m & -m; // lowest set bit
            int d = Integer.numberOfTrailingZeros(bit);
            // place
            board[r][c] = (char) ('0' + d);
            row[r] |= bit;
            col[c] |= bit;
            box[bid(r, c)] |= bit;

            if (dfs(board, k + 1))
                return true;

            // undo
            board[r][c] = '.';
            row[r] &= ~bit;
            col[c] &= ~bit;
            box[bid(r, c)] &= ~bit;

            m &= m - 1; // next candidate
        }
        return false;
    }

    // helper to maintain parallel arrays; small inline method
    private void swap(int i, int j) {
        if (i == j)
            return;
        int tr = br[i], tc = bc[i];
        br[i] = br[j];
        bc[i] = bc[j];
        br[j] = tr;
        bc[j] = tc;
    }
}
