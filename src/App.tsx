import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Stack, Typography } from "@mui/material";
import AppLayout from "./layouts/AppLayout";
import QuickStartSection from "./components/page-elements/home/QuickStartSection";
import IndustryRecognition from "./components/page-elements/home/IndustryRecognition";
import KioskModeSection from "./components/page-elements/home/KioskModeSection";
import KioskFeaturesOverviewSection from "./components/page-elements/home/KioskFeaturesOverviewSection";

function App() {
  return (
    <div className="App">
      <AppLayout>
        <QuickStartSection />
        <IndustryRecognition />
        <KioskModeSection />
        <KioskFeaturesOverviewSection />
      </AppLayout>
    </div>
  );
}

export default App;
