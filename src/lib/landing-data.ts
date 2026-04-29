import { LandingConfig } from "@/lib/types";

const COMMON_TECH_POINTS = [
  "Asesoramiento tecnico para seleccionar material, seccion, acabado y sistema de instalacion.",
  "Soluciones pensadas para arquitectura, villas, hoteles, restauracion y espacios comerciales.",
  "Integracion de documentacion tecnica y documentos cuando el proyecto lo requiere.",
  "Enfoque en estabilidad, durabilidad, mantenimiento y comportamiento real en obra.",
  "Captacion directa por formulario y WhatsApp para valorar cada proyecto con agilidad."
];

export const fachadasLanding: LandingConfig = {
  slug: "fachadas",
  route: "/soluciones/fachadas",
  navName: "Fachadas",
  heroBadge: "Revestimiento exterior",
  heroTitle: "Fachadas de madera con presencia, tecnica y durabilidad",
  heroDescription:
    "Soluciones para fachadas ventiladas y revestimientos exteriores con madera termo tratada, madera quemada, Mader Balear, WPC y sistemas de fijacion tecnica.",
  heroImage: "PH-HERO-FACHADAS-001",
  introTitle: "La fachada no es solo piel: es sistema, material y comportamiento",
  introDescription:
    "Trabajamos revestimientos exteriores desde una lectura tecnica y estetica. Seleccionamos material, subestructura, fijacion y acabado para que la envolvente mantenga estabilidad, lectura limpia y coherencia con el proyecto.",
  applications: [
    {
      title: "Fachadas ventiladas",
      text: "Revestimientos exteriores con camara, ventilacion y fijacion tecnica para mejorar comportamiento y durabilidad.",
      image: "PH-FACHADAS-APP-01",
      alt: "Fachada ventilada de madera"
    },
    {
      title: "Villas y viviendas premium",
      text: "Materiales naturales para proyectos residenciales donde la textura y la calidez forman parte de la arquitectura.",
      image: "PH-FACHADAS-APP-02",
      alt: "Vivienda con revestimiento exterior"
    },
    {
      title: "Hoteles y restauracion",
      text: "Soluciones con alto impacto visual y comportamiento estable para espacios con uso intensivo y exposicion exterior.",
      image: "PH-FACHADAS-APP-03",
      alt: "Hotel con fachada de madera"
    },
    {
      title: "Rehabilitacion mediterranea",
      text: "Revestimientos que conectan material, entorno y caracter arquitectonico sin perder precision tecnica.",
      image: "PH-FACHADAS-APP-04",
      alt: "Rehabilitacion con madera"
    }
  ],
  systems: [
    {
      number: "01",
      title: "Material adecuado",
      text: "Definimos madera termo tratada, quemada, recuperada, composite o sistema mixto segun exposicion, estetica y uso.",
      image: "PH-FACHADAS-SYS-01",
      alt: "Seleccion de materiales de fachada"
    },
    {
      number: "02",
      title: "Subestructura y ventilacion",
      text: "El rendimiento depende de la camara, separacion, encuentros, ventilacion y compatibilidad entre materiales.",
      image: "PH-FACHADAS-SYS-02",
      alt: "Subestructura de fachada"
    },
    {
      number: "03",
      title: "Fijacion oculta y mantenimiento",
      text: "Sistemas como Grad permiten alineacion precisa, superficie limpia, mejor ventilacion y posibilidad de mantenimiento.",
      image: "PH-FACHADAS-SYS-03",
      alt: "Fijacion tecnica oculta"
    }
  ],
  materials: [
    {
      title: "Madera termo tratada",
      subtitle: "Tantimber / Thermowood",
      text: "Alta estabilidad dimensional, resistencia a humedad y comportamiento predecible para fachadas exteriores.",
      image: "PH-FACHADAS-MAT-01",
      alt: "Madera termo tratada en fachada",
      cta: "Ver madera termo tratada",
      ctaHref: "/materiales/termo-tratada"
    },
    {
      title: "Madera quemada",
      subtitle: "Shou Sugi Ban / Burned Wood",
      text: "Acabado de fuerte presencia visual, superficie protegida y estetica singular para exterior e interior.",
      image: "PH-FACHADAS-MAT-02",
      alt: "Madera quemada para fachada",
      cta: "Consultar aplicacion",
      ctaHref: "#contact"
    },
    {
      title: "Mader Balear & Fusta Antiga",
      subtitle: "Madera recuperada",
      text: "Material con huellas, textura real y vinculo mediterraneo para proyectos con identidad propia.",
      image: "PH-FACHADAS-MAT-03",
      alt: "Madera recuperada balear",
      cta: "Ver Mader Balear",
      ctaHref: "/mader-balear"
    }
  ],
  gallery: [
    { image: "PH-FACHADAS-GAL-01", alt: "Fachada con lamas verticales" },
    { image: "PH-FACHADAS-GAL-02", alt: "Detalle de textura exterior" },
    { image: "PH-FACHADAS-GAL-03", alt: "Casa mediterranea con madera" },
    { image: "PH-FACHADAS-GAL-04", alt: "Fachada ventilada contemporanea" },
    { image: "PH-FACHADAS-GAL-05", alt: "Encuentro tecnico de fachada" },
    { image: "PH-FACHADAS-GAL-06", alt: "Revestimiento exterior premium" }
  ],
  technicalPoints: [
    ...COMMON_TECH_POINTS,
    "Materiales: termo tratada, quemada, Mader Balear, WPC y fijaciones tecnicas.",
    "Aplicaciones: fachadas, cladding exterior, celosias y revestimientos continuos."
  ],
  maderBalear: {
    title: "Mader Balear como capa diferencial",
    text: "Cuando el proyecto necesita memoria, textura y caracter mediterraneo, la madera recuperada aporta una lectura que no puede reproducirse artificialmente.",
    image: "PH-FACHADAS-BANNER-01",
    ctaLabel: "Consultar combinacion de materiales"
  },
  technicalSpecs: [
    { label: "Uso principal", value: "Fachadas ventiladas y revestimientos exteriores" },
    { label: "Materiales", value: "Tantimber, Burned Wood, Mader Balear, WPC y sistemas Grad" },
    { label: "Sistema", value: "Subestructura, ventilacion, fijacion oculta y mantenimiento" },
    { label: "Proyecto ideal", value: "Villas, hoteles, retail, restauracion y rehabilitacion" }
  ]
};

