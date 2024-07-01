// hooks/use-time.ts
import { useQuery } from '@tanstack/react-query';

const fetchTime = async (): Promise<string> => {
  const response = await fetch('/api/time', { cache: "no-cache" });
  if (!response.ok) {
    throw new Error('Failed to fetch time');
  }
  return response.json();
};

export const useTime = () => {
  return useQuery<string, Error>({
    queryKey: ['time'], queryFn: fetchTime,
    refetchOnMount: 'always', // Refetch data every time the component mounts
    refetchOnWindowFocus: true, // Refetch data when the window regains focus
  });
};
