import React from "react";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./components/page-elements/home/Page";

function App() {
  return (
    <div className="App">
      <AppLayout>
        <HomePage />
      </AppLayout>
    </div>
  );
}

export default App;
