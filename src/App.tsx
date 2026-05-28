/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { Home } from "./pages/Home";
import { ProfileCardPage } from "./pages/ProfileCardPage";
import { AboutPage } from "./pages/AboutPage";
import { WorksPage } from "./pages/WorksPage";
import { FreelancePage } from "./pages/FreelancePage";
import { Chatbot } from "./components/Chatbot";

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      {/* @ts-ignore */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<ProfileCardPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/freelance" element={<FreelancePage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
      <Chatbot />
    </BrowserRouter>
  );
}
