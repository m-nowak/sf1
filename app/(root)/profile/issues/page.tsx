import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import Time from "@/components/shared/time";

import { useQuery } from '@tanstack/react-query';
  
  const fetchTime = async () => {
  const response = await fetch("https://sf1.vercel.app/api/time", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch time");
  }
  return response.json();
};
  export const dynamic = "force-dynamic";
  const IssuesPage = async () => {
    const thisTime = await fetchTime();

      const { data, error, isLoading } = useQuery({
    queryKey: ['time'],
    queryFn: async () => {
      const response = await fetch('https://sf1.vercel.app/api/time');
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
        <div className="p-4">
          {thisTime.currentTime} hej
         <Time /> 
        </div>
  
        <Table className="mt-4 ml-8 max-w-7xl p-2">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Operator</TableHead>
              <TableHead>M/C</TableHead>
              <TableHead>MO</TableHead>
              <TableHead>Operation</TableHead>
              <TableHead>GAP</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">A01127</TableCell>
              <TableCell>156</TableCell>
              <TableCell>678799</TableCell>
              <TableCell>GV</TableCell>
              <TableCell>MS1</TableCell>
              <TableCell>Quality</TableCell>
              <TableCell>shank u/s</TableCell>
              <TableCell className="text-right">In progress</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">A01127</TableCell>
              <TableCell>1566</TableCell>
              <TableCell></TableCell>
              <TableCell>GV</TableCell>
              <TableCell>SD</TableCell>
              <TableCell>Tooling</TableCell>
              <TableCell>no cutting tips</TableCell>
              <TableCell className="text-right">In progress</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  };
  
  export default IssuesPage;
