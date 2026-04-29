import { LandingPage } from "@/components/landing/LandingPage";
import { balearRevestimientosLanding } from "@/lib/landing-data";

export default function Page() {
  return <LandingPage config={balearRevestimientosLanding} />;
}
