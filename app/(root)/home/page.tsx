"use client";

import BreakDownsCard from "@/components/shared/breakdowns-card";
import HeadCountCard from "@/components/shared/headcount-card";
import HealthSafetyCard from "@/components/shared/healthsafety-card";
import IdeasCard from "@/components/shared/ideas-card";
import ProductionCard from "@/components/shared/production-card";
import QualityCard from "@/components/shared/quality-card";

export default function HomeDashboard() {
  return (
    <>
      <div className="p-8 flex justify-start w-full gap-8">
        <HealthSafetyCard />
        <QualityCard />
        <ProductionCard />
      </div>
      <div className="px-8 flex justify-start w-full gap-8 ">
        <BreakDownsCard />
        <HeadCountCard />
        <IdeasCard />
      </div>
    </>
  );
}
