import { LandingPage } from "@/components/landing/LandingPage";
import { balearFrentesCocinaLanding } from "@/lib/landing-data";

export default function Page() {
  return <LandingPage config={balearFrentesCocinaLanding} />;
}
