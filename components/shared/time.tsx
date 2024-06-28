"use client";
import { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTime() {
      const res = await fetch("https://sf1.vercel.app/api/time", {
        cache: "no-store",
      });
      const data = await res.json();
      setTime(data.currentTime);
    }

    fetchTime();
  }, []);
  return (
    <div>
      {" "}
      {time ? (
        <p className="mt-4 text-lg">{time}</p>
      ) : (
        <p className="mt-4 text-lg">Loading...</p>
      )}
    </div>
  );
};

export default Time;
