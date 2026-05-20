# Bitacora PC2 - Analisis inicial

## 2026-05-20 - Ajuste alto hero y CTAs visibles

- Solicitud: corregir secciones principales para respetar alto completo de pantalla y evitar que los botones queden cortados, especialmente en `/materiales/termo-tratada`.
- Archivos modificados: `src/styles/landing.css` y `src/styles/thermo-landing.css`.
- Cambio realizado: se unificaron los heroes principales a `min-height: 100dvh` y se elimino la altura rigida en la landing termo para permitir crecimiento si el contenido no cabe.
- Cambio realizado: se aumento el padding inferior con `env(safe-area-inset-bottom)` para que los CTAs no queden pegados ni cortados por el borde inferior del viewport.
- Validacion: `npm run check:contract` paso correctamente.
- Pendiente de entorno: `npm run build`/`npm run dev` siguen bloqueados en PC2 por la ruta local inexistente `C:\Users\Edgar`, detectada previamente.

## 2026-05-20 - Verificacion Git y version

- Contexto: revision realizada desde PC2 / PC secundaria sobre carpeta compartida por red hacia la PC principal.
- Repositorio remoto detectado: `https://github.com/luisrcpe-blip/theme-gavejo.git`.
- Rama actual: `main`.
- Ultimo commit en `main`: `79da207 Improve hamburger menu backdrop`.
- Estado observado: `main` alineada con `origin/main` al momento de la revision.
- Ramas remotas detectadas: `origin/main` y `origin/codex/gavejo-editorial-ux`.
- Tags remotos: no se detectaron tags publicados en el remoto consultado.
- Aclaracion de version: `package.json` indica `0.1.0`, pero la version operativa del template esta en `nuklo.template.json` como `templateVersion: 2.4.13`.
- Decision: para hablar de version del theme/template se usara `2.4.13`; `0.1.0` queda entendido solo como version interna del paquete Next.
- Nota PC2: Git requiere marcar la ruta compartida como segura o usar excepcion temporal por diferencia de propietario entre PC principal y PC2.

## 2026-05-20 - Reposicion de version visible en header

- Solicitud: volver a mostrar la version del theme en la parte superior derecha como estaba antes.
- Archivo modificado: `src/components/ui/PublicHeader.tsx`.
- Cambio realizado: se vuelve a renderizar `TemplateVersionBadge` desde el header publico.
- Version mostrada: `v2.4.13`, tomada desde `src/lib/runtime.ts`.
- Validacion inicial: `npm run typecheck` no pudo ejecutarse porque falta `node_modules/typescript/bin/tsc` en esta copia compartida.
- Decision PC2: no se tocaron rutas ni logica de navegacion; solo se reinsertó el indicador visual de version.
- Accion de entorno PC2: se ejecuto `npm install` y se reinstalo `node_modules/next` porque la copia local de Next estaba incompleta.
- Validacion posterior: `npm run build` y `npm run dev` llegan a Next 15.5.15, pero fallan por `ENOENT: lstat 'C:\Users\Edgar'`.
- Observacion: no se encontro `C:\Users\Edgar` en archivos del proyecto, variables de entorno de PC2 ni enlaces simbolicos dentro del arbol revisado. Queda como pendiente revisar configuracion local/heredada de la PC principal o cache de entorno.
