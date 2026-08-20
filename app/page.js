const kpis = [
  { label: "Total Cases", value: "1,284", change: "+12.8%", trend: "up" },
  { label: "Open Cases", value: "327", change: "-8.4%", trend: "down" },
  { label: "Resolved", value: "957", change: "+18.2%", trend: "up" },
  { label: "SLA Achievement", value: "94.8%", change: "+2.6%", trend: "up" },
];

const cases = [
  {
    id: "CX-10284",
    customer: "PT Nusantara Jaya",
    issue: "Delivery Delay",
    hub: "Jakarta Hub",
    status: "Open",
    priority: "High",
  },
  {
    id: "CX-10283",
    customer: "Andi Pratama",
    issue: "Package Tracking",
    hub: "Bandung Hub",
    status: "Processing",
    priority: "Medium",
  },
  {
    id: "CX-10282",
    customer: "Toko Makmur",
    issue: "Lost Package",
    hub: "Surabaya Hub",
    status: "Escalated",
    priority: "Critical",
  },
  {
    id: "CX-10281",
    customer: "Siti Rahma",
    issue: "Wrong Delivery",
    hub: "Bekasi Hub",
    status: "Resolved",
    priority: "Low",
  },
];

const bars = [42, 55, 48, 68, 62, 76, 72, 88, 81, 94, 86, 96];

function StatusBadge({ status }) {
  const styles = {
    Open: {
      background: "#3b1d1d",
      color: "#ff8d8d",
    },
    Processing: {
      background: "#332b18",
      color: "#ffd166",
    },
    Escalated: {
      background: "#3a172e",
      color: "#ff70b7",
    },
    Resolved: {
      background: "#163329",
      color: "#5ee6a8",
    },
  };

  return (
    <span
      style={{
        ...styles[status],
        padding: "6px 10px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: 600,
      }}
    >
      {status}
    </span>
  );
}

