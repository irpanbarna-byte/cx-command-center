"use client";

import { useState } from "react";

const LION_LOGO =
  "https://www.marketeers.com/_next/image/?url=https%3A%2F%2Fimagedelivery.net%2F2MtOYVTKaiU0CCt-BLmtWw%2Fbb2fcb96-610f-45d1-74ed-285bbfdb6f00%2Fw%3D900&w=1920&q=75";

export default function Home() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const menu = [
    { name: "Dashboard", icon: "▦" },
    { name: "CX Performance", icon: "◈" },
    { name: "Complaint", icon: "!" },
    { name: "Customer Voice", icon: "◉" },
    { name: "SLA Monitoring", icon: "◷" },
    { name: "Reports", icon: "▤" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 text-slate-800">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="flex h-[78px] items-center justify-between px-5 lg:px-9">

          {/* BRAND */}
          <div className="flex items-center gap-4">

            <div className="flex h-12 items-center rounded-xl bg-white">
              <img
                src={LION_LOGO}
                alt="Lion Parcel"
                className="h-10 w-auto object-contain"
              />
            </div>

            <div className="hidden h-9 w-px bg-slate-200 sm:block" />

            <div className="hidden sm:block">
              <p className="text-sm font-black tracking-tight text-slate-800">
                CX Command Center
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600">
                Customer Experience
              </p>
            </div>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            <div className="hidden text-right md:block">
              <p className="text-sm font-bold text-slate-700">
                Welcome back 👋
              </p>
              <p className="text-xs text-slate-400">
                CX Operations
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-red-700 to-red-500 text-sm font-black text-white shadow-lg shadow-red-200 ring-4 ring-red-50">
              IB
            </div>

          </div>
        </div>
      </header>

      <div className="flex">

        {/* ================= SIDEBAR ================= */}
        <aside className="hidden min-h-[calc(100vh-78px)] w-[255px] border-r border-slate-200 bg-white lg:block">

          <div className="p-5">

            <div className="mb-5 px-3">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                Workspace
              </p>
            </div>

            <nav className="space-y-1.5">

              {menu.map((item) => {
                const active = activeMenu === item.name;

                return (
                  <button
                    key={item.name}
                    onClick={() => setActiveMenu(item.name)}
                    className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all ${
                      active
                        ? "bg-gradient-to-r from-red-700 to-red-500 text-white shadow-lg shadow-red-200"
                        : "text-slate-500 hover:bg-red-50 hover:text-red-700"
                    }`}
                  >

                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-lg text-base font-black ${
                        active
                          ? "bg-white/15 text-white"
                          : "bg-slate-100 text-slate-500 group-hover:bg-red-100 group-hover:text-red-600"
                      }`}
                    >
                      {item.icon}
                    </span>

                    <span className="text-sm font-bold">
                      {item.name}
                    </span>

                  </button>
                );
              })}

            </nav>

            {/* SIDEBAR INFO */}
            <div className="mt-10 overflow-hidden rounded-2xl bg-gradient-to-br from-red-800 via-red-600 to-red-500 p-5 text-white shadow-xl shadow-red-200">

              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-xl">
                ✦
              </div>

              <p className="text-sm font-black">
                CX Command Center
              </p>

              <p className="mt-2 text-xs leading-5 text-red-100">
                Centralized monitoring untuk membantu tim Customer Experience
                mengambil keputusan lebih cepat.
              </p>

              <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-[92%] rounded-full bg-white" />
              </div>

              <div className="mt-2 flex justify-between text-[10px] text-red-100">
                <span>System Health</span>
                <span className="font-bold text-white">92%</span>
              </div>

            </div>

          </div>
        </aside>

        {/* ================= MAIN ================= */}
        <section className="w-full flex-1 overflow-hidden">

          <div className="p-5 lg:p-8">

            {/* ================= HERO ================= */}
            <div className="relative mb-7 overflow-hidden rounded-[28px] bg-gradient-to-br from-red-800 via-red-700 to-red-500 p-7 text-white shadow-2xl shadow-red-200 lg:p-9">

              {/* Decorative circles */}
              <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-40 right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute bottom-0 left-1/2 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

              <div className="relative z-10 max-w-3xl">

                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                    Live CX Monitoring
                  </span>
                </div>

                <h1 className="text-3xl font-black tracking-tight lg:text-4xl xl:text-5xl">
                  Customer Experience
                  <br />
                  Command Center
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-red-50 lg:text-base">
                  Satu dashboard untuk memantau customer satisfaction,
                  complaint, SLA, customer voice, dan performance CX secara
                  terintegrasi.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">

                  <button className="rounded-xl bg-white px-5 py-3 text-sm font-black text-red-700 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl">
                    View Performance
                  </button>

                  <button className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20">
                    Generate Report
                  </button>

                </div>

              </div>

              {/* Hero mini stats */}
              <div className="relative z-10 mt-8 grid max-w-2xl grid-cols-3 gap-3">

                <HeroStat value="92.4%" label="CSAT" />
                <HeroStat value="96.8%" label="SLA" />
                <HeroStat value="4.8K" label="Voice" />

              </div>

            </div>

            {/* ================= SECTION HEADER ================= */}
            <div className="mb-5 flex items-end justify-between">

              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600">
                  Overview
                </p>

                <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-800">
                  CX Performance Today
                </h2>
              </div>

              <div className="hidden rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-500 shadow-sm sm:block">
                ● Live Data
              </div>

            </div>

            {/* ================= KPI ================= */}
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

              <KpiCard
                title="Customer Satisfaction"
                value="92.4%"
                change="+4.8%"
                icon="♥"
              />

              <KpiCard
                title="Open Complaint"
                value="128"
                change="-12.6%"
                icon="!"
              />

              <KpiCard
                title="SLA Achievement"
                value="96.8%"
                change="+2.1%"
                icon="◷"
              />

              <KpiCard
                title="Customer Voice"
                value="4,821"
                change="+8.4%"
                icon="◉"
              />

            </div>

            {/* ================= CHART + ALERT ================= */}
            <div className="mt-6 grid gap-6 xl:grid-cols-3">

              {/* CHART */}
              <div className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">

                <div className="flex items-start justify-between">

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600">
                      Analytics
                    </p>

                    <h3 className="mt-1 text-lg font-black text-slate-800">
                      CX Performance
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      Weekly performance monitoring
                    </p>
                  </div>

                  <button className="rounded-xl bg-slate-50 px-3 py-2 text-xs font-bold text-slate-500 hover:bg-red-50 hover:text-red-600">
                    This Month
                  </button>

                </div>

                {/* CHART */}
                <div className="mt-8 flex h-56 items-end gap-2 sm:gap-4">

                  {[
                    52, 63, 58, 70, 67, 78,
                    73, 84, 79, 91, 86, 96,
                  ].map((height, index) => (
                    <div
                      key={index}
                      className="group flex h-full flex-1 items-end"
                    >
                      <div
                        style={{ height: `${height}%` }}
                        className="w-full rounded-t-xl bg-gradient-to-t from-red-700 to-red-400 transition-all duration-300 group-hover:from-red-800 group-hover:to-red-500"
                      />
                    </div>
                  ))}

                </div>

                <div className="mt-3 flex justify-between text-[10px] font-bold text-slate-400">
                  <span>W1</span>
                  <span>W2</span>
                  <span>W3</span>
                  <span>W4</span>
                </div>

              </div>

              {/* ALERT */}
              <div className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-100 text-lg font-black text-red-600">
                    !
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600">
                      Attention
                    </p>

                    <h3 className="font-black text-slate-800">
                      CX Alerts
                    </h3>
                  </div>

                </div>

                <div className="mt-6 space-y-3">

                  <Alert
                    title="Complaint meningkat"
                    description="Area Jabodetabek +14%"
                  />

                  <Alert
                    title="SLA perlu monitoring"
                    description="12 shipment approaching SLA"
                  />

                  <Alert
                    title="Negative sentiment"
                    description="Customer Voice +6%"
                  />

                </div>

                <button className="mt-5 w-full rounded-xl bg-red-50 py-3 text-xs font-black text-red-700 transition hover:bg-red-100">
                  View All Alerts
                </button>

              </div>

            </div>

            {/* ================= QUICK ACCESS ================= */}
            <div className="mt-6 rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm">

              <div className="mb-5">

                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600">
                  Quick Access
                </p>

                <h3 className="mt-1 text-lg font-black text-slate-800">
                  CX Tools
                </h3>

              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <QuickCard
                  icon="◈"
                  title="Complaint Management"
                  description="Monitor complaint"
                />

                <QuickCard
                  icon="◷"
                  title="SLA Monitoring"
                  description="Track SLA performance"
                />

                <QuickCard
                  icon="◉"
                  title="Customer Voice"
                  description="Analyze feedback"
                />

                <QuickCard
                  icon="▤"
                  title="Reports"
                  description="CX reporting center"
                />

              </div>

            </div>

            {/* ================= FOOTER ================= */}
            <footer className="mt-8 flex flex-col justify-between gap-2 border-t border-slate-200 pt-5 text-xs text-slate-400 sm:flex-row">

              <p>
                © 2026 Lion Parcel — Customer Experience
              </p>

              <p>
                CX Command Center • Internal Use Only
              </p>

            </footer>

          </div>
        </section>
      </div>
    </main>
  );
}


