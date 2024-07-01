import { useQuery } from '@tanstack/react-query';
import { fetchTime } from '@/hooks/use-time';

const Time = () => {
  const { data, error, isLoading } = useQuery<any, Error>({
    queryKey: ['time'],
    queryFn: fetchTime,
    refetchInterval: 5000, // Refetch every 5 seconds
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Current Time</h1>
      <p>{data}</p>
    </div>
  );
};

export default Time;
