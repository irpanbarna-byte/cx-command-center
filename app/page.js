"use client";

import { useState } from "react";

const kpis = [
  {
    title: "Total CX Cases",
    value: "1,284",
    change: "+12.8%",
    note: "vs last period",
    icon: "◉",
  },
  {
    title: "Open Cases",
    value: "327",
    change: "-8.4%",
    note: "vs last period",
    icon: "◌",
  },
  {
    title: "Resolved Cases",
    value: "957",
    change: "+18.2%",
    note: "vs last period",
    icon: "✓",
  },
  {
    title: "SLA Achievement",
    value: "94.8%",
    change: "+2.6%",
    note: "vs last period",
    icon: "◈",
  },
];

const cases = [
  {
    id: "CX-10284",
    stt: "LPN-8829341",
    customer: "PT Nusantara Jaya",
    category: "Delivery Issue",
    hub: "Jakarta",
    priority: "High",
    status: "Open",
    aging: "2h 14m",
  },
  {
    id: "CX-10283",
    stt: "LPN-8829277",
    customer: "Andi Pratama",
    category: "Tracking",
    hub: "Bandung",
    priority: "Medium",
    status: "Processing",
    aging: "1h 42m",
  },
  {
    id: "CX-10282",
    stt: "LPN-8829112",
    customer: "Toko Makmur",
    category: "Lost Package",
    hub: "Surabaya",
    priority: "Critical",
    status: "Escalated",
    aging: "8h 21m",
  },
  {
    id: "CX-10281",
    stt: "LPN-8829033",
    customer: "Siti Rahma",
    category: "Wrong Delivery",
    hub: "Bekasi",
    priority: "Low",
    status: "Resolved",
    aging: "45m",
  },
  {
    id: "CX-10280",
    stt: "LPN-8828998",
    customer: "Budi Santoso",
    category: "Delivery Delay",
    hub: "Semarang",
    priority: "High",
    status: "Open",
    aging: "3h 09m",
  },
];

const reasons = [
  { name: "Delivery Delay", value: 31, count: 398 },
  { name: "Tracking Issue", value: 24, count: 308 },
  { name: "Lost Package", value: 16, count: 205 },
  { name: "Wrong Delivery", value: 12, count: 154 },
  { name: "Others", value: 17, count: 219 },
];

const bars = [38, 45, 42, 55, 49, 67, 61, 74, 70, 82, 77, 91, 86, 96];

function Status({ value }) {
  const config = {
    Open: ["#fff1f2", "#dc2626", "●"],
    Processing: ["#fff7ed", "#ea580c", "●"],
    Escalated: ["#fef2f2", "#b91c1c", "●"],
    Resolved: ["#f0fdf4", "#16a34a", "●"],
  };

  const [background, color, icon] = config[value];

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "6px 10px",
        borderRadius: 999,
        background,
        color,
        fontSize: 11,
        fontWeight: 700,
      }}
    >
      {icon} {value}
    </span>
  );
}

function Priority({ value }) {
  const config = {
    Critical: "#dc2626",
    High: "#ea580c",
    Medium: "#d97706",
    Low: "#16a34a",
  };

  return (
    <span
      style={{
        color: config[value],
        fontSize: 11,
        fontWeight: 700,
      }}
    >
      {value}
    </span>
  );
}