export const termoLanding: LandingConfig = {
  slug: "termo-tratada",
  route: "/materiales/termo-tratada",
  navName: "Tantimber",
  heroBadge: "Madera termo tratada",
  heroTitle: "Madera termo tratada con maxima estabilidad y durabilidad",
  heroDescription:
    "Thermowood para fachadas, decking y revestimientos con comportamiento tecnico controlado y larga vida util.",
  heroImage: "PH-HERO-TERMO-001",
  introTitle: "La madera termo tratada lleva el material a un nivel superior de rendimiento",
  introDescription:
    "Mediante un proceso termico controlado, la madera mejora su estabilidad, durabilidad y resistencia frente a condiciones ambientales exigentes. Es una solucion tecnica para aplicaciones reales donde el material debe funcionar a largo plazo.",
  applications: [
    {
      title: "Fachadas ventiladas",
      text: "Revestimientos exteriores con alta estabilidad dimensional y respuesta predecible ante humedad y clima.",
      image: "PH-TERMO-APP-01",
      alt: "Fachada ventilada con madera termo tratada"
    },
    {
      title: "Decking exterior",
      text: "Tarimas para terrazas, piscinas y espacios de uso intensivo con confort y bajo mantenimiento.",
      image: "PH-TERMO-APP-02",
      alt: "Decking exterior termo tratado"
    },
    {
      title: "Revestimientos interiores",
      text: "Superficies calidas y estables para interiores contemporaneos con control del material.",
      image: "PH-TERMO-APP-03",
      alt: "Interior con madera termo tratada"
    },
    {
      title: "Celosias y elementos arquitectonicos",
      text: "Lamas, cerramientos y piezas especiales donde se busca precision, ligereza y durabilidad.",
      image: "PH-TERMO-APP-04",
      alt: "Celosias de madera termo tratada"
    }
  ],
  systems: [
    {
      number: "01",
      title: "Proceso Thermowood",
      text: "La madera se somete a temperaturas entre 180 C y 212 C en un entorno controlado con vapor para modificar su comportamiento.",
      image: "PH-TERMO-SYS-01",
      alt: "Proceso Thermowood"
    },
    {
      number: "02",
      title: "Menor absorcion de humedad",
      text: "Se reduce el contenido de humedad hasta aproximadamente un 4-7%, limitando movimientos y degradacion biologica.",
      image: "PH-TERMO-SYS-02",
      alt: "Estabilidad por humedad controlada"
    },
    {
      number: "03",
      title: "Sistema completo",
      text: "Perfiles tecnicos, subestructura termo tratada, clips ocultos, tornilleria especifica, aceites y acabados listos para instalar.",
      image: "PH-TERMO-SYS-03",
      alt: "Sistema completo Tantimber"
    }
  ],
  materials: [
    {
      title: "Fresno termo tratado",
      subtitle: "Alta durabilidad - Clase 1",
      text: "Opcion premium para proyectos donde importan veta, resistencia y presencia material.",
      image: "PH-TERMO-MAT-01",
      alt: "Fresno termo tratado",
      cta: "Descargar ficha tecnica",
      ctaHref: "/documentos/tantimber.pdf"
    },
    {
      title: "Pino termo tratado",
      subtitle: "Versatil y equilibrado",
      text: "Solucion adaptable para exterior e interior con buen equilibrio entre rendimiento y disponibilidad.",
      image: "PH-TERMO-MAT-02",
      alt: "Pino termo tratado",
      cta: "Ver especificaciones",
      ctaHref: "/documentos/tantimber-specs.pdf"
    },
    {
      title: "Ayous, Iroko y Poplar",
      subtitle: "Texturas y prestaciones especificas",
      text: "Cada especie ofrece un equilibrio distinto entre estetica, durabilidad, ligereza y comportamiento tecnico.",
      image: "PH-TERMO-MAT-03",
      alt: "Especies termo tratadas",
      cta: "Solicitar asesoria",
      ctaHref: "#contact"
    }
  ],
  gallery: [
    { image: "PH-TERMO-GAL-01", alt: "Madera termo tratada en fachada" },
    { image: "PH-TERMO-GAL-02", alt: "Decking termo tratado" },
    { image: "PH-TERMO-GAL-03", alt: "Lamas termo tratadas" },
    { image: "PH-TERMO-GAL-04", alt: "Detalle Thermowood" },
    { image: "PH-TERMO-GAL-05", alt: "Interior con madera termo tratada" },
    { image: "PH-TERMO-GAL-06", alt: "Acabados Tantimber" }
  ],
  technicalPoints: [
    "Alta estabilidad dimensional y reduccion de hinchamiento y contraccion.",
    "Resistencia a humedad y clima exterior sin utilizar productos quimicos.",
    "Durabilidad biologica Clase 1 o Clase 2 segun especie y configuracion.",
    "Vida util que puede superar los 25 anos en exterior segun uso y mantenimiento.",
    "Compatible con fijacion oculta, end-matching y sistemas como Grad.",
    "Acabados cepillados, pre-envejecidos, aceitados en seis caras y texturas personalizadas."
  ],
  maderBalear: {
    title: "Combinar tecnica y caracter",
    text: "La madera termo tratada resuelve rendimiento; Mader Balear puede sumar textura, memoria y una lectura mas emocional del proyecto.",
    image: "PH-TERMO-BANNER-01",
    ctaLabel: "Consultar combinacion"
  },
  technicalSpecs: [
    { label: "Proceso", value: "Thermowood entre 180 C y 212 C con vapor" },
    { label: "Humedad final", value: "Aproximadamente 4-7%" },
    { label: "Aplicaciones", value: "Fachadas, decking, interiores, celosias y lamas" },
    { label: "Sistema", value: "Perfiles, subestructura, clips, tornilleria, aceites y acabados" }
  ]
};

