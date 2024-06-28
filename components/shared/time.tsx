import { useTime } from "@/hooks/use-time";

const Time = () => {
  const { data, error, isLoading } = useTime();

  return (
    <div>
      {" "}
      {data ? (
        <p className="mt-4 text-lg">{data.currentTime} 1</p>
      ) : (
        <p className="mt-4 text-lg">Loading...</p>
      )}
    </div>
  );
};

export default Time;
