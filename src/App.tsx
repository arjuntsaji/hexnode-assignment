import React from "react";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import QuickStartSection from "./components/page-elements/home/QuickStartSection";
import IndustryRecognition from "./components/page-elements/home/IndustryRecognition";
import KioskModeSection from "./components/page-elements/home/KioskModeSection";
import KioskFeaturesOverviewSection from "./components/page-elements/home/KioskFeaturesOverviewSection";
import HexnodeValueCard from "./components/page-elements/home/HexnodeValueCard";
import ClientShowcase from "./components/page-elements/home/ClientShowcase";
import PlatFormSupport from "./components/page-elements/home/PlatFormSupport";
import FreeTrialSection from "./components/page-elements/home/FreeTrialSection";

function App() {
  return (
    <div className="App">
      <AppLayout>
        <QuickStartSection />
        <IndustryRecognition />
        <KioskModeSection />
        <KioskFeaturesOverviewSection />
        <HexnodeValueCard />
        <ClientShowcase />
        <PlatFormSupport />
        <FreeTrialSection />
      </AppLayout>
    </div>
  );
}

export default App;
