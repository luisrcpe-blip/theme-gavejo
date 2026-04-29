import { LandingPage } from "@/components/landing/LandingPage";
import { suelosInteriorLanding } from "@/lib/landing-data";

export default function Page() {
  return <LandingPage config={suelosInteriorLanding} />;
}