export const deckingLanding: LandingConfig = {
  slug: "decking-exterior",
  route: "/soluciones/decking-exterior",
  navName: "Decking exterior",
  heroBadge: "Suelos exterior",
  heroTitle: "Tarimas de madera para exterior disenadas para durar",
  heroDescription:
    "Soluciones en decking para terrazas, piscinas y espacios exteriores con alto nivel de uso y exposicion.",
  heroImage: "PH-HERO-DECKING-001",
  introTitle: "El decking exterior exige algo mas que estetica",
  introDescription:
    "Debe resistir uso intensivo, exposicion constante y cambios de temperatura, manteniendo estabilidad y comportamiento a lo largo del tiempo. Trabajamos material, instalacion y fijacion como un conjunto.",
  applications: [
    { title: "Terrazas", text: "Superficies exteriores comodas, estables y preparadas para uso diario.", image: "PH-DECKING-APP-01", alt: "Terraza de madera exterior" },
    { title: "Piscinas", text: "Materiales y sistemas pensados para humedad, transito y evacuacion de agua.", image: "PH-DECKING-APP-02", alt: "Piscina con decking exterior" },
    { title: "Hoteles y restauracion", text: "Tarimas para espacios de alto uso donde importa la experiencia y el mantenimiento.", image: "PH-DECKING-APP-03", alt: "Decking para hotel" },
    { title: "Jardines y exteriores intensivos", text: "Soluciones para zonas vividas, pisadas y expuestas al clima.", image: "PH-DECKING-APP-04", alt: "Jardin con tarima exterior" }
  ],
  systems: [
    { number: "01", title: "Subestructura adecuada", text: "Base estable, separacion correcta y ventilacion para que la tarima trabaje bien.", image: "PH-DECKING-SYS-01", alt: "Subestructura decking" },
    { number: "02", title: "Control de dilataciones", text: "El sistema debe prever movimiento, drenaje y exposicion para evitar patologias.", image: "PH-DECKING-SYS-02", alt: "Control tecnico decking" },
    { number: "03", title: "Fijacion oculta", text: "Superficie limpia, mayor proteccion del material, mejor evacuacion de agua y montaje preciso con Grad System cuando aplica.", image: "PH-DECKING-SYS-03", alt: "Fijacion oculta decking" }
  ],
  materials: [
    { title: "Madera termo tratada", subtitle: "Tantimber", text: "Alta estabilidad, resistencia a humedad, bajo mantenimiento y comportamiento predecible.", image: "PH-DECKING-MAT-01", alt: "Decking Tantimber", cta: "Ver Tantimber", ctaHref: "/materiales/termo-tratada" },
    { title: "Madera tropical", subtitle: "Ipe", text: "Alta densidad, gran durabilidad natural, resistencia al desgaste e ideal para alto transito.", image: "PH-DECKING-MAT-02", alt: "Decking Ipe", cta: "Consultar disponibilidad", ctaHref: "#contact" },
    { title: "WPC", subtitle: "Composite", text: "Material tecnico con resistencia a humedad, mantenimiento minimo y uso intensivo.", image: "PH-DECKING-MAT-03", alt: "Decking composite", cta: "Pedir asesoria", ctaHref: "#contact" }
  ],
  gallery: [
    { image: "PH-DECKING-GAL-01", alt: "Tarima exterior" },
    { image: "PH-DECKING-GAL-02", alt: "Deck piscina" },
    { image: "PH-DECKING-GAL-03", alt: "Detalle fijacion" },
    { image: "PH-DECKING-GAL-04", alt: "Decking hotel" },
    { image: "PH-DECKING-GAL-05", alt: "Terraza mediterranea" },
    { image: "PH-DECKING-GAL-06", alt: "Madera exterior" }
  ],
  technicalPoints: [
    "Alta durabilidad y comportamiento estable en exterior.",
    "Confort de uso y bajo mantenimiento segun material seleccionado.",
    "Integracion con terrazas, piscinas, jardines, hoteles y restauracion.",
    "Grad System aporta instalacion rapida, alineacion precisa y reduccion de errores.",
    "El decking es una superficie que se pisa, se utiliza y se vive; debe responder como tal."
  ],
  maderBalear: {
    title: "Exterior con caracter material",
    text: "El decking puede dialogar con revestimientos, fachadas y piezas recuperadas para construir un proyecto exterior coherente.",
    image: "PH-DECKING-BANNER-01",
    ctaLabel: "Consultar decking para mi proyecto"
  },
  technicalSpecs: [
    { label: "Materiales", value: "Tantimber, Ipe y WPC / Composite" },
    { label: "Sistema", value: "Subestructura, ventilacion, dilataciones y fijacion tecnica" },
    { label: "Aplicaciones", value: "Terrazas, piscinas, hoteles, restauracion y jardines" },
    { label: "Fijacion", value: "Oculta y compatible con Grad System cuando el proyecto lo requiere" }
  ]
};

