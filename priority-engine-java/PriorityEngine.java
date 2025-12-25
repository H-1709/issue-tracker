import java.util.*;

public class PriorityEngine {

    public static List<Issue> rankIssues(List<Issue> issues) {
        PriorityQueue<Issue> pq =
            new PriorityQueue<>(new IssueComparator());

        pq.addAll(issues);

        List<Issue> sortedIssues = new ArrayList<>();
        while (!pq.isEmpty()) {
            sortedIssues.add(pq.poll());
        }
        return sortedIssues;
    }
}
