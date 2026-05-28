import Link from "next/link";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { HeroCoverCarousel } from "@/components/ui/HeroCoverCarousel";
import { NeonPlaceholder } from "@/components/ui/NeonPlaceholder";
import { PublicHeader } from "@/components/ui/PublicHeader";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { Reveal } from "@/components/ui/Reveal";
import { Locale, localizePath } from "@/lib/i18n";

type HomePageTemplateProps = {
  locale: Locale;
};

type HomeCopy = {
  heroChip: string;
  heroTitle: string;
  heroText: string;
  primaryCta: string;
  secondaryCta: string;
  routeKicker: string;
  routeTitle: string;
  routeLinks: string[];
  miniPoints: { title: string; text: string }[];
  kpiItems: { kicker: string; value: string; description: string }[];
  solutionKicker: string;
  solutionTitle: string;
  solutionText: string;
  solutions: { title: string; href: string; caption: string; assetKey: string }[];
  materialsKicker: string;
  materialsTitle: string;
  materialCards: { title: string; copy: string; placeholder: string; assetKey: string }[];
  contactKicker: string;
  contactTitle: string;
  contactText: string;
  workflow: { title: string; text: string }[];
  contactCta: string;
  blogCta: string;
  finalChip: string;
  finalTitle: string;
  finalText: string;
};

