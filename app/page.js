"use client";

import { useState } from "react";

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
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

  return (
    <div className={`cxApp ${collapsed ? "isCollapsed" : ""}`}>

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className="cxSidebar">

        {/* BRAND */}

        <div className="brandArea">

          <div className="cxBrandMark">
            <div className="cxOrbit orbitA"></div>
            <div className="cxOrbit orbitB"></div>

            <span className="cxLetter">
              CX
            </span>

            <span className="cxPoint"></span>
          </div>

          {!collapsed && (
            <div className="brandInfo">

              <div className="brandTitle">
                CUSTOMER EXPERIENCE
              </div>

              <div className="brandTiny">
                Internal Command Center
              </div>

            </div>
          )}

        </div>


        {/* COLLAPSE */}

        <button
          className="collapseBtn"
          onClick={() => setCollapsed(!collapsed)}
          aria-label="Toggle sidebar"
        >
          {collapsed ? "›" : "‹"}
        </button>


        {/* NAVIGATION */}

        <nav className="navigation">

          {!collapsed && (
            <div className="navCaption">
              MAIN MENU
            </div>
          )}


          {/* DASHBOARD */}

          <NavItem
            icon="⌂"
            label="Dashboard"
            active={active === "Dashboard"}
            collapsed={collapsed}
            onClick={() => selectMenu("Dashboard")}
          />


          {/* LAYER 1 */}

          <NavGroup
            icon="◉"
            label="Layer 1"
            open={open["Layer 1"]}
            collapsed={collapsed}
            onClick={() => toggle("Layer 1")}
          />

          {!collapsed && open["Layer 1"] && (
            <SubMenu
              items={[
                "Chat",
                "Call",
                "Sosmed",
                "Email",
              ]}
              active={active}
              onSelect={selectMenu}
            />
          )}


          {/* LAYER 2 */}

          <NavGroup
            icon="◎"
            label="Layer 2"
            open={open["Layer 2"]}
            collapsed={collapsed}
            onClick={() => toggle("Layer 2")}
          />

          {!collapsed && open["Layer 2"] && (
            <SubMenu
              items={[
                "Layer 2 Area",
                "Layer 2 Dedicate",
              ]}
              active={active}
              onSelect={selectMenu}
            />
          )}


          {/* B2C */}

          <NavGroup
            icon="◇"
            label="B2C"
            open={open.B2C}
            collapsed={collapsed}
            onClick={() => toggle("B2C")}
          />

          {!collapsed && open.B2C && (
            <SubMenu
              items={[
                "B2C Aggregator",
                "B2C Non Aggregator",
              ]}
              active={active}
              onSelect={selectMenu}
            />
          )}


          {!collapsed && (
            <div className="navCaption operationalCaption">
              OPERATIONS
            </div>
          )}


          {/* OPERATIONS */}

          <NavItem
            icon="▣"
            label="Interpack"
            active={active === "Interpack"}
            collapsed={collapsed}
            onClick={() => selectMenu("Interpack")}
          />

          <NavItem
            icon="◇"
            label="Claim"
            active={active === "Claim"}
            collapsed={collapsed}
            onClick={() => selectMenu("Claim")}
          />

          <NavItem
            icon="↩"
            label="Return"
            active={active === "Return"}
            collapsed={collapsed}
            onClick={() => selectMenu("Return")}
          />

          <NavItem
            icon="↓"
            label="Inbound"
            active={active === "Inbound"}
            collapsed={collapsed}
            onClick={() => selectMenu("Inbound")}
          />

          <NavItem
            icon="◆"
            label="KPI"
            active={active === "KPI"}
            collapsed={collapsed}
            onClick={() => selectMenu("KPI")}
          />

          <NavItem
            icon="◫"
            label="Forecast"
            active={active === "Forecast"}
            collapsed={collapsed}
            onClick={() => selectMenu("Forecast")}
          />


          {/* OTHER PALING BAWAH */}

          {!collapsed && (
            <div className="navCaption otherCaption">
              OTHER
            </div>
          )}

          <NavGroup
            icon="•••"
            label="Other"
            open={open.Other}
            collapsed={collapsed}
            onClick={() => toggle("Other")}
          />

          {!collapsed && open.Other && (
            <SubMenu
              items={[
                "Other 1",
                "Other 2",
                "Other 3",
              ]}
              active={active}
              onSelect={selectMenu}
            />
          )}

        </nav>


        {/* SIDEBAR FOOTER */}

        {!collapsed && (
          <div className="sidebarFooter">

            <div className="systemCard">

              <div className="systemHeader">

                <span>
                  System Status
                </span>

                <span className="online">
                  <i />
                  Online
                </span>

              </div>

              <div className="systemLine">
                <div />
              </div>

              <small>
                All services operational
              </small>

            </div>

            <div className="copyright">
              Lion Parcel • Directorate CX
            </div>

          </div>
        )}

      </aside>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="cxMain">


        {/* TOP HEADER */}

        <header className="topHeader">

          <div className="headerLeft">

            <div className="breadcrumb">

              <span>
                DIRECTORATE CX
              </span>

              <b>
                /
              </b>

              <strong>
                INTERNAL COMMAND CENTER
              </strong>

            </div>

          </div>


          <div className="headerRight">

            <div className="searchBox">

              <span>
                ⌕
              </span>

              <input
                placeholder="Search anything..."
              />

              <kbd>
                ⌘ K
              </kbd>

            </div>


            <button className="iconBtn">
              ◫
            </button>


            <button className="iconBtn notificationBtn">

              ♢

              <i />

            </button>


            <div className="profile">

              <div className="profileAvatar">
                CX
              </div>

              <div className="profileText">

                <strong>
                  CX Admin
                </strong>

                <small>
                  Internal User
                </small>

              </div>

              <span className="profileArrow">
                ▾
              </span>

            </div>

          </div>

        </header>


        {/* =====================================================
            DASHBOARD CONTENT
        ===================================================== */}

        <div className="dashboardContent">


          {/* HERO */}

          <section className="heroPanel">

            <div className="heroGlow" />

            <div className="heroText">

              <div className="eyebrow">

                <span />

                DIRECTORATE CX

              </div>

              <h1>
                Customer Experience
                <br />
                <em>
                  Command Center.
                </em>
              </h1>

              <p>
                Real-time visibility across CX operations,
                performance and customer experience.
              </p>

            </div>


            <div className="heroRight">

              <div className="heroDate">

                <span>
                  ◷
                </span>

                01 AUG — 20 AUG 2026

              </div>

              <button className="primaryBtn">

                <span>
                  ↓
                </span>

                Export Report

              </button>

            </div>


            <div className="heroDecoration">

              <div className="ring ringOne" />
              <div className="ring ringTwo" />
              <div className="ring ringThree" />

            </div>

          </section>


          {/* KPI */}

          <section className="kpiGrid">

            <Metric
              label="CUSTOMER SATISFACTION"
              value="92.4"
              suffix="%"
              change="+4.8%"
              icon="♥"
            />

            <Metric
              label="SLA ACHIEVEMENT"
              value="96.8"
              suffix="%"
              change="+2.1%"
              icon="◷"
            />

            <Metric
              label="OPEN COMPLAINTS"
              value="128"
              change="-12.6%"
              icon="!"
            />

            <Metric
              label="CUSTOMER VOICE"
              value="4,821"
              change="+8.4%"
              icon="◉"
            />

          </section>


          {/* PERFORMANCE + ALERT */}

          <section className="mainGrid">


            <div className="premiumCard performanceCard">

              <CardHeading
                eyebrow="PERFORMANCE"
                title="CX Performance Overview"
                action="View Details →"
              />


              <div className="performanceTop">

                <div>

                  <div className="performanceValue">
                    94.8%
                  </div>

                  <div className="performanceDescription">
                    Overall achievement
                  </div>

                </div>


                <div className="chartLegend">

                  <span>
                    <i className="actualDot" />
                    Actual
                  </span>

                  <span>
                    <i className="targetDot" />
                    Target
                  </span>

                </div>

              </div>


              <div className="chartArea">

                <div className="gridLines">

                  <span />
                  <span />
                  <span />
                  <span />

                </div>


                <div className="bars">

                  {[
                    54,
                    62,
                    58,
                    68,
                    64,
                    74,
                    70,
                    82,
                    77,
                    88,
                    84,
                    96,
                  ].map((height, index) => (

                    <div
                      className="barContainer"
                      key={index}
                    >

                      <div
                        className="barValue"
                        style={{
                          height: `${height}%`,
                        }}
                      />

                    </div>

                  ))}

                </div>

              </div>


              <div className="chartLabels">

                <span>W1</span>
                <span>W2</span>
                <span>W3</span>
                <span>W4</span>
                <span>W5</span>
                <span>W6</span>

              </div>

            </div>


            {/* ALERT */}

            <div className="premiumCard alertCard">

              <CardHeading
                eyebrow="ATTENTION"
                title="Priority Alerts"
                badge="3 ACTIVE"
              />


              <AlertItem
                danger
                title="Complaint spike detected"
                description="Jabodetabek increased by 14% in the last 24 hours."
              />

              <AlertItem
                title="SLA approaching threshold"
                description="12 shipments require immediate attention."
              />

              <AlertItem
                title="Negative sentiment increased"
                description="Customer Voice sentiment dropped by 6%."
              />


              <button className="fullLink">
                View all alerts →
              </button>

            </div>

          </section>


          {/* LOWER */}

          <section className="lowerGrid">


            {/* CHANNEL */}

            <div className="premiumCard">

              <CardHeading
                eyebrow="CHANNEL"
                title="Customer Channels"
              />

              <Channel
                name="Chat"
                value="94%"
              />

              <Channel
                name="Call"
                value="91%"
              />

              <Channel
                name="Sosmed"
                value="88%"
              />

              <Channel
                name="Email"
                value="86%"
              />

            </div>


            {/* LAYER */}

            <div className="premiumCard">

              <CardHeading
                eyebrow="OPERATIONS"
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


            {/* MODULES */}

            <div className="premiumCard">

              <CardHeading
                eyebrow="QUICK ACCESS"
                title="CX Modules"
              />


              <div className="moduleGrid">

                {[
                  ["◆", "KPI"],
                  ["◇", "Claim"],
                  ["↩", "Return"],
                  ["↓", "Inbound"],
                ].map(([icon, name]) => (

                  <button
                    key={name}
                    className="moduleCard"
                    onClick={() => selectMenu(name)}
                  >

                    <span>
                      {icon}
                    </span>

                    <strong>
                      {name}
                    </strong>

                    <small>
                      Open module
                    </small>

                  </button>

                ))}

              </div>

            </div>

          </section>


          {/* BOTTOM */}

          <section className="bottomGrid">


            <div className="premiumCard activityCard">

              <CardHeading
                eyebrow="LIVE ACTIVITY"
                title="Recent Activity"
                action="View All →"
              />

              <Activity
                icon="✓"
                title="Daily CX report updated"
                time="8 minutes ago"
              />

              <Activity
                icon="↗"
                title="SLA performance improved"
                time="24 minutes ago"
              />

              <Activity
                icon="!"
                title="New priority complaint assigned"
                time="41 minutes ago"
              />

            </div>


            <div className="premiumCard scoreCard">

              <div className="scoreCircle">

                <div>

                  <strong>
                    94
                  </strong>

                  <span>
                    CX Score
                  </span>

                </div>

              </div>


              <div className="scoreText">

                <div className="eyebrow">
                  OVERALL HEALTH
                </div>

                <h3>
                  Excellent
                </h3>

                <p>
                  CX performance is currently
                  above the monthly target.
                </p>

              </div>

            </div>

          </section>


          {/* FOOTER */}

          <footer className="mainFooter">

            <span>
              © 2026 Lion Parcel
            </span>

            <span>
              Directorate CX • Internal Use Only
            </span>

          </footer>

        </div>

      </main>


      {/* =====================================================
          GLOBAL CSS
      ===================================================== */}

      <style jsx global>{`

        @import url(
          'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap'
        );

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
        }

        body {
          font-family:
            "Plus Jakarta Sans",
            sans-serif;

          background: #f3f4f6;

          color: #1d2024;
        }

        button,
        input {
          font-family: inherit;
        }

        button {
          outline: none;
        }


        /* APP */

        .cxApp {

          --red: #e21b23;
          --redDark: #c9141c;
          --redSoft: #fff0f1;

          min-height: 100vh;

          display: flex;

          background:
            radial-gradient(
              circle at 80% 0%,
              rgba(226,27,35,.035),
              transparent 28%
            ),
            linear-gradient(
              135deg,
              #f0f1f3,
              #ffffff 52%,
              #f3f4f6
            );

        }


        /* SIDEBAR */

        .cxSidebar {

          width: 275px;

          position: fixed;

          left: 0;
          top: 0;
          bottom: 0;

          z-index: 50;

          display: flex;
          flex-direction: column;

          background:
            linear-gradient(
              180deg,
              #ffffff,
              #fafafa 65%,
              #f2f3f5
            );

          border-right:
            1px solid #e5e6e8;

          box-shadow:
            8px 0 35px
            rgba(20,20,20,.025);

          transition:
            width .3s
            cubic-bezier(.4,0,.2,1);

        }


        .isCollapsed .cxSidebar {
          width: 78px;
        }


        /* BRAND */

        .brandArea {

          height: 91px;

          padding:
            20px 19px;

          display: flex;

          align-items: center;

          gap: 12px;

        }


        .cxBrandMark {

          width: 44px;
          height: 44px;

          flex-shrink: 0;

          position: relative;

          display: flex;

          align-items: center;
          justify-content: center;

          overflow: hidden;

          border-radius: 13px;

          background:
            linear-gradient(
              145deg,
              #ffffff 0%,
              #f5f5f6 48%,
              #eeeeef 100%
            );

          border:
            1px solid #e0e1e3;

          box-shadow:
            0 8px 20px
            rgba(226,27,35,.13);

        }


        .cxLetter {

          position: relative;

          z-index: 5;

          font-size: 13px;

          font-weight: 800;

          letter-spacing: -1.2px;

          color: #e21b23;

        }


        .cxOrbit {

          position: absolute;

          border:
            1.5px solid
            rgba(226,27,35,.27);

          border-radius: 50%;

        }


        .orbitA {

          width: 36px;
          height: 15px;

          transform:
            rotate(-27deg);

        }


        .orbitB {

          width: 25px;
          height: 35px;

          transform:
            rotate(38deg);

        }


        .cxPoint {

          position: absolute;

          width: 4px;
          height: 4px;

          right: 7px;
          top: 8px;

          border-radius: 50%;

          background: #e21b23;

          box-shadow:
            0 0 0 3px
            rgba(226,27,35,.08);

        }


        .brandInfo {
          overflow: hidden;
          white-space: nowrap;
        }


        /* ONLY 2 LINES */

        .brandTitle {

          font-size: 11px;

          font-weight: 800;

          letter-spacing: .35px;

          color: #24272b;

          white-space: nowrap;

        }


        .brandTiny {

          margin-top: 4px;

          color: #9b9ea4;

          font-size: 8px;

          font-weight: 500;

          white-space: nowrap;

        }


        /* COLLAPSE */

        .collapseBtn {

          position: absolute;

          right: -12px;
          top: 97px;

          width: 25px;
          height: 25px;

          border-radius: 50%;

          border:
            1px solid #dedfe2;

          background: #ffffff;

          color: var(--red);

          cursor: pointer;

          box-shadow:
            0 5px 15px
            rgba(0,0,0,.08);

          transition: .2s;

        }


        .collapseBtn:hover {

          background: var(--red);

          color: #ffffff;

          transform:
            scale(1.08);

        }


        /* NAV */

        .navigation {

          flex: 1;

          overflow-y: auto;

          padding:
            11px 13px;

        }


        .navCaption {

          padding:
            9px 10px 7px;

          color: #a4a7ad;

          font-size: 7px;

          font-weight: 800;

          letter-spacing: 1.5px;

        }


        .operationalCaption {
          margin-top: 13px;
        }


        .otherCaption {

          margin-top: 18px;

          padding-top: 17px;

          border-top:
            1px solid #e9eaec;

        }


        .navItem,
        .navGroup {

          width: 100%;
          height: 42px;

          border: 0;

          border-radius: 10px;

          background: transparent;

          color: #6d7178;

          display: flex;

          align-items: center;

          padding:
            0 11px;

          cursor: pointer;

          transition: .18s;

          position: relative;

          text-align: left;

        }


        .navItem:hover,
        .navGroup:hover {

          background: #f7f7f8;

          color: var(--red);

        }


        .navItem.active {

          background:
            linear-gradient(
              90deg,
              #fff0f1,
              #fff7f7
            );

          color: var(--red);

          font-weight: 700;

        }


        .navItem.active::before {

          content: "";

          position: absolute;

          left: -13px;

          top: 9px;
          bottom: 9px;

          width: 3px;

          background: var(--red);

          border-radius:
            0 4px 4px 0;

        }


        .navIcon {

          width: 27px;

          flex-shrink: 0;

          text-align: center;

          color: #9da0a5;

          font-size: 12px;

        }


        .navItem.active .navIcon,
        .navGroup.open .navIcon {

          color: var(--red);

        }


        .navLabel {

          font-size: 10px;

          font-weight: 600;

          white-space: nowrap;

        }


        .navArrow {

          margin-left: auto;

          color: #a6a9ae;

          font-size: 17px;

          transition: .2s;

        }


        .navGroup.open {

          color: var(--red);

          background: #fafafa;

        }


        .navGroup.open .navArrow {

          transform:
            rotate(90deg);

          color: var(--red);

        }


        /* SUB MENU */

        .subMenu {

          margin-left: 27px;

          padding-left: 8px;

          border-left:
            1px solid #e4e5e7;

        }


        .subItem {

          width: 100%;

          height: 35px;

          border: 0;

          border-radius: 8px;

          background: transparent;

          color: #85888e;

          text-align: left;

          padding:
            0 9px;

          font-size: 9px;

          cursor: pointer;

          display: flex;

          align-items: center;

          gap: 8px;

        }


        .subItem:hover {

          color: var(--red);

          background: #fafafa;

        }


        .subItem.active {

          color: var(--red);

          background: #fff2f3;

          font-weight: 700;

        }


        .subDot {

          width: 4px;
          height: 4px;

          border-radius: 50%;

          background: #c7c9cd;

        }


        .subItem.active .subDot {

          background: var(--red);

        }


        /* SIDEBAR FOOTER */

        .sidebarFooter {

          padding:
            12px 13px 16px;

          border-top:
            1px solid #e7e8ea;

        }


        .systemCard {

          padding: 11px;

          border:
            1px solid #e5e6e8;

          border-radius: 11px;

          background:
            rgba(255,255,255,.7);

        }


        .systemHeader {

          display: flex;

          justify-content:
            space-between;

          font-size: 7.5px;

          font-weight: 700;

        }


        .online {

          display: flex;

          align-items: center;

          gap: 4px;

          color: #16934a;

        }


        .online i {

          width: 5px;
          height: 5px;

          background: #16a05a;

          border-radius: 50%;

        }


        .systemLine {

          height: 4px;

          margin-top: 9px;

          background: #e9eaec;

          border-radius: 10px;

          overflow: hidden;

        }


        .systemLine div {

          width: 96%;
          height: 100%;

          background: var(--red);

        }


        .systemCard small {

          display: block;

          margin-top: 6px;

          color: #aaaeb3;

          font-size: 7px;

        }


        .copyright {

          text-align: center;

          color: #b0b2b6;

          font-size: 7px;

          margin-top: 11px;

        }


        /* MAIN */

        .cxMain {

          width:
            calc(100% - 275px);

          margin-left: 275px;

          transition:
            margin-left .3s,
            width .3s;

        }


        .isCollapsed .cxMain {

          width:
            calc(100% - 78px);

          margin-left: 78px;

        }


        /* HEADER */

        .topHeader {

          height: 67px;

          position: sticky;

          top: 0;

          z-index: 20;

          padding:
            0 31px;

          display: flex;

          align-items: center;

          justify-content:
            space-between;

          background:
            rgba(255,255,255,.88);

          backdrop-filter:
            blur(18px);

          border-bottom:
            1px solid #e7e8ea;

        }


        .breadcrumb {

          font-size: 7.5px;

          letter-spacing: .9px;

          color: #a1a4aa;

          font-weight: 700;

        }


        .breadcrumb b {

          margin:
            0 8px;

          color: #d4d5d8;

        }


        .breadcrumb strong {

          color: #555960;

          font-weight: 800;

        }


        .headerRight {

          display: flex;

          align-items: center;

          gap: 8px;

        }


        .searchBox {

          width: 230px;
          height: 36px;

          display: flex;

          align-items: center;

          gap: 8px;

          padding:
            0 10px;

          background: #fafafa;

          border:
            1px solid #e2e3e5;

          border-radius: 9px;

        }


        .searchBox span {

          color: #96999f;

          font-size: 15px;

        }


        .searchBox input {

          flex: 1;

          border: 0;

          outline: 0;

          background: transparent;

          font-size: 9px;

          color: #333;

        }


        .searchBox kbd {

          padding:
            3px 5px;

          border:
            1px solid #dddfe2;

          border-radius: 4px;

          background: #fff;

          color: #a2a5aa;

          font-size: 7px;

        }


        .iconBtn {

          width: 36px;
          height: 36px;

          border:
            1px solid #e2e3e5;

          border-radius: 9px;

          background: #fff;

          color: #777b81;

          cursor: pointer;

          position: relative;

        }


        .notificationBtn i {

          position: absolute;

          right: 7px;
          top: 7px;

          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: var(--red);

        }


        .profile {

          display: flex;

          align-items: center;

          gap: 8px;

          padding-left: 4px;

        }


        .profileAvatar {

          width: 35px;
          height: 35px;

          border-radius: 10px;

          background:
            linear-gradient(
              135deg,
              #ed3a41,
              #c9141c
            );

          color: #fff;

          display: flex;

          align-items: center;

          justify-content: center;

          font-size: 9px;

          font-weight: 800;

          box-shadow:
            0 5px 13px
            rgba(226,27,35,.18);

        }


        .profileText strong {

          display: block;

          font-size: 8.5px;

        }


        .profileText small {

          display: block;

          margin-top: 2px;

          color: #a1a4a9;

          font-size: 7px;

        }


        .profileArrow {

          color: #a3a6ab;

          font-size: 10px;

        }


        /* CONTENT */

        .dashboardContent {

          padding:
            25px 31px 32px;

        }


        /* HERO */

        .heroPanel {

          min-height: 190px;

          position: relative;

          overflow: hidden;

          border-radius: 18px;

          border:
            1px solid #e4e5e7;

          background:
            linear-gradient(
              115deg,
              #ffffff 0%,
              #ffffff 57%,
              #fff5f6 100%
            );

          padding:
            31px 32px;

          display: flex;

          align-items: center;

          justify-content:
            space-between;

          box-shadow:
            0 12px 40px
            rgba(20,20,20,.035);

        }


        .heroGlow {

          position: absolute;

          width: 300px;
          height: 300px;

          right: 130px;
          top: -170px;

          border-radius: 50%;

          background:
            rgba(226,27,35,.045);

        }


        .heroText {

          position: relative;

          z-index: 2;

        }


        .eyebrow {

          display: flex;

          align-items: center;

          gap: 7px;

          color: var(--red);

          font-size: 7.5px;

          font-weight: 800;

          letter-spacing: 1.5px;

        }


        .eyebrow span {

          width: 17px;
          height: 2px;

          background: var(--red);

          border-radius: 5px;

        }


        .heroPanel h1 {

          margin:
            10px 0 7px;

          font-size: 29px;

          line-height: 1.18;

          letter-spacing: -1.3px;

        }


        .heroPanel h1 em {

          color: var(--red);

          font-style: normal;

        }


        .heroPanel p {

          margin: 0;

          color: #8e9298;

          font-size: 9.5px;

          line-height: 1.7;

        }


        .heroRight {

          position: relative;

          z-index: 3;

          display: flex;

          align-items: center;

          gap: 8px;

        }


        .heroDate {

          height: 38px;

          padding:
            0 12px;

          border:
            1px solid #e2e3e6;

          border-radius: 9px;

          display: flex;

          align-items: center;

          gap: 7px;

          background:
            rgba(255,255,255,.8);

          color: #777b82;

          font-size: 7.5px;

          font-weight: 700;

        }


        .heroDate span {

          color: var(--red);

          font-size: 12px;

        }


        .primaryBtn {

          height: 38px;

          padding:
            0 14px;

          border: 0;

          border-radius: 9px;

          background:
            linear-gradient(
              135deg,
              #ed343b,
              #d71921
            );

          color: #fff;

          font-size: 8px;

          font-weight: 700;

          cursor: pointer;

          box-shadow:
            0 8px 20px
            rgba(226,27,35,.2);

        }


        .primaryBtn span {

          margin-right: 5px;

        }


        .heroDecoration {

          position: absolute;

          right: -35px;
          bottom: -100px;

          width: 330px;
          height: 330px;

        }


        .ring {

          position: absolute;

          border:
            1px solid
            rgba(226,27,35,.12);

          border-radius: 50%;

        }


        .ringOne {

          width: 330px;
          height: 330px;

        }


        .ringTwo {

          width: 245px;
          height: 245px;

          left: 43px;
          top: 43px;

        }


        .ringThree {

          width: 160px;
          height: 160px;

          left: 85px;
          top: 85px;

        }


        /* KPI */

        .kpiGrid {

          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 13px;

          margin-top: 14px;

        }


        .metricCard {

          min-height: 145px;

          padding: 18px;

          background:
            rgba(255,255,255,.88);

          border:
            1px solid #e4e5e8;

          border-radius: 14px;

          position: relative;

          overflow: hidden;

          transition:
            transform .2s,
            box-shadow .2s;

        }


        .metricCard:hover {

          transform:
            translateY(-3px);

          box-shadow:
            0 14px 30px
            rgba(20,20,20,.07);

        }


        .metricTop {

          display: flex;

          justify-content:
            space-between;

          align-items: center;

        }


        .metricIcon {

          width: 33px;
          height: 33px;

          border-radius: 9px;

          background: #fff1f2;

          color: var(--red);

          display: flex;

          align-items: center;

          justify-content: center;

          font-size: 12px;

        }


        .metricChange {

          padding:
            5px 7px;

          border-radius: 6px;

          background: #eff9f3;

          color: #17894b;

          font-size: 7px;

          font-weight: 800;

        }


        .metricLabel {

          margin-top: 17px;

          color: #9b9ea4;

          font-size: 7px;

          font-weight: 700;

          letter-spacing: .55px;

        }


        .metricValue {

          margin-top: 3px;

          font-size: 25px;

          font-weight: 800;

          letter-spacing: -1px;

        }


        .metricValue small {

          font-size: 14px;

          color: #55595f;

        }


        /* GRIDS */

        .mainGrid {

          display: grid;

          grid-template-columns:
            1.55fr 1fr;

          gap: 14px;

          margin-top: 14px;

        }


        .lowerGrid {

          display: grid;

          grid-template-columns:
            1fr 1fr .85fr;

          gap: 14px;

          margin-top: 14px;

        }


        .bottomGrid {

          display: grid;

          grid-template-columns:
            1.3fr .7fr;

          gap: 14px;

          margin-top: 14px;

        }


        .premiumCard {

          background:
            rgba(255,255,255,.92);

          border:
            1px solid #e4e5e8;

          border-radius: 15px;

          padding: 20px;

          box-shadow:
            0 6px 25px
            rgba(20,20,20,.025);

        }


        .cardHeading {

          display: flex;

          align-items: flex-start;

          justify-content:
            space-between;

        }


        .cardEyebrow {

          color: var(--red);

          font-size: 7px;

          font-weight: 800;

          letter-spacing: 1.2px;

        }


        .cardTitle {

          margin-top: 4px;

          font-size: 14px;

          font-weight: 800;

          letter-spacing: -.3px;

        }


        .cardAction {

          border: 0;

          background: transparent;

          color: var(--red);

          font-size: 8px;

          font-weight: 700;

          cursor: pointer;

        }


        .cardBadge {

          padding:
            5px 7px;

          border-radius: 5px;

          background: #fff0f1;

          color: var(--red);

          font-size: 6.5px;

          font-weight: 800;

        }


        /* PERFORMANCE */

        .performanceTop {

          display: flex;

          align-items: flex-end;

          justify-content:
            space-between;

          margin-top: 20px;

        }


        .performanceValue {

          font-size: 27px;

          font-weight: 800;

          letter-spacing: -1.2px;

        }


        .performanceDescription {

          margin-top: 3px;

          color: #a0a3a8;

          font-size: 7.5px;

        }


        .chartLegend {

          display: flex;

          gap: 13px;

          color: #9a9da3;

          font-size: 7px;

        }


        .chartLegend span {

          display: flex;

          align-items: center;

          gap: 4px;

        }


        .actualDot,
        .targetDot {

          width: 6px;
          height: 6px;

          border-radius: 50%;

        }


        .actualDot {

          background: var(--red);

        }


        .targetDot {

          background: #d8dadd;

        }


        .chartArea {

          height: 185px;

          position: relative;

          margin-top: 15px;

          border-bottom:
            1px solid #ececee;

        }


        .gridLines {

          position: absolute;

          inset: 0;

          display: flex;

          flex-direction: column;

          justify-content:
            space-between;

        }


        .gridLines span {

          height: 1px;

          background: #f0f1f2;

        }


        .bars {

          position: absolute;

          inset: 0 8px 0 8px;

          display: flex;

          align-items: flex-end;

          gap: 10px;

        }


        .barContainer {

          flex: 1;

          height: 100%;

          display: flex;

          align-items: flex-end;

        }


        .barValue {

          width: 100%;

          border-radius:
            7px 7px 2px 2px;

          background:
            linear-gradient(
              180deg,
              #f05b61,
              #dc1d25
            );

          box-shadow:
            0 5px 12px
            rgba(226,27,35,.1);

        }


        .chartLabels {

          display: flex;

          justify-content:
            space-around;

          color: #aaaeb4;

          font-size: 7px;

          padding-top: 7px;

        }


        /* ALERT */

        .alertItem {

          display: flex;

          gap: 9px;

          padding:
            14px 0;

          border-bottom:
            1px solid #f0f1f2;

        }


        .alertIcon {

          width: 29px;
          height: 29px;

          flex-shrink: 0;

          border-radius: 8px;

          display: flex;

          align-items: center;

          justify-content: center;

          background: #fff7e8;

          color: #c28600;

          font-size: 10px;

          font-weight: 800;

        }


        .alertIcon.danger {

          background: #fff0f1;

          color: var(--red);

        }


        .alertItem strong {

          display: block;

          font-size: 8.5px;

        }


        .alertItem p {

          margin:
            4px 0 0;

          color: #9ca0a5;

          font-size: 7px;

          line-height: 1.6;

        }


        .fullLink {

          margin-top: 12px;

          border: 0;

          background: transparent;

          color: var(--red);

          font-size: 8px;

          font-weight: 700;

          cursor: pointer;

        }


        /* CHANNEL */

        .channel {

          margin-top: 18px;

        }


        .channelHead {

          display: flex;

          justify-content:
            space-between;

          font-size: 8px;

        }


        .channelName {

          color: #777b82;

        }


        .channelValue {

          font-weight: 800;

        }


        .channelTrack {

          height: 5px;

          margin-top: 7px;

          background: #eff0f2;

          border-radius: 10px;

          overflow: hidden;

        }


        .channelFill {

          height: 100%;

          border-radius: 10px;

          background:
            linear-gradient(
              90deg,
              #e21b23,
              #f45c61
            );

        }


        /* LAYER */

        .layerRow {

          height: 35px;

          display: flex;

          align-items: center;

          justify-content:
            space-between;

          border-bottom:
            1px solid #f0f1f2;

          font-size: 8px;

        }


        .layerName {

          display: flex;

          align-items: center;

          gap: 7px;

          color: #7b7f85;

        }


        .layerDot {

          width: 5px;
          height: 5px;

          background: var(--red);

          border-radius: 50%;

        }


        /* MODULE */

        .moduleGrid {

          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 8px;

          margin-top: 17px;

        }


        .moduleCard {

          height: 70px;

          padding: 10px;

          border:
            1px solid #e8e9eb;

          border-radius: 9px;

          background: #fafafa;

          text-align: left;

          cursor: pointer;

          transition: .18s;

        }


        .moduleCard:hover {

          background: #fff;

          border-color: #efb2b5;

          transform:
            translateY(-2px);

          box-shadow:
            0 7px 16px
            rgba(0,0,0,.05);

        }


        .moduleCard span {

          color: var(--red);

          font-size: 13px;

        }


        .moduleCard strong {

          display: block;

          margin-top: 7px;

          font-size: 8px;

        }


        .moduleCard small {

          display: block;

          margin-top: 3px;

          color: #b0b3b7;

          font-size: 6.5px;

        }


        /* ACTIVITY */

        .activityItem {

          display: flex;

          align-items: center;

          gap: 10px;

          padding:
            12px 0;

          border-bottom:
            1px solid #f0f1f2;

        }


        .activityIcon {

          width: 28px;
          height: 28px;

          border-radius: 8px;

          display: flex;

          align-items: center;

          justify-content: center;

          background: #fff0f1;

          color: var(--red);

          font-size: 9px;

          font-weight: 800;

        }


        .activityText strong {

          display: block;

          font-size: 8px;

        }


        .activityText small {

          display: block;

          margin-top: 3px;

          color: #a4a7ac;

          font-size: 7px;

        }


        /* SCORE */

        .scoreCard {

          display: flex;

          align-items: center;

          gap: 20px;

          min-height: 150px;

        }


        .scoreCircle {

          width: 105px;
          height: 105px;

          flex-shrink: 0;

          border-radius: 50%;

          background:
            conic-gradient(
              var(--red) 0deg 338deg,
              #eeeeef 338deg 360deg
            );

          display: flex;

          align-items: center;

          justify-content: center;

        }


        .scoreCircle > div {

          width: 80px;
          height: 80px;

          border-radius: 50%;

          background: #fff;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

        }


        .scoreCircle strong {

          font-size: 24px;

          letter-spacing: -1px;

        }


        .scoreCircle span {

          margin-top: 2px;

          color: #a0a3a8;

          font-size: 6px;

        }


        .scoreText h3 {

          margin:
            7px 0 4px;

          font-size: 17px;

        }


        .scoreText p {

          margin: 0;

          max-width: 190px;

          color: #999da3;

          font-size: 7.5px;

          line-height: 1.6;

        }


        /* FOOTER */

        .mainFooter {

          display: flex;

          justify-content:
            space-between;

          padding:
            20px 2px 4px;

          color: #a7aaaf;

          font-size: 7px;

        }


        /* RESPONSIVE */

        @media (max-width: 1150px) {

          .kpiGrid {

            grid-template-columns:
              repeat(2, 1fr);

          }

          .lowerGrid {

            grid-template-columns:
              1fr 1fr;

          }

        }


        @media (max-width: 900px) {

          .searchBox {

            display: none;

          }

          .mainGrid,
          .bottomGrid {

            grid-template-columns:
              1fr;

          }

          .heroPanel {

            align-items: flex-start;

            flex-direction: column;

            gap: 20px;

          }

        }


        @media (max-width: 700px) {

          .cxSidebar {

            display: none;

          }

          .cxMain,
          .isCollapsed .cxMain {

            width: 100%;

            margin-left: 0;

          }

          .dashboardContent {

            padding: 17px;

          }

          .topHeader {

            padding:
              0 17px;

          }

          .kpiGrid,
          .lowerGrid {

            grid-template-columns:
              1fr;

          }

          .heroPanel {

            padding: 23px;

          }

          .heroPanel h1 {

            font-size: 23px;

          }

          .heroRight {

            flex-wrap: wrap;

          }

          .profileText,
          .profileArrow {

            display: none;

          }

        }

      `}</style>

    </div>
  );
}


