import { LandingPage } from "@/components/landing/LandingPage";
import { balearDecoracionLanding } from "@/lib/landing-data";

export default function Page() {
  return <LandingPage config={balearDecoracionLanding} />;
}