export default function Home() {
  const [active, setActive] = useState("Overview");

  const menuGroups = [
    {
      title: "CUSTOMER EXPERIENCE",
      items: ["Cases", "Complaints", "Customer Voice", "Sentiment"],
    },
    {
      title: "PERFORMANCE",
      items: ["SLA Monitoring", "Resolution", "Escalation", "CSAT"],
    },
    {
      title: "ANALYTICS",
      items: ["Hub Performance", "Trend Analysis", "CX Insights"],
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f6f7f9",
        color: "#202124",
        fontFamily:
          "Inter, Arial, Helvetica, sans-serif",
      }}
    >
      {/* SIDEBAR */}

      <aside
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          width: 250,
          background: "#ffffff",
          borderRight: "1px solid #e7e7e7",
          padding: "24px 16px",
          boxSizing: "border-box",
          zIndex: 10,
        }}
      >
        {/* LOGO */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 11,
            padding: "0 9px 28px",
          }}
        >
          <div
            style={{
              width: 39,
              height: 39,
              borderRadius: 10,
              background: "#e21b23",
              color: "#fff",
              display: "grid",
              placeItems: "center",
              fontSize: 13,
              fontWeight: 900,
            }}
          >
            LP
          </div>

          <div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 800,
                color: "#191919",
              }}
            >
              LION PARCEL
            </div>

            <div
              style={{
                fontSize: 10,
                color: "#8a8a8a",
                marginTop: 2,
              }}
            >
              CUSTOMER EXPERIENCE
            </div>
          </div>
        </div>

        {/* OVERVIEW */}

        <div
          onClick={() => setActive("Overview")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 11,
            padding: "11px 12px",
            borderRadius: 8,
            background:
              active === "Overview" ? "#fff0f1" : "transparent",
            color:
              active === "Overview" ? "#d71920" : "#555",
            fontSize: 13,
            fontWeight: active === "Overview" ? 700 : 500,
            cursor: "pointer",
            marginBottom: 19,
          }}
        >
          <span style={{ fontSize: 15 }}>◉</span>
          Overview
        </div>

        {/* MENU GROUPS */}

        {menuGroups.map((group) => (
          <div key={group.title} style={{ marginBottom: 21 }}>
            <div
              style={{
                fontSize: 9,
                letterSpacing: 1.2,
                fontWeight: 800,
                color: "#a0a0a0",
                padding: "0 12px 8px",
              }}
            >
              {group.title}
            </div>

            {group.items.map((item) => (
              <div
                key={item}
                onClick={() => setActive(item)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 11,
                  padding: "9px 12px",
                  borderRadius: 8,
                  color: active === item ? "#d71920" : "#666",
                  background:
                    active === item ? "#fff0f1" : "transparent",
                  fontSize: 12,
                  fontWeight: active === item ? 700 : 500,
                  cursor: "pointer",
                  marginBottom: 2,
                }}
              >
                <span
                  style={{
                    width: 15,
                    color: active === item ? "#e21b23" : "#999",
                  }}
                >
                  •
                </span>

                {item}
              </div>
            ))}
          </div>
        ))}

        {/* BOTTOM MENU */}

        <div
          style={{
            position: "absolute",
            left: 16,
            right: 16,
            bottom: 18,
            borderTop: "1px solid #eeeeee",
            paddingTop: 14,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 11,
              padding: "9px 12px",
              color: "#666",
              fontSize: 12,
            }}
          >
            ⚙ Settings
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 11,
              padding: "9px 12px",
              color: "#666",
              fontSize: 12,
            }}
          >
            ◇ Team Management
          </div>

          <div
            style={{
              marginTop: 9,
              padding: "11px 12px",
              background: "#fafafa",
              borderRadius: 9,
              border: "1px solid #eeeeee",
            }}
          >
            <div
              style={{
                fontSize: 9,
                color: "#999",
                fontWeight: 700,
              }}
            >
              SYSTEM STATUS
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                marginTop: 6,
                fontSize: 10,
                color: "#555",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  background: "#16a34a",
                  borderRadius: "50%",
                }}
              />
              All systems operational
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN */}

      <section
        style={{
          marginLeft: 250,
          padding: "27px 34px 40px",
          boxSizing: "border-box",
        }}
      >
        {/* HEADER */}

        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 28,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "#999",
                letterSpacing: 0.6,
                marginBottom: 7,
              }}
            >
              CUSTOMER EXPERIENCE COMMAND CENTER
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: 26,
                fontWeight: 800,
                color: "#222",
                letterSpacing: -0.5,
              }}
            >
              Good morning, CX Team 👋
            </h1>

            <p
              style={{
                margin: "7px 0 0",
                color: "#8a8a8a",
                fontSize: 12,
              }}
            >
              Monitor customer experience performance and service quality.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <button
              style={{
                border: "1px solid #dedede",
                background: "#fff",
                borderRadius: 8,
                padding: "10px 13px",
                color: "#555",
                fontSize: 11,
                fontWeight: 600,
              }}
            >
              01 Aug - 20 Aug 2026 ▾
            </button>

            <div
              style={{
                width: 37,
                height: 37,
                borderRadius: 9,
                background: "#e21b23",
                color: "#fff",
                display: "grid",
                placeItems: "center",
                fontSize: 11,
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
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 14,
            marginBottom: 16,
          }}
        >
          {kpis.map((item, index) => (
            <div
              key={item.title}
              style={{
                background: "#fff",
                border: "1px solid #e8e8e8",
                borderRadius: 12,
                padding: 18,
                boxShadow: "0 2px 8px rgba(0,0,0,.025)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    color: "#777",
                    fontSize: 11,
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </span>

                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background:
                      index === 0
                        ? "#fff0f1"
                        : "#f5f5f5",
                    color:
                      index === 0
                        ? "#e21b23"
                        : "#777",
                    display: "grid",
                    placeItems: "center",
                    fontSize: 13,
                  }}
                >
                  {item.icon}
                </span>
              </div>

              <div
                style={{
                  fontSize: 27,
                  fontWeight: 800,
                  marginTop: 15,
                  color: "#242424",
                }}
              >
                {item.value}
              </div>

              <div
                style={{
                  marginTop: 8,
                  fontSize: 10,
                  color:
                    item.change.startsWith("-")
                      ? "#16a34a"
                      : "#16a34a",
                  fontWeight: 700,
                }}
              >
                {item.change}{" "}
                <span
                  style={{
                    color: "#999",
                    fontWeight: 400,
                  }}
                >
                  {item.note}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* MAIN ANALYTICS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: 16,
            marginBottom: 16,
          }}
        >
          {/* CASE TREND */}

          <div
            style={{
              background: "#fff",
              border: "1px solid #e8e8e8",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 800,
                  }}
                >
                  CX Case Trend
                </div>

                <div
                  style={{
                    color: "#999",
                    fontSize: 10,
                    marginTop: 4,
                  }}
                >
                  Customer cases received over time
                </div>
              </div>

              <div
                style={{
                  fontSize: 10,
                  color: "#e21b23",
                  fontWeight: 700,
                }}
              >
                +14.6% vs previous period
              </div>
            </div>

            <div
              style={{
                height: 205,
                marginTop: 23,
                display: "flex",
                alignItems: "end",
                gap: 11,
                borderBottom: "1px solid #eeeeee",
                padding: "0 7px",
              }}
            >
              {bars.map((height, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${height}%`,
                    borderRadius: "5px 5px 0 0",
                    background:
                      i === bars.length - 1
                        ? "#e21b23"
                        : "#f3b7ba",
                  }}
                />
              ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#aaa",
                fontSize: 9,
                marginTop: 8,
              }}
            >
              <span>07 Aug</span>
              <span>10 Aug</span>
              <span>13 Aug</span>
              <span>16 Aug</span>
              <span>20 Aug</span>
            </div>
          </div>

          {/* SLA */}

          <div
            style={{
              background: "#fff",
              border: "1px solid #e8e8e8",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 800,
              }}
            >
              SLA Achievement
            </div>

            <div
              style={{
                color: "#999",
                fontSize: 10,
                marginTop: 4,
              }}
            >
              Customer case response & resolution
            </div>

            <div
              style={{
                display: "grid",
                placeItems: "center",
                marginTop: 22,
              }}
            >
              <div
                style={{
                  width: 138,
                  height: 138,
                  borderRadius: "50%",
                  background:
                    "conic-gradient(#e21b23 0deg 341deg,#f1f1f1 341deg 360deg)",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <div
                  style={{
                    width: 106,
                    height: 106,
                    borderRadius: "50%",
                    background: "#fff",
                    display: "grid",
                    placeItems: "center",
                    textAlign: "center",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 25,
                        fontWeight: 800,
                      }}
                    >
                      94.8%
                    </div>

                    <div
                      style={{
                        fontSize: 9,
                        color: "#999",
                        marginTop: 2,
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
                marginTop: 20,
                fontSize: 10,
              }}
            >
              <span style={{ color: "#999" }}>
                Target
              </span>

              <strong>95%</strong>
            </div>

            <div
              style={{
                height: 5,
                background: "#eeeeee",
                borderRadius: 999,
                marginTop: 7,
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "94.8%",
                  background: "#e21b23",
                  borderRadius: 999,
                }}
              />
            </div>
          </div>
        </div>

        {/* LOWER ANALYTICS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            marginBottom: 16,
          }}
        >
          {/* TOP CONTACT REASONS */}

          <div
            style={{
              background: "#fff",
              border: "1px solid #e8e8e8",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 800,
              }}
            >
              Top Contact Reasons
            </div>

            <div
              style={{
                color: "#999",
                fontSize: 10,
                marginTop: 4,
                marginBottom: 18,
              }}
            >
              Main reasons customers contact CX
            </div>

            {reasons.map((reason) => (
              <div key={reason.name} style={{ marginBottom: 13 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 10,
                    marginBottom: 6,
                  }}
                >
                  <span style={{ color: "#555" }}>
                    {reason.name}
                  </span>

                  <span
                    style={{
                      color: "#777",
                      fontWeight: 700,
                    }}
                  >
                    {reason.count}
                  </span>
                </div>

                <div
                  style={{
                    height: 6,
                    background: "#f1f1f1",
                    borderRadius: 999,
                  }}
                >
                  <div
                    style={{
                      width: `${reason.value * 2.8}%`,
                      maxWidth: "100%",
                      height: "100%",
                      background:
                        reason.value === 31
                          ? "#e21b23"
                          : "#f0a3a7",
                      borderRadius: 999,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CX HEALTH */}

          <div
            style={{
              background: "#fff",
              border: "1px solid #e8e8e8",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 800,
              }}
            >
              CX Health
            </div>

            <div
              style={{
                color: "#999",
                fontSize: 10,
                marginTop: 4,
                marginBottom: 19,
              }}
            >
              Key customer experience indicators
            </div>

            {[
              ["CSAT", "92.4%", "+3.1%", "#16a34a"],
              ["Resolution Rate", "88.7%", "+4.8%", "#16a34a"],
              ["Escalation Rate", "6.2%", "-1.4%", "#16a34a"],
              ["Avg. Response", "18m", "-5m", "#16a34a"],
            ].map((row) => (
              <div
                key={row[0]}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 0",
                  borderBottom: "1px solid #f0f0f0",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#555",
                    }}
                  >
                    {row[0]}
                  </div>

                  <div
                    style={{
                      color: row[3],
                      fontSize: 9,
                      marginTop: 4,
                      fontWeight: 700,
                    }}
                  >
                    {row[2]} vs previous
                  </div>
                </div>

                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#222",
                  }}
                >
                  {row[1]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CASE TABLE */}

        <div
          style={{
            background: "#fff",
            border: "1px solid #e8e8e8",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "18px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 800,
                }}
              >
                Recent CX Cases
              </div>

              <div
                style={{
                  color: "#999",
                  fontSize: 10,
                  marginTop: 4,
                }}
              >
                Latest customer experience activities
              </div>
            </div>

            <button
              style={{
                background: "#e21b23",
                color: "#fff",
                border: 0,
                borderRadius: 7,
                padding: "9px 13px",
                fontSize: 10,
                fontWeight: 700,
              }}
            >
              View All Cases →
            </button>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 10,
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "#fafafa",
                    color: "#999",
                    fontSize: 9,
                  }}
                >
                  <th style={{ textAlign: "left", padding: 12 }}>
                    CASE ID
                  </th>

                  <th style={{ textAlign: "left", padding: 12 }}>
                    STT
                  </th>

                  <th style={{ textAlign: "left", padding: 12 }}>
                    CUSTOMER
                  </th>

                  <th style={{ textAlign: "left", padding: 12 }}>
                    CATEGORY
                  </th>

                  <th style={{ textAlign: "left", padding: 12 }}>
                    HUB
                  </th>

                  <th style={{ textAlign: "left", padding: 12 }}>
                    PRIORITY
                  </th>

                  <th style={{ textAlign: "left", padding: 12 }}>
                    AGING
                  </th>

                  <th style={{ textAlign: "left", padding: 12 }}>
                    STATUS
                  </th>
                </tr>
              </thead>

              <tbody>
                {cases.map((item) => (
                  <tr
                    key={item.id}
                    style={{
                      borderTop: "1px solid #eeeeee",
                    }}
                  >
                    <td
                      style={{
                        padding: 13,
                        fontWeight: 800,
                        color: "#d71920",
                      }}
                    >
                      {item.id}
                    </td>

                    <td
                      style={{
                        padding: 13,
                        color: "#777",
                      }}
                    >
                      {item.stt}
                    </td>

                    <td
                      style={{
                        padding: 13,
                        fontWeight: 600,
                      }}
                    >
                      {item.customer}
                    </td>

                    <td
                      style={{
                        padding: 13,
                        color: "#666",
                      }}
                    >
                      {item.category}
                    </td>

                    <td
                      style={{
                        padding: 13,
                        color: "#666",
                      }}
                    >
                      {item.hub}
                    </td>

                    <td style={{ padding: 13 }}>
                      <Priority value={item.priority} />
                    </td>

                    <td
                      style={{
                        padding: 13,
                        color:
                          item.aging.startsWith("8")
                            ? "#dc2626"
                            : "#666",
                        fontWeight:
                          item.aging.startsWith("8")
                            ? 700
                            : 500,
                      }}
                    >
                      {item.aging}
                    </td>

                    <td style={{ padding: 13 }}>
                      <Status value={item.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              padding: "12px 20px",
              borderTop: "1px solid #eeeeee",
              color: "#999",
              fontSize: 9,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              Showing 5 of 1,284 customer experience cases
            </span>

            <span style={{ color: "#d71920", fontWeight: 700 }}>
              Updated just now
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
