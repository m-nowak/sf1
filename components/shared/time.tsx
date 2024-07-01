"use client";
import { useTime } from "@/hooks/use-time";
export const dynamic = "force-dynamic";
const Time = () => {
  const { data, error, isLoading } = useTime();

  return (
    <div>
{/*       {" "}
      {data ? (
        <p className="mt-4 text-lg">{data.currentTime}112</p>
      ) : (
        <p className="mt-4 text-lg">Loading...</p>
      )} */}
    </div>
  );
};

export default Time;
