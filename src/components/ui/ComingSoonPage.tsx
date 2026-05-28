import Link from "next/link";
import { PublicHeader } from "@/components/ui/PublicHeader";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { Locale, localizePath } from "@/lib/i18n";

type ComingSoonPageProps = {
  title?: string;
  eyebrow?: string;
  locale?: Locale;
};

export function ComingSoonPage({
  title = "Pagina en preparacion",
  eyebrow = "Proximamente",
  locale = "es"
}: ComingSoonPageProps) {
  const bodyCopy =
    locale === "en"
      ? "We are preparing this section before publishing it. In the meantime, you can return home or review the active thermo treated wood page."
      : "Estamos dejando esta seccion lista antes de publicarla. Mientras tanto, puedes volver al inicio o revisar la pagina activa de madera termo tratada.";

  return (
    <>
      <PublicHeader />
      <main className="coming-soon-page">
        <section className="container coming-soon-inner">
          <p className="chip">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{bodyCopy}</p>
          <div className="coming-soon-actions">
            <Link href={localizePath("/", locale)} className="btn btn-primary">
              {locale === "en" ? "Go home" : "Ir al inicio"}
            </Link>
            <Link href={localizePath("/materiales/termo-tratada", locale)} className="btn btn-secondary">
              {locale === "en" ? "View thermowood" : "Ver termo tratada"}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
