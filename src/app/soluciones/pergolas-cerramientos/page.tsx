import { LandingPage } from "@/components/landing/LandingPage";
import { pergolasLanding } from "@/lib/landing-data";

export default function Page() {
  return <LandingPage config={pergolasLanding} />;
}
