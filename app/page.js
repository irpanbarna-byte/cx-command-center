"use client";

import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("Dashboard");

  const [open, setOpen] = useState({
    "Layer 1": true,
    "Layer 2": false,
    B2C: false,
    Other: false,
  });

  const toggle = (name) => {
    setOpen((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const selectMenu = (name) => {
    setActive(name);
  };

  const groups = [
    {
      name: "Layer 1",
      icon: "◉",
      items: ["Chat", "Call", "Sosmed", "Email"],
    },
    {
      name: "Layer 2",
      icon: "◎",
      items: ["Layer 2 Area", "Layer 2 Dedicate"],
    },
    {
      name: "B2C",
      icon: "◌",
      items: ["B2C Aggregator", "B2C Non Aggregator"],
    },
    {
      name: "Other",
      icon: "•••",
      items: ["Other 1", "Other 2", "Other 3"],
    },
  ];

  const directMenus = [
    ["Interpack", "▣"],
    ["Claim", "◇"],
    ["Return", "↩"],
    ["Inbound", "↓"],
    ["KPI", "◆"],
    ["Porcase", "▤"],
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#f4f5f7 0%,#ffffff 45%,#f1f2f4 100%)",
        color: "#22252a",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        display: "flex",
      }}
    >
      {/* ======================================================
          SIDEBAR
      ====================================================== */}

      <aside
        style={{
          width: 270,
          minHeight: "100vh",
          background:
            "linear-gradient(180deg,#ffffff 0%,#fafafa 60%,#f1f2f4 100%)",
          borderRight: "1px solid #e7e8eb",
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 20,
        }}
      >
        {/* LOGO */}

        <div
          style={{
            padding: "25px 23px 20px",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 12,
              background: "#e21b23",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 20px rgba(226,27,35,.20)",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                color: "#fff",
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: -0.5,
              }}
            >
              LP
            </span>
          </div>

          <div>
            <div
              style={{
                fontSize: 18,
                lineHeight: 1,
                fontWeight: 900,
                letterSpacing: -0.5,
              }}
            >
              LION
            </div>

            <div
              style={{
                color: "#e21b23",
                fontSize: 9,
                fontWeight: 800,
                letterSpacing: 3,
                marginTop: 4,
              }}
            >
              PARCEL
            </div>
          </div>
        </div>

        <div
          style={{
            height: 1,
            background: "#e8e9eb",
            margin: "0 20px",
          }}
        />

        {/* DEPARTMENT */}

        <div
          style={{
            padding: "22px 23px 15px",
          }}
        >
          <div
            style={{
              fontSize: 9,
              color: "#e21b23",
              fontWeight: 900,
              letterSpacing: 1.4,
              marginBottom: 7,
            }}
          >
            CUSTOMER EXPERIENCE
          </div>

          <div
            style={{
              fontSize: 13,
              fontWeight: 750,
              color: "#272a2f",
            }}
          >
            Directorat Performance
          </div>
        </div>

        {/* MENU */}

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "3px 13px",
          }}
        >
          <div
            style={{
              fontSize: 9,
              fontWeight: 800,
              color: "#a5a8ad",
              letterSpacing: 1.3,
              padding: "10px 11px",
            }}
          >
            WORKSPACE
          </div>

          {/* DASHBOARD */}

          <MenuButton
            active={active === "Dashboard"}
            icon="⌂"
            label="Dashboard"
            onClick={() => selectMenu("Dashboard")}
          />

          {/* GROUPS */}

          {groups.map((group) => (
            <div key={group.name}>
              <button
                onClick={() => toggle(group.name)}
                style={{
                  width: "100%",
                  height: 42,
                  border: 0,
                  background:
                    open[group.name]
                      ? "#f7f7f8"
                      : "transparent",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  padding: "0 11px",
                  color:
                    open[group.name]
                      ? "#e21b23"
                      : "#656970",
                  cursor: "pointer",
                  transition: "all .2s ease",
                }}
              >
                <span
                  style={{
                    width: 27,
                    textAlign: "center",
                    fontSize: 13,
                  }}
                >
                  {group.icon}
                </span>

                <span
                  style={{
                    flex: 1,
                    textAlign: "left",
                    fontSize: 11.5,
                    fontWeight:
                      open[group.name]
                        ? 700
                        : 500,
                  }}
                >
                  {group.name}
                </span>

                <span
                  style={{
                    fontSize: 19,
                    transform: open[group.name]
                      ? "rotate(90deg)"
                      : "rotate(0deg)",
                    transition:
                      "transform .2s ease",
                    color: open[group.name]
                      ? "#e21b23"
                      : "#a6a9ae",
                  }}
                >
                  ›
                </span>
              </button>

              {/* DROPDOWN */}

              {open[group.name] && (
                <div
                  style={{
                    marginLeft: 24,
                    borderLeft:
                      "1px solid #e1e2e5",
                    paddingLeft: 7,
                    marginBottom: 3,
                  }}
                >
                  {group.items.map((item) => (
                    <button
                      key={item}
                      onClick={() =>
                        selectMenu(item)
                      }
                      style={{
                        width: "100%",
                        height: 35,
                        border: 0,
                        borderRadius: 8,
                        background:
                          active === item
                            ? "rgba(226,27,35,.07)"
                            : "transparent",
                        color:
                          active === item
                            ? "#e21b23"
                            : "#777b82",
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: 10,
                        cursor: "pointer",
                        fontSize: 10.5,
                        fontWeight:
                          active === item
                            ? 700
                            : 500,
                        textAlign: "left",
                      }}
                    >
                      <span
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          background:
                            active === item
                              ? "#e21b23"
                              : "#c7c9cd",
                          marginRight: 9,
                        }}
                      />

                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div
            style={{
              fontSize: 9,
              fontWeight: 800,
              color: "#a5a8ad",
              letterSpacing: 1.3,
              padding: "18px 11px 8px",
            }}
          >
            OPERATIONAL
          </div>

          {directMenus.map(([name, icon]) => (
            <MenuButton
              key={name}
              active={active === name}
              icon={icon}
              label={name}
              onClick={() => selectMenu(name)}
            />
          ))}
        </div>

        {/* FOOTER */}

        <div
          style={{
            padding: 13,
            borderTop: "1px solid #e8e9eb",
          }}
        >
          <div
            style={{
              padding: 12,
              borderRadius: 11,
              background: "#f7f7f8",
              border: "1px solid #e9eaec",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                fontSize: 9,
                fontWeight: 700,
              }}
            >
              <span>System Status</span>

              <span
                style={{
                  color: "#159447",
                }}
              >
                ● Online
              </span>
            </div>

            <div
              style={{
                height: 4,
                background: "#e3e4e7",
                borderRadius: 10,
                marginTop: 9,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "96%",
                  height: "100%",
                  background: "#e21b23",
                }}
              />
            </div>
          </div>
        </div>
      </aside>

      {/* ======================================================
          MAIN
      ====================================================== */}

      <main
        style={{
          marginLeft: 270,
          width: "calc(100% - 270px)",
          minHeight: "100vh",
        }}
      >
        {/* HEADER */}

        <header
          style={{
            height: 76,
            padding: "0 31px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background:
              "rgba(255,255,255,.88)",
            backdropFilter: "blur(18px)",
            borderBottom:
              "1px solid #e8e9eb",
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          <div>
            <div
              style={{
                color: "#a1a4a9",
                fontSize: 9,
              }}
            >
              CX COMMAND CENTER
              <span
                style={{
                  margin: "0 8px",
                  color: "#d3d4d7",
                }}
              >
                /
              </span>
              PERFORMANCE
            </div>

            <div
              style={{
                fontSize: 17,
                fontWeight: 800,
                marginTop: 5,
              }}
            >
              {active}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
            }}
          >
            {/* SEARCH */}

            <div
              style={{
                width: 220,
                height: 37,
                border:
                  "1px solid #e2e3e6",
                borderRadius: 9,
                display: "flex",
                alignItems: "center",
                padding: "0 11px",
                gap: 8,
                background: "#fff",
              }}
            >
              <span
                style={{
                  color: "#999ca2",
                }}
              >
                ⌕
              </span>

              <input
                placeholder="Search..."
                style={{
                  border: 0,
                  outline: 0,
                  flex: 1,
                  fontSize: 10,
                  background:
                    "transparent",
                }}
              />

              <span
                style={{
                  color: "#b4b6bb",
                  fontSize: 9,
                }}
              >
                /
              </span>
            </div>

            <button
              style={iconButton}
            >
              ◫
            </button>

            <button
              style={{
                ...iconButton,
                position: "relative",
              }}
            >
              ♢

              <span
                style={{
                  position: "absolute",
                  right: 7,
                  top: 7,
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#e21b23",
                }}
              />
            </button>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                marginLeft: 3,
              }}
            >
              <div
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 10,
                  background: "#e21b23",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  fontWeight: 900,
                }}
              >
                CX
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <strong
                  style={{
                    fontSize: 9.5,
                  }}
                >
                  CX Admin
                </strong>

                <span
                  style={{
                    color: "#9da0a5",
                    fontSize: 8,
                    marginTop: 2,
                  }}
                >
                  Customer Experience
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* CONTENT */}

        <div
          style={{
            padding: "28px 31px 30px",
          }}
        >
          {/* HERO */}

          <section
            style={{
              padding: "26px 28px",
              borderRadius: 17,
              background:
                "linear-gradient(110deg,#ffffff 0%,#ffffff 68%,#fff6f6 100%)",
              border:
                "1px solid #e5e6e9",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  color: "#e21b23",
                  fontSize: 8,
                  fontWeight: 900,
                  letterSpacing: 1.5,
                }}
              >
                CUSTOMER EXPERIENCE
              </div>

              <h1
                style={{
                  fontSize: 25,
                  margin: "9px 0 7px",
                  letterSpacing: -0.8,
                }}
              >
                Good morning, CX Team.
              </h1>

              <p
                style={{
                  color: "#858990",
                  fontSize: 10.5,
                  margin: 0,
                  maxWidth: 590,
                  lineHeight: 1.7,
                }}
              >
                Monitor customer experience
                performance across every
                channel and operational layer
                from one centralized workspace.
              </p>
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                gap: 8,
              }}
            >
              <button
                style={{
                  height: 38,
                  padding: "0 13px",
                  border:
                    "1px solid #e1e2e5",
                  borderRadius: 8,
                  background: "#fff",
                  fontSize: 9,
                  color: "#666a71",
                }}
              >
                ◷ &nbsp; 01 Aug — 20 Aug
              </button>

              <button
                style={{
                  height: 38,
                  padding: "0 15px",
                  border: 0,
                  borderRadius: 8,
                  background: "#e21b23",
                  color: "#fff",
                  fontSize: 9,
                  fontWeight: 700,
                  boxShadow:
                    "0 8px 18px rgba(226,27,35,.18)",
                }}
              >
                ↓ &nbsp; Export
              </button>
            </div>

            <div
              style={{
                position: "absolute",
                right: -80,
                top: -100,
                width: 300,
                height: 300,
                borderRadius: "50%",
                border:
                  "55px solid rgba(226,27,35,.035)",
              }}
            />
          </section>

          {/* KPI */}

          <section
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(4,1fr)",
              gap: 12,
              marginTop: 14,
            }}
          >
            <KpiCard
              icon="♥"
              title="Customer Satisfaction"
              value="92.4%"
              change="+4.8%"
            />

            <KpiCard
              icon="◷"
              title="SLA Achievement"
              value="96.8%"
              change="+2.1%"
            />

            <KpiCard
              icon="!"
              title="Open Complaints"
              value="128"
              change="-12.6%"
            />

            <KpiCard
              icon="◉"
              title="Customer Voice"
              value="4,821"
              change="+8.4%"
            />
          </section>

          {/* CHART + ALERT */}

          <section
            style={{
              display: "grid",
              gridTemplateColumns:
                "1.55fr 1fr",
              gap: 14,
              marginTop: 14,
            }}
          >
            {/* PERFORMANCE */}

            <div style={cardStyle}>
              <SmallLabel>
                DIRECTORAT PERFORMANCE
              </SmallLabel>

              <h2 style={cardTitle}>
                Performance Overview
              </h2>

              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems: "end",
                  marginTop: 19,
                }}
              >
                <div>
                  <strong
                    style={{
                      fontSize: 25,
                    }}
                  >
                    94.8%
                  </strong>

                  <div
                    style={{
                      fontSize: 9,
                      color: "#9da0a5",
                      marginTop: 3,
                    }}
                  >
                    Overall achievement
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 13,
                    fontSize: 8,
                    color: "#96999f",
                  }}
                >
                  <span>
                    <i
                      style={{
                        display: "inline-block",
                        width: 7,
                        height: 7,
                        borderRadius:
                          "50%",
                        background:
                          "#e21b23",
                        marginRight: 5,
                      }}
                    />
                    Actual
                  </span>

                  <span>
                    <i
                      style={{
                        display: "inline-block",
                        width: 7,
                        height: 7,
                        borderRadius:
                          "50%",
                        background:
                          "#d9dade",
                        marginRight: 5,
                      }}
                    />
                    Target
                  </span>
                </div>
              </div>

              {/* CHART */}

              <div
                style={{
                  height: 185,
                  marginTop: 16,
                  display: "flex",
                  alignItems: "end",
                  gap: 11,
                  borderBottom:
                    "1px solid #ececef",
                  padding:
                    "0 10px",
                }}
              >
                {[55, 63, 59, 72, 67, 78, 74, 84, 79, 89, 85, 95].map(
                  (v, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: "100%",
                        display:
                          "flex",
                        alignItems:
                          "end",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: `${v}%`,
                          borderRadius:
                            "6px 6px 2px 2px",
                          background:
                            "linear-gradient(180deg,#f04a50,#df1b23)",
                          opacity:
                            0.62 +
                            i * 0.025,
                        }}
                      />
                    </div>
                  )
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-around",
                  marginTop: 7,
                  color: "#aaaeb3",
                  fontSize: 8,
                }}
              >
                <span>W1</span>
                <span>W2</span>
                <span>W3</span>
                <span>W4</span>
                <span>W5</span>
                <span>W6</span>
              </div>
            </div>

            {/* ALERT */}

            <div style={cardStyle}>
              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                }}
              >
                <div>
                  <SmallLabel>
                    REQUIRES ATTENTION
                  </SmallLabel>

                  <h2 style={cardTitle}>
                    Priority Alerts
                  </h2>
                </div>

                <span
                  style={{
                    height: 22,
                    padding: "0 7px",
                    display: "flex",
                    alignItems:
                      "center",
                    background:
                      "#fff0f0",
                    color: "#e21b23",
                    borderRadius: 6,
                    fontSize: 8,
                    fontWeight: 800,
                  }}
                >
                  3 ACTIVE
                </span>
              </div>

              <Alert
                title="Complaint spike detected"
                text="Jabodetabek increased by 14% in the last 24 hours."
                danger
              />

              <Alert
                title="SLA approaching threshold"
                text="12 shipments require immediate attention."
              />

              <Alert
                title="Negative sentiment increased"
                text="Customer Voice sentiment dropped by 6%."
              />

              <button
                style={{
                  width: "100%",
                  marginTop: 8,
                  border: 0,
                  background:
                    "transparent",
                  color: "#e21b23",
                  textAlign: "left",
                  fontSize: 9,
                  fontWeight: 700,
                }}
              >
                View all alerts →
              </button>
            </div>
          </section>

          {/* BOTTOM */}

          <section
            style={{
              display: "grid",
              gridTemplateColumns:
                "1fr 1fr .85fr",
              gap: 14,
              marginTop: 14,
            }}
          >
            <div style={cardStyle}>
              <SmallLabel>
                CHANNEL PERFORMANCE
              </SmallLabel>

              <h2 style={cardTitle}>
                Customer Channels
              </h2>

              <Progress
                name="Chat"
                value="94%"
              />

              <Progress
                name="Call"
                value="91%"
              />

              <Progress
                name="Sosmed"
                value="88%"
              />

              <Progress
                name="Email"
                value="86%"
              />
            </div>

            <div style={cardStyle}>
              <SmallLabel>
                OPERATIONAL LAYER
              </SmallLabel>

              <h2 style={cardTitle}>
                Layer Performance
              </h2>

              <Layer
                name="Layer 1"
                value="96%"
              />

              <Layer
                name="Layer 2 Area"
                value="93%"
              />

              <Layer
                name="Layer 2 Dedicate"
                value="95%"
              />

              <Layer
                name="B2C Aggregator"
                value="91%"
              />

              <Layer
                name="B2C Non Aggregator"
                value="89%"
              />
            </div>

            <div style={cardStyle}>
              <SmallLabel>
                QUICK ACCESS
              </SmallLabel>

              <h2 style={cardTitle}>
                Modules
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "1fr 1fr",
                  gap: 8,
                  marginTop: 16,
                }}
              >
                {[
                  ["◆", "KPI"],
                  ["◇", "Claim"],
                  ["↩", "Return"],
                  ["↓", "Inbound"],
                ].map(([icon, name]) => (
                  <button
                    key={name}
                    onClick={() =>
                      selectMenu(name)
                    }
                    style={{
                      height: 68,
                      border:
                        "1px solid #e7e8eb",
                      borderRadius: 9,
                      background:
                        "#fafafa",
                      textAlign: "left",
                      padding: 10,
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        color: "#e21b23",
                        fontSize: 13,
                      }}
                    >
                      {icon}
                    </div>

                    <strong
                      style={{
                        display: "block",
                        fontSize: 9,
                        marginTop: 7,
                      }}
                    >
                      {name}
                    </strong>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* FOOTER */}

          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              marginTop: 22,
              color: "#a3a6ab",
              fontSize: 8,
            }}
          >
            <span>
              © 2026 Lion Parcel
            </span>

            <span>
              Customer Experience •
              Internal Use Only
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}


