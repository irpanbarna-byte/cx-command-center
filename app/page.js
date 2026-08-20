"use client";

import { useState } from "react";

const logo =
  "https://www.marketeers.com/_next/image/?url=https%3A%2F%2Fimagedelivery.net%2F2MtOYVTKaiU0CCt-BLmtWw%2Fbb2fcb96-610f-45d1-74ed-285bbfdb6f00%2Fw%3D900&w=1920&q=75";

const menu = [
  ["⌂", "Overview"],
  ["◈", "CX Performance"],
  ["!", "Complaints"],
  ["◉", "Customer Voice"],
  ["◷", "SLA Monitoring"],
  ["▤", "Reports"],
];

export default function Home() {
  const [active, setActive] = useState("Overview");

  return (
    <main className="app">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="brand">
          <img
            src={logo}
            alt="Lion Parcel"
          />
        </div>

        <div className="workspace">
          <span>WORKSPACE</span>
        </div>

        <nav className="navigation">

          {menu.map(([icon, label]) => (
            <button
              key={label}
              className={`nav-item ${
                active === label ? "active" : ""
              }`}
              onClick={() => setActive(label)}
            >
              <span className="nav-icon">
                {icon}
              </span>

              <span>{label}</span>
            </button>
          ))}

        </nav>

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
              IB
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


      {/* MAIN */}

      <section className="main">

        <header className="header">

          <div>

            <div className="header-eyebrow">
              CUSTOMER EXPERIENCE
            </div>

            <h1>
              Command Center
            </h1>

          </div>

          <div className="header-right">

            <div className="search">
              <span>⌕</span>
              Search dashboard...
            </div>

            <button className="notification">
              ◇
              <b />
            </button>

            <div className="header-avatar">
              IB
            </div>

          </div>

        </header>


        <div className="content">

          {/* WELCOME */}

          <section className="welcome">

            <div>

              <div className="date">
                Thursday, 20 August 2026
              </div>

              <h2>
                Good morning, CX Team.
              </h2>

              <p>
                Monitor customer experience performance,
                complaints and service quality from one place.
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
                eyebrow="PERFORMANCE"
                title="Customer Experience Trend"
              />

              <div className="legend">

                <span>
                  <i className="red-dot" />
                  CX Score
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
                eyebrow="COMPLAINTS"
                title="Complaint Overview"
              />

              <div className="complaint">

                <div className="donut">

                  <div className="donut-center">

                    <strong>
                      128
                    </strong>

                    <span>
                      OPEN
                    </span>

                  </div>

                </div>

                <div className="complaint-list">

                  <Legend
                    label="Delivery"
                    value="48"
                  />

                  <Legend
                    label="Service"
                    value="37"
                  />

                  <Legend
                    label="System"
                    value="25"
                  />

                  <Legend
                    label="Other"
                    value="18"
                  />

                </div>

              </div>

            </div>


            <div className="card lower-card">

              <CardHeading
                eyebrow="CUSTOMER VOICE"
                title="Sentiment Analysis"
              />

              <div className="sentiments">

                <Sentiment
                  label="Positive"
                  value="72%"
                  width="72%"
                  color="green"
                />

                <Sentiment
                  label="Neutral"
                  value="19%"
                  width="19%"
                  color="gray"
                />

                <Sentiment
                  label="Negative"
                  value="9%"
                  width="9%"
                  color="red"
                />

              </div>

              <div className="response">

                <span>
                  Total responses
                </span>

                <strong>
                  4,821
                </strong>

              </div>

            </div>


            <div className="card lower-card">

              <CardHeading
                eyebrow="WORKSPACE"
                title="Quick Actions"
              />

              <div className="quick-grid">

                <Quick
                  icon="◈"
                  title="CX Performance"
                />

                <Quick
                  icon="!"
                  title="Complaints"
                />

                <Quick
                  icon="◉"
                  title="Customer Voice"
                />

                <Quick
                  icon="▤"
                  title="Reports"
                />

              </div>

            </div>

          </section>


          <footer>

            <span>
              © 2026 Lion Parcel • Customer Experience
            </span>

            <span>
              CX Command Center • Internal Use Only
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
