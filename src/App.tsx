import { RouterProvider } from "react-router-dom";
import { getRouter } from "./routes";
// import ParticlesAnimation from "./components/ParticlesAnimation";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const router = getRouter();
  return (
    <div className="">
      {/* <ParticlesAnimation /> */}
      <div className="relative z-100">
        <RouterProvider router={router} />
      </div>
      <Toaster />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