/* ==========================================================
   COMPONENTS
========================================================== */

function MenuButton({
  active,
  icon,
  label,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        height: 42,
        border: 0,
        borderRadius: 10,
        background: active
          ? "rgba(226,27,35,.075)"
          : "transparent",
        color: active
          ? "#e21b23"
          : "#676b72",
        display: "flex",
        alignItems: "center",
        padding: "0 11px",
        cursor: "pointer",
        position: "relative",
        transition:
          "all .18s ease",
      }}
    >
      {active && (
        <span
          style={{
            position: "absolute",
            left: -13,
            top: 8,
            bottom: 8,
            width: 3,
            background: "#e21b23",
            borderRadius:
              "0 4px 4px 0",
          }}
        />
      )}

      <span
        style={{
          width: 27,
          textAlign: "center",
          fontSize: 14,
          color: active
            ? "#e21b23"
            : "#999da3",
        }}
      >
        {icon}
      </span>

      <span
        style={{
          fontSize: 11.5,
          fontWeight: active
            ? 700
            : 500,
        }}
      >
        {label}
      </span>
    </button>
  );
}


function KpiCard({
  icon,
  title,
  value,
  change,
}) {
  return (
    <div
      style={{
        background: "#fff",
        border:
          "1px solid #e5e6e9",
        borderRadius: 13,
        padding: 17,
        minHeight: 142,
        boxShadow:
          "0 4px 18px rgba(25,30,35,.025)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
        }}
      >
        <div
          style={{
            width: 31,
            height: 31,
            borderRadius: 8,
            background: "#fff1f2",
            color: "#e21b23",
            display: "flex",
            alignItems: "center",
            justifyContent:
              "center",
            fontSize: 12,
          }}
        >
          {icon}
        </div>

        <span
          style={{
            padding: "4px 7px",
            borderRadius: 5,
            background: "#edf8f1",
            color: "#17884a",
            fontSize: 8,
            fontWeight: 800,
          }}
        >
          {change}
        </span>
      </div>

      <div
        style={{
          marginTop: 14,
          color: "#888c92",
          fontSize: 9,
        }}
      >
        {title}
      </div>

      <strong
        style={{
          display: "block",
          fontSize: 24,
          letterSpacing: -0.8,
          marginTop: 4,
        }}
      >
        {value}
      </strong>

      <div
        style={{
          color: "#b0b2b7",
          fontSize: 8,
          marginTop: 3,
        }}
      >
        vs previous period
      </div>
    </div>
  );
}


