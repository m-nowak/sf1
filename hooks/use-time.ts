// hooks/use-time.ts
import { useQuery } from '@tanstack/react-query';

export const fetchTime = async (): Promise<string> => {
  const response = await fetch('https://sf1.vercel.app/api/time', { cache: "no-cache" });
  if (!response.ok) {
    throw new Error('Failed to fetch time');
  }
  const data = await response.json();
  return data;
};

export const useTime = () => {
  return useQuery<string, Error>({
    queryKey: ['time'], queryFn: fetchTime,
    refetchOnMount: 'always', // Refetch data every time the component mounts
    refetchOnWindowFocus: true, // Refetch data when the window regains focus
  });
};
