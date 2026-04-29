import { LandingPage } from "@/components/landing/LandingPage";
import { vigueriaLanding } from "@/lib/landing-data";

export default function Page() {
  return <LandingPage config={vigueriaLanding} />;
}
