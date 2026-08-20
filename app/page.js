"use client";

import { useState } from "react";

const LION_LOGO =
  "https://www.marketeers.com/_next/image/?url=https%3A%2F%2Fimagedelivery.net%2F2MtOYVTKaiU0CCt-BLmtWw%2Fbb2fcb96-610f-45d1-74ed-285bbfdb6f00%2Fw%3D900&w=1920&q=75";

const navigation = [
  { label: "Overview", icon: "⌂" },
  { label: "CX Performance", icon: "◈" },
  { label: "Complaints", icon: "!" },
  { label: "Customer Voice", icon: "◉" },
  { label: "SLA Monitoring", icon: "◷" },
  { label: "Reports", icon: "▤" },
];

export default function Home() {
  const [active, setActive] = useState("Overview");

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#17181c]">

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[250px] border-r border-slate-200 bg-white lg:flex lg:flex-col">

        {/* Logo */}
        <div className="flex h-[82px] items-center border-b border-slate-100 px-7">
          <img
            src={LION_LOGO}
            alt="Lion Parcel"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-7">

          <p className="mb-4 px-3 text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
            Workspace
          </p>

          <nav className="space-y-1">

            {navigation.map((item) => {
              const isActive = active === item.label;

              return (
                <button
                  key={item.label}
                  onClick={() => setActive(item.label)}
                  className={`relative flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all ${
                    isActive
                      ? "bg-red-50 text-red-700"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                  }`}
                >

                  {isActive && (
                    <span className="absolute left-0 h-6 w-[3px] rounded-r-full bg-red-600" />
                  )}

                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-black ${
                      isActive
                        ? "bg-red-600 text-white shadow-md shadow-red-200"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {item.icon}
                  </span>

                  <span className="text-[13px] font-bold">
                    {item.label}
                  </span>

                </button>
              );
            })}

          </nav>
        </div>

        {/* Sidebar bottom */}
        <div className="p-4">

          <div className="rounded-2xl bg-[#17181c] p-5 text-white">

            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-bold">
                System Status
              </span>

              <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Operational
              </span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[96%] rounded-full bg-emerald-400" />
            </div>

            <p className="mt-3 text-[10px] leading-4 text-slate-400">
              All CX monitoring services are running normally.
            </p>

          </div>

        </div>
      </aside>


      {/* =====================================================
          MAIN AREA
      ===================================================== */}

      <div className="lg:pl-[250px]">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="sticky top-0 z-30 flex h-[82px] items-center justify-between border-b border-slate-200 bg-white/90 px-5 backdrop-blur-xl lg:px-9">

          <div>

            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-red-600">
              Customer Experience
            </p>

            <h1 className="mt-1 text-lg font-extrabold tracking-tight">
              Command Center
            </h1>

          </div>

          <div className="flex items-center gap-5">

            {/* Search */}
            <button className="hidden h-10 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 text-xs font-semibold text-slate-400 transition hover:border-red-200 hover:bg-white sm:flex">
              <span>⌕</span>
              Search dashboard...
              <span className="rounded bg-white px-1.5 py-0.5 text-[9px] text-slate-400">
                /
              </span>
            </button>

            {/* Notification */}
            <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50">
              ◇
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-600" />
            </button>

            {/* User */}
            <div className="flex items-center gap-3">

              <div className="hidden text-right md:block">
                <p className="text-xs font-extrabold">
                  CX Operations
                </p>

                <p className="text-[10px] text-slate-400">
                  Administrator
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-xs font-black text-white shadow-lg shadow-red-200">
                IB
              </div>

            </div>

          </div>

        </header>


        {/* =====================================================
            CONTENT
        ===================================================== */}

        <main className="p-5 lg:p-9">

          {/* Welcome */}
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="text-xs font-semibold text-slate-400">
                Thursday, 20 August 2026
              </p>

              <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.03em] text-slate-900">
                Good morning, CX Team.
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Here's what's happening across your customer experience
                operation today.
              </p>

            </div>

            <div className="flex gap-2">

              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-600 shadow-sm hover:border-slate-300">
                Last 30 Days
              </button>

              <button className="rounded-xl bg-red-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-red-200 hover:bg-red-700">
                Export Report
              </button>

            </div>

          </div>


          {/* =====================================================
              KPI
          ===================================================== */}

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            <Metric
              title="Customer Satisfaction"
              value="92.4%"
              change="+4.8%"
              subtitle="vs previous period"
              icon="♥"
              accent="red"
            />

            <Metric
              title="SLA Achievement"
              value="96.8%"
              change="+2.1%"
              subtitle="vs previous period"
              icon="◷"
              accent="blue"
            />

            <Metric
              title="Open Complaints"
              value="128"
              change="-12.6%"
              subtitle="vs previous period"
              icon="!"
              accent="orange"
              inverse
            />

            <Metric
              title="Customer Voice"
              value="4,821"
              change="+8.4%"
              subtitle="responses this month"
              icon="◉"
              accent="purple"
            />

          </div>


          {/* =====================================================
              MAIN ANALYTICS
          ===================================================== */}

          <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_360px]">

            {/* Performance Chart */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">

              <div className="flex items-start justify-between">

                <div>

                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-red-600">
                    Performance
                  </p>

                  <h3 className="mt-1 text-lg font-extrabold">
                    Customer Experience Trend
                  </h3>

                </div>

                <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400">

                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-600" />
                    CX Score
                  </span>

                  <span className="hidden sm:flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    Target
                  </span>

                </div>

              </div>


              {/* Chart */}
              <div className="relative mt-8 h-[270px]">

                {/* Grid */}
                <div className="absolute inset-0 flex flex-col justify-between">

                  {[100, 75, 50, 25, 0].map((value) => (
                    <div
                      key={value}
                      className="flex items-center gap-3"
                    >
                      <span className="w-7 text-right text-[9px] font-semibold text-slate-300">
                        {value}
                      </span>

                      <div className="h-px flex-1 bg-slate-100" />
                    </div>
                  ))}

                </div>

                {/* Bars */}
                <div className="absolute bottom-0 left-10 right-0 top-0 flex items-end gap-2 sm:gap-4">

                  {[
                    58,
                    65,
                    62,
                    70,
                    68,
                    76,
                    73,
                    82,
                    79,
                    89,
                    86,
                    94,
                  ].map((height, index) => (
                    <div
                      key={index}
                      className="group flex h-full flex-1 items-end"
                    >

                      <div
                        style={{ height: `${height}%` }}
                        className="relative w-full rounded-t-lg bg-gradient-to-t from-red-700 to-red-400 transition-all duration-300 group-hover:from-red-800 group-hover:to-red-500"
                      >

                        <span className="absolute -top-6 left-1/2 hidden -translate-x-1/2 rounded bg-[#17181c] px-2 py-1 text-[9px] font-bold text-white group-hover:block">
                          {height}
                        </span>

                      </div>

                    </div>
                  ))}

                </div>

              </div>

              {/* Chart labels */}
              <div className="ml-10 mt-3 flex justify-between text-[9px] font-bold text-slate-300">

                <span>W1</span>
                <span>W2</span>
                <span>W3</span>
                <span>W4</span>
                <span>W5</span>
                <span>W6</span>

              </div>

            </div>


            {/* =====================================================
                ALERT PANEL
            ===================================================== */}

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">

              <div className="flex items-start justify-between">

                <div>

                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-red-600">
                    Attention
                  </p>

                  <h3 className="mt-1 text-lg font-extrabold">
                    Priority Alerts
                  </h3>

                </div>

                <span className="rounded-full bg-red-50 px-2.5 py-1 text-[9px] font-extrabold text-red-600">
                  3 ACTIVE
                </span>

              </div>


              <div className="mt-6 space-y-3">

                <Priority
                  level="HIGH"
                  title="Complaint spike detected"
                  description="Jabodetabek +14% in the last 24 hours"
                />

                <Priority
                  level="MEDIUM"
                  title="SLA approaching threshold"
                  description="12 shipments require immediate attention"
                />

                <Priority
                  level="MEDIUM"
                  title="Negative sentiment increased"
                  description="Customer Voice sentiment +6%"
                />

              </div>


              <button className="mt-5 w-full rounded-xl border border-slate-200 py-3 text-[11px] font-extrabold text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600">
                View All Alerts →
              </button>

            </div>

          </div>


          {/* =====================================================
              BOTTOM SECTION
          ===================================================== */}

          <div className="mt-5 grid gap-5 xl:grid-cols-3">

            {/* Complaint */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">

              <SectionTitle
                eyebrow="Complaints"
                title="Complaint Overview"
              />

              <div className="mt-7 flex items-center gap-7">

                <div className="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-[14px] border-red-100">

                  <div className="absolute inset-[-14px] rounded-full border-[14px] border-red-600 border-b-transparent border-l-transparent rotate-[-35deg]" />

                  <div className="text-center">
                    <p className="text-2xl font-black">
                      128
                    </p>

                    <p className="text-[9px] font-bold text-slate-400">
                      OPEN
                    </p>
                  </div>

                </div>

                <div className="space-y-3">

                  <Legend label="Delivery" value="48" />
                  <Legend label="Service" value="37" />
                  <Legend label="System" value="25" />
                  <Legend label="Other" value="18" />

                </div>

              </div>

            </div>


            {/* Customer Sentiment */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">

              <SectionTitle
                eyebrow="Customer Voice"
                title="Sentiment Analysis"
              />

              <div className="mt-7">

                <Sentiment
                  label="Positive"
                  value="72%"
                  width="72%"
                  type="positive"
                />

                <Sentiment
                  label="Neutral"
                  value="19%"
                  width="19%"
                  type="neutral"
                />

                <Sentiment
                  label="Negative"
                  value="9%"
                  width="9%"
                  type="negative"
                />

              </div>

              <div className="mt-6 rounded-xl bg-slate-50 p-4">

                <p className="text-[10px] font-bold text-slate-400">
                  Total responses
                </p>

                <p className="mt-1 text-xl font-black">
                  4,821
                </p>

              </div>

            </div>


            {/* Quick Actions */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">

              <SectionTitle
                eyebrow="Workspace"
                title="Quick Actions"
              />

              <div className="mt-5 grid grid-cols-2 gap-3">

                <Action
                  icon="◈"
                  title="CX Performance"
                />

                <Action
                  icon="!"
                  title="Complaints"
                />

                <Action
                  icon="◉"
                  title="Customer Voice"
                />

                <Action
                  icon="▤"
                  title="Reports"
                />

              </div>

            </div>

          </div>


          {/* Footer */}
          <footer className="mt-9 flex flex-col justify-between gap-2 border-t border-slate-200 pt-5 text-[10px] font-semibold text-slate-400 sm:flex-row">

            <span>
              © 2026 Lion Parcel • Customer Experience
            </span>

            <span>
              CX Command Center • Internal Use Only
            </span>

          </footer>

        </main>

      </div>

    </div>
  );
}


/* =====================================================
   COMPONENTS
===================================================== */

function Metric({
  title,
  value,
  change,
  subtitle,
  icon,
  accent,
  inverse,
}) {
  const accentClasses = {
    red: "bg-red-50 text-red-600",
    blue: "bg-blue-50 text-blue-600",
    orange: "bg-orange-50 text-orange-600",
    purple: "bg-purple-50 text-purple-600",
  };

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">

      <div className="flex items-start justify-between">

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-black ${accentClasses[accent]}`}
        >
          {icon}
        </div>

        <span
          className={`rounded-full px-2 py-1 text-[9px] font-extrabold ${
            inverse
              ? "bg-emerald-50 text-emerald-600"
              : "bg-emerald-50 text-emerald-600"
          }`}
        >
          {change}
        </span>

      </div>

      <p className="mt-5 text-xs font-bold text-slate-400">
        {title}
      </p>

      <p className="mt-1 text-3xl font-black tracking-[-0.03em]">
        {value}
      </p>

      <p className="mt-2 text-[10px] font-semibold text-slate-400">
        {subtitle}
      </p>

    </div>
  );
}


function Priority({ level, title, description }) {
  const high = level === "HIGH";

  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">

      <div className="flex items-center justify-between">

        <span
          className={`text-[8px] font-black tracking-wider ${
            high ? "text-red-600" : "text-orange-500"
          }`}
        >
          {level}
        </span>

        <span
          className={`h-1.5 w-1.5 rounded-full ${
            high ? "bg-red-600" : "bg-orange-400"
          }`}
        />

      </div>

      <p className="mt-2 text-xs font-extrabold text-slate-700">
        {title}
      </p>

      <p className="mt-1 text-[10px] leading-4 text-slate-400">
        {description}
      </p>

    </div>
  );
}


function SectionTitle({ eyebrow, title }) {
  return (
    <div>
      <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-red-600">
        {eyebrow}
      </p>

      <h3 className="mt-1 text-lg font-extrabold">
        {title}
      </h3>
    </div>
  );
}


function Legend({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-8">

      <div className="flex items-center gap-2">

        <span className="h-2 w-2 rounded-full bg-red-500" />

        <span className="text-[10px] font-bold text-slate-500">
          {label}
        </span>

      </div>

      <span className="text-xs font-black">
        {value}
      </span>

    </div>
  );
}


function Sentiment({
  label,
  value,
  width,
  type,
}) {
  const colors = {
    positive: "bg-emerald-500",
    neutral: "bg-slate-400",
    negative: "bg-red-500",
  };

  return (
    <div className="mb-5">

      <div className="mb-2 flex justify-between">

        <span className="text-[10px] font-bold text-slate-500">
          {label}
        </span>

        <span className="text-[10px] font-black">
          {value}
        </span>

      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-100">

        <div
          style={{ width }}
          className={`h-full rounded-full ${colors[type]}`}
        />

      </div>

    </div>
  );
}


function Action({ icon, title }) {
  return (
    <button className="group rounded-xl border border-slate-100 bg-slate-50 p-4 text-left transition hover:border-red-100 hover:bg-red-50">

      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-xs font-black text-red-600 shadow-sm group-hover:bg-red-600 group-hover:text-white">
        {icon}
      </div>

      <p className="mt-3 text-[10px] font-extrabold leading-4 text-slate-600 group-hover:text-red-700">
        {title}
      </p>

    </button>
  );
}
