"use client";

import { useState } from "react";

const logo =
  "https://www.marketeers.com/_next/image/?url=https%3A%2F%2Fimagedelivery.net%2F2MtOYVTKaiU0CCt-BLmtWw%2Fbb2fcb96-610f-45d1-74ed-285bbfdb6f00%2Fw%3D900&w=1920&q=75";

const menu = [
  {
    label: "Layer 1",
    icon: "◈",
    children: [
      ["Chat", "◉"],
      ["Call", "◉"],
      ["Sosmed", "◉"],
      ["Email", "◉"],
    ],
  },
  {
    label: "Layer 2",
    icon: "◈",
    children: [
      ["Layer 2 Area", "◉"],
      ["Layer 2 Dedicate", "◉"],
    ],
  },
  {
    label: "B2C",
    icon: "◈",
    children: [
      ["B2C Aggregator", "◉"],
      ["B2C Non Aggregator", "◉"],
    ],
  },
  {
    label: "Interpack",
    icon: "▣",
  },
  {
    label: "Claim",
    icon: "!",
  },
  {
    label: "Return",
    icon: "↩",
  },
  {
    label: "Inbound",
    icon: "⇩",
  },
  {
    label: "KPI",
    icon: "◆",
  },
  {
    label: "Porcase",
    icon: "▤",
  },
  {
    label: "Other",
    icon: "•••",
    children: [
      ["Other 1", "◉"],
      ["Other 2", "◉"],
      ["Other 3", "◉"],
    ],
  },
];

