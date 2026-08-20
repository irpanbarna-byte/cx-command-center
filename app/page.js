"use client";

import { useState } from "react";

const menuGroups = [
  {
    title: "Layer 1",
    icon: "▦",
    children: ["Chat", "Call", "Sosmed", "Email"],
  },
  {
    title: "Layer 2",
    icon: "▦",
    children: ["Layer 2 Area", "Layer 2 Dedicate"],
  },
  {
    title: "B2C",
    icon: "◉",
    children: ["B2C Aggregator", "B2C Non Aggregator"],
  },
  {
    title: "Other",
    icon: "•••",
    children: ["Other 1", "Other 2", "Other 3"],
  },
];

const singleMenus = [
  ["Interpack", "▣"],
  ["Claim", "◈"],
  ["Return", "↩"],
  ["Inbound", "⇩"],
  ["KPI", "◆"],
  ["Porcase", "▤"],
];

export default function Home() {
  const [active, setActive] = useState("Dashboard");

  const [open, setOpen] = useState({
    "Layer 1": true,
    "Layer 2": false,
    B2C: false,
    Other: false,
  });

  const toggleGroup = (title) => {
    setOpen((current) => ({
      ...current,
      [title]: !current[title],
    }));
  };

  return (
    <main className="app">

      {/* ================= SIDEBAR ================= */}

      <aside className="sidebar">

        <div className="sidebar-brand">

          <div className="lion-mark">
            LP
          </div>

          <div className="brand-text">
            <strong>LION</strong>
            <span>PARCEL</span>
          </div>

        </div>


        <div className="brand-divider" />


        <div className="department">

          <span className="department-label">
            CUSTOMER EXPERIENCE
          </span>

          <strong>
            Directorat Performance
          </strong>

        </div>


        <div className="sidebar-scroll">

          <div className="menu-section">

            <div className="menu-label">
              MAIN MENU
            </div>


            {/* DASHBOARD */}

            <button
              className={`menu-item ${
                active === "Dashboard" ? "active" : ""
              }`}
              onClick={() => setActive("Dashboard")}
            >

              <span className="menu-icon">
                ⌂
              </span>

              <span className="menu-name">
                Dashboard
              </span>

            </button>


            {/* GROUP MENUS */}

            {menuGroups.map((group) => (

              <div
                className="menu-group"
                key={group.title}
              >

                <button
                  className={`menu-item group-button ${
                    active === group.title
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    toggleGroup(group.title)
                  }
                >

                  <span className="menu-icon">
                    {group.icon}
                  </span>

                  <span className="menu-name">
                    {group.title}
                  </span>

                  <span
                    className={`chevron ${
                      open[group.title]
                        ? "rotate"
                        : ""
                    }`}
                  >
                    ›
                  </span>

                </button>


                <div
                  className={`submenu-wrapper ${
                    open[group.title]
                      ? "submenu-open"
                      : ""
                  }`}
                >

                  <div className="submenu">

                    {group.children.map(
                      (child) => (

                        <button
                          key={child}
                          className={`submenu-item ${
                            active === child
                              ? "active"
                              : ""
                          }`}
                          onClick={() =>
                            setActive(child)
                          }
                        >

                          <span className="submenu-line" />

                          <span className="submenu-dot">
                            •
                          </span>

                          <span>
                            {child}
                          </span>

                        </button>

                      )
                    )}

                  </div>

                </div>

              </div>

            ))}


            <div className="menu-label secondary">
              OPERATIONAL MODULES
            </div>


            {/* SINGLE MENUS */}

            {singleMenus.map(([name, icon]) => (

              <button
                key={name}
                className={`menu-item ${
                  active === name
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActive(name)
                }
              >

                <span className="menu-icon">
                  {icon}
                </span>

                <span className="menu-name">
                  {name}
                </span>

              </button>

            ))}

          </div>

        </div>


        {/* SIDEBAR FOOTER */}

        <div className="sidebar-footer">

          <div className="system-status">

            <div className="status-top">

              <span>
                System Status
              </span>

              <span className="online">
                <i />
                Online
              </span>

            </div>

            <div className="status-progress">
              <span />
            </div>

          </div>


          <div className="profile">

            <div className="profile-avatar">
              CX
            </div>

            <div className="profile-info">

              <strong>
                CX Operations
              </strong>

              <span>
                Administrator
              </span>

            </div>

            <span className="profile-more">
              ⋮
            </span>

          </div>

        </div>

      </aside>


      {/* ================= MAIN ================= */}

      <section className="main">

        {/* HEADER */}

        <header className="header">

          <div className="header-left">

            <div className="breadcrumb">
              CX Command Center
              <span>/</span>
              {active}
            </div>

            <h1>
              {active}
            </h1>

          </div>


          <div className="header-right">

            <div className="search-box">

              <span>
                ⌕
              </span>

              <input
                placeholder="Search anything..."
              />

              <kbd>
                /
              </kbd>

            </div>


            <button className="header-button">
              ◫
            </button>

            <button className="header-button notification-button">
              ♢
              <i />
            </button>


            <div className="header-profile">

              <div className="header-avatar">
                CX
              </div>

              <div className="header-profile-text">

                <strong>
                  CX Admin
                </strong>

                <span>
                  Customer Experience
                </span>

              </div>

              <span>
                ›
              </span>

            </div>

          </div>

        </header>


        {/* CONTENT */}

        <div className="content">

          {/* HERO */}

          <section className="hero">

            <div>

              <span className="hero-label">
                CUSTOMER EXPERIENCE • PERFORMANCE
              </span>

              <h2>
                Good morning, CX Team.
              </h2>

              <p>
                Monitor your customer experience
                performance across every operational
                channel from one place.
              </p>

            </div>


            <div className="hero-actions">

              <button className="date-button">
                ◷ &nbsp; 01 Aug — 20 Aug 2026
                <span>⌄</span>
              </button>

              <button className="primary-button">
                ↓ &nbsp; Export Report
              </button>

            </div>

          </section>


          {/* KPI */}

          <section className="kpi-grid">

            <Kpi
              title="Customer Satisfaction"
              value="92.4%"
              change="+4.8%"
              icon="♥"
              description="vs previous period"
            />

            <Kpi
              title="SLA Achievement"
              value="96.8%"
              change="+2.1%"
              icon="◷"
              description="vs previous period"
            />

            <Kpi
              title="Open Complaints"
              value="128"
              change="-12.6%"
              icon="!"
              description="vs previous period"
              negative
            />

            <Kpi
              title="Customer Voice"
              value="4,821"
              change="+8.4%"
              icon="◉"
              description="responses this month"
            />

          </section>


          {/* CHART + ALERT */}

          <section className="two-column">

            <div className="card">

              <CardHeader
                label="DIRECTORAT PERFORMANCE"
                title="Performance Overview"
              />

              <div className="chart-summary">

                <div>

                  <strong>
                    94.8%
                  </strong>

                  <span>
                    Overall achievement
                  </span>

                </div>

                <div className="chart-legend">

                  <span>
                    <i className="actual" />
                    Actual
                  </span>

                  <span>
                    <i className="target" />
                    Target
                  </span>

                </div>

              </div>


              <div className="chart">

                <div className="grid-line line-1" />
                <div className="grid-line line-2" />
                <div className="grid-line line-3" />
                <div className="grid-line line-4" />


                <div className="chart-bars">

                  {[58, 67, 61, 73, 69, 78, 74, 82, 79, 88, 84, 94].map(
                    (height, index) => (

                      <div
                        className="bar-column"
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


              <div className="chart-months">

                <span>W1</span>
                <span>W2</span>
                <span>W3</span>
                <span>W4</span>
                <span>W5</span>
                <span>W6</span>

              </div>

            </div>


            {/* ALERT */}

            <div className="card">

              <div className="alert-header">

                <CardHeader
                  label="REQUIRES ATTENTION"
                  title="Priority Alerts"
                />

                <span className="alert-badge">
                  3 ACTIVE
                </span>

              </div>


              <Alert
                level="high"
                title="Complaint spike detected"
                description="Jabodetabek increased by 14% in the last 24 hours."
              />

              <Alert
                level="medium"
                title="SLA approaching threshold"
                description="12 shipments require immediate attention."
              />

              <Alert
                level="medium"
                title="Negative sentiment increased"
                description="Customer Voice sentiment dropped by 6%."
              />


              <button className="view-all">
                View all alerts
                <span>→</span>
              </button>

            </div>

          </section>


          {/* BOTTOM */}

          <section className="three-column">

            <div className="card">

              <CardHeader
                label="CHANNEL PERFORMANCE"
                title="Customer Channels"
              />

              <Progress
                name="Chat"
                value="94%"
                width="94%"
              />

              <Progress
                name="Call"
                value="91%"
                width="91%"
              />

              <Progress
                name="Sosmed"
                value="88%"
                width="88%"
              />

              <Progress
                name="Email"
                value="86%"
                width="86%"
              />

            </div>


            <div className="card">

              <CardHeader
                label="OPERATIONAL LAYER"
                title="Layer Performance"
              />

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


            <div className="card">

              <CardHeader
                label="QUICK ACCESS"
                title="Performance Modules"
              />

              <div className="quick-grid">

                <Quick
                  icon="◆"
                  name="KPI"
                />

                <Quick
                  icon="◈"
                  name="Claim"
                />

                <Quick
                  icon="↩"
                  name="Return"
                />

                <Quick
                  icon="⇩"
                  name="Inbound"
                />

              </div>

            </div>

          </section>


          <footer>

            <span>
              © 2026 Lion Parcel
            </span>

            <span>
              Customer Experience • Internal Use Only
            </span>

          </footer>

        </div>

      </section>

    </main>
  );
}


/* ================= COMPONENTS ================= */

function Kpi({
  title,
  value,
  change,
  icon,
  description,
  negative,
}) {
  return (
    <div className="kpi-card">

      <div className="kpi-card-top">

        <div className="kpi-icon">
          {icon}
        </div>

        <span
          className={`kpi-change ${
            negative
              ? "down"
              : ""
          }`}
        >
          {change}
        </span>

      </div>

      <span className="kpi-title">
        {title}
      </span>

      <strong className="kpi-value">
        {value}
      </strong>

      <span className="kpi-description">
        {description}
      </span>

    </div>
  );
}


function CardHeader({
  label,
  title,
}) {
  return (
    <div className="card-header">

      <span>
        {label}
      </span>

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
    <div className="alert-item">

      <div
        className={`alert-icon ${level}`}
      >
        !
      </div>

      <div className="alert-content">

        <strong>
          {title}
        </strong>

        <p>
          {description}
        </p>

      </div>

      <span className="alert-arrow">
        →
      </span>

    </div>
  );
}


function Progress({
  name,
  value,
  width,
}) {
  return (
    <div className="progress-item">

      <div className="progress-top">

        <span>
          {name}
        </span>

        <strong>
          {value}
        </strong>

      </div>

      <div className="progress-track">

        <div
          className="progress-fill"
          style={{ width }}
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
    <div className="layer-item">

      <span>

        <i />

        {name}

      </span>

      <strong>
        {value}
      </strong>

    </div>
  );
}


function Quick({
  icon,
  name,
}) {
  return (
    <button className="quick-card">

      <span>
        {icon}
      </span>

      <strong>
        {name}
      </strong>

    </button>
  );
}