const HOME_COPY: Record<Locale, HomeCopy> = {
  es: {
    heroChip: "Maderas Gavejo",
    heroTitle: "Madera para fachadas, terrazas e interiores con criterio tecnico",
    heroText:
      "Soluciones para arquitectura exterior e interior: fachadas ventiladas, decking, revestimientos, madera termo tratada, madera quemada y piezas recuperadas con identidad mediterranea.",
    primaryCta: "Solicitar informacion",
    secondaryCta: "Ver soluciones",
    routeKicker: "Rutas principales",
    routeTitle: "Elige por aplicacion o dejanos orientar el proyecto",
    routeLinks: ["Ver landing principal", "Ver todas las soluciones", "Contactar ahora"],
    miniPoints: [
      {
        title: "Arquitectura",
        text: "Materiales con lectura sobria para prescriptores, estudios y promotores."
      },
      {
        title: "Tecnica",
        text: "Sistemas de instalacion, fijacion oculta y criterio de mantenimiento."
      },
      {
        title: "Contacto",
        text: "Consulta directa para orientar material, sistema y siguiente paso."
      }
    ],
    kpiItems: [
      {
        kicker: "Especialistas",
        value: "Madera tecnica",
        description: "Soluciones para exterior, interior, fachadas, tarimas y revestimientos."
      },
      {
        kicker: "Materiales",
        value: "Tantimber",
        description: "Madera termo tratada con estabilidad, durabilidad y comportamiento controlado."
      },
      {
        kicker: "Sistemas",
        value: "Grad",
        description: "Fijacion oculta, alineacion precisa y acabados limpios cuando el proyecto lo requiere."
      },
      {
        kicker: "Contacto",
        value: "Directo",
        description: "Formulario y WhatsApp para valorar cada proyecto con criterio tecnico."
      }
    ],
    solutionKicker: "Soluciones",
    solutionTitle: "Tres puertas claras para elegir la solucion adecuada",
    solutionText:
      "Maderas, tableros y contract se presentan como tres entradas visuales para orientar cada necesidad de obra.",
    solutions: [
      {
        title: "Maderas",
        href: "/materiales",
        caption: "Madera termotratada, quemada y recuperada para exterior, interior y proyectos con identidad.",
        assetKey: "home-maderas"
      },
      {
        title: "Tableros",
        href: "/materiales/termo-tratada",
        caption: "Tableros y superficies tecnicas con trazabilidad, suministro y criterio profesional.",
        assetKey: "home-tableros"
      },
      {
        title: "Contract",
        href: "/proyectos",
        caption: "Sistemas para hoteles, retail y proyectos profesionales con mantenimiento previsto.",
        assetKey: "home-contract"
      }
    ],
    materialsKicker: "Materiales",
    materialsTitle: "Base material para exterior, interior y proyectos con identidad",
    materialCards: [
      {
        title: "Madera quemada",
        copy: "Acabado Shou Sugi Ban con textura profunda, alta presencia visual y superficie protegida.",
        placeholder: "Burned Wood",
        assetKey: "home-burned"
      },
      {
        title: "Mader Balear & Fusta Antiga",
        copy: "Madera recuperada con huellas, matices y relacion directa con la arquitectura mediterranea.",
        placeholder: "Madera recuperada",
        assetKey: "home-balear"
      },
      {
        title: "Composite / WPC",
        copy: "Material tecnico para exterior con resistencia a humedad, mantenimiento minimo y uso intensivo.",
        placeholder: "Exterior tecnico",
        assetKey: "home-wpc"
      },
      {
        title: "Vigueria",
        copy: "Madera maciza, laminada o recuperada para pergolas, estructuras vistas y rehabilitacion.",
        placeholder: "Estructuras de madera",
        assetKey: "home-balear"
      }
    ],
    contactKicker: "Ruta de consulta",
    contactTitle: "De una idea de proyecto a una solucion material clara",
    contactText:
      "La web esta preparada para captar consultas y ayudar a definir material, aplicacion y sistema sin convertir la experiencia en tienda online.",
    workflow: [
      {
        title: "Tipo de proyecto",
        text: "Fachada, terraza, interior, hotel, vivienda o espacio comercial."
      },
      {
        title: "Material y exposicion",
        text: "Se revisa uso, humedad, mantenimiento, acabado y sistema de fijacion."
      },
      {
        title: "Contacto directo",
        text: "Formulario o WhatsApp para recibir orientacion sobre la solucion adecuada."
      }
    ],
    contactCta: "Ir a Contacto",
    blogCta: "Ver blog tecnico",
    finalChip: "Maderas Gavejo",
    finalTitle: "Cuentanos que quieres construir y buscamos la solucion adecuada",
    finalText:
      "Fachadas, decking, revestimientos interiores o materiales especiales: el primer paso es entender el proyecto."
  },
  en: {
    heroChip: "Maderas Gavejo",
    heroTitle: "Wood for facades, terraces and interiors with technical criteria",
    heroText:
      "Solutions for exterior and interior architecture: ventilated facades, decking, cladding, thermo treated wood, burned wood and reclaimed pieces with Mediterranean identity.",
    primaryCta: "Request information",
    secondaryCta: "View solutions",
    routeKicker: "Main routes",
    routeTitle: "Choose by application or let us guide the project",
    routeLinks: ["View main landing", "View all solutions", "Contact now"],
    miniPoints: [
      {
        title: "Architecture",
        text: "Sober material language for specifiers, studios and developers."
      },
      {
        title: "Technique",
        text: "Installation systems, hidden fastening and maintenance criteria."
      },
      {
        title: "Contact",
        text: "Direct inquiry to guide material, system and next step."
      }
    ],
    kpiItems: [
      {
        kicker: "Specialists",
        value: "Technical wood",
        description: "Solutions for exterior, interior, facades, decking and cladding."
      },
      {
        kicker: "Materials",
        value: "Tantimber",
        description: "Thermo treated wood with stability, durability and controlled behavior."
      },
      {
        kicker: "Systems",
        value: "Grad",
        description: "Hidden fastening, precise alignment and clean finishes when the project requires it."
      },
      {
        kicker: "Contact",
        value: "Direct",
        description: "Form and WhatsApp to evaluate each project with technical criteria."
      }
    ],
    solutionKicker: "Solutions",
    solutionTitle: "Three clear paths to choose the right solution",
    solutionText:
      "Wood, boards and contract projects are grouped as three visual entries to orient each project need.",
    solutions: [
      {
        title: "Woods",
        href: "/materiales",
        caption: "Thermo treated, burned and reclaimed wood for exterior, interior and identity-led projects.",
        assetKey: "home-maderas"
      },
      {
        title: "Boards",
        href: "/materiales/termo-tratada",
        caption: "Technical boards and surfaces with traceability, supply and professional criteria.",
        assetKey: "home-tableros"
      },
      {
        title: "Contract",
        href: "/proyectos",
        caption: "Systems for hotels, retail and professional projects with planned maintenance.",
        assetKey: "home-contract"
      }
    ],
    materialsKicker: "Materials",
    materialsTitle: "Material foundation for exterior, interior and identity-led projects",
    materialCards: [
      {
        title: "Burned wood",
        copy: "Shou Sugi Ban finish with deep texture, strong visual presence and protected surface.",
        placeholder: "Burned Wood",
        assetKey: "home-burned"
      },
      {
        title: "Mader Balear & Fusta Antiga",
        copy: "Reclaimed wood with marks, nuances and a direct link to Mediterranean architecture.",
        placeholder: "Reclaimed wood",
        assetKey: "home-balear"
      },
      {
        title: "Composite / WPC",
        copy: "Technical exterior material with moisture resistance, minimal maintenance and intensive use.",
        placeholder: "Technical exterior",
        assetKey: "home-wpc"
      },
      {
        title: "Beams",
        copy: "Solid, laminated or reclaimed wood for pergolas, exposed structures and rehabilitation.",
        placeholder: "Wood structures",
        assetKey: "home-balear"
      }
    ],
    contactKicker: "Inquiry route",
    contactTitle: "From a project idea to a clear material solution",
    contactText:
      "The website is prepared to capture inquiries and help define material, application and system without turning the experience into an online shop.",
    workflow: [
      {
        title: "Project type",
        text: "Facade, terrace, interior, hotel, home or commercial space."
      },
      {
        title: "Material and exposure",
        text: "Use, humidity, maintenance, finish and fastening system are reviewed."
      },
      {
        title: "Direct contact",
        text: "Form or WhatsApp to receive guidance on the right solution."
      }
    ],
    contactCta: "Go to contact",
    blogCta: "View technical blog",
    finalChip: "Maderas Gavejo",
    finalTitle: "Tell us what you want to build and we will look for the right solution",
    finalText:
      "Facades, decking, interior cladding or special materials: the first step is understanding the project."
  }
};