export const interioresLanding: LandingConfig = {
  slug: "revestimientos-interiores",
  route: "/soluciones/revestimientos-interiores",
  navName: "Interiores",
  heroBadge: "Revestimientos interiores",
  heroTitle: "Madera que transforma espacios interiores",
  heroDescription:
    "Revestimientos en madera natural, termo tratada, quemada y recuperada para crear interiores con textura, calidez y presencia material.",
  heroImage: "PH-HERO-INTERIOR-001",
  introTitle: "En interior, la madera no actua solo como revestimiento",
  introDescription:
    "Actua como materia que aporta ritmo, profundidad y temperatura al espacio. Trabajamos soluciones de pared y superficies interiores con material natural y sistemas de instalacion precisos.",
  applications: [
    { title: "Viviendas y villas", text: "Ambientes calidos, serenos y con identidad clara para espacios residenciales.", image: "PH-INTERIOR-APP-01", alt: "Interior de vivienda con madera" },
    { title: "Hoteles", text: "Revestimientos que elevan zonas comunes, habitaciones y recorridos con textura real.", image: "PH-INTERIOR-APP-02", alt: "Hotel con revestimiento interior" },
    { title: "Restauracion y retail", text: "Materialidad con presencia para espacios comerciales donde la atmasfera importa.", image: "PH-INTERIOR-APP-03", alt: "Retail con madera interior" },
    { title: "Recepciones y zonas comunes", text: "Superficies continuas con encuentros precisos e integracion con iluminacion.", image: "PH-INTERIOR-APP-04", alt: "Recepcion con madera" }
  ],
  systems: [
    { number: "01", title: "Lectura limpia", text: "Encuentros precisos, continuidad visual e integracion con iluminacion y otros elementos del proyecto.", image: "PH-INTERIOR-SYS-01", alt: "Sistema interior limpio" },
    { number: "02", title: "Fijacion invisible", text: "La fijacion debe desaparecer para no interferir en la lectura del material.", image: "PH-INTERIOR-SYS-02", alt: "Fijacion invisible interior" },
    { number: "03", title: "Acabado y mantenimiento", text: "Grad System permite alineacion, posibilidad de desmontaje y mayor calidad de acabado cuando el proyecto lo requiere.", image: "PH-INTERIOR-SYS-03", alt: "Acabado interior de madera" }
  ],
  materials: [
    { title: "Madera termo tratada", subtitle: "Tantimber", text: "Madera estable, limpia y contemporanea para interiores donde se busca uniformidad y control.", image: "PH-INTERIOR-MAT-01", alt: "Tantimber interior", cta: "Ver Tantimber", ctaHref: "/materiales/termo-tratada" },
    { title: "Madera quemada", subtitle: "Burned Wood", text: "Material de fuerte presencia visual, textura profunda y lectura expresiva del espacio.", image: "PH-INTERIOR-MAT-02", alt: "Burned Wood interior", cta: "Consultar aplicacion", ctaHref: "#contact" },
    { title: "Mader Balear & Fusta Antiga", subtitle: "Madera recuperada", text: "Piezas unicas con huellas, matices y relacion directa con la arquitectura mediterranea.", image: "PH-INTERIOR-MAT-03", alt: "Mader Balear interior", cta: "Ver Mader Balear", ctaHref: "/mader-balear" }
  ],
  gallery: [
    { image: "PH-INTERIOR-GAL-01", alt: "Revestimiento interior madera" },
    { image: "PH-INTERIOR-GAL-02", alt: "Pared con lamas de madera" },
    { image: "PH-INTERIOR-GAL-03", alt: "Interior mediterraneo" },
    { image: "PH-INTERIOR-GAL-04", alt: "Textura interior" },
    { image: "PH-INTERIOR-GAL-05", alt: "Madera quemada interior" },
    { image: "PH-INTERIOR-GAL-06", alt: "Recepcion con madera" }
  ],
  technicalPoints: [
    "Aporta calidez real y mejora la percepcion material del proyecto.",
    "Se adapta a lenguajes contemporaneos, artesanales o mediterraneos.",
    "Integra tecnica y diseno en una sola solucion.",
    "Permite continuidad visual, encuentros precisos y fijacion oculta.",
    "Un revestimiento interior no deberia cubrir una pared: deberia aportar atmasfera, materia y caracter."
  ],
  maderBalear: {
    title: "Mader Balear como material diferencial",
    text: "La madera recuperada suma textura real, piezas unicas y una dimension emocional dificil de replicar.",
    image: "PH-INTERIOR-BANNER-01",
    ctaLabel: "Consultar revestimiento interior"
  },
  technicalSpecs: [
    { label: "Materiales", value: "Termo tratada, quemada y recuperada" },
    { label: "Aplicaciones", value: "Viviendas, villas, hoteles, retail, restauracion y zonas comunes" },
    { label: "Sistema", value: "Encuentros precisos, fijacion oculta e integracion con iluminacion" },
    { label: "Objetivo", value: "Calidez, atmasfera, textura y presencia material" }
  ]
};