/* =========================================================
   NAV ITEM
========================================================= */

function NavItem({
  icon,
  label,
  active,
  collapsed,
  onClick,
}) {
  return (
    <button
      className={`navItem ${active ? "active" : ""}`}
      onClick={onClick}
      title={collapsed ? label : ""}
    >

      <span className="navIcon">
        {icon}
      </span>

      {!collapsed && (
        <span className="navLabel">
          {label}
        </span>
      )}

    </button>
  );
}


/* =========================================================
   NAV GROUP
========================================================= */

function NavGroup({
  icon,
  label,
  open,
  collapsed,
  onClick,
}) {
  return (
    <button
      className={`navGroup ${open ? "open" : ""}`}
      onClick={onClick}
      title={collapsed ? label : ""}
    >

      <span className="navIcon">
        {icon}
      </span>

      {!collapsed && (
        <>
          <span className="navLabel">
            {label}
          </span>

          <span className="navArrow">
            ›
          </span>
        </>
      )}

    </button>
  );
}


/* =========================================================
   SUB MENU
========================================================= */

function SubMenu({
  items,
  active,
  onSelect,
}) {
  return (
    <div className="subMenu">

      {items.map((item) => (

        <button
          key={item}
          className={`subItem ${
            active === item ? "active" : ""
          }`}
          onClick={() => onSelect(item)}
        >

          <i className="subDot" />

          {item}

        </button>

      ))}

    </div>
  );
}


