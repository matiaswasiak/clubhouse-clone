import "./App.css";
import PlanLayout from "./pages/Layouts/PlanLayout";
import Welcome from "./pages/Welcome";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";

// <Playlayout>
function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/invite" element={<PhoneConfirmation />} />
          <Route path="/code_confirm" element={<CodeConfirm />} />
        </Routes>
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