/* =====================================================
   HERO STAT
===================================================== */

function HeroStat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
      <p className="text-xl font-black">
        {value}
      </p>

      <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-red-100">
        {label}
      </p>
    </div>
  );
}


/* =====================================================
   KPI CARD
===================================================== */

function KpiCard({ title, value, change, icon }) {
  return (
    <div className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-red-100">

      <div className="flex items-start justify-between">

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-lg font-black text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
          {icon}
        </div>

        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-black text-emerald-600">
          {change}
        </span>

      </div>

      <p className="mt-5 text-xs font-bold text-slate-400">
        {title}
      </p>

      <p className="mt-1 text-3xl font-black tracking-tight text-slate-800">
        {value}
      </p>

      <div className="mt-4 h-1 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-red-700 to-red-400" />
      </div>

    </div>
  );
}


/* =====================================================
   ALERT
===================================================== */

function Alert({ title, description }) {
  return (
    <div className="group rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:border-red-100 hover:bg-red-50">

      <div className="flex items-start gap-3">

        <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-red-500 shadow-lg shadow-red-200" />

        <div>
          <p className="text-sm font-black text-slate-700 group-hover:text-red-700">
            {title}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {description}
          </p>
        </div>

      </div>

    </div>
  );
}


/* =====================================================
   QUICK CARD
===================================================== */

function QuickCard({ icon, title, description }) {
  return (
    <button className="group rounded-2xl border border-slate-200 bg-white p-4 text-left transition-all hover:-translate-y-1 hover:border-red-200 hover:bg-red-50 hover:shadow-lg hover:shadow-red-100">

      <div className="flex items-center gap-4">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-100 text-lg font-black text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
          {icon}
        </div>

        <div>
          <p className="text-sm font-black text-slate-700 group-hover:text-red-700">
            {title}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {description}
          </p>
        </div>

      </div>

    </button>
  );
}
