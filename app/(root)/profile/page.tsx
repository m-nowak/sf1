import CertificationsCard from "@/components/shared/certifications-card";
import HealthSafetyCard from "@/components/shared/healthsafety-card";
import IdeasCard from "@/components/shared/ideas-card";
import IssuesCard from "@/components/shared/issues-card";
import PointsCard from "@/components/shared/points-card";
import ProductionCard from "@/components/shared/production-card";
import QualityCard from "@/components/shared/quality-card";
import TransactionsCard from "@/components/shared/transacrions-card";

export const dynamic = "force-dynamic";

export default function ProfilePage({}) {
  return (
    <>
      <div className="p-8 flex justify-start w-full gap-8">
        <CertificationsCard />
        <IdeasCard />
        <PointsCard />
      </div>
      <div className="px-8 flex justify-start w-full gap-8 ">
        <HealthSafetyCard />
        <QualityCard />
        <ProductionCard />
      </div>
      <div className="p-8 flex justify-start w-full gap-8 ">
        <IssuesCard />
        <TransactionsCard />
      </div>
    </>
  );
}
