import React from "react";
import QuickStartSection from "./QuickStartSection";
import IndustryRecognition from "./IndustryRecognition";
import KioskModeSection from "./KioskModeSection";
import KioskFeaturesOverviewSection from "./KioskFeaturesOverviewSection";
import HexnodeValueCard from "./HexnodeValueCard";
import ClientShowcase from "./ClientShowcase";
import PlatFormSupport from "./PlatFormSupport";
import FreeTrialSection from "./FreeTrialSection";

function HomePage() {
  return (
    <>
      <QuickStartSection />
      <IndustryRecognition />
      <KioskModeSection />
      <KioskFeaturesOverviewSection />
      <HexnodeValueCard />
      <ClientShowcase />
      <PlatFormSupport />
      <FreeTrialSection />
    </>
  );
}

export default React.memo(HomePage);
