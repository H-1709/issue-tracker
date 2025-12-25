public class Issue {
    public int severity;
    public int frequency;
    public int userImpact;

    public Issue(int severity, int frequency, int userImpact) {
        this.severity = severity;
        this.frequency = frequency;
        this.userImpact = userImpact;
    }

    public int calculatePriority() {
        return severity * 3 + frequency * 2 + userImpact;
    }
}
