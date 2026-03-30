import java.util.*;

class Jump_To_The_End {
    static int max = -1;

    static void solve(int i, int[] arr, int N, int counter) {
        if (i == N - 1) {
            if (counter > max) {
                max = counter;
            }
            return;
        }

        if (arr[i] == 0)
            return;

        int allowedSteps = arr[i];

        while (allowedSteps > 0) {
            i++;
            solve(i, arr, N, counter + 1);
            allowedSteps--;
        }
    }

    public static void main(String[] args) throws java.lang.Exception {
        Scanner sc = new Scanner(System.in);
        int TestCases = Integer.parseInt(sc.nextLine().trim());
        while (TestCases > 0) {
            int N = Integer.parseInt(sc.nextLine().trim());
            String[] inputArr = sc.nextLine().trim().split(" ");
            int[] arr = new int[N];
            for (int i = 0; i < N; i++) {
                arr[i] = Integer.parseInt(inputArr[i]);
            }

            solve(0, arr, N, 0);
            System.out.println(max);
            max = -1;
            TestCases--;
        }

    }
}
