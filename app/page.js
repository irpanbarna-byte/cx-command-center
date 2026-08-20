export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0b1020",
      color: "white",
      padding: "40px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
        CX Command Center
      </h1>

      <p style={{ color: "#94a3b8", marginBottom: "40px" }}>
        Internal Customer Experience Dashboard
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px"
      }}>
        <div style={{
          background: "#151c32",
          padding: "25px",
          borderRadius: "16px"
        }}>
          <div style={{ color: "#94a3b8" }}>Total Ticket</div>
          <div style={{ fontSize: "32px", fontWeight: "bold" }}>1,284</div>
        </div>

        <div style={{
          background: "#151c32",
          padding: "25px",
          borderRadius: "16px"
        }}>
          <div style={{ color: "#94a3b8" }}>Open Ticket</div>
          <div style={{ fontSize: "32px", fontWeight: "bold" }}>327</div>
        </div>

        <div style={{
          background: "#151c32",
          padding: "25px",
          borderRadius: "16px"
        }}>
          <div style={{ color: "#94a3b8" }}>Resolved</div>
          <div style={{ fontSize: "32px", fontWeight: "bold" }}>957</div>
        </div>

        <div style={{
          background: "#151c32",
          padding: "25px",
          borderRadius: "16px"
        }}>
          <div style={{ color: "#94a3b8" }}>SLA</div>
          <div style={{ fontSize: "32px", fontWeight: "bold" }}>94.8%</div>
        </div>
      </div>

      <div style={{
        marginTop: "30px",
        background: "#151c32",
        padding: "30px",
        borderRadius: "16px"
      }}>
        <h2>Welcome to CX Command Center</h2>
        <p style={{ color: "#94a3b8" }}>
          Dashboard berhasil terhubung ke deployment.
        </p>
      </div>
    </main>
  );
}
