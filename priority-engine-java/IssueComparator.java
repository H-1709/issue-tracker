import java.util.Comparator;

public class IssueComparator implements Comparator<Issue> {
    @Override
    public int compare(Issue a, Issue b) {
        int scoreA = a.severity * 3 + a.frequency * 2 + a.userImpact;
        int scoreB = b.severity * 3 + b.frequency * 2 + b.userImpact;
        return scoreB - scoreA; // higher score = higher priority
    }
}
