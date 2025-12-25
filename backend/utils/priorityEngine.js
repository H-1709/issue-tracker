function calculatePriority(issue) {
  return (
    issue.severity * 5 +
    issue.frequency * 3 +
    issue.userImpact * 4
  );
}

module.exports = calculatePriority;
