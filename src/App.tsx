import { useEffect, type ReactNode } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Security from "./pages/Security";
import Developers from "./pages/Developers";
import Integrations from "./pages/Integrations";
import { About, Contact } from "./pages/Company";
import ContactSales from "./pages/ContactSales";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { Dpa, Subprocessors } from "./pages/Dpa";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./theme/ThemeProvider";
import { useReveal } from "./site/useReveal";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (hash) {
      const id = window.setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ block: "start" }), 60);
      return () => window.clearTimeout(id);
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  useReveal(pathname);
  return null;
}

function AppRoutes() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/security" element={<Security />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-sales" element={<ContactSales />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/dpa" element={<Dpa />} />
        <Route path="/subprocessors" element={<Subprocessors />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
}

export default function App({ skipRouter, children }: { skipRouter?: boolean; children?: ReactNode } = {}) {
  if (skipRouter) return <>{children ?? <AppRoutes />}</>;
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
