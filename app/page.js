"use client";

import { useState } from "react";

const kpis = [
  {
    title: "CX Health Score",
    value: "94.8%",
    change: "+3.2%",
    note: "vs last week",
    icon: "✦",
    primary: true,
  },
  {
    title: "Customer Satisfaction",
    value: "4.72",
    suffix: "/5",
    change: "+0.4",
    note: "vs last week",
    icon: "♥",
  },
  {
    title: "SLA Achievement",
    value: "96.4%",
    change: "+1.8%",
    note: "vs last week",
    icon: "◷",
  },
  {
    title: "Open Cases",
    value: "128",
    change: "-12.5%",
    note: "vs yesterday",
    icon: "◈",
  },
];

const issues = [
  { name: "Delivery Delay", value: 38, count: 486 },
  { name: "Shipment Tracking", value: 26, count: 332 },
  { name: "Package Condition", value: 18, count: 229 },
  { name: "Customer Service", value: 11, count: 141 },
  { name: "Others", value: 7, count: 89 },
];

const hubs = [
  { name: "Jakarta", code: "JKT", score: "97.2%", cases: 24 },
  { name: "Bandung", code: "BDO", score: "95.8%", cases: 18 },
  { name: "Surabaya", code: "SUB", score: "94.9%", cases: 21 },
  { name: "Semarang", code: "SRG", score: "93.7%", cases: 15 },
];

const activities = [
  {
    title: "SLA performance improved",
    description: "Jakarta Hub reached 97.2% achievement",
    time: "8 min ago",
    type: "success",
  },
  {
    title: "New critical complaint",
    description: "Delivery delay — STT #LPX28491",
    time: "24 min ago",
    type: "danger",
  },
  {
    title: "CSAT target achieved",
    description: "Today's score reached 4.72 / 5",
    time: "42 min ago",
    type: "success",
  },
  {
    title: "Hub performance updated",
    description: "12 hubs have submitted today's report",
    time: "1 hr ago",
    type: "info",
  },
];

function Logo() {
  return (
    <div className="brand">
      <div className="brandMark">
        <span>L</span>
      </div>
      <div>
        <div className="brandName">LION PARCEL</div>
        <div className="brandSub">CUSTOMER EXPERIENCE</div>
      </div>
    </div>
  );
}

function Icon({ children }) {
  return <span className="navIcon">{children}</span>;
}

