import "./App.css";
import PlanLayout from "./pages/Layouts/PlanLayout";
import Welcome from "./pages/Welcome";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";
import AllowNotification from "./pages/AllowNotification";
import AppLayout from "./pages/Layouts/AppLayout";
import Home from "./pages/Home";

// <Playlayout>
function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/invite" element={<PhoneConfirmation />} />
          <Route path="/code_confirm" element={<CodeConfirm />} />
          <Route path="/allow_notification" element={<AllowNotification />} />
        </Routes>
      </PlanLayout>

      <AppLayout>
        <Routes>
          <Route path="/home" element={() => <Home />}></Route>
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