function buildLanding(partial: {
  slug: string;
  route: string;
  navName: string;
  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  introTitle: string;
  introDescription: string;
  tone: string;
  applications: Array<{ title: string; text: string }>;
  systems: Array<{ title: string; text: string }>;
  materials: Array<{ title: string; subtitle: string; text: string; cta?: string; ctaHref?: string }>;
  technicalPoints: string[];
  specs: Array<{ label: string; value: string }>;
  complementaryTitle?: string;
  complementaryText?: string;
}): LandingConfig {
  const key = partial.tone.toUpperCase().replace(/[^A-Z0-9]+/g, "-");

  return {
    slug: partial.slug,
    route: partial.route,
    navName: partial.navName,
    heroBadge: partial.heroBadge,
    heroTitle: partial.heroTitle,
    heroDescription: partial.heroDescription,
    heroImage: `PH-${key}-HERO`,
    introTitle: partial.introTitle,
    introDescription: partial.introDescription,
    applications: partial.applications.map((item, index) => ({
      ...item,
      image: `PH-${key}-APP-${index + 1}`,
      alt: item.title
    })),
    systems: partial.systems.map((item, index) => ({
      number: String(index + 1).padStart(2, "0"),
      ...item,
      image: `PH-${key}-SYS-${index + 1}`,
      alt: item.title
    })),
    materials: partial.materials.map((item, index) => ({
      ...item,
      cta: item.cta ?? "Solicitar informacion",
      ctaHref: item.ctaHref ?? "#contact",
      image: `PH-${key}-MAT-${index + 1}`,
      alt: item.title
    })),
    gallery: Array.from({ length: 6 }, (_, index) => ({
      image: `PH-${key}-GAL-${index + 1}`,
      alt: `${partial.navName} referencia ${index + 1}`
    })),
    technicalPoints: [...partial.technicalPoints, ...COMMON_TECH_POINTS.slice(0, 3)],
    maderBalear: {
      title: partial.complementaryTitle ?? "Materialidad coordinada para el proyecto",
      text:
        partial.complementaryText ??
        "Cada solucion puede combinarse con madera recuperada, termo tratada, quemada o sistemas tecnicos para construir una lectura coherente entre exterior e interior.",
      image: `PH-${key}-BANNER`,
      ctaLabel: "Consultar combinacion"
    },
    technicalSpecs: partial.specs
  };
}