export default function Home() {
  const [active, setActive] = useState("Overview");
  const [period, setPeriod] = useState("Last 7 days");

  const menu = [
    ["Overview", "⌂"],
    ["CX Analytics", "◌"],
    ["Complaints", "▣"],
    ["SLA Monitor", "◷"],
    ["Hub Performance", "⌁"],
    ["Customer Voice", "♡"],
  ];

  return (
    <main className="app">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: "Inter", Arial, sans-serif;
          background: #f6f7f9;
          color: #111827;
        }

        button,
        select {
          font-family: inherit;
        }

        .app {
          min-height: 100vh;
          display: flex;
          background:
            radial-gradient(circle at 85% 0%, rgba(227,27,35,.055), transparent 27%),
            #f6f7f9;
        }

        /* SIDEBAR */

        .sidebar {
          width: 250px;
          min-height: 100vh;
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          background: #111827;
          color: white;
          padding: 26px 18px;
          display: flex;
          flex-direction: column;
          z-index: 10;
          box-shadow: 8px 0 30px rgba(15,23,42,.08);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 4px 8px 30px;
        }

        .brandMark {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: linear-gradient(145deg, #f32b33, #c91018);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 22px;
          box-shadow: 0 8px 20px rgba(227,27,35,.28);
        }

        .brandName {
          font-size: 14px;
          font-weight: 800;
          letter-spacing: .7px;
        }

        .brandSub {
          margin-top: 3px;
          color: #9ca3af;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 1.25px;
        }

        .menuLabel {
          color: #6b7280;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.5px;
          padding: 0 12px 10px;
          text-transform: uppercase;
        }

        .nav {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .navButton {
          width: 100%;
          border: 0;
          background: transparent;
          color: #9ca3af;
          padding: 12px 13px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          text-align: left;
          font-size: 12px;
          font-weight: 600;
          transition: .2s ease;
        }

        .navButton:hover {
          color: white;
          background: rgba(255,255,255,.06);
        }

        .navButton.active {
          color: white;
          background: linear-gradient(90deg, #e31b23, #c9141b);
          box-shadow: 0 8px 20px rgba(227,27,35,.2);
        }

        .navIcon {
          width: 21px;
          text-align: center;
          font-size: 15px;
        }

        .sidebarBottom {
          margin-top: auto;
        }

        .divider {
          height: 1px;
          background: rgba(255,255,255,.08);
          margin: 18px 7px;
        }

        .user {
          margin-top: 16px;
          padding: 12px;
          border-radius: 13px;
          background: rgba(255,255,255,.055);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e31b23, #ff6269);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 800;
        }

        .userName {
          font-size: 11px;
          font-weight: 700;
        }

        .userRole {
          color: #9ca3af;
          font-size: 9px;
          margin-top: 3px;
        }

        /* MAIN */

        .content {
          width: calc(100% - 250px);
          margin-left: 250px;
          padding: 28px 34px 40px;
        }

        .topbar {
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;
        }

        .breadcrumb {
          color: #9ca3af;
          font-size: 11px;
          font-weight: 500;
        }

        .breadcrumb strong {
          color: #374151;
        }

        .topActions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .search {
          width: 205px;
          height: 38px;
          border: 1px solid #e5e7eb;
          background: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          padding: 0 12px;
          gap: 8px;
          color: #9ca3af;
          font-size: 11px;
        }

        .search input {
          border: 0;
          outline: 0;
          width: 100%;
          font-size: 11px;
        }

        .iconButton {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: white;
          border: 1px solid #e5e7eb;
          cursor: pointer;
          position: relative;
          color: #4b5563;
        }

        .notificationDot {
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #e31b23;
          top: 8px;
          right: 8px;
          border: 2px solid white;
        }

        /* HERO */

        .hero {
          background: linear-gradient(120deg, #151b29 0%, #20283a 55%, #141a28 100%);
          border-radius: 20px;
          padding: 27px 30px;
          color: white;
          position: relative;
          overflow: hidden;
          margin-bottom: 22px;
          box-shadow: 0 15px 40px rgba(17,24,39,.12);
        }

        .hero:after {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          right: -80px;
          top: -170px;
          border-radius: 50%;
          background: rgba(227,27,35,.18);
        }

        .heroContent {
          position: relative;
          z-index: 2;
        }

        .eyebrow {
          color: #ff777d;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .hero h1 {
          margin: 0;
          font-size: 25px;
          letter-spacing: -.7px;
          font-weight: 800;
        }

        .hero p {
          margin: 8px 0 0;
          color: #aeb6c5;
          font-size: 11px;
        }

        .heroRight {
          position: absolute;
          right: 30px;
          top: 22px;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .scoreRing {
          width: 88px;
          height: 88px;
          border-radius: 50%;
          background: conic-gradient(#e31b23 0deg 341deg, #343c4c 341deg 360deg);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .scoreRing:after {
          content: "";
          position: absolute;
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: #192131;
        }

        .scoreText {
          position: relative;
          z-index: 2;
          text-align: center;
        }

        .scoreText strong {
          display: block;
          font-size: 17px;
        }

        .scoreText span {
          color: #9ca3af;
          font-size: 7px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* KPI */

        .kpiGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 20px;
        }

        .kpi {
          background: white;
          border: 1px solid #e9ebef;
          border-radius: 16px;
          padding: 18px;
          position: relative;
          overflow: hidden;
          transition: .2s;
        }

        .kpi:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(15,23,42,.07);
        }

        .kpiIcon {
          width: 33px;
          height: 33px;
          border-radius: 10px;
          background: #fff0f1;
          color: #e31b23;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          margin-bottom: 14px;
        }

        .kpiTitle {
          color: #6b7280;
          font-size: 10px;
          font-weight: 600;
        }

        .kpiValue {
          font-size: 25px;
          font-weight: 800;
          letter-spacing: -1px;
          margin: 5px 0 5px;
        }

        .kpiValue span {
          color: #9ca3af;
          font-size: 13px;
          font-weight: 600;
        }

        .change {
          font-size: 9px;
          font-weight: 700;
        }

        .positive {
          color: #0f9d6e;
        }

        .negative {
          color: #e31b23;
        }

        .note {
          color: #9ca3af;
          font-weight: 500;
          margin-left: 4px;
        }

        /* GRID */

        .dashboardGrid {
          display: grid;
          grid-template-columns: 1.45fr .9fr;
          gap: 18px;
        }

        .card {
          background: white;
          border: 1px solid #e9ebef;
          border-radius: 17px;
          padding: 20px;
        }

        .cardHeader {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 18px;
        }

        .cardTitle {
          font-size: 13px;
          font-weight: 800;
        }

        .cardSubtitle {
          color: #9ca3af;
          font-size: 9px;
          margin-top: 4px;
        }

        .select {
          border: 1px solid #e5e7eb;
          background: white;
          border-radius: 8px;
          padding: 7px 9px;
          color: #4b5563;
          font-size: 9px;
          outline: none;
        }

        /* CHART */

        .chart {
          height: 205px;
          position: relative;
          padding: 10px 0 20px 32px;
        }

        .gridLine {
          position: absolute;
          left: 32px;
          right: 0;
          border-top: 1px dashed #edf0f3;
        }

        .grid1 { top: 18px; }
        .grid2 { top: 63px; }
        .grid3 { top: 108px; }
        .grid4 { top: 153px; }

        .chartLabels {
          position: absolute;
          left: 0;
          top: 8px;
          bottom: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #a1a8b3;
          font-size: 8px;
        }

        .bars {
          position: absolute;
          left: 45px;
          right: 5px;
          bottom: 20px;
          top: 15px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 12px;
        }

        .barGroup {
          flex: 1;
          height: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 4px;
        }

        .bar {
          width: 9px;
          border-radius: 5px 5px 2px 2px;
          background: #e31b23;
          opacity: .85;
        }

        .bar.secondary {
          background: #d8dde5;
        }

        .barLabel {
          position: absolute;
          bottom: 0;
          color: #9ca3af;
          font-size: 8px;
          transform: translateX(-50%);
        }

        /* ISSUES */

        .issue {
          margin-bottom: 15px;
        }

        .issue:last-child {
          margin-bottom: 0;
        }

        .issueTop {
          display: flex;
          justify-content: space-between;
          margin-bottom: 7px;
          font-size: 9px;
        }

        .issueName {
          color: #374151;
          font-weight: 600;
        }

        .issueCount {
          color: #6b7280;
          font-weight: 700;
        }

        .progress {
          height: 6px;
          background: #f0f2f5;
          border-radius: 10px;
          overflow: hidden;
        }

        .progressFill {
          height: 100%;
          border-radius: 10px;
          background: linear-gradient(90deg, #e31b23, #f04a51);
        }

        /* LOWER */

        .lowerGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          margin-top: 18px;
        }

        .hubRow {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 0;
          border-bottom: 1px solid #f0f1f3;
        }

        .hubRow:last-child {
          border-bottom: 0;
        }

        .hubBadge {
          width: 35px;
          height: 35px;
          border-radius: 10px;
          background: #fff1f2;
          color: #d71920;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          font-weight: 800;
        }

        .hubInfo {
          flex: 1;
        }

        .hubName {
          font-size: 10px;
          font-weight: 700;
        }

        .hubCases {
          color: #9ca3af;
          font-size: 8px;
          margin-top: 3px;
        }

        .hubScore {
          font-size: 11px;
          font-weight: 800;
          color: #0f9d6e;
        }

        /* ACTIVITY */

        .activity {
          display: flex;
          gap: 11px;
          padding: 10px 0;
          border-bottom: 1px solid #f0f1f3;
        }

        .activity:last-child {
          border-bottom: 0;
        }

        .activityDot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-top: 5px;
          flex-shrink: 0;
        }

        .activityDot.success {
          background: #10b981;
        }

        .activityDot.danger {
          background: #e31b23;
        }

        .activityDot.info {
          background: #64748b;
        }

        .activityTitle {
          font-size: 9px;
          font-weight: 700;
        }

        .activityDesc {
          color: #6b7280;
          font-size: 8px;
          margin-top: 3px;
        }

        .activityTime {
          color: #a1a8b3;
          font-size: 8px;
          margin-left: auto;
          white-space: nowrap;
        }

        /* RESPONSIVE */

        @media (max-width: 1100px) {
          .sidebar {
            width: 215px;
          }

          .content {
            width: calc(100% - 215px);
            margin-left: 215px;
            padding: 22px;
          }

          .kpiGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .dashboardGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .sidebar {
            display: none;
          }

          .content {
            width: 100%;
            margin-left: 0;
            padding: 16px;
          }

          .topbar {
            margin-bottom: 15px;
          }

          .search {
            display: none;
          }

          .hero {
            padding: 22px;
          }

          .heroRight {
            display: none;
          }

          .kpiGrid,
          .lowerGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* SIDEBAR */}
      <aside className="sidebar">
        <Logo />

        <div className="menuLabel">Workspace</div>

        <nav className="nav">
          {menu.map(([name, icon]) => (
            <button
              key={name}
              className={`navButton ${active === name ? "active" : ""}`}
              onClick={() => setActive(name)}
            >
              <Icon>{icon}</Icon>
              {name}
            </button>
          ))}
        </nav>

        <div className="sidebarBottom">
          <div className="divider" />

          <button className="navButton">
            <Icon>⚙</Icon>
            Settings
          </button>

          <button className="navButton">
            <Icon>?</Icon>
            Help & Support
          </button>

          <div className="user">
            <div className="avatar">IB</div>
            <div>
              <div className="userName">Irpan Barna</div>
              <div className="userRole">CX Team</div>
            </div>
          </div>
        </div>
      </aside>

      {/* CONTENT */}
      <section className="content">
        <header className="topbar">
          <div className="breadcrumb">
            Command Center <span>/</span> <strong>{active}</strong>
          </div>

          <div className="topActions">
            <div className="search">
              <span>⌕</span>
              <input placeholder="Search anything..." />
            </div>

            <button className="iconButton">
              ♢
              <span className="notificationDot" />
            </button>
          </div>
        </header>

        {/* HERO */}
        <section className="hero">
          <div className="heroContent">
            <div className="eyebrow">Customer Experience Intelligence</div>

            <h1>Good morning, CX Team 👋</h1>

            <p>
              Here's today's overview of customer experience performance.
            </p>
          </div>

          <div className="heroRight">
            <div>
              <div className="eyebrow">Overall Performance</div>
              <div style={{ fontSize: "11px", color: "#aeb6c5" }}>
                Excellent performance
              </div>
            </div>

            <div className="scoreRing">
              <div className="scoreText">
                <strong>94.8%</strong>
                <span>CX Health</span>
              </div>
            </div>
          </div>
        </section>

        {/* KPI */}
        <section className="kpiGrid">
          {kpis.map((item) => (
            <div className="kpi" key={item.title}>
              <div className="kpiIcon">{item.icon}</div>

              <div className="kpiTitle">{item.title}</div>

              <div className="kpiValue">
                {item.value}
                {item.suffix && <span>{item.suffix}</span>}
              </div>

              <div className={`change ${item.change.startsWith("-") ? "negative" : "positive"}`}>
                {item.change} <span className="note">{item.note}</span>
              </div>
            </div>
          ))}
        </section>

        {/* MAIN CHARTS */}
        <section className="dashboardGrid">
          <div className="card">
            <div className="cardHeader">
              <div>
                <div className="cardTitle">CX Performance Trend</div>
                <div className="cardSubtitle">
                  Customer experience score over time
                </div>
              </div>

              <select
                className="select"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
              >
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>This year</option>
              </select>
            </div>

            <div className="chart">
              <div className="chartLabels">
                <span>100</span>
                <span>90</span>
                <span>80</span>
                <span>70</span>
              </div>

              <div className="gridLine grid1" />
              <div className="gridLine grid2" />
              <div className="gridLine grid3" />
              <div className="gridLine grid4" />

              <div className="bars">
                {[82, 86, 84, 91, 88, 94, 96].map((height, i) => (
                  <div className="barGroup" key={i}>
                    <div
                      className="bar secondary"
                      style={{ height: `${height - 10}%` }}
                    />
                    <div
                      className="bar"
                      style={{ height: `${height}%` }}
                    />
                    <span className="barLabel">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card">
            <div className="cardHeader">
              <div>
                <div className="cardTitle">Top Customer Issues</div>
                <div className="cardSubtitle">
                  Distribution of reported cases
                </div>
              </div>
            </div>

            {issues.map((issue) => (
              <div className="issue" key={issue.name}>
                <div className="issueTop">
                  <span className="issueName">{issue.name}</span>
                  <span className="issueCount">
                    {issue.count} · {issue.value}%
                  </span>
                </div>

                <div className="progress">
                  <div
                    className="progressFill"
                    style={{ width: `${issue.value * 2.5}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LOWER */}
        <section className="lowerGrid">
          <div className="card">
            <div className="cardHeader">
              <div>
                <div className="cardTitle">Hub Performance</div>
                <div className="cardSubtitle">
                  SLA achievement by location
                </div>
              </div>

              <span style={{ fontSize: "9px", color: "#e31b23", fontWeight: 700 }}>
                View all →
              </span>
            </div>

            {hubs.map((hub) => (
              <div className="hubRow" key={hub.code}>
                <div className="hubBadge">{hub.code}</div>

                <div className="hubInfo">
                  <div className="hubName">{hub.name}</div>
                  <div className="hubCases">{hub.cases} active cases</div>
                </div>

                <div className="hubScore">{hub.score}</div>
              </div>
            ))}
          </div>

          <div className="card">
            <div className="cardHeader">
              <div>
                <div className="cardTitle">CX Activity</div>
                <div className="cardSubtitle">
                  Latest updates from your team
                </div>
              </div>
            </div>

            {activities.map((item, index) => (
              <div className="activity" key={index}>
                <div className={`activityDot ${item.type}`} />

                <div style={{ flex: 1 }}>
                  <div className="activityTitle">{item.title}</div>
                  <div className="activityDesc">{item.description}</div>
                </div>

                <div className="activityTime">{item.time}</div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
