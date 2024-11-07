import React from "react";
import AppBar from "../components/ui/app-bar/AppBar";

function AppLayout({ children }: { children: React.ReactNode }) {
  return <AppBar>{children}</AppBar>;
}

export default AppLayout;
