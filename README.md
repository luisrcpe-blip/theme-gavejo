# Theme Gavejo

Plantilla privada CAPTURE de Nuklo para Maderas Gavejo, basada 1x1 en la infraestructura visual del front `Gavejo` y adaptada para funcionar solo como front publico.

## Contrato

- `mode`: `capture`
- `contractVersion`: `capture@1.0.0`
- Superficies: `LEAD_LANDING`, `CONTENT_PAGE`
- Endpoint publico permitido: `POST /api/leads`

Esta plantilla no implementa inventario comercial, fichas de producto, carrito, checkout, pedidos ni ningun flujo SALES. El tenant, branding, media, landing activa y tracking son responsabilidad de Nuklo Core, resueltos por el `Host` header.

## Runtime en Nuklo

Esta plantilla se publica como `renderer=remote-static-app`: GitHub Pages sirve la app estatica completa y Nuklo Core la monta para el cliente asignado. No convertir este front a `layout.json/theme.css`, porque eso cambia el diseno real.

El formulario no debe hablar con la base de datos ni conocer secretos. Cuando la app esta embebida por Nuklo, `ContactForm` envia el lead al parent por `postMessage` y Nuklo Core lo registra en `/api/leads`.

Cuando esta embebida, la navegacion interna tambien pasa por `postMessage`: `NukloEmbedBridge` intercepta links locales
como `/blog` o `/contacto`, envia `nuklo-template:navigate` al parent y Nuklo Core cambia la URL publica del cliente.
Esto evita que el navegador se quede pegado a `/landing-principal` mientras el iframe navega por dentro.

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
- `src/components/ui/NukloEmbedBridge.tsx`: puente de altura/estado para cuando Nuklo monta la app.
- `src/components/landing`: landing reutilizable para fachadas y madera termotratada.
- `src/lib/landing-data.ts`: contenido estatico del front publico.
- `scripts/check-contract.mjs`: validacion local minima del manifest CAPTURE.