const homeHeroSlides = [
  {
    src: "https://3kkb5uvxojhzy.ok.kimi.link/videos/nature-hero.mp4",
    alt: "Nature and forest video for the Maderas Gavejo cover",
    kind: "video" as const
  },
  { src: "/media/gavejo/landing/fachadas-hero.jpg", alt: "Forest and mountains as inspiration for architectural wood" },
  { src: "/media/gavejo/landing/termo-cover-premium.jpg", alt: "Premium interior with thermo treated wood" },
  { src: "/media/gavejo/landing/decking-hero.jpg", alt: "Exterior terrace with decking wood" },
  { src: "/media/gavejo/landing/interior-app-03.jpg", alt: "Interior clad with natural wood" },
  { src: "/media/gavejo/landing/texture-charred.jpg", alt: "Burned wood texture for architectural projects" }
];

function HomeVideoHero({ copy, locale }: { copy: HomeCopy; locale: Locale }) {
  return (
    <section className="home-video-hero">
      <HeroCoverCarousel slides={homeHeroSlides} className="home-hero-carousel" />
      <div className="home-video-hero-overlay" aria-hidden="true" />

      <div className="container home-video-hero-grid">
        <div className="home-video-hero-copy">
          <span className="chip chip-light">{copy.heroChip}</span>
          <h1>{copy.heroTitle}</h1>
          <p>{copy.heroText}</p>
          <div className="hero-actions">
            <Link href={localizePath("/contacto", locale)} className="btn btn-light">
              {copy.primaryCta}
            </Link>
            <Link href={localizePath("/soluciones", locale)} className="btn btn-outline-light">
              {copy.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePageTemplate({ locale }: HomePageTemplateProps) {
  const copy = HOME_COPY[locale];

  return (
    <>
      <PublicHeader />
      <main className="home-wrap">
        <HomeVideoHero copy={copy} locale={locale} />

        <section className="section section-soft home-route-strip" id="inicio">
          <div className="container">
            <Reveal>
              <p className="section-kicker">{copy.routeKicker}</p>
              <h2>{copy.routeTitle}</h2>
              <div className="home-editorial-links" aria-label="Accesos principales">
                <Link href={localizePath("/soluciones/fachadas", locale)}>{copy.routeLinks[0]}</Link>
                <Link href={localizePath("/soluciones", locale)}>{copy.routeLinks[1]}</Link>
                <Link href={localizePath("/contacto", locale)}>{copy.routeLinks[2]}</Link>
              </div>
              <div className="home-mini-points">
                {copy.miniPoints.map((point) => (
                  <div className="home-mini-point" key={point.title}>
                    <strong>{point.title}</strong>
                    <span>{point.text}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container home-proof-band">
            {copy.kpiItems.map((item) => (
              <article className="home-proof-item" key={item.kicker}>
                <p className="mini-kicker">{item.kicker}</p>
                <h3>{item.value}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section home-solutions-section" id="soluciones">
          <div className="container home-solutions-copy">
            <Reveal>
              <div className="home-section-head home-solutions-head">
                <p className="section-kicker">{copy.solutionKicker}</p>
                <h2>{copy.solutionTitle}</h2>
                <p className="lead-text">{copy.solutionText}</p>
              </div>
            </Reveal>
          </div>

          <div className="home-solution-grid home-solution-grid-full">
            {copy.solutions.map((solution, idx) => (
              <Reveal key={solution.title} delay={idx * 90}>
                <article className="solution-card solution-panel-card">
                  <NeonPlaceholder
                    label={solution.title}
                    caption={solution.caption}
                    assetKey={solution.assetKey}
                    minHeight={520}
                    aspectRatio="4 / 5"
                  />
                  <Link href={localizePath(solution.href, locale)} className="solution-body solution-panel-link">
                    <h3>{solution.title}</h3>
                    <p>{solution.caption}</p>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal>
              <div className="home-section-head">
                <p className="section-kicker">{copy.materialsKicker}</p>
                <h2>{copy.materialsTitle}</h2>
              </div>
            </Reveal>
            <div className="home-material-grid">
              {copy.materialCards.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 90}>
                  <article className="home-material-item">
                    <NeonPlaceholder label={item.title} caption={item.placeholder} assetKey={item.assetKey} minHeight={210} aspectRatio="4 / 3" />
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="contacto">
          <div className="container two-col">
            <Reveal>
              <div>
                <p className="section-kicker">{copy.contactKicker}</p>
                <h2>{copy.contactTitle}</h2>
                <p className="lead-text">{copy.contactText}</p>
              </div>
              <div className="home-workflow-panel">
                <ol className="workflow-list">
                  {copy.workflow.map((item, index) => (
                    <li className="workflow-step" key={item.title}>
                      <span>{index + 1}</span>
                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="hero-actions">
                <Link className="btn btn-primary" href={localizePath("/contacto", locale)}>
                  {copy.contactCta}
                </Link>
                <Link href={localizePath("/blog", locale)} className="btn btn-secondary">
                  {copy.blogCta}
                </Link>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <NeonPlaceholder
                label={locale === "en" ? "Technical inquiry" : "Consulta tecnica"}
                caption={locale === "en" ? "Form and WhatsApp" : "Formulario y WhatsApp"}
                assetKey="contact-visual"
                minHeight={320}
                aspectRatio="16 / 10"
              />
            </Reveal>
          </div>
        </section>

        <section className="section home-final-cta">
          <div className="container">
            <Reveal>
              <div className="home-final-editorial">
                <p className="chip chip-light">{copy.finalChip}</p>
                <h2>{copy.finalTitle}</h2>
                <p className="lead-text">{copy.finalText}</p>
                <div className="hero-actions">
                  <Link href={localizePath("/contacto", locale)} className="btn btn-light">
                    {copy.primaryCta}
                  </Link>
                  <Link href={localizePath("/soluciones", locale)} className="btn btn-outline-light">
                    {copy.secondaryCta}
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <SiteFooter />
        <FloatingWhatsApp sourcePage="home" />
      </main>
    </>
  );
}
