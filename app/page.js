"use client";

import { useState } from "react";

const kpis = [
  {
    title: "CX Score",
    value: "92.8%",
    change: "+4.6%",
    label: "vs last month",
    icon: "✦",
    type: "red",
  },
  {
    title: "Customer Satisfaction",
    value: "94.2%",
    change: "+2.8%",
    label: "excellent",
    icon: "♥",
    type: "blue",
  },
  {
    title: "Resolution Rate",
    value: "96.7%",
    change: "+5.1%",
    label: "resolved within SLA",
    icon: "✓",
    type: "green",
  },
  {
    title: "Open Cases",
    value: "1,284",
    change: "-12.4%",
    label: "vs yesterday",
    icon: "◉",
    type: "orange",
  },
];

const channels = [
  { name: "WhatsApp", value: 42, count: "5,842", icon: "◈" },
  { name: "Phone", value: 28, count: "3,921", icon: "◉" },
  { name: "Email", value: 18, count: "2,486", icon: "✉" },
  { name: "Social Media", value: 12, count: "1,653", icon: "◎" },
];

const alerts = [
  {
    title: "SLA Breach Risk",
    description: "127 cases approaching SLA limit",
    time: "5 min ago",
    level: "critical",
  },
  {
    title: "Customer Sentiment",
    description: "Negative sentiment increased in Bandung",
    time: "18 min ago",
    level: "warning",
  },
  {
    title: "Service Recovery",
    description: "Jakarta region improved by 8.4%",
    time: "32 min ago",
    level: "success",
  },
];