function SmallLabel({ children }) {
  return (
    <div
      style={{
        color: "#e21b23",
        fontSize: 8,
        fontWeight: 900,
        letterSpacing: 1.2,
      }}
    >
      {children}
    </div>
  );
}


function Alert({
  title,
  text,
  danger,
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: 9,
        padding: "14px 0",
        borderBottom:
          "1px solid #f0f1f2",
      }}
    >
      <div
        style={{
          width: 27,
          height: 27,
          borderRadius: 8,
          background: danger
            ? "#fff0f0"
            : "#fff8e9",
          color: danger
            ? "#e21b23"
            : "#c48700",
          display: "flex",
          alignItems: "center",
          justifyContent:
            "center",
          fontWeight: 800,
          fontSize: 10,
          flexShrink: 0,
        }}
      >
        !
      </div>

      <div>
        <strong
          style={{
            display: "block",
            fontSize: 9.5,
          }}
        >
          {title}
        </strong>

        <p
          style={{
            margin: "4px 0 0",
            color: "#999ca2",
            fontSize: 8.5,
            lineHeight: 1.5,
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}


function Progress({
  name,
  value,
}) {
  return (
    <div
      style={{
        marginTop: 17,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          fontSize: 9,
        }}
      >
        <span
          style={{
            color: "#777b82",
          }}
        >
          {name}
        </span>

        <strong>{value}</strong>
      </div>

      <div
        style={{
          height: 5,
          background: "#f0f1f3",
          borderRadius: 20,
          marginTop: 7,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: value,
            height: "100%",
            background:
              "linear-gradient(90deg,#e21b23,#f05a5f)",
            borderRadius: 20,
          }}
        />
      </div>
    </div>
  );
}


function Layer({
  name,
  value,
}) {
  return (
    <div
      style={{
        height: 34,
        borderBottom:
          "1px solid #f0f1f2",
        display: "flex",
        alignItems: "center",
        justifyContent:
          "space-between",
        fontSize: 9,
      }}
    >
      <span
        style={{
          color: "#777b82",
          display: "flex",
          alignItems: "center",
          gap: 7,
        }}
      >
        <i
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "#e21b23",
          }}
        />
        {name}
      </span>

      <strong>{value}</strong>
    </div>
  );
}


/* ==========================================================
   STYLES
========================================================== */

const cardStyle = {
  background: "#fff",
  border: "1px solid #e5e6e9",
  borderRadius: 14,
  padding: 20,
  boxShadow:
    "0 4px 18px rgba(25,30,35,.025)",
};

const cardTitle = {
  margin: "5px 0 0",
  fontSize: 15,
  letterSpacing: -0.2,
};

const iconButton = {
  width: 37,
  height: 37,
  border: "1px solid #e2e3e6",
  borderRadius: 9,
  background: "#fff",
  color: "#777b82",
  cursor: "pointer",
};
