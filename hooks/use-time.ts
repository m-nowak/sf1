// hooks/use-time.ts
import { useQuery } from '@tanstack/react-query';

const fetchTime = async () => {
  const response = await fetch('/api/time');
  if (!response.ok) {
    throw new Error('Failed to fetch time');
  }
  return response.json();
};

export const useTime = () => {
  return useQuery({ queryKey: ['time'], queryFn: fetchTime });
};
