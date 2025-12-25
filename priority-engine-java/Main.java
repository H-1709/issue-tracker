public class Main {
    public static void main(String[] args) {

        Issue issue = new Issue(5, 10, 9);

        int priorityScore = issue.calculatePriority();

        System.out.println("Calculated Priority Score: " + priorityScore);
    }
}
