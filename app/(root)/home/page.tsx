import BreakDownsCard from "@/components/shared/breakdowns-card";
import HeadCountCard from "@/components/shared/headcount-card";
import HealthSafetyCard from "@/components/shared/healthsafety-card";
import IdeasCard from "@/components/shared/ideas-card";
import ProductionCard from "@/components/shared/production-card";
import QualityCard from "@/components/shared/quality-card";

export default function HomeDashboard() {
  const data = [
    {
      name: "Jun 27",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jun 21",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jun 22",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jun 23",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jun 24",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jun 25",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jun 26",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
  ];

  return (
    <>
      <div className="p-8 flex justify-start w-full gap-8">
        <HealthSafetyCard />
        <QualityCard />
        <ProductionCard data={data} />
      </div>
      <div className="px-8 flex justify-start w-full gap-8 ">
        <BreakDownsCard />
        <HeadCountCard />
        <IdeasCard />
      </div>
    </>
  );
}
