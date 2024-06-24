import MachineCard from "@/components/shared/machine-card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import React from "react";

const MachinesPage = () => {
  return (
    <>
      <div className="flex justify-between items-center px-8 pt-8 ">
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">GAP1</TabsTrigger>
            <TabsTrigger value="draft">GAP2</TabsTrigger>
            <TabsTrigger value="archived">GAP3</TabsTrigger>
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
      <div className="p-8 flex justify-start w-full gap-8 ">
        <MachineCard mc="1678" />
        <MachineCard mc="567" />
      </div>
    </>
  );
};

export default MachinesPage;
