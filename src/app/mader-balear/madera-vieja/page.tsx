import { LandingPage } from "@/components/landing/LandingPage";
import { balearMaderaViejaLanding } from "@/lib/landing-data";

export default function Page() {
  return <LandingPage config={balearMaderaViejaLanding} />;
}
