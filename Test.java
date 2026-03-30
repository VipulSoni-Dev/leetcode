class Vehicle {
    int x;

    Vehicle() {
        this(10); // line n1 → calls Vehicle(int)
    }

    Vehicle(int x) {
        this.x = x;
    }
}

class Car extends Vehicle {
    int y;

    Car() {
        // super(); // calls Vehicle() → which calls Vehicle(10) → x = 10
        this(20); // line n2 → calls Car(int)
    }

    Car(int y) {
        this.y = y;
    }

    public String toString() {
        return super.x + ":" + this.y;
    }
}

public class Test {
    public static void main(String[] args) {
        Vehicle y = new Car();
        System.out.println(y);
    }
}
