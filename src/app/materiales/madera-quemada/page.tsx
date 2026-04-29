import { LandingPage } from "@/components/landing/LandingPage";
import { maderaQuemadaLanding } from "@/lib/landing-data";

export default function Page() {
  return <LandingPage config={maderaQuemadaLanding} />;
}
