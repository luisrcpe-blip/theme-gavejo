# Checklist de cierre - Theme Gavejo CAPTURE

Documento generado a partir de `Cronograma_Gavejo_Web.pdf` y adaptado al contrato Nuklo Template Kit CAPTURE.

## Regla base del proyecto

- [x] Mantener la plantilla como `mode: capture`.
- [x] No crear catalogo, carrito, checkout, pedidos, cupones ni reviews.
- [x] No acceder directo a base de datos desde el front.
- [x] No usar Prisma ni `DATABASE_URL`.
- [x] No crear workers, PM2, cluster, nodemon ni procesos propios.
- [x] Formularios publicos solo por contrato Nuklo: `/api/leads` o puente embed hacia Nuklo Core.
- [x] Tenant, branding, media, landing activa y tracking son responsabilidad de Nuklo Core por Host header.

## Front actual ya implementado

- [x] Repositorio `theme-gavejo` con Next.js.
- [x] Manifest `nuklo.template.json` CAPTURE.
- [x] Home publica para Maderas Gavejo.
- [x] Header publico responsive.
- [x] Menu movil compacto sin opcion Admin.
- [x] Footer movil refinado para produccion.
- [x] WhatsApp flotante.
- [x] Formulario de contacto CAPTURE compatible con Nuklo.
- [x] Puente embed `NukloEmbedBridge` para navegacion/altura dentro de Nuklo.
- [x] Landing Fachadas.
- [x] Landing Decking exterior.
- [x] Landing Revestimientos interiores.
- [x] Landing Madera Termo Tratada.
- [x] Pagina Materiales.
- [x] Pagina Mader Balear general.
- [x] Pagina Blog general.
- [x] Pagina Contacto.
- [x] Pagina Privacidad.
- [x] Imagenes locales bajo `public/media/gavejo`.
- [x] Build estatico compatible con GitHub Pages/Nuklo remote static app.

## Semana 1 del cronograma - Front base y soluciones

### Arranque

- [x] Configuracion Next.js.
- [x] Estructura de carpetas.
- [x] Repositorio GitHub.
- [x] Landing demo Fachadas.
- [x] Hero con imagen.
- [x] Intro.
- [x] Aplicaciones.
- [x] Sistemas.
- [x] Materiales.
- [x] Bloque tecnico.
- [x] Formulario contacto.
- [x] WhatsApp flotante.

### Home

- [x] Hero principal.
- [x] Bloque intro Gavejo.
- [x] Grid de soluciones.
- [x] Materiales destacados.
- [x] CTA final.
- [x] H1/H2 basicos.
- [ ] Metadata SEO especifica por pagina con titulos/descripciones finales.
- [ ] Revisar si se necesita video real en hero o mantener imagen por rendimiento.

### Soluciones

- [x] Fachadas version final.
- [x] Decking exterior.
- [x] Revestimientos interiores.
- [x] Pergolas y cerramientos.
- [x] Suelos interior como landing separada.
- [ ] Galeria especifica por cada solucion.
- [ ] Botones de descarga PDF reales por solucion si el cliente entrega catalogos.

## Semana 2 del cronograma - Materiales, Mader Balear y Galeria

### Materiales

- [x] Madera Termo Tratada.
- [x] Madera Quemada / Shou Sugi Ban como landing propia.
- [x] Vigueria como landing propia.
- [x] Catalogo PDF Madera Termo Tratada provisional front-only.
- [x] Catalogo PDF Madera Quemada provisional front-only.
- [x] Catalogo PDF Vigueria provisional front-only.
- [x] Boton de descarga por material cuando aplica.
- [ ] Fichas tecnicas reales en PDF o secciones visuales.

### Mader Balear

- [x] Pagina general Mader Balear.
- [x] Landing Madera vieja.
- [x] Landing Puertas.
- [x] Landing Tableros reclaimed.
- [x] Landing Revestimientos Mader Balear.
- [x] Landing Frentes de cocina.
- [x] Landing Decoracion.
- [ ] Tratamiento visual editorial diferenciado por familia.
- [ ] Imagenes definitivas por familia.

### Proyectos / Galeria

- [x] Pagina `/proyectos` front-only.
- [x] Grid de obras/referencias.
- [x] Filtros front-only por tipologia.
- [x] Lightbox front-only.
- [ ] Imagenes definitivas de obras.
- [ ] Textos de proyectos o casos reales.

### Contacto

- [x] Pagina contacto.
- [x] Formulario completo CAPTURE.
- [x] WhatsApp.
- [ ] Mapa visual/iframe si el cliente quiere mostrar ubicacion.
- [ ] Confirmar direccion publica exacta.
- [ ] Confirmar telefono/email definitivos.