export const pergolasLanding = buildLanding({
  slug: "pergolas-cerramientos",
  route: "/soluciones/pergolas-cerramientos",
  navName: "Pergolas",
  heroBadge: "Pergolas y cerramientos",
  heroTitle: "Pergolas, cerramientos y estructuras de madera para exterior",
  heroDescription:
    "Soluciones para sombra, transicion interior-exterior y estructuras ligeras con madera tecnica, vigueria y criterio constructivo.",
  introTitle: "Una pergola funciona cuando estructura, sombra y material dialogan",
  introDescription:
    "Definimos secciones, ritmo, encuentros, exposicion y acabado para que cada estructura exterior aporte presencia sin perder estabilidad ni facilidad de mantenimiento.",
  tone: "pergolas exterior madera",
  applications: [
    { title: "Pergolas residenciales", text: "Estructuras para terrazas, jardines y viviendas donde la madera aporta sombra y calidez." },
    { title: "Hoteles y restauracion", text: "Soluciones para porches, zonas exteriores, chill-out y recorridos de alto uso." },
    { title: "Cerramientos ligeros", text: "Lamas, celosias y piezas de control solar para privacidad y confort." },
    { title: "Estructuras mediterraneas", text: "Vigueria y madera natural para proyectos que buscan una lectura local y sobria." }
  ],
  systems: [
    { title: "Lectura estructural", text: "Se revisan luces, apoyos, secciones, encuentros y proteccion del material." },
    { title: "Control solar", text: "La separacion de lamas y la orientacion definen sombra, privacidad y atmosfera." },
    { title: "Acabado exterior", text: "Seleccion de madera, aceite, proteccion y mantenimiento segun exposicion real." }
  ],
  materials: [
    { title: "Vigueria laminada", subtitle: "Estructura estable", text: "Solucion para piezas con estabilidad y comportamiento controlado." },
    { title: "Madera termo tratada", subtitle: "Exterior tecnico", text: "Material estable para lamas, celosias y revestimientos auxiliares.", ctaHref: "/materiales/termo-tratada" },
    { title: "Madera recuperada", subtitle: "Caracter mediterraneo", text: "Piezas con textura y memoria para proyectos singulares.", ctaHref: "/mader-balear" }
  ],
  technicalPoints: [
    "Definicion de secciones y encuentros antes de fabricar.",
    "Control de sombra, privacidad, ventilacion y exposicion.",
    "Compatibilidad con fachadas, decking y revestimientos exteriores."
  ],
  specs: [
    { label: "Uso", value: "Pergolas, porches, cerramientos, celosias y control solar" },
    { label: "Materiales", value: "Vigueria, madera termo tratada, madera recuperada y acabados exteriores" },
    { label: "Proyecto ideal", value: "Viviendas, villas, hoteles, restauracion y exteriores mediterraneos" }
  ]
});

export const suelosInteriorLanding = buildLanding({
  slug: "suelos-interior",
  route: "/soluciones/suelos-interior",
  navName: "Suelos interior",
  heroBadge: "Flooring interior",
  heroTitle: "Suelos interiores de madera para espacios calidos y duraderos",
  heroDescription:
    "Soluciones para viviendas, hoteles y locales con madera recuperada, multicapa, SPC y criterios de uso real.",
  introTitle: "El suelo marca la temperatura visual de todo el interior",
  introDescription:
    "Seleccionamos material y formato segun transito, estabilidad, mantenimiento, textura y coherencia con el resto del proyecto interior.",
  tone: "suelos interior madera",
  applications: [
    { title: "Viviendas y villas", text: "Suelos con calidez, textura y continuidad para interiores residenciales." },
    { title: "Hoteles", text: "Materiales preparados para transito, mantenimiento y experiencia de usuario." },
    { title: "Locales comerciales", text: "Superficies resistentes y expresivas para retail, restauracion y oficinas." },
    { title: "Rehabilitacion", text: "Madera recuperada o soluciones tecnicas para proyectos con identidad existente." }
  ],
  systems: [
    { title: "Eleccion por uso", text: "No todos los interiores requieren el mismo material: transito, humedad y mantenimiento mandan." },
    { title: "Formato y colocacion", text: "Anchos, largos, patrones y encuentros definen la lectura final del espacio." },
    { title: "Acabado y proteccion", text: "Aceites, barnices y tratamientos se seleccionan segun uso y atmosfera buscada." }
  ],
  materials: [
    { title: "Madera recuperada", subtitle: "Mader Balear", text: "Textura real para interiores con caracter y memoria material.", ctaHref: "/mader-balear" },
    { title: "Multicapa", subtitle: "Estabilidad interior", text: "Solucion equilibrada para superficies residenciales y profesionales." },
    { title: "SPC / Vinilo tecnico", subtitle: "Uso intensivo", text: "Alternativa tecnica para espacios que priorizan resistencia y mantenimiento." }
  ],
  technicalPoints: [
    "Seleccion por transito, humedad, mantenimiento y compatibilidad con soporte.",
    "Posibilidad de combinar suelo, revestimiento y mobiliario en una misma narrativa.",
    "Criterio visual para que el pavimento no compita con la arquitectura."
  ],
  specs: [
    { label: "Uso", value: "Viviendas, hoteles, locales, oficinas y rehabilitacion" },
    { label: "Materiales", value: "Madera recuperada, multicapa, SPC y soluciones tecnicas" },
    { label: "Decision clave", value: "Transito, mantenimiento, textura y estabilidad" }
  ]
});

