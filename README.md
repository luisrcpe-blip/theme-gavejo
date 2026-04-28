# Theme Gavejo

Plantilla privada CAPTURE de Nuklo para Maderas Gavejo, basada 1x1 en la infraestructura visual del front `Gavejo` y adaptada para funcionar solo como front publico.

## Contrato

- `mode`: `capture`
- `contractVersion`: `capture@1.0.0`
- Superficies: `LEAD_LANDING`, `CONTENT_PAGE`
- Endpoint publico permitido: `POST /api/leads`

Esta plantilla no implementa inventario comercial, fichas de producto, carrito, checkout, pedidos ni ningun flujo SALES. El tenant, branding, media, landing activa y tracking son responsabilidad de Nuklo Core, resueltos por el `Host` header.

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
- `src/components/ui/ContactForm.tsx`: formulario CAPTURE que envia leads a `/api/leads`.
- `src/components/landing`: landing reutilizable para fachadas y madera termotratada.
- `src/lib/landing-data.ts`: contenido estatico del front publico.
- `scripts/check-contract.mjs`: validacion local minima del manifest CAPTURE.

