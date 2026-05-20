import Link from "next/link";
import { PublicHeader } from "@/components/ui/PublicHeader";
import { SiteFooter } from "@/components/ui/SiteFooter";

type ComingSoonPageProps = {
  title?: string;
  eyebrow?: string;
};

export function ComingSoonPage({
  title = "Pagina en preparacion",
  eyebrow = "Proximamente"
}: ComingSoonPageProps) {
  return (
    <>
      <PublicHeader />
      <main className="coming-soon-page">
        <section className="container coming-soon-inner">
          <p className="chip">{eyebrow}</p>
          <h1>{title}</h1>
          <p>
            Estamos dejando esta seccion lista antes de publicarla. Mientras tanto, puedes volver al inicio o revisar la pagina activa de madera termo tratada.
          </p>
          <div className="coming-soon-actions">
            <Link href="/" className="btn btn-primary">Ir al inicio</Link>
            <Link href="/materiales/termo-tratada" className="btn btn-secondary">Ver termo tratada</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