## Semana 3 del cronograma - Admin y CRM

Esto NO debe implementarse dentro de esta plantilla front CAPTURE.

- [ ] Backend Node/API REST propio: pertenece a Nuklo Core o a un servicio externo, no al theme.
- [ ] Base de datos MySQL: pertenece a Nuklo Core.
- [ ] Tablas `pages`, `projects`, `media`, `catalogs`, `leads`, `lead_notes`, `campaigns`, `seo_meta`, `users`, `settings`: backend/Nuklo Core.
- [ ] Panel admin Dashboard: backend/Nuklo Admin.
- [ ] Gestion de contenido editable: backend/Nuklo Admin o CMS.
- [ ] Roles y accesos: backend/Nuklo Core.
- [ ] Subida de imagenes/videos/PDFs: backend/media manager.
- [ ] Blog editable: backend/CMS.
- [ ] CRM de leads: backend/Nuklo Core.
- [ ] Estados de lead: backend/Nuklo Core.
- [ ] Notas internas: backend/Nuklo Core.
- [ ] Exportacion CSV: backend/Nuklo Core.

## Semana 4 del cronograma - Integraciones, testing y entrega

### Front-only

- [x] Build local.
- [x] Typecheck.
- [x] Check de contrato CAPTURE.
- [ ] Auditoria responsive completa: 360, 390, 430, 768, 1024.
- [ ] Revision manual de todas las rutas publicas.
- [ ] Revision de copy final sin mojibake.
- [ ] Revision de imagenes no repetidas por landing.
- [ ] Revision de accesibilidad basica: labels, foco, contraste.
- [ ] Revision de performance: pesos de imagenes, lazy loading, LCP.
- [ ] Revision SEO: title, description, canonical, OG image.
- [ ] Revision de formulario con Nuklo Core real.
- [ ] Revision de embed remoto en `gavejo.nuklo.cloud`.

### Backend/Nuklo Core

- [ ] Email automatico al recibir lead.
- [ ] Plantilla de email de notificacion.
- [ ] Mailrelay/newsletter gestionado por Nuklo.
- [ ] Activacion/desactivacion de integraciones desde ajustes.
- [ ] Dominio final `gavejo.nuklo.cloud` o dominio del cliente.
- [ ] SSL.
- [ ] Tracking/analytics.
- [ ] Persistencia real de leads.
- [ ] Panel para revisar leads.
- [ ] Exportacion de leads.

## Contenido que falta pedir al cliente

- [ ] Logo final en SVG/PNG alta calidad si existe.
- [ ] Imagenes reales de obras/proyectos.
- [ ] Catalogos PDF por material.
- [ ] Fichas tecnicas oficiales.
- [ ] Direccion fisica publica.
- [ ] Email publico.
- [ ] Telefono publico.
- [ ] WhatsApp definitivo.
- [ ] Textos legales de privacidad/cookies si aplica.
- [ ] Casos de proyecto reales para galeria.
- [ ] SEO final: titulos, descriptions y keywords prioritarias.
- [ ] Redes sociales si deben aparecer.

## Checklist final antes de usar como plantilla principal

- [x] Completar landings faltantes de cronograma: Pergolas/Cerramientos, Suelos interior, Madera Quemada, Vigueria y 6 Mader Balear.
- [x] Crear Galeria/Proyectos front-only.
- [x] Integrar PDFs provisionales como assets publicos; faltan PDFs oficiales finales.
- [ ] Ajustar metadata SEO por ruta.
- [ ] Verificar formulario en entorno Nuklo real.
- [ ] Verificar navegacion embebida en Nuklo.
- [ ] Revisar responsive completo en movil/tablet/desktop.
- [ ] Optimizar imagenes finales.
- [ ] Ejecutar `npm run check:contract`.
- [ ] Ejecutar `npm run typecheck`.
- [ ] Ejecutar `npm run build`.
- [ ] Publicar version final cuando Nuklo Core tenga backend de leads/tracking listo.

## Estado recomendado

La plantilla ya puede servir como base CAPTURE para negocio/landing principal, pero para cumplir al 100% el cronograma original de Gavejo faltan principalmente landings extra, galeria/proyectos, PDFs reales, metadata SEO fina y validacion con Nuklo Core real.


## Actualizacion 2026-04-29

- [x] Se agregaron las landings front-only faltantes del cronograma.
- [x] Se agrego `/proyectos` con filtros y lightbox front-only.
- [x] Se agregaron PDFs provisionales en `public/documentos`.
- [ ] Sustituir PDFs provisionales por documentos oficiales de cliente/Nuklo Media.
- [ ] Validar en entorno Nuklo real la captura de leads y la navegacion embebida.
