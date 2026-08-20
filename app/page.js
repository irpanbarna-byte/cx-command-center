"use client";

import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("Dashboard");

  const menu = [
    ["Dashboard", "⌂"],
    ["CX Performance", "◈"],
    ["Customer Voice", "♡"],
    ["SLA Monitoring", "◷"],
    ["Service Recovery", "↗"],
    ["Analytics", "▦"],
  ];

  const kpis = [
    {
      title: "CX SCORE",
      value: "92.8%",
      change: "+4.6%",
      label: "vs last period",
      icon: "✦",
      type: "red",
    },
    {
      title: "CUSTOMER SATISFACTION",
      value: "94.2%",
      change: "+2.8%",
      label: "vs last period",
      icon: "♥",
      type: "pink",
    },
    {
      title: "RESOLUTION RATE",
      value: "96.7%",
      change: "+5.1%",
      label: "vs last period",
      icon: "✓",
      type: "green",
    },
    {
      title: "OPEN CASES",
      value: "1,284",
      change: "-12.4%",
      label: "vs last period",
      icon: "◉",
      type: "orange",
    },
  ];

  const channels = [
    ["WhatsApp", "5,842", 86],
    ["Phone", "3,921", 68],
    ["Email", "2,486", 51],
    ["Social Media", "1,653", 37],
  ];

  return (
    <main className="page">

      <style jsx global>{`

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          background: #f5f6f7;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
          color: #202124;
        }

        button {
          font-family: inherit;
        }

        .page {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 75% 5%,
              rgba(215, 25, 32, .07),
              transparent 28%
            ),
            linear-gradient(
              135deg,
              #f1f2f3 0%,
              #ffffff 48%,
              #f4f5f6 100%
            );
        }

        /* ================= HEADER ================= */

        .header {
          height: 74px;
          background: rgba(255,255,255,.92);
          backdrop-filter: blur(15px);
          border-bottom: 1px solid #e9eaec;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          position: sticky;
          top: 0;
          z-index: 20;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .logo {
          width: 44px;
          height: 44px;
          border-radius: 13px;
          background: linear-gradient(
            145deg,
            #ef1c24,
            #c80f16
          );
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 900;
          box-shadow:
            0 8px 22px rgba(215,25,32,.25);
        }

        .brandName {
          font-size: 16px;
          font-weight: 850;
          letter-spacing: -.3px;
        }

        .brandSub {
          font-size: 10px;
          color: #96999d;
          margin-top: 3px;
        }

        .headerRight {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .live {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 8px 12px;
          border-radius: 30px;
          background: #f3faf5;
          border: 1px solid #dff1e4;
          color: #218342;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .8px;
        }

        .liveDot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22a05a;
          box-shadow: 0 0 0 4px rgba(34,160,90,.1);
        }

        .notification {
          width: 37px;
          height: 37px;
          border-radius: 11px;
          border: 1px solid #e8e9eb;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #707378;
          cursor: pointer;
        }

        .avatar {
          width: 37px;
          height: 37px;
          border-radius: 12px;
          background: #202124;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 800;
        }

        /* ================= LAYOUT ================= */

        .layout {
          display: flex;
          min-height: calc(100vh - 74px);
        }

        .sidebar {
          width: 230px;
          background: rgba(255,255,255,.75);
          border-right: 1px solid #e8e9eb;
          padding: 25px 14px;
          flex-shrink: 0;
        }

        .sideTitle {
          font-size: 9px;
          font-weight: 850;
          color: #a0a2a5;
          letter-spacing: 1.7px;
          padding: 0 12px;
          margin-bottom: 13px;
        }

        .menu {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .menuButton {
          width: 100%;
          border: none;
          background: transparent;
          color: #777a7e;
          padding: 12px 12px;
          border-radius: 10px;
          text-align: left;
          font-size: 11px;
          font-weight: 650;
          cursor: pointer;
          transition: .2s;
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .menuButton:hover {
          background: #f5f5f6;
          color: #222;
        }

        .menuButton.active {
          background: #fff0f1;
          color: #d71920;
          font-weight: 800;
        }

        .menuIcon {
          width: 24px;
          text-align: center;
          font-size: 15px;
        }

        .sidebarBottom {
          margin-top: 35px;
          border-radius: 15px;
          background:
            linear-gradient(
              145deg,
              #f3f3f4,
              #ffffff
            );
          border: 1px solid #e6e7e9;
          padding: 16px;
        }

        .todayLabel {
          color: #a1a3a6;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.4px;
        }

        .today {
          font-size: 21px;
          font-weight: 900;
          margin-top: 6px;
        }

        .todaySub {
          color: #999ca0;
          font-size: 9px;
          margin-top: 3px;
        }

        /* ================= CONTENT ================= */

        .content {
          flex: 1;
          min-width: 0;
          padding: 32px;
        }

        .hero {
          position: relative;
          overflow: hidden;
          border-radius: 23px;
          min-height: 230px;
          padding: 34px 38px;
          background:
            radial-gradient(
              circle at 85% 35%,
              rgba(215,25,32,.17),
              transparent 30%
            ),
            linear-gradient(
              115deg,
              #ffffff 0%,
              #f3f4f5 62%,
              #e9eaec 100%
            );
          border: 1px solid #e5e6e8;
          box-shadow: 0 15px 45px rgba(0,0,0,.05);
        }

        .hero:after {
          content: "";
          position: absolute;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          right: -80px;
          top: -100px;
          border: 45px solid rgba(215,25,32,.06);
        }

        .heroTag {
          position: relative;
          z-index: 2;
          display: inline-flex;
          padding: 7px 11px;
          border-radius: 30px;
          background: #fff0f1;
          color: #d71920;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.4px;
        }

        .heroTitle {
          position: relative;
          z-index: 2;
          margin: 16px 0 8px;
          font-size: 31px;
          line-height: 1.15;
          letter-spacing: -1.1px;
          font-weight: 900;
        }

        .heroTitle span {
          color: #96999d;
        }

        .heroDescription {
          position: relative;
          z-index: 2;
          max-width: 620px;
          margin: 0;
          color: #7d8084;
          font-size: 11px;
          line-height: 1.7;
        }

        .heroBottom {
          position: absolute;
          right: 35px;
          bottom: 28px;
          z-index: 2;
          display: flex;
          gap: 9px;
        }

        .filter {
          border: 1px solid #dedfe1;
          background: rgba(255,255,255,.8);
          padding: 9px 13px;
          border-radius: 9px;
          font-size: 9px;
          color: #686b70;
        }

        /* ================= KPI ================= */

        .kpis {
          margin-top: 20px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .kpi {
          background: rgba(255,255,255,.88);
          border: 1px solid #e6e7e9;
          border-radius: 17px;
          padding: 19px;
          box-shadow: 0 9px 28px rgba(0,0,0,.035);
          transition: transform .2s, box-shadow .2s;
        }

        .kpi:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 35px rgba(0,0,0,.07);
        }

        .kpiTop {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .kpiTitle {
          color: #929599;
          font-size: 8px;
          font-weight: 850;
          letter-spacing: .8px;
        }

        .kpiIcon {
          width: 35px;
          height: 35px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 900;
        }

        .iconRed {
          background: #fff0f1;
          color: #d71920;
        }

        .iconPink {
          background: #fff3f5;
          color: #e24758;
        }

        .iconGreen {
          background: #effaf3;
          color: #299257;
        }

        .iconOrange {
          background: #fff6ed;
          color: #df7b27;
        }

        .kpiValue {
          margin-top: 12px;
          font-size: 28px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .kpiBottom {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: 13px;
        }

        .change {
          background: #edf9f1;
          color: #299257;
          padding: 4px 6px;
          border-radius: 5px;
          font-size: 8px;
          font-weight: 850;
        }

        .changeText {
          color: #a0a2a5;
          font-size: 8px;
        }

        /* ================= GRID ================= */

        .mainGrid {
          display: grid;
          grid-template-columns: 1.55fr 1fr;
          gap: 15px;
          margin-top: 15px;
        }

        .card {
          background: rgba(255,255,255,.9);
          border: 1px solid #e5e6e8;
          border-radius: 18px;
          padding: 21px;
          box-shadow: 0 8px 27px rgba(0,0,0,.035);
        }

        .cardHeader {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .eyebrow {
          color: #a0a2a5;
          font-size: 8px;
          font-weight: 850;
          letter-spacing: 1.1px;
        }

        .cardTitle {
          margin-top: 5px;
          font-size: 15px;
          font-weight: 900;
        }

        .period {
          border: 1px solid #e4e5e7;
          background: white;
          color: #777a7e;
          border-radius: 8px;
          padding: 7px 9px;
          font-size: 8px;
        }

        /* ================= CHART ================= */

        .chart {
          height: 230px;
          margin-top: 25px;
          display: flex;
          align-items: flex-end;
          gap: 8px;
          border-bottom: 1px solid #ededee;
          position: relative;
        }

        .chartGrid {
          position: absolute;
          left: 0;
          right: 0;
          top: 25%;
          border-top: 1px dashed #ececee;
        }

        .chartGrid2 {
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          border-top: 1px dashed #ececee;
        }

        .bar {
          position: relative;
          z-index: 2;
          flex: 1;
          min-width: 4px;
          border-radius: 7px 7px 0 0;
          background:
            linear-gradient(
              180deg,
              #e63a41,
              #d71920
            );
          opacity: .82;
          transition: .2s;
        }

        .bar:hover {
          opacity: 1;
          transform: scaleY(1.02);
        }

        .chartLabels {
          display: flex;
          justify-content: space-between;
          margin-top: 8px;
          color: #a3a5a8;
          font-size: 8px;
        }

        /* ================= SCORE ================= */

        .scoreBox {
          display: flex;
          justify-content: center;
          padding: 21px 0;
        }

        .circle {
          width: 168px;
          height: 168px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(
              circle,
              white 57%,
              transparent 58%
            ),
            conic-gradient(
              #d71920 0deg,
              #e63a41 334deg,
              #e9eaec 334deg
            );
          box-shadow: 0 10px 30px rgba(215,25,32,.08);
        }

        .score {
          text-align: center;
        }

        .score strong {
          display: block;
          font-size: 35px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .score span {
          color: #9a9da1;
          font-size: 8px;
          font-weight: 850;
          letter-spacing: 1px;
        }

        .scoreStats {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 7px;
        }

        .scoreStat {
          background: #f7f7f8;
          border: 1px solid #ededee;
          border-radius: 10px;
          text-align: center;
          padding: 9px 5px;
        }

        .scoreStat strong {
          font-size: 14px;
        }

        .scoreStat span {
          display: block;
          margin-top: 3px;
          color: #9b9da0;
          font-size: 7px;
        }

        /* ================= LOWER ================= */

        .lowerGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-top: 15px;
        }

        .channel {
          margin-top: 21px;
        }

        .channelRow {
          margin-bottom: 16px;
        }

        .channelHead {
          display: flex;
          justify-content: space-between;
          margin-bottom: 7px;
          font-size: 9px;
          font-weight: 750;
        }

        .channelValue {
          color: #8c8f93;
        }

        .progress {
          height: 6px;
          background: #eeeeef;
          border-radius: 20px;
          overflow: hidden;
        }

        .progressFill {
          height: 100%;
          background:
            linear-gradient(
              90deg,
              #d71920,
              #ef7479
            );
          border-radius: 20px;
        }

        /* ================= ALERTS ================= */

        .alert {
          display: flex;
          gap: 11px;
          align-items: flex-start;
          padding: 11px;
          margin-top: 9px;
          background: #f8f8f9;
          border: 1px solid #ededee;
          border-radius: 11px;
        }

        .alertDot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          margin-top: 3px;
          flex-shrink: 0;
        }

        .dotRed {
          background: #d71920;
        }

        .dotOrange {
          background: #ed941d;
        }

        .dotGreen {
          background: #2ba05d;
        }

        .alertTitle {
          font-size: 9px;
          font-weight: 850;
        }

        .alertText {
          color: #929599;
          font-size: 8px;
          margin-top: 3px;
        }

        /* ================= INSIGHT ================= */

        .insight {
          position: relative;
          overflow: hidden;
          margin-top: 15px;
          padding: 21px 25px;
          border-radius: 18px;
          color: white;
          background:
            radial-gradient(
              circle at 85% 40%,
              rgba(255,255,255,.2),
              transparent 25%
            ),
            linear-gradient(
              105deg,
              #d71920,
              #e63239
            );
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .insightLabel {
          color: #ffcdd0;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1.6px;
        }

        .insightTitle {
          margin: 6px 0 3px;
          font-size: 16px;
          font-weight: 900;
        }

        .insightText {
          margin: 0;
          color: #ffdfe1;
          font-size: 8px;
        }

        .insightButton {
          border: none;
          background: white;
          color: #d71920;
          border-radius: 9px;
          padding: 10px 14px;
          font-size: 8px;
          font-weight: 900;
          cursor: pointer;
        }

        /* ================= RESPONSIVE ================= */

        @media(max-width: 1100px) {

          .kpis {
            grid-template-columns: repeat(2,1fr);
          }

          .mainGrid,
          .lowerGrid {
            grid-template-columns: 1fr;
          }

        }

        @media(max-width: 750px) {

          .sidebar {
            display: none;
          }

          .content {
            padding: 17px;
          }

          .header {
            padding: 0 17px;
          }

          .brandSub,
          .live {
            display: none;
          }

          .hero {
            padding: 27px;
          }

          .heroTitle {
            font-size: 25px;
          }

          .heroBottom {
            position: static;
            margin-top: 20px;
          }

          .kpis {
            grid-template-columns: 1fr;
          }

          .insight {
            align-items: flex-start;
            flex-direction: column;
            gap: 16px;
          }

        }

      `}</style>

      {/* HEADER */}

      <header className="header">

        <div className="brand">

          <div className="logo">
            LP
          </div>

          <div>
            <div className="brandName">
              CX Command Center
            </div>

            <div className="brandSub">
              Customer Experience Intelligence
            </div>
          </div>

        </div>

        <div className="headerRight">

          <div className="live">
            <div className="liveDot" />
            LIVE DATA
          </div>

          <button className="notification">
            ♢
          </button>

          <div className="avatar">
            CX
          </div>

        </div>

      </header>

      <div className="layout">

        {/* SIDEBAR */}

        <aside className="sidebar">

          <div className="sideTitle">
            COMMAND CENTER
          </div>

          <div className="menu">

            {menu.map(([name, icon]) => (

              <button
                key={name}
                className={
                  active === name
                    ? "menuButton active"
                    : "menuButton"
                }
                onClick={() => setActive(name)}
              >

                <span className="menuIcon">
                  {icon}
                </span>

                {name}

              </button>

            ))}

          </div>

          <div className="sidebarBottom">

            <div className="todayLabel">
              TODAY
            </div>

            <div className="today">
              20 AUG
            </div>

            <div className="todaySub">
              Thursday • 11:32 WIB
            </div>

          </div>

        </aside>

        {/* CONTENT */}

        <section className="content">

          {/* HERO */}

          <div className="hero">

            <div className="heroTag">
              CUSTOMER EXPERIENCE
            </div>

            <h1 className="heroTitle">
              Experience that moves
              <br />
              <span>
                every customer forward.
              </span>
            </h1>

            <p className="heroDescription">
              Monitor customer experience, service quality,
              sentiment, SLA performance and resolution from
              one centralized command center.
            </p>

            <div className="heroBottom">

              <div className="filter">
                Today ▾
              </div>

              <div className="filter">
                All Regions ▾
              </div>

            </div>

          </div>

          {/* KPI */}

          <div className="kpis">

            {kpis.map((item) => (

              <div className="kpi" key={item.title}>

                <div className="kpiTop">

                  <div className="kpiTitle">
                    {item.title}
                  </div>

                  <div
                    className={
                      `kpiIcon ${
                        item.type === "red"
                          ? "iconRed"
                          : item.type === "pink"
                          ? "iconPink"
                          : item.type === "green"
                          ? "iconGreen"
                          : "iconOrange"
                      }`
                    }
                  >
                    {item.icon}
                  </div>

                </div>

                <div className="kpiValue">
                  {item.value}
                </div>

                <div className="kpiBottom">

                  <span className="change">
                    {item.change}
                  </span>

                  <span className="changeText">
                    {item.label}
                  </span>

                </div>

              </div>

            ))}

          </div>

          {/* CHART + SCORE */}

          <div className="mainGrid">

            <div className="card">

              <div className="cardHeader">

                <div>

                  <div className="eyebrow">
                    EXPERIENCE TREND
                  </div>

                  <div className="cardTitle">
                    CX Performance
                  </div>

                </div>

                <div className="period">
                  Last 30 Days ▾
                </div>

              </div>

              <div className="chart">

                <div className="chartGrid" />
                <div className="chartGrid2" />

                {[
                  48,55,51,62,58,66,61,70,
                  67,76,72,80,77,86,82,91,
                  87,94
                ].map((height, index) => (

                  <div
                    key={index}
                    className="bar"
                    style={{
                      height: `${height}%`
                    }}
                  />

                ))}

              </div>

              <div className="chartLabels">
                <span>01 AUG</span>
                <span>07 AUG</span>
                <span>14 AUG</span>
                <span>20 AUG</span>
              </div>

            </div>

            {/* SCORE */}

            <div className="card">

              <div className="eyebrow">
                EXPERIENCE HEALTH
              </div>

              <div className="cardTitle">
                Overall CX Health
              </div>

              <div className="scoreBox">

                <div className="circle">

                  <div className="score">

                    <strong>
                      92.8
                    </strong>

                    <span>
                      CX SCORE
                    </span>

                  </div>

                </div>

              </div>

              <div className="scoreStats">

                <div className="scoreStat">
                  <strong>94%</strong>
                  <span>SATISFACTION</span>
                </div>

                <div className="scoreStat">
                  <strong>97%</strong>
                  <span>RESOLUTION</span>
                </div>

                <div className="scoreStat">
                  <strong>91%</strong>
                  <span>SENTIMENT</span>
                </div>

              </div>

            </div>

          </div>

          {/* LOWER */}

          <div className="lowerGrid">

            {/* CUSTOMER VOICE */}

            <div className="card">

              <div className="eyebrow">
                CUSTOMER VOICE
              </div>

              <div className="cardTitle">
                Contact Channels
              </div>

              <div className="channel">

                {channels.map(
                  ([name, value, progress]) => (

                    <div
                      className="channelRow"
                      key={name}
                    >

                      <div className="channelHead">

                        <span>
                          {name}
                        </span>

                        <span className="channelValue">
                          {value}
                        </span>

                      </div>

                      <div className="progress">

                        <div
                          className="progressFill"
                          style={{
                            width: `${progress}%`
                          }}
                        />

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>

            {/* ALERT */}

            <div className="card">

              <div className="eyebrow">
                REAL-TIME MONITORING
              </div>

              <div className="cardTitle">
                CX Alerts
              </div>

              <div className="alert">

                <div className="alertDot dotRed" />

                <div>

                  <div className="alertTitle">
                    SLA Breach Risk
                  </div>

                  <div className="alertText">
                    127 cases approaching SLA limit
                  </div>

                </div>

              </div>

              <div className="alert">

                <div className="alertDot dotOrange" />

                <div>

                  <div className="alertTitle">
                    Customer Sentiment
                  </div>

                  <div className="alertText">
                    Negative sentiment increased in Bandung
                  </div>

                </div>

              </div>

              <div className="alert">

                <div className="alertDot dotGreen" />

                <div>

                  <div className="alertTitle">
                    Service Recovery
                  </div>

                  <div className="alertText">
                    Jakarta region improved by 8.4%
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* INSIGHT */}

          <div className="insight">

            <div>

              <div className="insightLabel">
                CX INTELLIGENCE
              </div>

              <div className="insightTitle">
                Experience is our competitive advantage.
              </div>

              <p className="insightText">
                Turn customer feedback into measurable
                service improvement.
              </p>

            </div>

            <button className="insightButton">
              OPEN CX ANALYTICS →
            </button>

          </div>

        </section>

      </div>

    </main>
  );
}
