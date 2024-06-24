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

const data = [
  {
    name: "June 18",
    total: 5,
  },
  {
    name: "June 19",
    total: 4,
  },
  {
    name: "June 20",
    total: 7,
  },
  {
    name: "June 21",
    total: 2,
  },
  {
    name: "June 22",
    total: 4,
  },
  {
    name: "Jun 23",
    total: 1,
  },
  {
    name: "Jun 24",
    total: 1,
  },
];

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

export function Overview() {
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
    <ResponsiveContainer width="100%" height={90}>
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

const BreakDownsCard = () => {
  return (
    <div>
      <Card className="w-[420px] h-[201px] pl-0">
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between text items-center py-2">
              <span>Breakdowns</span>
              <Button disabled variant="ghost">
                7 days
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">
          <Overview />
        </CardContent>
      </Card>
    </div>
  );
};

export default BreakDownsCard;
