import { LandingPage } from "@/components/landing/LandingPage";
import { deckingLanding } from "@/lib/landing-data";

export default function DeckingExteriorPage() {
  return <LandingPage config={deckingLanding} />;
}
