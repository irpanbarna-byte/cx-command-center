"use client";

import { useState } from "react";

const kpis = [
  ["CX Score", "92.8%", "+4.6%", "red"],
  ["Customer Satisfaction", "94.2%", "+2.8%", "blue"],
  ["Resolution Rate", "96.7%", "+5.1%", "green"],
  ["Open Cases", "1,284", "-12.4%", "orange"],
];

const alerts = [
  ["SLA Breach Risk", "127 cases approaching SLA limit", "critical"],
  ["Customer Sentiment", "Negative sentiment increased in Bandung", "warning"],
  ["Service Recovery", "Jakarta region improved by 8.4%", "success"],
];

export default function Home() {
  const [active, setActive] = useState("Overview");

  return (
    <div className="cx">

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #f3f4f6;
          font-family: Arial, Helvetica, sans-serif;
        }

        .cx {
          min-height: 100vh;
          background: #f3f4f6;
          color: #171717;
        }

        /* HEADER */

        .header {
          height: 72px;
          background: white;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 30px;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .logo {
          width: 43px;
          height: 43px;
          border-radius: 12px;
          background: #d71920;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 900;
          box-shadow: 0 8px 20px rgba(215,25,32,.25);
        }

        .brand-title {
          font-size: 17px;
          font-weight: 800;
        }

        .brand-sub {
          margin-top: 3px;
          font-size: 11px;
          color: #888;
        }

        .live {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #f7f7f7;
          border: 1px solid #eee;
          padding: 9px 14px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: bold;
        }

        .live-dot {
          width: 7px;
          height: 7px;
          background: #16a34a;
          border-radius: 50%;
        }

        /* LAYOUT */

        .layout {
          display: flex;
          min-height: calc(100vh - 72px);
        }

        .sidebar {
          width: 235px;
          background: #17181a;
          color: white;
          padding: 24px 15px;
          flex-shrink: 0;
        }

        .side-label {
          color: #666;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
          margin: 4px 12px 16px;
          text-transform: uppercase;
        }

        .menu {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .menu button {
          border: 0;
          background: transparent;
          color: #929292;
          padding: 12px 13px;
          border-radius: 10px;
          text-align: left;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
        }

        .menu button:hover {
          background: rgba(255,255,255,.06);
          color: white;
        }

        .menu button.active {
          background: #d71920;
          color: white;
          box-shadow: 0 8px 20px rgba(215,25,32,.22);
        }

        .date-box {
          margin-top: 35px;
          padding: 15px;
          border: 1px solid #292a2d;
          border-radius: 14px;
          background: rgba(255,255,255,.03);
        }

        .date-label {
          font-size: 9px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .date {
          margin-top: 8px;
          font-size: 22px;
          font-weight: 900;
        }

        .date-sub {
          color: #666;
          font-size: 10px;
          margin-top: 4px;
        }

        /* CONTENT */

        .content {
          flex: 1;
          min-width: 0;
        }

        .hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 80% 20%, rgba(215,25,32,.25), transparent 30%),
            #1a1b1d;
          color: white;
          padding: 38px 40px;
        }

        .hero-tag {
          display: inline-block;
          background: #d71920;
          border-radius: 20px;
          padding: 7px 12px;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        .hero h1 {
          margin: 15px 0 5px;
          font-size: 34px;
          line-height: 1.15;
          font-weight: 900;
        }

        .hero h1 span {
          color: #888;
        }

        .hero p {
          max-width: 650px;
          margin: 12px 0 0;
          color: #999;
          font-size: 13px;
          line-height: 1.7;
        }

        .dashboard {
          padding: 28px 32px;
        }

        /* KPI */

        .kpis {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .card {
          background: white;
          border: 1px solid #e7e7e7;
          border-radius: 17px;
          padding: 20px;
          box-shadow: 0 8px 25px rgba(0,0,0,.04);
        }

        .kpi-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .kpi-title {
          color: #777;
          font-size: 11px;
          font-weight: 700;
        }

        .kpi-value {
          margin-top: 8px;
          font-size: 29px;
          font-weight: 900;
        }

        .kpi-icon {
          width: 39px;
          height: 39px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
        }

        .red {
          background: #fff0f1;
          color: #d71920;
        }

        .blue {
          background: #eff6ff;
          color: #2563eb;
        }

        .green {
          background: #ecfdf3;
          color: #16a34a;
        }

        .orange {
          background: #fff7ed;
          color: #ea580c;
        }

        .change {
          margin-top: 17px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .change span {
          background: #ecfdf3;
          color: #16a34a;
          padding: 5px 7px;
          border-radius: 5px;
          font-size: 9px;
          font-weight: 800;
        }

        .change small {
          color: #aaa;
          font-size: 9px;
        }

        /* GRID */

        .grid-main {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 17px;
          margin-top: 17px;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .eyebrow {
          color: #999;
          font-size: 10px;
          font-weight: 700;
        }

        .card-title {
          margin-top: 5px;
          font-size: 17px;
          font-weight: 900;
        }

        .select {
          border: 1px solid #e5e7eb;
          background: white;
          border-radius: 8px;
          padding: 7px 10px;
          font-size: 10px;
          color: #666;
        }

        /* CHART */

        .chart {
          height: 245px;
          margin-top: 28px;
          display: flex;
          align-items: flex-end;
          gap: 7px;
          border-bottom: 1px solid #eee;
        }

        .bar {
          flex: 1;
          background: linear-gradient(to top,#d71920,#ef777c);
          border-radius: 5px 5px 0 0;
          opacity: .82;
        }

        .bar:hover {
          opacity: 1;
        }

        .chart-labels {
          display: flex;
          justify-content: space-between;
          color: #aaa;
          font-size: 9px;
          margin-top: 9px;
        }

        /* SCORE */

        .score-area {
          display: flex;
          justify-content: center;
          margin: 30px 0;
        }

        .score-circle {
          width: 170px;
          height: 170px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle, white 57%, transparent 58%),
            conic-gradient(#d71920 0 92.8%, #eee 92.8% 100%);
        }

        .score-number {
          text-align: center;
        }

        .score-number strong {
          display: block;
          font-size: 37px;
          font-weight: 900;
        }

        .score-number span {
          color: #999;
          font-size: 9px;
          font-weight: bold;
          text-transform: uppercase;
        }

        .mini-stats {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 7px;
        }

        .mini {
          background: #f7f7f7;
          border-radius: 10px;
          padding: 10px;
          text-align: center;
        }

        .mini strong {
          font-size: 16px;
        }

        .mini span {
          display: block;
          margin-top: 3px;
          color: #999;
          font-size: 8px;
        }

        /* LOWER */

        .lower {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 17px;
          margin-top: 17px;
        }

        .channel {
          margin-top: 21px;
        }

        .channel-row {
          margin-bottom: 17px;
        }

        .channel-head {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          font-weight: 700;
          margin-bottom: 7px;
        }

        .channel-head span:last-child {
          color: #777;
        }

        .progress {
          height: 7px;
          background: #eee;
          border-radius: 20px;
          overflow: hidden;
        }

        .progress div {
          height: 100%;
          background: #d71920;
          border-radius: 20px;
        }

        /* ALERT */

        .alert {
          display: flex;
          gap: 12px;
          background: #f8f8f8;
          border: 1px solid #eee;
          border-radius: 11px;
          padding: 13px;
          margin-top: 10px;
        }

        .alert-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-top: 4px;
          flex-shrink: 0;
        }

        .critical {
          background: #d71920;
        }

        .warning {
          background: #f59e0b;
        }

        .success {
          background: #16a34a;
        }

        .alert-title {
          font-size: 11px;
          font-weight: 800;
        }

        .alert-text {
          margin-top: 4px;
          color: #777;
          font-size: 10px;
        }

        /* FOOTER */

        .insight {
          margin-top: 17px;
          padding: 22px 25px;
          background:
            radial-gradient(circle at 90% 50%, rgba(255,255,255,.13), transparent 25%),
            #d71920;
          color: white;
          border-radius: 17px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .insight-label {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #ffc5c7;
        }

        .insight h3 {
          margin: 7px 0 4px;
          font-size: 18px;
        }

        .insight p {
          margin: 0;
          font-size: 10px;
          color: #ffc5c7;
        }

        .insight button {
          border: 0;
          background: white;
          color: #d71920;
          padding: 11px 17px;
          border-radius: 9px;
          font-size: 10px;
          font-weight: 900;
          cursor: pointer;
          white-space: nowrap;
        }

        @media(max-width: 1000px) {
          .kpis {
            grid-template-columns: repeat(2,1fr);
          }

          .grid-main,
          .lower {
            grid-template-columns: 1fr;
          }

          .sidebar {
            width: 190px;
          }
        }

        @media(max-width: 700px) {
          .sidebar {
            display: none;
          }

          .header {
            padding: 0 15px;
          }

          .dashboard {
            padding: 18px;
          }

          .hero {
            padding: 30px 20px;
          }

          .hero h1 {
            font-size: 27px;
          }

          .kpis {
            grid-template-columns: 1fr;
          }

          .insight {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      {/* HEADER */}
      <header className="header">
        <div className="brand">
          <div className="logo">LP</div>

          <div>
            <div className="brand-title">
              CX Command Center
            </div>
            <div className="brand-sub">
              Customer Experience • Performance Intelligence
            </div>
          </div>
        </div>

        <div className="live">
          <div className="live-dot"></div>
          LIVE DATA
        </div>
      </header>

      <div className="layout">

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="side-label">
            Command Center
          </div>

          <div className="menu">
            {[
              ["Overview", "⌂"],
              ["CX Performance", "◈"],
              ["Customer Voice", "◉"],
              ["SLA Monitoring", "◷"],
              ["Service Recovery", "↗"],
              ["Analytics", "▦"],
            ].map(([name, icon]) => (
              <button
                key={name}
                className={active === name ? "active" : ""}
                onClick={() => setActive(name)}
              >
                {icon} &nbsp;&nbsp; {name}
              </button>
            ))}
          </div>

          <div className="date-box">
            <div className="date-label">
              Today
            </div>

            <div className="date">
              20 Aug
            </div>

            <div className="date-sub">
              Thursday • 11:32 WIB
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <section className="content">

          <div className="hero">
            <div className="hero-tag">
              Customer Experience
            </div>

            <h1>
              Good morning, CX Team.
              <span>
                <br />
                Here&apos;s your experience pulse.
              </span>
            </h1>

            <p>
              Monitor customer sentiment, service quality, SLA,
              resolution performance and operational experience
              in one command center.
            </p>
          </div>

          <div className="dashboard">

            {/* KPI */}
            <div className="kpis">
              {kpis.map((kpi, i) => (
                <div className="card" key={kpi[0]}>
                  <div className="kpi-top">
                    <div>
                      <div className="kpi-title">
                        {kpi[0]}
                      </div>

                      <div className="kpi-value">
                        {kpi[1]}
                      </div>
                    </div>

                    <div className={`kpi-icon ${kpi[3]}`}>
                      {["✦","♥","✓","◉"][i]}
                    </div>
                  </div>

                  <div className="change">
                    <span>{kpi[2]}</span>
                    <small>vs last period</small>
                  </div>
                </div>
              ))}
            </div>

            {/* MAIN */}
            <div className="grid-main">

              <div className="card">
                <div className="card-header">
                  <div>
                    <div className="eyebrow">
                      EXPERIENCE TREND
                    </div>

                    <div className="card-title">
                      Customer Experience Index
                    </div>
                  </div>

                  <div className="select">
                    Last 30 Days ▾
                  </div>
                </div>

                <div className="chart">
                  {[48,56,53,62,58,66,61,72,69,75,71,82,78,88,84,92,89,95].map(
                    (height, i) => (
                      <div
                        className="bar"
                        key={i}
                        style={{height: `${height}%`}}
                      />
                    )
                  )}
                </div>

                <div className="chart-labels">
                  <span>01 Aug</span>
                  <span>07 Aug</span>
                  <span>14 Aug</span>
                  <span>20 Aug</span>
                </div>
              </div>

              <div className="card">
                <div className="eyebrow">
                  EXPERIENCE HEALTH
                </div>

                <div className="card-title">
                  Overall CX Health
                </div>

                <div className="score-area">
                  <div className="score-circle">
                    <div className="score-number">
                      <strong>92.8</strong>
                      <span>CX Score</span>
                    </div>
                  </div>
                </div>

                <div className="mini-stats">
                  <div className="mini">
                    <strong>94%</strong>
                    <span>Satisfaction</span>
                  </div>

                  <div className="mini">
                    <strong>97%</strong>
                    <span>Resolution</span>
                  </div>

                  <div className="mini">
                    <strong>91%</strong>
                    <span>Sentiment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* LOWER */}
            <div className="lower">

              <div className="card">
                <div className="eyebrow">
                  CUSTOMER VOICE
                </div>

                <div className="card-title">
                  Contact Channels
                </div>

                <div className="channel">

                  {[
                    ["WhatsApp","5,842",42],
                    ["Phone","3,921",28],
                    ["Email","2,486",18],
                    ["Social Media","1,653",12],
                  ].map(row => (
                    <div className="channel-row" key={row[0]}>
                      <div className="channel-head">
                        <span>{row[0]}</span>
                        <span>{row[1]}</span>
                      </div>

                      <div className="progress">
                        <div style={{width:`${row[2]*2.1}%`}} />
                      </div>
                    </div>
                  ))}

                </div>
              </div>

              <div className="card">
                <div className="eyebrow">
                  REAL-TIME MONITORING
                </div>

                <div className="card-title">
                  CX Alerts
                </div>

                {alerts.map(alert => (
                  <div className="alert" key={alert[0]}>
                    <div className={`alert-dot ${alert[2]}`} />

                    <div>
                      <div className="alert-title">
                        {alert[0]}
                      </div>

                      <div className="alert-text">
                        {alert[1]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* INSIGHT */}
            <div className="insight">
              <div>
                <div className="insight-label">
                  CX INTELLIGENCE
                </div>

                <h3>
                  Experience is our competitive advantage.
                </h3>

                <p>
                  Turn customer feedback into actionable insight
                  and measurable service improvement.
                </p>
              </div>

              <button>
                Open CX Analytics →
              </button>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
