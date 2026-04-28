# Theme Gavejo

Plantilla publica CAPTURE de Nuklo para Maderas Gavejo.

## Contrato

- `mode`: `capture`
- `contractVersion`: `capture@1.0.0`
- Superficies: `LEAD_LANDING`, `CONTENT_PAGE`
- Endpoint publico permitido: `POST /api/leads`

Esta plantilla no implementa catalogo, producto, carrito, checkout, pedidos ni ningun flujo SALES. El tenant, branding, media, landing activa y tracking son responsabilidad de Nuklo Core, resueltos por el `Host` header.

## Scripts

```bash
npm run dev
npm run build
npm run typecheck
npm run check:contract
```

## Estructura

- `nuklo.template.json`: manifest de compatibilidad Nuklo Template Kit.
- `src/app/page.tsx`: landing publica principal.
- `src/components/lead-form.tsx`: formulario CAPTURE que envia leads a `/api/leads`.
- `scripts/check-contract.mjs`: validacion local minima del manifest CAPTURE.
