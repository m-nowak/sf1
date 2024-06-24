import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import React from "react";

const IdeasPage = () => {
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
      <div className="flex items-start p-8">
        <div className="flex items-start space-x-2 w-full p-1 border-b py-4">
          <Avatar title="Michal Nowak">
            <AvatarImage src="" />
            <AvatarFallback>MN</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-auto ">
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground font-semibold text-sm leading-6">
                Michal Nowak
              </p>
              <p className="font-normal text-sm text-muted-foreground ">
                Yesterday
              </p>
            </div>

            <h2 className="t text-sm leading-4 truncate">
              change this to this
            </h2>
            <div className="flex items-center justify-between mt-2">
              <p className="text-muted-foreground font-semibold text-sm leading-6">
                Heading
              </p>
              <p className="font-normal text-sm text-muted-foreground ">
                In progress
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IdeasPage;