export const maderaQuemadaLanding = buildLanding({
  slug: "madera-quemada",
  route: "/materiales/madera-quemada",
  navName: "Madera quemada",
  heroBadge: "Shou Sugi Ban",
  heroTitle: "Madera quemada con textura profunda y presencia arquitectonica",
  heroDescription:
    "Burned Wood y acabados inspirados en Shou Sugi Ban para fachadas, interiores y piezas especiales con alto impacto visual.",
  introTitle: "La carbonizacion convierte la superficie en una expresion material intensa",
  introDescription:
    "La madera quemada aporta profundidad, contraste y una piel de gran caracter. Se trabaja con criterio de aplicacion, acabado y mantenimiento segun uso interior o exterior.",
  tone: "madera quemada burned shou sugi ban",
  applications: [
    { title: "Fachadas singulares", text: "Revestimientos exteriores con presencia oscura, textura y lectura contemporanea." },
    { title: "Interiores atmosfericos", text: "Paredes, barras, recepciones y detalles donde la textura construye identidad." },
    { title: "Hoteles y restauracion", text: "Material de impacto para espacios memorables y de alto valor perceptivo." },
    { title: "Piezas especiales", text: "Puertas, paneles, mobiliario y elementos decorativos con acabado carbonizado." }
  ],
  systems: [
    { title: "Tipo de quemado", text: "La intensidad y textura deben elegirse segun lectura visual y exposicion." },
    { title: "Proteccion", text: "El acabado final define tacto, durabilidad, mantenimiento y limpieza." },
    { title: "Instalacion", text: "Subestructura, ventilacion y fijacion se adaptan a exterior o interior." }
  ],
  materials: [
    { title: "Burned Wood exterior", subtitle: "Fachadas", text: "Acabado oscuro y expresivo para revestimientos exteriores." },
    { title: "Burned Wood interior", subtitle: "Paneles", text: "Textura profunda para interiores con atmosfera controlada." },
    { title: "Combinacion con termo tratada", subtitle: "Sistema mixto", text: "Contraste entre madera estable y piel carbonizada.", ctaHref: "/materiales/termo-tratada" }
  ],
  technicalPoints: [
    "Acabado de alta presencia visual y textura tactil.",
    "Aplicable en exterior e interior con sistema y proteccion adecuados.",
    "Ideal para proyectos donde la madera debe convertirse en punto focal."
  ],
  specs: [
    { label: "Aplicaciones", value: "Fachadas, interiores, paneles, puertas y piezas especiales" },
    { label: "Acabado", value: "Carbonizado, cepillado, protegido o aceitado segun uso" },
    { label: "Clave tecnica", value: "Definir exposicion, tacto, limpieza y mantenimiento" }
  ]
});

export const vigueriaLanding = buildLanding({
  slug: "vigueria",
  route: "/materiales/vigueria",
  navName: "Vigueria",
  heroBadge: "Vigueria y estructuras",
  heroTitle: "Vigueria de madera para estructuras, porches y proyectos especiales",
  heroDescription:
    "Madera maciza, laminada o recuperada para estructuras vistas, pergolas, rehabilitaciones y elementos arquitectonicos.",
  introTitle: "La vigueria define estructura, escala y caracter",
  introDescription:
    "Cada pieza debe responder a uso, seccion, apoyo, exposicion y lectura visual. La eleccion entre madera nueva, laminada o recuperada cambia el comportamiento y la identidad del proyecto.",
  tone: "vigueria madera estructura pergola",
  applications: [
    { title: "Pergolas y porches", text: "Estructuras exteriores con sombra, presencia y calidez." },
    { title: "Rehabilitacion", text: "Piezas que dialogan con arquitectura existente y materiales antiguos." },
    { title: "Interiores vistos", text: "Vigas como elemento expresivo en viviendas, hoteles y restauracion." },
    { title: "Estructuras especiales", text: "Soluciones a medida para piezas, soportes y encuentros singulares." }
  ],
  systems: [
    { title: "Seccion y luz", text: "Dimensionado y lectura estructural para cada situacion de proyecto." },
    { title: "Proteccion", text: "Acabados y tratamientos segun interior, exterior o ambiente humedo." },
    { title: "Integracion", text: "Encuentros, apoyos y ritmo visual coordinados con el resto del proyecto." }
  ],
  materials: [
    { title: "Viga laminada", subtitle: "Estabilidad", text: "Opcion tecnica para luces y estabilidad controlada." },
    { title: "Viga maciza", subtitle: "Materialidad", text: "Pieza natural para proyectos con lectura robusta y directa." },
    { title: "Viga recuperada", subtitle: "Fusta Antiga", text: "Material con memoria para rehabilitacion y espacios con caracter.", ctaHref: "/mader-balear" }
  ],
  technicalPoints: [
    "La seleccion debe considerar seccion, apoyo, exposicion y acabado.",
    "Puede actuar como estructura real o como elemento de lectura arquitectonica.",
    "Compatible con pergolas, cerramientos, rehabilitacion e interiores vistos."
  ],
  specs: [
    { label: "Tipos", value: "Maciza, laminada y recuperada" },
    { label: "Usos", value: "Pergolas, porches, rehabilitacion, interiores y estructuras especiales" },
    { label: "Decision clave", value: "Luz, seccion, apoyo, exposicion y acabado" }
  ]
});

