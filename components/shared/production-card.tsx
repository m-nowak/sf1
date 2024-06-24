"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "../ui/button";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-muted p-8">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export function Overview({ data }: any) {
  const originalConsoleError = console.error;
  console.error = (message, ...args) => {
    if (
      typeof message === "string" &&
      message.includes("defaultProps will be removed")
    ) {
      return;
    }
    originalConsoleError.apply(console, [message, ...args]);
  };
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey="total"
          fill="fill-primary"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

const ProductionCard = ({ data }: any) => {
  return (
    <>
      <Card className="w-[420px] h-[381px]">
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between items-center py-2">
              <span>Production</span>
              <Button disabled variant="ghost">
                7 days
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">
          <Overview data={data} />
        </CardContent>
      </Card>
    </>
  );
};

export default ProductionCard;
