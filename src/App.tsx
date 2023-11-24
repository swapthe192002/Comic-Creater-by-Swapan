import React, { lazy, Suspense } from "react";
import "@/styles/global.css";
import { Toaster } from "./components/ui/toaster";
import Spinner from "./components/ui/spinner";
const DashBoard = lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <DashBoard />
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;