function buildBalearLanding(slug: string, navName: string, heroTitle: string, description: string, applications: string[]): LandingConfig {
  return buildLanding({
    slug,
    route: `/mader-balear/${slug}`,
    navName,
    heroBadge: "Mader Balear & Fusta Antiga",
    heroTitle,
    heroDescription: description,
    introTitle: "Madera recuperada para proyectos con identidad propia",
    introDescription:
      "Cada pieza conserva huellas, tonos y variaciones. El objetivo es integrar esa memoria material en interiores, exteriores o elementos arquitectonicos con criterio actual.",
    tone: `mader balear ${slug} madera recuperada`,
    applications: applications.map((title) => ({
      title,
      text: "Aplicacion orientada a proyectos que buscan textura real, calidez y caracter mediterraneo."
    })),
    systems: [
      { title: "Seleccion de pieza", text: "Se revisa estado, textura, tono y disponibilidad de material." },
      { title: "Preparacion", text: "Cepillado, limpieza, corte, tratamiento y acabado segun destino." },
      { title: "Instalacion", text: "Encuentros y fijaciones se definen para preservar la lectura del material." }
    ],
    materials: [
      { title: "Madera vieja", subtitle: "Pieza recuperada", text: "Tablas y piezas con memoria real." },
      { title: "Acabados naturales", subtitle: "Proteccion", text: "Aceites y tratamientos que respetan textura y tono." },
      { title: "Combinacion tecnica", subtitle: "Proyecto completo", text: "Puede combinarse con termo tratada, quemada o sistemas actuales." }
    ],
    technicalPoints: [
      "Material con variaciones reales; cada partida debe revisarse segun disponibilidad.",
      "Ideal para proyectos donde la imperfeccion controlada aporta valor.",
      "Requiere definir uso, acabado, mantenimiento y forma de instalacion."
    ],
    specs: [
      { label: "Linea", value: navName },
      { label: "Material", value: "Madera recuperada / Fusta Antiga" },
      { label: "Uso", value: applications.join(", ") }
    ],
    complementaryTitle: "Mader Balear como hilo conductor",
    complementaryText: "La madera recuperada puede conectar puertas, suelos, revestimientos, frentes y piezas decorativas dentro de una misma narrativa material."
  });
}

export const balearMaderaViejaLanding = buildBalearLanding(
  "madera-vieja",
  "Madera vieja",
  "Madera vieja recuperada para interiores con memoria material",
  "Tablas y piezas antiguas preparadas para revestimientos, suelos, mobiliario y proyectos con caracter mediterraneo.",
  ["Revestimientos", "Suelos", "Mobiliario", "Piezas decorativas"]
);

export const balearPuertasLanding = buildBalearLanding(
  "puertas",
  "Puertas",
  "Puertas de madera recuperada para proyectos con presencia artesanal",
  "Puertas interiores y exteriores con textura, herrajes, tono y lectura material diferenciada.",
  ["Puertas interiores", "Puertas exteriores", "Cabeceros", "Paneles correderos"]
);

export const balearTablerosLanding = buildBalearLanding(
  "tableros-reclaimed",
  "Tableros reclaimed",
  "Tableros reclaimed para mobiliario, paneles y arquitectura interior",
  "Superficies recuperadas para mesas, frentes, revestimientos y piezas a medida con textura real.",
  ["Mobiliario", "Paneles", "Mesas", "Superficies a medida"]
);

export const balearRevestimientosLanding = buildBalearLanding(
  "revestimientos",
  "Revestimientos",
  "Revestimientos Mader Balear para paredes con textura autentica",
  "Paneles y tablas recuperadas para interiores, fachadas protegidas y espacios con atmosfera mediterranea.",
  ["Paredes interiores", "Hoteles", "Restauracion", "Retail"]
);

export const balearFrentesCocinaLanding = buildBalearLanding(
  "frentes-cocina",
  "Frentes de cocina",
  "Frentes de cocina en madera recuperada con caracter mediterraneo",
  "Soluciones para cocinas, frentes, puertas y piezas de mobiliario que buscan calidez y singularidad.",
  ["Frentes", "Puertas de armario", "Islas", "Mobiliario"]
);

export const balearDecoracionLanding = buildBalearLanding(
  "decoracion",
  "Decoracion",
  "Decoracion y piezas especiales en madera recuperada",
  "Elementos decorativos, paneles, cabeceros y piezas singulares para sumar textura sin reformular todo el espacio.",
  ["Cabeceros", "Paneles decorativos", "Piezas singulares", "Decoracion mural"]
);

export const allLandings = [
  fachadasLanding,
  deckingLanding,
  interioresLanding,
  pergolasLanding,
  suelosInteriorLanding,
  termoLanding,
  maderaQuemadaLanding,
  vigueriaLanding,
  balearMaderaViejaLanding,
  balearPuertasLanding,
  balearTablerosLanding,
  balearRevestimientosLanding,
  balearFrentesCocinaLanding,
  balearDecoracionLanding
];

