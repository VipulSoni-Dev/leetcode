import java.util.*;

class Find_the_Number_of_Ways_to_Place_People_I {

    public int numberOfPairs(int[][] points) {
        Arrays.sort(points, (a, b) -> Integer.compare(b[0], a[0]));
        // Arrays.sort(points, (a, b) -> Integer.compare(a[1], b[1]));
        // System.out.println(Arrays.deepToString(points));
        int counter = 0;
        for (int i = 1; i < points.length; i++) {
            if (points[i - 1][0] >= points[i][0]) {
                counter++;
            }
        }
        System.out.println(counter);
        return counter;
    }

    public static void main(String[] args) {
        Find_the_Number_of_Ways_to_Place_People_I obj = new Find_the_Number_of_Ways_to_Place_People_I();
        int[][] point = new int[][] { { 0, 1 }, { 1, 3 }, { 6, 1 } };
        obj.numberOfPairs(point);
    }
}