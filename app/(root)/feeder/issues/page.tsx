import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import React from "react";

const IssuesPage = () => {
  return (
    <>
      <div className="flex justify-between items-center px-8 pt-8 ">
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Quality issues</TabsTrigger>
            <TabsTrigger value="draft">Tooling issues</TabsTrigger>
            <TabsTrigger value="archived">Others</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="relative ml-auto flex-1 md:grow-0 border-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>
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
    </>
  );
};

export default IssuesPage;
