"use client";
import { useTime } from "@/hooks/use-time";
import { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState<string | null>(null);
  const { data, error, isLoading } = useTime();

  return (
    <div>
      {" "}
      {data ? (
        <p className="mt-4 text-lg">{data.currentTime}</p>
      ) : (
        <p className="mt-4 text-lg">Loading...</p>
      )}
    </div>
  );
};

export default Time;
