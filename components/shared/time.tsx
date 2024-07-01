import { useQuery } from '@tanstack/react-query';
import { fetchTime } from '@/hooks/use-time';

const Time: React.FC = () => {
  const { data, error, isLoading } = useQuery(
    'time',
    fetchTime,
    { refetchInterval: 5000 } // Refetch every 5 seconds
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      Current Time: {data?.currentTime}
    </div>
  );
};
export default Time;
