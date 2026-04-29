import { LandingPage } from "@/components/landing/LandingPage";
import { balearTablerosLanding } from "@/lib/landing-data";

export default function Page() {
  return <LandingPage config={balearTablerosLanding} />;
}
