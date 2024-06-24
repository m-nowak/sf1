"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

const CertificationsCard = () => {
  return (
    <div>
      <Card className="w-[420px] h-[201px]">
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between text items-center py-2">
              <span>Certifications</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src="/assets/images/5s-logo.png"
            width={42}
            height={42}
            alt="5s"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default CertificationsCard;
