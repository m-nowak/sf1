"use client";

import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "HD", total: Math.floor(Math.random() * 5000) },
  { name: "OOF", total: Math.floor(Math.random() * 5000) },
  { name: "LV", total: Math.floor(Math.random() * 5000) },
  { name: "HV1", total: Math.floor(Math.random() * 5000) },
  { name: "HV2", total: Math.floor(Math.random() * 5000) },
  { name: "PLT", total: Math.floor(Math.random() * 5000) },
];

const Overview = (props: any) => {
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
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Overview;