function PriorityBadge({ priority }) {
  const colors = {
    Critical: "#ff4d6d",
    High: "#ff8a65",
    Medium: "#ffd166",
    Low: "#5ee6a8",
  };

  return (
    <span
      style={{
        color: colors[priority],
        fontSize: "12px",
        fontWeight: 700,
      }}
    >
      ● {priority}
    </span>
  );
}

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#070b16",
        color: "#f8fafc",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        display: "flex",
      }}
    >
      {/* SIDEBAR */}
      <aside
        style={{
          width: "245px",
          minHeight: "100vh",
          background: "#0b1020",
          borderRight: "1px solid #1b2338",
          padding: "24px 16px",
          boxSizing: "border-box",
          position: "fixed",
          left: 0,
          top: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "0 10px 28px",
          }}
        >
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "12px",
              background: "linear-gradient(135deg,#4f46e5,#06b6d4)",
              display: "grid",
              placeItems: "center",
              fontWeight: 900,
              boxShadow: "0 8px 25px rgba(59,130,246,.25)",
            }}
          >
            CX
          </div>

          <div>
            <div style={{ fontWeight: 800, fontSize: "15px" }}>
              CX Command
            </div>
            <div style={{ color: "#64748b", fontSize: "11px" }}>
              INTERNAL CENTER
            </div>
          </div>
        </div>

        <div
          style={{
            color: "#475569",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "1.5px",
            padding: "0 12px 10px",
          }}
        >
          WORKSPACE
        </div>

        {[
          ["▦", "Dashboard"],
          ["◉", "CX Cases"],
          ["◫", "SLA Monitoring"],
          ["◈", "Analytics"],
          ["⌁", "Operations"],
        ].map(([icon, label], index) => (
          <div
            key={label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px",
              borderRadius: "10px",
              marginBottom: "4px",
              background:
                index === 0
                  ? "linear-gradient(90deg,#1d2a52,#121a30)"
                  : "transparent",
              color: index === 0 ? "#fff" : "#94a3b8",
              fontSize: "14px",
              fontWeight: index === 0 ? 700 : 500,
            }}
          >
            <span style={{ width: "18px", textAlign: "center" }}>{icon}</span>
            {label}
          </div>
        ))}

        <div
          style={{
            color: "#475569",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "1.5px",
            padding: "25px 12px 10px",
          }}
        >
          MANAGEMENT
        </div>

        {[
          ["⚙", "Settings"],
          ["♙", "Team"],
        ].map(([icon, label]) => (
          <div
            key={label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px",
              borderRadius: "10px",
              color: "#94a3b8",
              fontSize: "14px",
            }}
          >
            <span style={{ width: "18px", textAlign: "center" }}>{icon}</span>
            {label}
          </div>
        ))}

        <div
          style={{
            position: "absolute",
            left: "16px",
            right: "16px",
            bottom: "20px",
            padding: "14px",
            borderRadius: "14px",
            background: "#10172a",
            border: "1px solid #1d2942",
          }}
        >
          <div style={{ color: "#64748b", fontSize: "11px" }}>
            SYSTEM STATUS
          </div>

          <div
            style={{
              marginTop: "8px",
              display: "flex",
              alignItems: "center",
              gap: "7px",
              fontSize: "12px",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#34d399",
                boxShadow: "0 0 10px #34d399",
              }}
            />
            All systems operational
          </div>
        </div>
      </aside>

      {/* CONTENT */}
      <section
        style={{
          marginLeft: "245px",
          width: "calc(100% - 245px)",
          padding: "28px 34px",
          boxSizing: "border-box",
        }}
      >
        {/* HEADER */}
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "30px",
          }}
        >
          <div>
            <div
              style={{
                color: "#64748b",
                fontSize: "12px",
                marginBottom: "7px",
              }}
            >
              THURSDAY, 20 AUGUST 2026
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: "28px",
                letterSpacing: "-0.7px",
              }}
            >
              Good morning, CX Team 👋
            </h1>

            <p
              style={{
                margin: "7px 0 0",
                color: "#64748b",
                fontSize: "13px",
              }}
            >
              Here's what's happening across your customer experience
              operations.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <button
              style={{
                background: "#10172a",
                border: "1px solid #1f2a44",
                color: "#cbd5e1",
                padding: "11px 15px",
                borderRadius: "10px",
                fontWeight: 600,
              }}
            >
              Last 7 days ▾
            </button>

            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background: "linear-gradient(135deg,#312e81,#0891b2)",
                display: "grid",
                placeItems: "center",
                fontWeight: 800,
              }}
            >
              IB
            </div>
          </div>
        </header>

        {/* KPI */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "16px",
            marginBottom: "18px",
          }}
        >
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              style={{
                background:
                  "linear-gradient(145deg,#10172a,#0d1323)",
                border: "1px solid #1b263d",
                borderRadius: "16px",
                padding: "20px",
                boxShadow: "0 10px 30px rgba(0,0,0,.15)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#64748b",
                  fontSize: "12px",
                }}
              >
                <span>{kpi.label}</span>
                <span style={{ color: "#475569" }}>•••</span>
              </div>

              <div
                style={{
                  fontSize: "29px",
                  fontWeight: 800,
                  marginTop: "13px",
                }}
              >
                {kpi.value}
              </div>

              <div
                style={{
                  marginTop: "10px",
                  color: kpi.trend === "up" ? "#4ade80" : "#facc15",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                {kpi.change}{" "}
                <span style={{ color: "#64748b", fontWeight: 500 }}>
                  vs previous period
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CHART AREA */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "18px",
            marginBottom: "18px",
          }}
        >
          <div
            style={{
              background: "#0d1323",
              border: "1px solid #1b263d",
              borderRadius: "16px",
              padding: "22px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontWeight: 750 }}>Case Volume</div>
                <div
                  style={{
                    color: "#64748b",
                    fontSize: "12px",
                    marginTop: "4px",
                  }}
                >
                  Daily customer experience cases
                </div>
              </div>

              <div style={{ color: "#38bdf8", fontSize: "12px" }}>
                +14.6%
              </div>
            </div>

            <div
              style={{
                height: "210px",
                marginTop: "25px",
                display: "flex",
                alignItems: "end",
                gap: "12px",
                borderBottom: "1px solid #1b263d",
                padding: "0 10px",
              }}
            >
              {bars.map((height, index) => (
                <div
                  key={index}
                  style={{
                    flex: 1,
                    height: `${height}%`,
                    borderRadius: "7px 7px 0 0",
                    background:
                      "linear-gradient(180deg,#38bdf8,#312e81)",
                    boxShadow: "0 0 18px rgba(56,189,248,.08)",
                  }}
                />
              ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#475569",
                fontSize: "10px",
                marginTop: "10px",
              }}
            >
              <span>09 Aug</span>
              <span>12 Aug</span>
              <span>15 Aug</span>
              <span>20 Aug</span>
            </div>
          </div>

          <div
            style={{
              background: "#0d1323",
              border: "1px solid #1b263d",
              borderRadius: "16px",
              padding: "22px",
            }}
          >
            <div style={{ fontWeight: 750 }}>SLA Performance</div>

            <div
              style={{
                display: "grid",
                placeItems: "center",
                marginTop: "22px",
              }}
            >
              <div
                style={{
                  width: "145px",
                  height: "145px",
                  borderRadius: "50%",
                  background:
                    "conic-gradient(#38bdf8 0deg 341deg,#172036 341deg 360deg)",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <div
                  style={{
                    width: "112px",
                    height: "112px",
                    borderRadius: "50%",
                    background: "#0d1323",
                    display: "grid",
                    placeItems: "center",
                    textAlign: "center",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "26px", fontWeight: 800 }}>
                      94.8%
                    </div>
                    <div
                      style={{
                        color: "#64748b",
                        fontSize: "10px",
                      }}
                    >
                      ACHIEVEMENT
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "24px",
                fontSize: "12px",
              }}
            >
              <span style={{ color: "#64748b" }}>Target</span>
              <strong>95%</strong>
            </div>

            <div
              style={{
                height: "6px",
                background: "#182238",
                borderRadius: "999px",
                marginTop: "8px",
              }}
            >
              <div
                style={{
                  width: "94.8%",
                  height: "100%",
                  borderRadius: "999px",
                  background: "#38bdf8",
                }}
              />
            </div>
          </div>
        </div>

        {/* CASE TABLE */}
        <div
          style={{
            background: "#0d1323",
            border: "1px solid #1b263d",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "20px 22px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontWeight: 750 }}>Recent CX Cases</div>
              <div
                style={{
                  color: "#64748b",
                  fontSize: "12px",
                  marginTop: "4px",
                }}
              >
                Latest customer experience activities
              </div>
            </div>

            <button
              style={{
                background: "#17223b",
                border: "1px solid #253553",
                color: "#93c5fd",
                padding: "9px 13px",
                borderRadius: "9px",
                fontSize: "12px",
                fontWeight: 700,
              }}
            >
              View all cases →
            </button>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "12px",
              }}
            >
              <thead>
                <tr style={{ background: "#0a1020", color: "#64748b" }}>
                  <th style={{ textAlign: "left", padding: "13px 22px" }}>
                    CASE
                  </th>
                  <th style={{ textAlign: "left", padding: "13px" }}>
                    CUSTOMER
                  </th>
                  <th style={{ textAlign: "left", padding: "13px" }}>
                    ISSUE
                  </th>
                  <th style={{ textAlign: "left", padding: "13px" }}>HUB</th>
                  <th style={{ textAlign: "left", padding: "13px" }}>
                    PRIORITY
                  </th>
                  <th style={{ textAlign: "left", padding: "13px 22px" }}>
                    STATUS
                  </th>
                </tr>
              </thead>

              <tbody>
                {cases.map((item) => (
                  <tr
                    key={item.id}
                    style={{
                      borderTop: "1px solid #172138",
                    }}
                  >
                    <td style={{ padding: "16px 22px", fontWeight: 750 }}>
                      {item.id}
                    </td>
                    <td style={{ padding: "16px", color: "#cbd5e1" }}>
                      {item.customer}
                    </td>
                    <td style={{ padding: "16px", color: "#94a3b8" }}>
                      {item.issue}
                    </td>
                    <td style={{ padding: "16px", color: "#94a3b8" }}>
                      {item.hub}
                    </td>
                    <td style={{ padding: "16px" }}>
                      <PriorityBadge priority={item.priority} />
                    </td>
                    <td style={{ padding: "16px 22px" }}>
                      <StatusBadge status={item.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
