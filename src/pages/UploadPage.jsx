import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";

const SUBJECTS = {
  budget: {
    title: "Budget / Forecast (Oracle)",
    allowed: [".csv", ".xlsx"],
    maxMb: 25
  },
  tearsheet: {
    title: "Tear Sheet",
    allowed: [".csv", ".xlsx"],
    maxMb: 25
  }
};

export default function UploadPage() {
  const { subject } = useParams();
  const config = useMemo(() => SUBJECTS[subject], [subject]);
  const [error, setError] = useState("");
  const [fileInfo, setFileInfo] = useState(null);

  if (!config) {
    return (
      <div style={{ padding: 24, fontFamily: "sans-serif" }}>
        <h1>Unknown subject area</h1>
        <Link to="/">Back to dashboard</Link>
      </div>
    );
  }

  function validateFile(file) {
    const maxBytes = config.maxMb * 1024 * 1024;
    const name = file.name.toLowerCase();
    const allowed = config.allowed.some(ext => name.endsWith(ext));

    if (!allowed) return `Invalid file type. Allowed: ${config.allowed.join(", ")}`;
    if (file.size > maxBytes) return `File too large. Max ${config.maxMb} MB.`;
    return "";
  }

  function onPickFile(e) {
    setError("");
    const file = e.target.files?.[0];
    if (!file) return;

    const msg = validateFile(file);
    if (msg) {
      setFileInfo(null);
      setError(msg);
      return;
    }

    setFileInfo({ name: file.name, size: file.size });
  }

  return (
    <div style={{ padding: 24, fontFamily: "sans-serif" }}>
      <Link to="/">← Back</Link>
      <h1 style={{ marginTop: 12 }}>{config.title}</h1>

      <section style={{ marginTop: 16 }}>
        <h3>Template</h3>
        <p>Download the approved template for this subject area.</p>
        {/* Placeholder — we’ll wire this to storage/repo later */}
        <button disabled>Download template (coming soon)</button>
      </section>

      <section style={{ marginTop: 16 }}>
        <h3>Upload</h3>
        <p>Allowed: {config.allowed.join(", ")} | Max size: {config.maxMb} MB</p>
        <input type="file" onChange={onPickFile} />
        {error && <div style={{ color: "crimson", marginTop: 8 }}>{error}</div>}
        {fileInfo && (
          <div style={{ marginTop: 8 }}>
            Selected: <b>{fileInfo.name}</b> ({Math.round(fileInfo.size / 1024)} KB)
            <div style={{ marginTop: 8 }}>
              <button disabled>Submit upload (API wiring next)</button>
            </div>
          </div>
        )}
      </section>

      <section style={{ marginTop: 24 }}>
        <h3>Status</h3>
        <p>After submission, you’ll see: Upload Accepted → Validating → Loaded/Failed.</p>
      </section>
    </div>
  );
}