export default function Home() {
  const [active, setActive] = useState("Dashboard");

  const [open, setOpen] = useState({
    "Layer 1": true,
    "Layer 2": true,
    B2C: true,
    Other: true,
  });

  function toggleMenu(label) {
    setOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  }

  return (
    <main className="app">

      {/* ================= SIDEBAR ================= */}

      <aside className="sidebar">

        {/* LOGO */}

        <div className="brand">
          <img
            src={logo}
            alt="Lion Parcel"
          />
        </div>

        {/* TITLE */}

        <div className="workspace">
          <span>DIRECTORAT PERFORMANCE</span>
        </div>

        {/* NAVIGATION */}

        <nav className="navigation">

          {/* DASHBOARD */}

          <button
            className={`nav-item ${
              active === "Dashboard" ? "active" : ""
            }`}
            onClick={() => setActive("Dashboard")}
          >
            <span className="nav-icon">
              ⌂
            </span>

            <span>
              Dashboard
            </span>
          </button>


          {/* MENU */}

          {menu.map((item) => {

            const hasChildren =
              item.children &&
              item.children.length > 0;

            if (!hasChildren) {
              return (
                <button
                  key={item.label}
                  className={`nav-item ${
                    active === item.label
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setActive(item.label)
                  }
                >
                  <span className="nav-icon">
                    {item.icon}
                  </span>

                  <span>
                    {item.label}
                  </span>
                </button>
              );
            }

            return (
              <div key={item.label}>

                {/* PARENT */}

                <button
                  className={`nav-item parent ${
                    active === item.label
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    toggleMenu(item.label)
                  }
                >

                  <span className="nav-icon">
                    {item.icon}
                  </span>

                  <span>
                    {item.label}
                  </span>

                  <span className="arrow">
                    {open[item.label]
                      ? "⌄"
                      : "›"}
                  </span>

                </button>


                {/* CHILDREN */}

                {open[item.label] && (
                  <div className="submenu">

                    {item.children.map(
                      ([child, icon]) => (
                        <button
                          key={child}
                          className={`sub-item ${
                            active === child
                              ? "active"
                              : ""
                          }`}
                          onClick={() =>
                            setActive(child)
                          }
                        >

                          <span className="sub-line" />

                          <span className="sub-icon">
                            {icon}
                          </span>

                          <span>
                            {child}
                          </span>

                        </button>
                      )
                    )}

                  </div>
                )}

              </div>
            );
          })}

        </nav>


        {/* SIDEBAR BOTTOM */}

        <div className="sidebar-bottom">

          <div className="system-card">

            <div className="system-head">

              <strong>
                System Status
              </strong>

              <span className="online">
                ● Online
              </span>

            </div>

            <div className="system-bar">
              <div />
            </div>

            <p>
              CX monitoring services are operating normally.
            </p>

          </div>


          <div className="user-mini">

            <div className="avatar">
              CX
            </div>

            <div>

              <strong>
                CX Operations
              </strong>

              <span>
                Administrator
              </span>

            </div>

          </div>

        </div>

      </aside>


      {/* ================= MAIN ================= */}

      <section className="main">

        {/* HEADER */}

        <header className="header">

          <div>

            <div className="header-eyebrow">
              CUSTOMER EXPERIENCE
            </div>

            <h1>
              Directorat Performance
            </h1>

          </div>


          <div className="header-right">

            <div className="search">
              <span>⌕</span>
              Search...
            </div>

            <button className="notification">
              ◇
              <b />
            </button>

            <div className="header-avatar">
              CX
            </div>

          </div>

        </header>


        {/* CONTENT */}

        <div className="content">

          {/* WELCOME */}

          <section className="welcome">

            <div>

              <div className="date">
                Thursday, 20 August 2026
              </div>

              <h2>
                Customer Experience Command Center
              </h2>

              <p>
                Monitor performance seluruh channel,
                operational layer, complaint,
                return, inbound dan KPI dalam satu
                dashboard.
              </p>

            </div>


            <div className="actions">

              <button className="period">
                Last 30 Days ▾
              </button>

              <button className="export">
                ↓ Export Report
              </button>

            </div>

          </section>


          {/* KPI */}

          <section className="kpis">

            <KPI
              icon="♥"
              title="Customer Satisfaction"
              value="92.4%"
              change="+4.8%"
              description="vs previous period"
            />

            <KPI
              icon="◷"
              title="SLA Achievement"
              value="96.8%"
              change="+2.1%"
              description="vs previous period"
            />

            <KPI
              icon="!"
              title="Open Complaints"
              value="128"
              change="-12.6%"
              description="vs previous period"
            />

            <KPI
              icon="◉"
              title="Customer Voice"
              value="4,821"
              change="+8.4%"
              description="responses this month"
            />

          </section>


          {/* ANALYTICS */}

          <section className="analytics">

            <div className="card performance">

              <CardHeading
                eyebrow="DIRECTORAT PERFORMANCE"
                title="Performance Overview"
              />

              <div className="legend">

                <span>
                  <i className="red-dot" />
                  Actual
                </span>

                <span>
                  <i className="gray-dot" />
                  Target
                </span>

              </div>


              <div className="chart">

                {[95, 75, 55, 35, 15].map(
                  (value) => (
                    <div
                      key={value}
                      className="chart-line"
                      style={{
                        bottom: `${value}%`,
                      }}
                    />
                  )
                )}


                <div className="bars">

                  {[58, 64, 61, 69, 66, 74, 72, 81, 79, 87, 85, 94].map(
                    (height, index) => (
                      <div
                        className="bar-wrap"
                        key={index}
                      >

                        <div
                          className="bar"
                          style={{
                            height: `${height}%`,
                          }}
                        />

                      </div>
                    )
                  )}

                </div>

              </div>


              <div className="chart-labels">
                <span>W1</span>
                <span>W2</span>
                <span>W3</span>
                <span>W4</span>
                <span>W5</span>
                <span>W6</span>
              </div>

            </div>


            {/* ALERT */}

            <div className="card alerts">

              <div className="alert-heading">

                <CardHeading
                  eyebrow="ATTENTION"
                  title="Priority Alerts"
                />

                <span className="alert-count">
                  3 ACTIVE
                </span>

              </div>


              <Alert
                level="HIGH"
                title="Complaint spike detected"
                description="Jabodetabek +14% in the last 24 hours"
              />

              <Alert
                level="MEDIUM"
                title="SLA approaching threshold"
                description="12 shipments require immediate attention"
              />

              <Alert
                level="MEDIUM"
                title="Negative sentiment increased"
                description="Customer Voice sentiment +6%"
              />


              <button className="view-alerts">
                View All Alerts →
              </button>

            </div>

          </section>


          {/* LOWER */}

          <section className="lower">

            <div className="card lower-card">

              <CardHeading
                eyebrow="CHANNEL PERFORMANCE"
                title="Customer Channels"
              />

              <div className="sentiments">

                <Sentiment
                  label="Chat"
                  value="94%"
                  width="94%"
                  color="green"
                />

                <Sentiment
                  label="Call"
                  value="91%"
                  width="91%"
                  color="green"
                />

                <Sentiment
                  label="Sosmed"
                  value="88%"
                  width="88%"
                  color="gray"
                />

                <Sentiment
                  label="Email"
                  value="86%"
                  width="86%"
                  color="red"
                />

              </div>

            </div>


            <div className="card lower-card">

              <CardHeading
                eyebrow="OPERATIONAL LAYER"
                title="Layer Performance"
              />

              <div className="complaint-list">

                <Legend
                  label="Layer 1"
                  value="96%"
                />

                <Legend
                  label="Layer 2 Area"
                  value="93%"
                />

                <Legend
                  label="Layer 2 Dedicate"
                  value="95%"
                />

                <Legend
                  label="B2C Aggregator"
                  value="91%"
                />

                <Legend
                  label="B2C Non Aggregator"
                  value="89%"
                />

              </div>

            </div>


            <div className="card lower-card">

              <CardHeading
                eyebrow="QUICK ACCESS"
                title="Performance Modules"
              />

              <div className="quick-grid">

                <Quick
                  icon="◈"
                  title="KPI"
                />

                <Quick
                  icon="!"
                  title="Claim"
                />

                <Quick
                  icon="↩"
                  title="Return"
                />

                <Quick
                  icon="⇩"
                  title="Inbound"
                />

              </div>

            </div>

          </section>


          {/* FOOTER */}

          <footer>

            <span>
              © 2026 Lion Parcel • Customer Experience
            </span>

            <span>
              Directorat Performance • Internal Use Only
            </span>

          </footer>

        </div>

      </section>

    </main>
  );
}


/* ============================= */
/* COMPONENTS */
/* ============================= */

function KPI({
  icon,
  title,
  value,
  change,
  description,
}) {
  return (
    <div className="kpi">

      <div className="kpi-top">

        <div className="kpi-icon">
          {icon}
        </div>

        <span className="positive">
          {change}
        </span>

      </div>

      <div className="kpi-title">
        {title}
      </div>

      <div className="kpi-value">
        {value}
      </div>

      <div className="kpi-description">
        {description}
      </div>

    </div>
  );
}


function CardHeading({
  eyebrow,
  title,
}) {
  return (
    <div className="card-heading">

      <div className="eyebrow">
        {eyebrow}
      </div>

      <h3>
        {title}
      </h3>

    </div>
  );
}


function Alert({
  level,
  title,
  description,
}) {
  return (
    <div className="alert">

      <div className="alert-top">

        <span
          className={
            level === "HIGH"
              ? "high"
              : "medium"
          }
        >
          {level}
        </span>

        <i
          className={
            level === "HIGH"
              ? "high-dot"
              : "medium-dot"
          }
        />

      </div>

      <strong>
        {title}
      </strong>

      <p>
        {description}
      </p>

    </div>
  );
}


function Legend({
  label,
  value,
}) {
  return (
    <div className="legend-row">

      <span>
        <i />
        {label}
      </span>

      <strong>
        {value}
      </strong>

    </div>
  );
}


function Sentiment({
  label,
  value,
  width,
  color,
}) {
  return (
    <div className="sentiment">

      <div className="sentiment-top">

        <span>
          {label}
        </span>

        <strong>
          {value}
        </strong>

      </div>

      <div className="progress">

        <div
          className={`progress-value ${color}`}
          style={{
            width,
          }}
        />

      </div>

    </div>
  );
}


function Quick({
  icon,
  title,
}) {
  return (
    <button className="quick">

      <span>
        {icon}
      </span>

      <strong>
        {title}
      </strong>

    </button>
  );
}
