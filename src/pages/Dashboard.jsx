import React, { useEffect, useState } from "react";
import { getUser, logout } from "../auth/swaAuth";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then(setUser);
  }, []);

  return (
    <div style={{ padding: 24, fontFamily: "sans-serif" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ margin: 0 }}>Data Intake Portal</h1>
          <div style={{ opacity: 0.8, marginTop: 4 }}>
            {user ? `Signed in as ${user.userDetails}` : "Signed in"}
          </div>
        </div>
        <button onClick={logout}>Sign out</button>
      </header>

      <hr style={{ margin: "16px 0" }} />

      <section>
        <h2>Uploads</h2>
        <p>Select a subject area to upload files.</p>
        <ul>
          <li><Link to="/upload/budget">Budget / Forecast (Oracle)</Link></li>
          <li><Link to="/upload/tearsheet">Tear Sheet</Link></li>
        </ul>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Team Status Dashboard (placeholder)</h2>
        <p>This will list recent runs and statuses (Submitted, Validating, Failed, Loaded).</p>
        <ul>
          <li><Link to="/runs/example-run-id">Example run details</Link></li>
        </ul>
      </section>
    </div>
  );
}
