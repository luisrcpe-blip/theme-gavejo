# Requisitos y preguntas para anexar Theme Gavejo en Nuklo

Este front esta preparado como plantilla CAPTURE. Para anexarlo correctamente como plantilla principal en Nuklo, estas son las confirmaciones que debe resolver Nuklo Core/Admin.

## Publicacion y montaje

- [ ] Confirmar URL publica definitiva: `gavejo.nuklo.cloud` u otro dominio.
- [ ] Confirmar que Nuklo montara la plantilla como `remote-static-app`.
- [ ] Confirmar `appUrl` final servido desde GitHub Pages u hosting estatico equivalente.
- [ ] Confirmar `mediaAssets` final para imagenes y PDFs oficiales.
- [ ] Confirmar si Nuklo hace proxy del path completo o usa iframe/embed.
- [ ] Confirmar si las rutas internas (`/soluciones`, `/materiales`, `/proyectos`, etc.) deben resolver por History API o por mensaje `nuklo-template:navigate`.

## Leads

- [ ] Confirmar endpoint real de captura: `POST /api/leads`.
- [ ] Confirmar payload esperado por Nuklo Core: nombre, email, telefono, mensaje, originLanding, consentimiento, UTM.
- [ ] Confirmar si el lead se envia por iframe `postMessage` o por fetch directo relativo al host Nuklo.
- [ ] Confirmar estados de lead: nuevo, en gestion, cerrado.
- [ ] Confirmar si Nuklo guardara notas internas.
- [ ] Confirmar exportacion CSV o integracion CRM.
- [ ] Confirmar mensaje de exito/error que debe devolver Core al front.

## Tenant y branding

- [ ] Confirmar resolucion de tenant por Host header.
- [ ] Confirmar tenant activo para Gavejo.
- [ ] Confirmar branding configurable: logo, colores, telefono, WhatsApp, email, direccion.
- [ ] Confirmar si los datos de contacto vendran por runtime settings o quedaran estaticos en la plantilla.
- [ ] Confirmar `landing.active=true` para la landing principal.

## Media y documentos

- [ ] Confirmar si imagenes finales se quedaran dentro del repo o se serviran desde Nuklo Media.
- [ ] Confirmar subida/gestion de PDFs oficiales desde Nuklo Admin.
- [ ] Reemplazar PDFs provisionales: `tantimber.pdf`, `tantimber-specs.pdf`, `madera-quemada.pdf`, `vigueria.pdf`.
- [ ] Confirmar limites de peso de imagen y formatos recomendados.
- [ ] Confirmar estrategia de cache para assets.

## SEO y tracking

- [ ] Confirmar si Nuklo inyecta metadatos SEO por tenant/ruta o si se publican desde Next static.
- [ ] Confirmar title/description/canonical por ruta.
- [ ] Confirmar OG image por tenant.
- [ ] Confirmar analytics/tracking: GA4, Pixel, server events o tracking interno Nuklo.
- [ ] Confirmar gestion de cookies si aplica.

## Integraciones

- [ ] Confirmar si Nuklo enviara email automatico al recibir lead.
- [ ] Confirmar plantilla de email y destinatarios.
- [ ] Confirmar Mailrelay/newsletter si el cliente lo quiere.
- [ ] Confirmar si WhatsApp debe ser configurable desde panel.

## Admin/CRM

- [ ] Confirmar que el theme NO implementa admin propio.
- [ ] Confirmar donde se revisan los leads en Nuklo Admin.
- [ ] Confirmar si habra editor de contenido para textos/imagenes o si la plantilla queda estatica.
- [ ] Confirmar roles/accesos para el cliente.
- [ ] Confirmar si blog sera estatico o editable desde CMS/Nuklo.

## QA antes de anexar

- [ ] Probar home y todas las rutas publicas embebidas en Nuklo.
- [ ] Probar formulario desde cada landing.
- [ ] Probar UTMs y sourcePage/originLanding.
- [ ] Probar navegacion movil dentro del embed.
- [ ] Probar descarga de PDFs.
- [ ] Probar responsive 390, 430, 768 y desktop.
- [ ] Verificar que no exista flujo SALES: catalogo, carrito, checkout, pedidos.
