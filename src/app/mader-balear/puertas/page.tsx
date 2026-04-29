import { LandingPage } from "@/components/landing/LandingPage";
import { balearPuertasLanding } from "@/lib/landing-data";

export default function Page() {
  return <LandingPage config={balearPuertasLanding} />;
}
