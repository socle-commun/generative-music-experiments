import { useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router";

import AppProviders from "@/components/global/AppProviders";

import RootLayout from "@/routes/layout";
import RootError from "@/routes/error";
import RootPage from "@/routes/page";
import ExperimentIdPage from "@/routes/experiments/[id]/page";
import SettingsPage from "@/routes/settings/page";

import toggleDarkClass from "@/utilities/toggleDarkClass";

export default function App() {
  useEffect(() => {
    toggleDarkClass();
  }, []);

  return (
    <AppProviders>
      <BrowserRouter basename={process.env.NODE_ENV === "production" ? "/generative-music-experiments" : "/"}>
        <Routes>

          <Route path="" element={<RootLayout />}>
            <Route index element={<RootPage />} />

            <Route path="experiments">
              <Route path=":id" element={<ExperimentIdPage />} />
            </Route>

            <Route path="settings" element={<SettingsPage />} />

            <Route path="*" element={<RootError />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProviders>
  )
}