/* =========================================================
   METRIC
========================================================= */

function Metric({
  label,
  value,
  suffix,
  change,
  icon,
}) {
  return (
    <div className="metricCard">

      <div className="metricTop">

        <div className="metricIcon">
          {icon}
        </div>

        <span className="metricChange">
          {change}
        </span>

      </div>

      <div className="metricLabel">
        {label}
      </div>

      <div className="metricValue">

        {value}

        {suffix && (
          <small>
            {suffix}
          </small>
        )}

      </div>

    </div>
  );
}


/* =========================================================
   CARD HEADING
========================================================= */

function CardHeading({
  eyebrow,
  title,
  action,
  badge,
}) {
  return (
    <div className="cardHeading">

      <div>

        <div className="cardEyebrow">
          {eyebrow}
        </div>

        <div className="cardTitle">
          {title}
        </div>

      </div>

      {action && (
        <button className="cardAction">
          {action}
        </button>
      )}

      {badge && (
        <span className="cardBadge">
          {badge}
        </span>
      )}

    </div>
  );
}


/* =========================================================
   ALERT
========================================================= */

function AlertItem({
  title,
  description,
  danger,
}) {
  return (
    <div className="alertItem">

      <div
        className={`alertIcon ${
          danger ? "danger" : ""
        }`}
      >
        !
      </div>

      <div>

        <strong>
          {title}
        </strong>

        <p>
          {description}
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   CHANNEL
========================================================= */

function Channel({
  name,
  value,
}) {
  return (
    <div className="channel">

      <div className="channelHead">

        <span className="channelName">
          {name}
        </span>

        <strong className="channelValue">
          {value}
        </strong>

      </div>

      <div className="channelTrack">

        <div
          className="channelFill"
          style={{
            width: value,
          }}
        />

      </div>

    </div>
  );
}


/* =========================================================
   LAYER
========================================================= */

function Layer({
  name,
  value,
}) {
  return (
    <div className="layerRow">

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


/* =========================================================
   ACTIVITY
========================================================= */

function Activity({
  icon,
  title,
  time,
}) {
  return (
    <div className="activityItem">

      <div className="activityIcon">
        {icon}
      </div>

      <div className="activityText">

        <strong>
          {title}
        </strong>

        <small>
          {time}
        </small>

      </div>

    </div>
  );
}
