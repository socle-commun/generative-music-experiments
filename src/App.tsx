import { BrowserRouter, Route, Routes } from "react-router";

import AppProviders from "@/components/global/AppProviders";

import RootLayout from "@/routes/layout";
import RootError from "@/routes/error";
import RootPage from "@/routes/page";

export default function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <Routes>

          <Route path="" element={<RootLayout />}>
            <Route index element={<RootPage />} />

            <Route path="*" element={<RootError />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProviders>
  )
}
