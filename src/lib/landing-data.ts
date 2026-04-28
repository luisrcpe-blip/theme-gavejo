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

export const allLandings = [fachadasLanding, termoLanding, deckingLanding, interioresLanding];
