# Theme Gavejo

Plantilla privada CAPTURE de Nuklo para Maderas Gavejo, basada 1x1 en la infraestructura visual del front `Gavejo` y adaptada para funcionar solo como front publico.

## Contrato

- `mode`: `capture`
- `contractVersion`: `capture@1.0.0`
- Superficies: `LEAD_LANDING`, `CONTENT_PAGE`
- Transporte de leads: `postMessage` hacia Nuklo; Nuklo registra internamente en `/api/leads`

Esta plantilla no implementa inventario comercial, fichas de producto, carrito, checkout, pedidos ni ningun flujo SALES. El tenant, branding, media, landing activa y tracking son responsabilidad de Nuklo Core, resueltos por el `Host` header.

## Runtime en Nuklo

Esta plantilla se publica como `renderer=remote-static-app`: GitHub Pages sirve la app estatica completa y Nuklo Core descarga el HTML publicado para servirlo como HTML real dentro del dominio del cliente. No convertir este front a `layout.json/theme.css`, porque eso cambia el diseno real.

El theme debe comportarse como web nativa, no como iframe: `100dvh`, `position: fixed`, `sticky`, modales y scroll se disenan contra el viewport normal del navegador.

El formulario no debe hablar con la base de datos ni conocer secretos. `ContactForm` envia el lead por `window.postMessage` en la misma ventana y Nuklo Core lo registra en `/api/leads`.

La navegacion interna usa rutas normales del sitio, por ejemplo `/blog`, `/contacto` o `/soluciones`.

Mientras Nuklo termina el cambio a HTML nativo, `NukloCompatibilityBridge` mantiene compatibilidad con el montaje legacy en iframe solo para publicar altura/navegacion al parent. En render nativo no modifica estilos, scroll ni layout.

## Scripts

```bash
npm run dev
npm run build
npm run typecheck
npm run check:contract
```

## Estructura

- `nuklo.template.json`: manifest de compatibilidad Nuklo Template Kit.
- `src/app`: rutas publicas del front Gavejo adaptadas a CAPTURE.
- `src/components/ui/ContactForm.tsx`: formulario CAPTURE que envia leads a Nuklo Core.
- `src/components/ui/NukloCompatibilityBridge.tsx`: compatibilidad temporal para el montaje legacy en iframe; no aplica estilos ni altera layout nativo.
- `src/components/landing`: landing reutilizable para fachadas y madera termotratada.
- `src/lib/landing-data.ts`: contenido estatico del front publico.
- `scripts/check-contract.mjs`: validacion local minima del manifest CAPTURE.

