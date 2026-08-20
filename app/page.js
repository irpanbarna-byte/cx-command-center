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

  const menuGroups = [
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
    ["Forecast", "▤"],
  ];

  return (
    <div className="app">
      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className="sidebar">
        {/* LOGO + BRAND */}

        <div className="brand">
          <div className="logoBox">
            <img
              src="https://www.marketeers.com/_next/image/?url=https%3A%2F%2Fimagedelivery.net%2F2MtOYVTKaiU0CCt-BLmtWw%2Fbb2fcb96-610f-45d1-74ed-285bbfdb6f00%2Fw%3D900&w=1920&q=75"
              alt="Lion Parcel"
              className="logo"
            />
          </div>

          <div className="brandText">
            <div className="brandName">Lion Parcel</div>

            <div className="brandSub">
              CUSTOMER EXPERIENCE
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* DEPARTMENT */}

        <div className="department">
          <div className="departmentLabel">
            CUSTOMER EXPERIENCE
          </div>

          <div className="departmentName">
            Internal Command Center
          </div>
        </div>

        {/* MENU */}

        <div className="menuArea">
          <div className="sectionLabel">
            WORKSPACE
          </div>

          <MenuButton
            active={active === "Dashboard"}
            icon="⌂"
            label="Dashboard"
            onClick={() => setActive("Dashboard")}
          />

          {menuGroups.map((group) => (
            <div key={group.name}>
              <button
                className={`groupButton ${
                  open[group.name] ? "groupOpen" : ""
                }`}
                onClick={() => toggle(group.name)}
              >
                <span className="menuIcon">
                  {group.icon}
                </span>

                <span className="menuLabel">
                  {group.name}
                </span>

                <span
                  className={`arrow ${
                    open[group.name] ? "arrowOpen" : ""
                  }`}
                >
                  ›
                </span>
              </button>

              {open[group.name] && (
                <div className="submenu">
                  {group.items.map((item) => (
                    <button
                      key={item}
                      className={`submenuButton ${
                        active === item
                          ? "submenuActive"
                          : ""
                      }`}
                      onClick={() => setActive(item)}
                    >
                      <span className="submenuDot" />
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="sectionLabel operational">
            OPERATIONAL
          </div>

          {directMenus.map(([name, icon]) => (
            <MenuButton
              key={name}
              active={active === name}
              icon={icon}
              label={name}
              onClick={() => setActive(name)}
            />
          ))}
        </div>

        {/* STATUS */}

        <div className="statusWrapper">
          <div className="statusCard">
            <div className="statusTop">
              <span>System Status</span>

              <span className="online">
                ● Online
              </span>
            </div>

            <div className="statusTrack">
              <div className="statusProgress" />
            </div>
          </div>
        </div>
      </aside>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="main">
        {/* HEADER */}

        <header className="header">
          <div>
            <div className="breadcrumb">
              INTERNAL WORKSPACE
              <span>/</span>
              DIRECTORAT PERFORMANCE
            </div>

            <div className="pageTitle">
              CX Internal Command Center
            </div>
          </div>

          <div className="headerRight">
            <div className="search">
              <span>⌕</span>

              <input
                placeholder="Search..."
              />

              <small>/</small>
            </div>

            <button className="headerButton">
              ◫
            </button>

            <button className="headerButton notification">
              ♢
              <span />
            </button>

            <div className="user">
              <div className="avatar">
                CX
              </div>

              <div>
                <strong>
                  CX Admin
                </strong>

                <small>
                  Internal User
                </small>
              </div>
            </div>
          </div>
        </header>

        {/* CONTENT */}

        <div className="content">
          {/* HERO */}

          <section className="hero">
            <div className="heroContent">
              <div className="heroLabel">
                INTERNAL CX PLATFORM
              </div>

              <h1>
                Good morning, CX Team.
              </h1>

              <p>
                Centralized performance monitoring
                workspace for Lion Parcel Customer
                Experience.
              </p>
            </div>

            <div className="heroActions">
              <button className="dateButton">
                ◷ &nbsp; 01 Aug — 20 Aug
              </button>

              <button className="exportButton">
                ↓ &nbsp; Export
              </button>
            </div>

            <div className="heroCircle" />
          </section>

          {/* KPI */}

          <section className="kpiGrid">
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

          {/* PERFORMANCE */}

          <section className="twoColumns">
            <div className="card">
              <SmallLabel>
                DIRECTORAT PERFORMANCE
              </SmallLabel>

              <h2>
                Performance Overview
              </h2>

              <div className="chartHeader">
                <div>
                  <strong className="bigNumber">
                    94.8%
                  </strong>

                  <div className="muted">
                    Overall achievement
                  </div>
                </div>

                <div className="legend">
                  <span>
                    <i className="redDot" />
                    Actual
                  </span>

                  <span>
                    <i className="grayDot" />
                    Target
                  </span>
                </div>
              </div>

              <div className="chart">
                {[
                  55,
                  63,
                  59,
                  72,
                  67,
                  78,
                  74,
                  84,
                  79,
                  89,
                  85,
                  95,
                ].map((value, index) => (
                  <div
                    className="barWrapper"
                    key={index}
                  >
                    <div
                      className="bar"
                      style={{
                        height: `${value}%`,
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="weeks">
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
              <div className="alertHeader">
                <div>
                  <SmallLabel>
                    REQUIRES ATTENTION
                  </SmallLabel>

                  <h2>
                    Priority Alerts
                  </h2>
                </div>

                <span className="activeBadge">
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

              <button className="viewAll">
                View all alerts →
              </button>
            </div>
          </section>

          {/* LOWER SECTION */}

          <section className="threeColumns">
            {/* CHANNEL */}

            <div className="card">
              <SmallLabel>
                CHANNEL PERFORMANCE
              </SmallLabel>

              <h2>
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

            {/* LAYER */}

            <div className="card">
              <SmallLabel>
                OPERATIONAL LAYER
              </SmallLabel>

              <h2>
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

            {/* QUICK ACCESS */}

            <div className="card">
              <SmallLabel>
                QUICK ACCESS
              </SmallLabel>

              <h2>
                Modules
              </h2>

              <div className="moduleGrid">
                {[
                  ["◆", "KPI"],
                  ["◇", "Claim"],
                  ["↩", "Return"],
                  ["↓", "Inbound"],
                ].map(([icon, name]) => (
                  <button
                    key={name}
                    className="module"
                    onClick={() =>
                      setActive(name)
                    }
                  >
                    <span>
                      {icon}
                    </span>

                    <strong>
                      {name}
                    </strong>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* FOOTER */}

          <footer>
            <span>
              © 2026 Lion Parcel
            </span>

            <span>
              Customer Experience •
              Internal Use Only
            </span>
          </footer>
        </div>
      </main>

      {/* =====================================================
          CSS
      ===================================================== */}

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
        }

        body {
          background: #f5f6f7;
        }

        button,
        input {
          font-family: inherit;
        }

        button {
          outline: none;
        }

        .app {
          min-height: 100vh;
          display: flex;
          color: #24262a;
          background:
            linear-gradient(
              135deg,
              #f3f4f6 0%,
              #ffffff 48%,
              #f1f2f4 100%
            );
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        /* SIDEBAR */

        .sidebar {
          width: 270px;
          min-height: 100vh;
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          z-index: 20;
          display: flex;
          flex-direction: column;
          background:
            linear-gradient(
              180deg,
              #ffffff 0%,
              #fafafa 65%,
              #f1f2f4 100%
            );
          border-right:
            1px solid #e6e7e9;
        }

        .brand {
          padding: 24px 22px 20px;
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .logoBox {
          width: 46px;
          height: 46px;
          border-radius: 13px;
          background: #e21b23;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow:
            0 8px 20px
            rgba(226, 27, 35, 0.18);
          flex-shrink: 0;
        }

        .logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 4px;
        }

        .brandName {
          font-size: 18px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: -0.7px;
          color: #202226;
        }

        .brandSub {
          color: #e21b23;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.3px;
          margin-top: 6px;
        }

        .divider {
          height: 1px;
          background: #e8e9eb;
          margin: 0 20px;
        }

        .department {
          padding:
            22px 22px 14px;
        }

        .departmentLabel {
          color: #e21b23;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.4px;
          margin-bottom: 7px;
        }

        .departmentName {
          font-size: 13px;
          font-weight: 800;
          color: #25272b;
        }

        .menuArea {
          flex: 1;
          overflow-y: auto;
          padding: 2px 13px;
        }

        .sectionLabel {
          font-size: 8px;
          font-weight: 900;
          color: #a3a6ab;
          letter-spacing: 1.3px;
          padding:
            10px 10px 8px;
        }

        .operational {
          padding-top: 18px;
        }

        .groupButton,
        .menuButton {
          width: 100%;
          height: 42px;
          border: 0;
          border-radius: 10px;
          background: transparent;
          display: flex;
          align-items: center;
          padding: 0 11px;
          color: #676b72;
          cursor: pointer;
          transition: all 0.18s ease;
        }

        .groupButton:hover,
        .menuButton:hover {
          background: #f7f7f8;
          color: #e21b23;
        }

        .groupOpen {
          background: #f7f7f8;
          color: #e21b23;
        }

        .menuButton {
          position: relative;
        }

        .menuActive {
          background:
            rgba(226, 27, 35, 0.075);
          color: #e21b23;
        }

        .menuActive::before {
          content: "";
          position: absolute;
          left: -13px;
          top: 8px;
          bottom: 8px;
          width: 3px;
          border-radius:
            0 4px 4px 0;
          background: #e21b23;
        }

        .menuIcon {
          width: 27px;
          text-align: center;
          font-size: 13px;
          color: #999da3;
        }

        .menuActive .menuIcon {
          color: #e21b23;
        }

        .menuLabel {
          font-size: 11.5px;
          font-weight: 600;
        }

        .arrow {
          margin-left: auto;
          font-size: 19px;
          color: #a7aab0;
          transition:
            transform 0.2s ease;
        }

        .arrowOpen {
          transform:
            rotate(90deg);
          color: #e21b23;
        }

        .submenu {
          margin-left: 24px;
          padding-left: 7px;
          border-left:
            1px solid #e1e2e5;
        }

        .submenuButton {
          width: 100%;
          height: 35px;
          border: 0;
          border-radius: 8px;
          background: transparent;
          display: flex;
          align-items: center;
          padding-left: 10px;
          color: #777b82;
          font-size: 10.5px;
          font-weight: 500;
          cursor: pointer;
          text-align: left;
        }

        .submenuButton:hover {
          color: #e21b23;
          background: #fafafa;
        }

        .submenuActive {
          background:
            rgba(226, 27, 35, 0.07);
          color: #e21b23;
          font-weight: 700;
        }

        .submenuDot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #c7c9cd;
          margin-right: 9px;
        }

        .submenuActive
          .submenuDot {
          background: #e21b23;
        }

        .statusWrapper {
          padding: 13px;
          border-top:
            1px solid #e8e9eb;
        }

        .statusCard {
          padding: 12px;
          border-radius: 11px;
          background: #f7f7f8;
          border:
            1px solid #e9eaec;
        }

        .statusTop {
          display: flex;
          justify-content: space-between;
          font-size: 9px;
          font-weight: 700;
        }

        .online {
          color: #159447;
        }

        .statusTrack {
          height: 4px;
          margin-top: 9px;
          border-radius: 10px;
          background: #e3e4e7;
          overflow: hidden;
        }

        .statusProgress {
          width: 96%;
          height: 100%;
          background: #e21b23;
        }

        /* MAIN */

        .main {
          margin-left: 270px;
          width:
            calc(100% - 270px);
          min-height: 100vh;
        }

        .header {
          height: 76px;
          padding:
            0 31px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background:
            rgba(255, 255, 255, 0.88);
          backdrop-filter:
            blur(18px);
          border-bottom:
            1px solid #e8e9eb;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .breadcrumb {
          color: #a1a4a9;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }

        .breadcrumb span {
          margin: 0 8px;
          color: #d1d3d6;
        }

        .pageTitle {
          font-size: 17px;
          font-weight: 850;
          margin-top: 5px;
          letter-spacing: -0.4px;
        }

        .headerRight {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .search {
          width: 220px;
          height: 37px;
          border:
            1px solid #e2e3e6;
          border-radius: 9px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 11px;
          background: #fff;
        }

        .search span {
          color: #999ca2;
          font-size: 15px;
        }

        .search input {
          flex: 1;
          border: 0;
          outline: 0;
          background: transparent;
          font-size: 10px;
          color: #333;
        }

        .search small {
          color: #b4b6bb;
          font-size: 9px;
        }

        .headerButton {
          width: 37px;
          height: 37px;
          border:
            1px solid #e2e3e6;
          border-radius: 9px;
          background: #fff;
          color: #777b82;
          cursor: pointer;
        }

        .notification {
          position: relative;
        }

        .notification span {
          position: absolute;
          right: 7px;
          top: 7px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #e21b23;
        }

        .user {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-left: 3px;
        }

        .avatar {
          width: 35px;
          height: 35px;
          border-radius: 10px;
          background: #e21b23;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 900;
        }

        .user strong {
          display: block;
          font-size: 9.5px;
        }

        .user small {
          display: block;
          color: #9da0a5;
          font-size: 8px;
          margin-top: 2px;
        }

        /* CONTENT */

        .content {
          padding:
            28px 31px 30px;
        }

        .hero {
          min-height: 151px;
          padding:
            26px 28px;
          border-radius: 17px;
          background:
            linear-gradient(
              110deg,
              #ffffff 0%,
              #ffffff 65%,
              #fff6f6 100%
            );
          border:
            1px solid #e5e6e9;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .heroContent {
          position: relative;
          z-index: 2;
        }

        .heroLabel {
          color: #e21b23;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .hero h1 {
          font-size: 25px;
          margin:
            9px 0 7px;
          letter-spacing: -0.8px;
        }

        .hero p {
          color: #858990;
          font-size: 10.5px;
          margin: 0;
          max-width: 590px;
          line-height: 1.7;
        }

        .heroActions {
          position: relative;
          z-index: 2;
          display: flex;
          gap: 8px;
        }

        .dateButton,
        .exportButton {
          height: 38px;
          border-radius: 8px;
          font-size: 9px;
          cursor: pointer;
        }

        .dateButton {
          padding: 0 13px;
          border:
            1px solid #e1e2e5;
          background: #fff;
          color: #666a71;
        }

        .exportButton {
          padding: 0 15px;
          border: 0;
          background: #e21b23;
          color: #fff;
          font-weight: 700;
          box-shadow:
            0 8px 18px
            rgba(226, 27, 35, 0.18);
        }

        .heroCircle {
          position: absolute;
          right: -80px;
          top: -100px;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          border:
            55px solid
            rgba(226, 27, 35, 0.035);
        }

        /* KPI */

        .kpiGrid {
          display: grid;
          grid-template-columns:
            repeat(4, 1fr);
          gap: 12px;
          margin-top: 14px;
        }

        .kpiCard {
          background: #fff;
          border:
            1px solid #e5e6e9;
          border-radius: 13px;
          padding: 17px;
          min-height: 142px;
          box-shadow:
            0 4px 18px
            rgba(25, 30, 35, 0.025);
        }

        .kpiTop {
          display: flex;
          justify-content: space-between;
        }

        .kpiIcon {
          width: 31px;
          height: 31px;
          border-radius: 8px;
          background: #fff1f2;
          color: #e21b23;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        .change {
          padding: 4px 7px;
          border-radius: 5px;
          background: #edf8f1;
          color: #17884a;
          font-size: 8px;
          font-weight: 800;
        }

        .kpiTitle {
          margin-top: 14px;
          color: #888c92;
          font-size: 9px;
        }

        .kpiValue {
          display: block;
          font-size: 24px;
          letter-spacing: -0.8px;
          margin-top: 4px;
        }

        .kpiMuted {
          color: #b0b2b7;
          font-size: 8px;
          margin-top: 3px;
        }

        /* CARDS */

        .twoColumns {
          display: grid;
          grid-template-columns:
            1.55fr 1fr;
          gap: 14px;
          margin-top: 14px;
        }

        .threeColumns {
          display: grid;
          grid-template-columns:
            1fr 1fr 0.85fr;
          gap: 14px;
          margin-top: 14px;
        }

        .card {
          background: #fff;
          border:
            1px solid #e5e6e9;
          border-radius: 14px;
          padding: 20px;
          box-shadow:
            0 4px 18px
            rgba(25, 30, 35, 0.025);
        }

        .card h2 {
          margin:
            5px 0 0;
          font-size: 15px;
          letter-spacing: -0.2px;
        }

        .smallLabel {
          color: #e21b23;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.2px;
        }

        /* CHART */

        .chartHeader {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-top: 19px;
        }

        .bigNumber {
          font-size: 25px;
        }

        .muted {
          color: #9da0a5;
          font-size: 9px;
          margin-top: 3px;
        }

        .legend {
          display: flex;
          gap: 13px;
          color: #96999f;
          font-size: 8px;
        }

        .legend span {
          display: flex;
          align-items: center;
        }

        .redDot,
        .grayDot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          display: inline-block;
          margin-right: 5px;
        }

        .redDot {
          background: #e21b23;
        }

        .grayDot {
          background: #d9dade;
        }

        .chart {
          height: 185px;
          margin-top: 16px;
          display: flex;
          align-items: flex-end;
          gap: 11px;
          border-bottom:
            1px solid #ececef;
          padding: 0 10px;
        }

        .barWrapper {
          height: 100%;
          flex: 1;
          display: flex;
          align-items: flex-end;
        }

        .bar {
          width: 100%;
          border-radius:
            6px 6px 2px 2px;
          background:
            linear-gradient(
              180deg,
              #f04a50,
              #df1b23
            );
        }

        .weeks {
          display: flex;
          justify-content: space-around;
          margin-top: 7px;
          color: #aaaeb3;
          font-size: 8px;
        }

        /* ALERT */

        .alertHeader {
          display: flex;
          justify-content: space-between;
        }

        .activeBadge {
          height: 22px;
          padding: 0 7px;
          display: flex;
          align-items: center;
          background: #fff0f0;
          color: #e21b23;
          border-radius: 6px;
          font-size: 8px;
          font-weight: 800;
        }

        .alert {
          display: flex;
          gap: 9px;
          padding: 14px 0;
          border-bottom:
            1px solid #f0f1f2;
        }

        .alertIcon {
          width: 27px;
          height: 27px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff8e9;
          color: #c48700;
          font-size: 10px;
          font-weight: 800;
          flex-shrink: 0;
        }

        .alertDanger {
          background: #fff0f0;
          color: #e21b23;
        }

        .alert strong {
          display: block;
          font-size: 9.5px;
        }

        .alert p {
          margin: 4px 0 0;
          color: #999ca2;
          font-size: 8.5px;
          line-height: 1.5;
        }

        .viewAll {
          width: 100%;
          margin-top: 8px;
          border: 0;
          background: transparent;
          color: #e21b23;
          text-align: left;
          font-size: 9px;
          font-weight: 700;
          cursor: pointer;
        }

        /* PROGRESS */

        .progress {
          margin-top: 17px;
        }

        .progressHeader {
          display: flex;
          justify-content: space-between;
          font-size: 9px;
        }

        .progressName {
          color: #777b82;
        }

        .progressTrack {
          height: 5px;
          background: #f0f1f3;
          border-radius: 20px;
          margin-top: 7px;
          overflow: hidden;
        }

        .progressFill {
          height: 100%;
          background:
            linear-gradient(
              90deg,
              #e21b23,
              #f05a5f
            );
          border-radius: 20px;
        }

        /* LAYER */

        .layer {
          height: 34px;
          border-bottom:
            1px solid #f0f1f2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 9px;
        }

        .layerName {
          color: #777b82;
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .layerDot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #e21b23;
        }

        /* MODULE */

        .moduleGrid {
          display: grid;
          grid-template-columns:
            1fr 1fr;
          gap: 8px;
          margin-top: 16px;
        }

        .module {
          height: 68px;
          border:
            1px solid #e7e8eb;
          border-radius: 9px;
          background: #fafafa;
          text-align: left;
          padding: 10px;
          cursor: pointer;
          transition:
            all 0.18s ease;
        }

        .module:hover {
          background: #fff;
          border-color: #efb3b6;
          transform:
            translateY(-1px);
        }

        .module span {
          color: #e21b23;
          font-size: 13px;
        }

        .module strong {
          display: block;
          font-size: 9px;
          margin-top: 7px;
        }

        /* FOOTER */

        footer {
          display: flex;
          justify-content: space-between;
          margin-top: 22px;
          color: #a3a6ab;
          font-size: 8px;
        }

        /* RESPONSIVE */

        @media (max-width: 1100px) {
          .kpiGrid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .threeColumns {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 850px) {
          .sidebar {
            width: 220px;
          }

          .main {
            margin-left: 220px;
            width:
              calc(100% - 220px);
          }

          .headerRight .search {
            display: none;
          }

          .twoColumns,
          .threeColumns {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 650px) {
          .sidebar {
            display: none;
          }

          .main {
            margin-left: 0;
            width: 100%;
          }

          .header {
            padding: 0 18px;
          }

          .content {
            padding: 18px;
          }

          .hero {
            flex-direction: column;
            align-items: flex-start;
            gap: 18px;
          }

          .kpiGrid {
            grid-template-columns: 1fr;
          }

          .user > div:last-child {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

/* ==========================================================
   MENU BUTTON
========================================================== */

function MenuButton({
  active,
  icon,
  label,
  onClick,
}) {
  return (
    <button
      className={`menuButton ${
        active ? "menuActive" : ""
      }`}
      onClick={onClick}
    >
      <span className="menuIcon">
        {icon}
      </span>

      <span className="menuLabel">
        {label}
      </span>
    </button>
  );
}

/* ==========================================================
   KPI
========================================================== */

function KpiCard({
  icon,
  title,
  value,
  change,
}) {
  return (
    <div className="kpiCard">
      <div className="kpiTop">
        <div className="kpiIcon">
          {icon}
        </div>

        <span className="change">
          {change}
        </span>
      </div>

      <div className="kpiTitle">
        {title}
      </div>

      <strong className="kpiValue">
        {value}
      </strong>

      <div className="kpiMuted">
        vs previous period
      </div>
    </div>
  );
}

/* ==========================================================
   SMALL LABEL
========================================================== */

function SmallLabel({
  children,
}) {
  return (
    <div className="smallLabel">
      {children}
    </div>
  );
}

/* ==========================================================
   ALERT
========================================================== */

function Alert({
  title,
  text,
  danger = false,
}) {
  return (
    <div className="alert">
      <div
        className={`alertIcon ${
          danger ? "alertDanger" : ""
        }`}
      >
        !
      </div>

      <div>
        <strong>
          {title}
        </strong>

        <p>
          {text}
        </p>
      </div>
    </div>
  );
}

/* ==========================================================
   PROGRESS
========================================================== */

function Progress({
  name,
  value,
}) {
  return (
    <div className="progress">
      <div className="progressHeader">
        <span className="progressName">
          {name}
        </span>

        <strong>
          {value}
        </strong>
      </div>

      <div className="progressTrack">
        <div
          className="progressFill"
          style={{
            width: value,
          }}
        />
      </div>
    </div>
  );
}

/* ==========================================================
   LAYER
========================================================== */

function Layer({
  name,
  value,
}) {
  return (
    <div className="layer">
      <span className="layerName">
        <i className="layerDot" />
        {name}
      </span>

      <strong>
        {value}
      </strong>
    </div>
  );
}
