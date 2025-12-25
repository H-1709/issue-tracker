import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/issues")
      .then(res => setIssues(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1 style={{ marginBottom: "30px" }}>🚀 Smart Issue Tracker</h1>

      {issues.map(issue => (
        <div
          key={issue._id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
            marginBottom: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
          }}
        >
          <h2>{issue.title}</h2>

          <p>{issue.description}</p>

          <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
            <span>🔥 Severity: {issue.severity}</span>
            <span>📊 Frequency: {issue.frequency}</span>
            <span>👥 Impact: {issue.userImpact}</span>
          </div>

          <div style={{ marginTop: "10px" }}>
            <strong>Priority Score:</strong>{" "}
            <span style={{ color: "red" }}>
              {issue.priorityScore}
            </span>
          </div>

          <div style={{ marginTop: "10px" }}>
            Status: <strong>{issue.status}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
