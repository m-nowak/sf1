import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const IdeasPage = () => {
  return (
    <>
      {" "}
      <div className="flex items-start p-8">
        <div className="flex items-start space-x-2  p-1 border-b py-4">
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
