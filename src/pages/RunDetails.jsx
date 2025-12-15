import React from "react";
import { Link, useParams } from "react-router-dom";

export default function RunDetails() {
  const { id } = useParams();

  return (
    <div style={{ padding: 24, fontFamily: "sans-serif" }}>
      <Link to="/">← Back</Link>
      <h1 style={{ marginTop: 12 }}>Run Details</h1>
      <p><b>Run ID:</b> {id}</p>

      <h3>Status (placeholder)</h3>
      <ul>
        <li>Upload accepted + validation started</li>
        <li>Validation failed / passed</li>
        <li>SQL load complete</li>
        <li>Pipeline failed unexpectedly</li>
      </ul>

      <h3>Errors (placeholder)</h3>
      <p>We’ll display friendly validation errors here.</p>
    </div>
  );
}
