import { ComingSoonPage } from "@/components/ui/ComingSoonPage";

const englishRoutes = [
  ["proximamente"],
  ["soluciones"],
  ["soluciones", "fachadas"],
  ["soluciones", "decking-exterior"],
  ["soluciones", "revestimientos-interiores"],
  ["soluciones", "pergolas-cerramientos"],
  ["soluciones", "suelos-interior"],
  ["materiales"],
  ["materiales", "termo-tratada"],
  ["materiales", "madera-quemada"],
  ["materiales", "vigueria"],
  ["mader-balear"],
  ["mader-balear", "madera-vieja"],
  ["mader-balear", "puertas"],
  ["mader-balear", "revestimientos"],
  ["mader-balear", "tableros-reclaimed"],
  ["proyectos"],
  ["blog"],
  ["contacto"],
  ["privacidad"]
];

export function generateStaticParams() {
  return englishRoutes.map((slug) => ({ slug }));
}

export default function EnglishComingSoonRoute() {
  return <ComingSoonPage locale="en" title="Page in preparation" eyebrow="Coming soon" />;
}
