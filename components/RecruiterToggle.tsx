"use client";

import { useEffect, useState } from "react";

export default function RecruiterToggle({ copy }: { copy: any }) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("recruiterMode");
    const enabled = saved === "1";
    setOn(enabled);
    document.documentElement.dataset.recruiter = enabled ? "1" : "0";
  }, []);

  const toggle = () => {
    const next = !on;
    setOn(next);
    localStorage.setItem("recruiterMode", next ? "1" : "0");
    document.documentElement.dataset.recruiter = next ? "1" : "0";
  };

  return (
    <button
      onClick={toggle}
      className="hidden rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 md:inline-flex"
      aria-pressed={on}
      title={copy.hero.recruiterMode}
    >
      {copy.hero.recruiterMode}
      <span className="ml-2 text-white/50">{on ? "ON" : "OFF"}</span>
    </button>
  );
}