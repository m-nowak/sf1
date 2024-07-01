import { useQuery } from '@tanstack/react-query';
const Time: React.FC = () => {
  const { data, error, isLoading } = useQuery<any, Error, any>({
    queryKey: 'time',
    queryFn: async () => {
      const response = await fetch('/api/time');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    refetchInterval: 5000, // Refetch every 5 seconds
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
{/*       Current Time: {data?.currentTime} */}h
    </div>
  );
};

export default Time;
