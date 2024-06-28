// app/time/page.tsx
"use client";

import { useState, useEffect } from "react";

export default function TimeComponent() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTime() {
      const res = await fetch("/api/time");
      const data = await res.json();
      setTime(data.currentTime);
    }

    fetchTime();

    // Optional: Refresh time every minute
    const interval = setInterval(fetchTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold">Current Time</h1>
        {time ? (
          <p className="mt-4 text-lg">{time}</p>
        ) : (
          <p className="mt-4 text-lg">Loading...</p>
        )}
      </div>
    </div>
  );
}
