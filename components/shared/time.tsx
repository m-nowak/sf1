import { useQuery } from '@tanstack/react-query';
import { fetchTime } from '@/hooks/use-time';

const Time: React.FC = () => {
  const { data, error, isLoading } = useQuery(
    {
  queryKey: ['todos'],
  queryFn: async () => {
    const response = await fetch('api/time')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  },
}
 
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
