import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Stack, Typography } from "@mui/material";
import AppLayout from "./layouts/AppLayout";
import QuickStartSection from "./components/page-elements/home/QuickStartSection";
import IndustryRecognition from "./components/page-elements/home/IndustryRecognition";

function App() {
  return (
    <div className="App">
      <AppLayout>
        <QuickStartSection />
        <IndustryRecognition />
      </AppLayout>
    </div>
  );
}

export default App;