export default function Home() {
  const [active, setActive] = useState("Overview");

  return (
    <main className="min-h-screen bg-[#f4f5f7] text-[#171717]">
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
          background: #f4f5f7;
        }

        .glass {
          background: rgba(255,255,255,.84);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .shadow-soft {
          box-shadow:
            0 12px 35px rgba(15, 23, 42, .06),
            0 2px 8px rgba(15, 23, 42, .03);
        }

        .grid-bg {
          background-image:
            linear-gradient(rgba(210, 214, 220, .28) 1px, transparent 1px),
            linear-gradient(90deg, rgba(210, 214, 220, .28) 1px, transparent 1px);
          background-size: 34px 34px;
        }
      `}</style>

      {/* TOP HEADER */}
      <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/90 backdrop-blur-xl">
        <div className="flex h-[72px] items-center justify-between px-6 lg:px-8">

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#d71920] text-xl font-black text-white shadow-lg shadow-red-200">
              LP
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-[17px] font-extrabold tracking-tight">
                  CX Command Center
                </h1>
                <span className="rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#d71920]">
                  Internal
                </span>
              </div>

              <p className="text-xs text-gray-500">
                Customer Experience • Performance Intelligence
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span className="text-xs font-semibold text-gray-600">
                Live Data
              </span>
            </div>

            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50">
              🔔
            </button>

            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d71920] text-xs font-bold text-white">
                CX
              </div>
              <div className="text-left">
                <p className="text-xs font-bold">CX Team</p>
                <p className="text-[10px] text-gray-500">Customer Experience</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">

        {/* SIDEBAR */}
        <aside className="hidden min-h-[calc(100vh-72px)] w-[240px] border-r border-gray-200 bg-[#18191b] p-4 lg:block">
          <div className="mb-7 px-3 pt-2">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-gray-500">
              Command Center
            </p>
          </div>

          <nav className="space-y-1">
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
                onClick={() => setActive(name)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${
                  active === name
                    ? "bg-[#d71920] text-white shadow-lg shadow-red-950/30"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="w-5 text-center text-base">{icon}</span>
                {name}
              </button>
            ))}
          </nav>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[.04] p-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
              Today
            </p>
            <p className="mt-2 text-2xl font-black text-white">20 Aug</p>
            <p className="mt-1 text-xs text-gray-500">
              Thursday • 11:32 WIB
            </p>
          </div>

          <div className="absolute bottom-5 hidden px-3 lg:block">
            <p className="text-[10px] text-gray-600">
              Lion Parcel • Customer Experience
            </p>
          </div>
        </aside>

        {/* CONTENT */}
        <section className="min-w-0 flex-1">

          {/* HERO */}
          <div className="relative overflow-hidden bg-[#191a1c] px-6 py-8 text-white lg:px-10">
            <div className="absolute inset-0 grid-bg opacity-20" />

            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#d71920]/20 blur-3xl" />

            <div className="relative">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full bg-[#d71920] px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                      Customer Experience
                    </span>
                    <span className="text-xs text-gray-500">
                      / Command Center
                    </span>
                  </div>

                  <h2 className="max-w-3xl text-3xl font-black tracking-tight md:text-4xl">
                    Good morning, CX Team.
                    <span className="block text-gray-400">
                      Here&apos;s your experience pulse.
                    </span>
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
                    Monitor customer sentiment, service quality, SLA,
                    resolution performance and operational experience in one
                    place.
                  </p>
                </div>

                <button className="rounded-xl bg-white px-5 py-3 text-xs font-bold text-[#171717] shadow-xl transition hover:bg-gray-100">
                  Export Report →
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6 p-5 lg:p-8">

            {/* KPI */}
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {kpis.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-soft transition hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold text-gray-500">
                        {item.title}
                      </p>
                      <p className="mt-2 text-3xl font-black tracking-tight">
                        {item.value}
                      </p>
                    </div>

                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold ${
                        item.type === "red"
                          ? "bg-red-50 text-[#d71920]"
                          : item.type === "blue"
                          ? "bg-blue-50 text-blue-600"
                          : item.type === "green"
                          ? "bg-green-50 text-green-600"
                          : "bg-orange-50 text-orange-600"
                      }`}
                    >
                      {item.icon}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="rounded-md bg-green-50 px-2 py-1 text-[10px] font-bold text-green-600">
                      {item.change}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MAIN ANALYTICS */}
            <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">

              {/* EXPERIENCE TREND */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">

                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold text-gray-500">
                      Experience Trend
                    </p>
                    <h3 className="mt-1 text-lg font-extrabold">
                      Customer Experience Index
                    </h3>
                  </div>

                  <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-600">
                    Last 30 Days ▾
                  </button>
                </div>

                <div className="mt-8 flex h-64 items-end gap-2 border-b border-gray-100">
                  {[48, 56, 53, 62, 58, 66, 61, 72, 69, 75, 71, 82, 78, 88, 84, 92, 89, 94].map(
                    (height, i) => (
                      <div
                        key={i}
                        className="group relative flex h-full flex-1 items-end"
                      >
                        <div
                          className="w-full rounded-t-md bg-gradient-to-t from-[#d71920] to-[#f05a60] opacity-80 transition group-hover:opacity-100"
                          style={{ height: `${height}%` }}
                        />
                      </div>
                    )
                  )}
                </div>

                <div className="mt-3 flex justify-between text-[10px] text-gray-400">
                  <span>01 Aug</span>
                  <span>07 Aug</span>
                  <span>14 Aug</span>
                  <span>20 Aug</span>
                </div>
              </div>

              {/* CX SCORE */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-gray-500">
                      Experience Health
                    </p>
                    <h3 className="mt-1 text-lg font-extrabold">
                      Overall CX Health
                    </h3>
                  </div>

                  <span className="rounded-full bg-green-50 px-3 py-1 text-[10px] font-bold text-green-600">
                    Healthy
                  </span>
                </div>

                <div className="my-8 flex justify-center">
                  <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-[14px] border-gray-100">
                    <div className="absolute inset-[-14px] rounded-full border-[14px] border-[#d71920] border-r-transparent border-b-transparent rotate-[25deg]" />

                    <div className="text-center">
                      <p className="text-4xl font-black">92.8</p>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                        CX Score
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-xl bg-gray-50 p-3">
                    <p className="text-lg font-black">94%</p>
                    <p className="text-[9px] text-gray-400">Satisfaction</p>
                  </div>
                  <div className="rounded-xl bg-gray-50 p-3">
                    <p className="text-lg font-black">97%</p>
                    <p className="text-[9px] text-gray-400">Resolution</p>
                  </div>
                  <div className="rounded-xl bg-gray-50 p-3">
                    <p className="text-lg font-black">91%</p>
                    <p className="text-[9px] text-gray-400">Sentiment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CHANNEL + ALERT */}
            <div className="grid gap-6 lg:grid-cols-2">

              {/* CHANNELS */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
                <div className="flex justify-between">
                  <div>
                    <p className="text-xs font-semibold text-gray-500">
                      Customer Voice
                    </p>
                    <h3 className="mt-1 text-lg font-extrabold">
                      Contact Channels
                    </h3>
                  </div>

                  <span className="text-xs font-bold text-[#d71920]">
                    13,902 interactions
                  </span>
                </div>

                <div className="mt-6 space-y-5">
                  {channels.map((channel) => (
                    <div key={channel.name}>
                      <div className="mb-2 flex justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-100 font-bold">
                            {channel.icon}
                          </span>
                          <span className="font-semibold">
                            {channel.name}
                          </span>
                        </div>

                        <span className="font-bold text-gray-500">
                          {channel.count}
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="h-full rounded-full bg-[#d71920]"
                          style={{ width: `${channel.value * 2.1}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ALERTS */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-gray-500">
                      Real-time Monitoring
                    </p>
                    <h3 className="mt-1 text-lg font-extrabold">
                      CX Alerts
                    </h3>
                  </div>

                  <span className="flex items-center gap-2 text-[10px] font-bold text-green-600">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                    LIVE
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {alerts.map((alert) => (
                    <div
                      key={alert.title}
                      className="flex gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4"
                    >
                      <div
                        className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                          alert.level === "critical"
                            ? "bg-[#d71920]"
                            : alert.level === "warning"
                            ? "bg-orange-500"
                            : "bg-green-500"
                        }`}
                      />

                      <div className="min-w-0 flex-1">
                        <div className="flex justify-between gap-3">
                          <p className="text-xs font-bold">
                            {alert.title}
                          </p>
                          <span className="whitespace-nowrap text-[9px] text-gray-400">
                            {alert.time}
                          </span>
                        </div>

                        <p className="mt-1 text-[11px] leading-5 text-gray-500">
                          {alert.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="mt-4 w-full rounded-xl border border-gray-200 py-3 text-xs font-bold text-gray-600 transition hover:bg-gray-50">
                  View All Alerts →
                </button>
              </div>
            </div>

            {/* FOOTER INSIGHT */}
            <div className="relative overflow-hidden rounded-2xl bg-[#d71920] p-6 text-white shadow-xl shadow-red-200">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

              <div className="relative flex flex-col justify-between gap-5 md:flex-row md:items-center">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[.2em] text-red-100">
                    CX Intelligence
                  </p>

                  <h3 className="mt-2 text-xl font-black">
                    Experience is our competitive advantage.
                  </h3>

                  <p className="mt-1 max-w-2xl text-xs leading-5 text-red-100">
                    Turn customer feedback into actionable insight and
                    measurable service improvement.
                  </p>
                </div>

                <button className="rounded-xl bg-white px-5 py-3 text-xs font-black text-[#d71920]">
                  Open CX Analytics →
                </button>
              </div>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}
