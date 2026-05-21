# Bitacora PC2 - Analisis inicial

## 2026-05-21 - Version 2.4.18 autoplay carruseles 4 segundos

- Contexto: PC2 / computadora secundaria trabajando desde copia temporal porque la carpeta compartida de PC1 no esta disponible.
- Solicitud: los carruseles de imagenes y videos deben pasar automaticamente al siguiente medio cada 4 segundos.
- Archivos modificados: `src/components/ui/HeroCoverCarousel.tsx`, `src/components/ui/IndexHeroSlider.tsx`, `nuklo.template.json` y `src/lib/runtime.ts`.
- Cambio realizado: el carrusel de covers avanza automaticamente cada `4000ms` cuando hay mas de un medio.
- Cambio realizado: el slider del index tambien queda ajustado a `4000ms` para mantener el mismo ritmo.
- Cambio realizado: version del template actualizada de `2.4.17` a `2.4.18`.
- Validacion: `npm run check:contract` y `npm run typecheck` pasaron correctamente antes del push.
- Pendiente PC1: cuando la PC1 vuelva, sincronizar con GitHub para traer este commit.

## 2026-05-20 - Version 2.4.17 flechas alineadas con dots movil

- Contexto: PC1 apagada; trabajo realizado desde copia temporal PC2 clonada desde GitHub.
- Solicitud: las flechas moviles no deben quedar encima de textos ni botones; deben alinearse con los puntos de navegacion.
- Archivos modificados: `src/styles/landing.css`, `nuklo.template.json` y `src/lib/runtime.ts`.
- Cambio realizado: se corrigio la posicion movil de flechas, anulando el desplazamiento vertical heredado de escritorio.
- Cambio realizado: las flechas moviles quedan en la misma linea visual que los dots y cerca de los bordes laterales.
- Cambio realizado: version del template actualizada de `2.4.16` a `2.4.17`.
- Validacion: `npm run check:contract` paso correctamente antes del push; queda comprobar en navegador despues del deploy publico.
- Pendiente PC1: cuando la PC1 vuelva, sincronizar con GitHub para traer este commit.

## 2026-05-20 - Version 2.4.16 flechas laterales movil

- Contexto: PC1 apagada; trabajo realizado desde copia temporal PC2 clonada desde GitHub.
- Solicitud: en movil las flechas se veian mal; deben estar a la altura de los botones y mas cerca del borde. Tambien se pidio mas espacio entre `Cotizar` y `WhatsApp`.
- Archivos modificados: `src/styles/landing.css`, `src/styles/thermo-landing.css`, `nuklo.template.json` y `src/lib/runtime.ts`.
- Cambio realizado: las flechas moviles se reposicionan a los bordes laterales y a la altura visual de los CTAs.
- Cambio realizado: se aumenta el espacio entre los botones principales moviles.
- Cambio realizado: version del template actualizada de `2.4.15` a `2.4.16`.
- Validacion: `npm run check:contract` paso correctamente antes del push.
- Pendiente PC1: cuando la PC1 vuelva, sincronizar con GitHub para traer este commit.

## 2026-05-20 - Version 2.4.15 y flechas moviles refinadas

- Contexto: PC1 apagada; trabajo realizado desde copia temporal PC2 clonada desde GitHub.
- Solicitud: las flechas de navegacion en movil se veian mal esteticamente.
- Archivos modificados: `src/styles/landing.css`, `nuklo.template.json` y `src/lib/runtime.ts`.
- Cambio realizado: las flechas moviles dejan de verse como botones circulares oscuros y pasan a ser chevrons ligeros, transparentes, integrados con los dots.
- Cambio realizado: se ajusto la posicion de flechas/dots para que funcionen como una navegacion discreta en la zona inferior del hero.
- Cambio realizado: version del template actualizada de `2.4.14` a `2.4.15`.
- Validacion: `npm run check:contract` paso correctamente antes del push.
- Pendiente PC1: cuando la PC1 vuelva, sincronizar con GitHub para traer este commit.

## 2026-05-20 - Version 2.4.14 y navegacion movil

- Contexto: PC1 apagada; trabajo realizado desde copia temporal PC2 clonada desde GitHub.
- Solicitud: en movil volver a mostrar flechas de navegacion sin superponer contenido y usar un alto aproximado de `85dvh`.
- Archivos modificados: `src/styles/thermo-landing.css`, `src/styles/landing.css`, `nuklo.template.json` y `src/lib/runtime.ts`.
- Cambio realizado: el hero termo en movil usa `min-height: 85dvh` y espaciado compacto.
- Cambio realizado: las flechas del carrusel vuelven a mostrarse en movil, pequenas y ubicadas abajo alrededor de los dots.
- Cambio realizado: se actualizo la version del template de `2.4.13` a `2.4.14`.
- Validacion pendiente en navegador despues del deploy remoto; validacion de contrato ejecutada antes del commit.
- Pendiente PC1: cuando la PC1 vuelva, sincronizar con GitHub para traer este commit.

## 2026-05-20 - Correccion UX movil sin amontonamiento

- Contexto: PC1 apagada; trabajo realizado desde una copia temporal de PC2 clonada desde GitHub.
- Solicitud: en movil el hero no debe estar forzado a `height: 100dvh` si eso amontona contenido o genera superposiciones.
- Archivos modificados: `src/styles/thermo-landing.css` y `src/styles/landing.css`.
- Cambio realizado: en movil `#seccion-principal` vuelve a `height: auto` con `min-height` solo en el frame, permitiendo que el contenido respire.
- Cambio realizado: se restauran tamanos y espacios moviles mas legibles para titulo, texto, valores y botones.
- Cambio realizado: las flechas del carrusel se ocultan en movil para evitar que tapen titulo, texto o CTAs; quedan los dots como navegacion limpia.
- Validacion: `npm run check:contract` paso correctamente.
- Pendiente PC1: cuando la PC1 vuelva a estar disponible, sincronizar con GitHub para traer este commit.

## 2026-05-20 - Flechas carrusel en movil

- Solicitud: en movil las flechas del carrusel tapaban el titulo.
- Archivo modificado: `src/styles/landing.css`.
- Cambio realizado: en pantallas menores a 640px las flechas bajan a la zona inferior junto a la navegacion del carrusel y reducen su tamano.
- Validacion: `npm run check:contract` paso correctamente.

## 2026-05-20 - Correccion real 100dvh landing termo

- Solicitud: corregir que la seccion principal no crezca mas alla del 100% de la pantalla y que los dots no se vean forzados hacia arriba.
- Archivos modificados: `src/styles/thermo-landing.css` y `src/styles/landing.css`.
- Cambio realizado: `#seccion-principal` vuelve a `height: 100dvh` y `max-height: 100dvh`, con `overflow: hidden`.
- Cambio realizado: el contenido termo se compacta dentro del hero usando menor escala de H1, texto, iconos y espaciados; no se deja que la seccion crezca.
- Cambio realizado: los dots vuelven al borde inferior natural del carrusel, porque ahora el contenido deja espacio real para ellos.
- Revision navegador: se midio la URL publica en viewport `1900x916`; el hero publico ya mide `916px`, pero los dots estaban chocando con la zona de acciones. El ajuste local corrige la causa: contenido y padding inferior dentro de `100dvh`.
- Validacion: `npm run check:contract` paso correctamente.

## 2026-05-20 - Ajuste forma menu hamburguesa

- Solicitud: el boton hamburguesa habia quedado demasiado cuadrado.
- Archivo modificado: `src/styles/header.css`.
- Cambio realizado: se cambio a una pastilla suave con radio moderado, borde sutil y fondo tipo vidrio, evitando tanto el circulo pesado como el cuadrado rigido.
- Validacion: `npm run check:contract` paso correctamente.

## 2026-05-20 - Ajuste controles carrusel y menu

- Solicitud: asegurar que los puntos de navegacion del carrusel se vean dentro del 100% de alto de pantalla y mejorar estetica del menu hamburguesa/flechas.
- Archivos modificados: `src/styles/landing.css` y `src/styles/header.css`.
- Cambio realizado: los dots del carrusel se posicionan dentro del primer `100dvh`, no al final de la seccion cuando el contenido crece.
- Cambio realizado: las flechas laterales se posicionan a `50dvh` para mantenerse a media pantalla visible.
- Cambio realizado: se elimino el estilo circular pesado de flechas y menu hamburguesa; ahora usan controles rectos, sutiles y con vidrio ligero.
- Validacion: `npm run check:contract` paso correctamente.

## 2026-05-20 - Carruseles multimedia

- Solicitud: agregar soporte multimedia a los carruseles para probar imagenes y videos.
- Archivos modificados: `src/components/ui/HeroCoverCarousel.tsx`, `src/app/page.tsx`, `src/components/landing/LandingPage.tsx` y `src/styles/landing.css`.
- Cambio realizado: `HeroCoverCarousel` ahora acepta slides de tipo imagen o video; detecta video por `kind: "video"` o extension `.mp4`, `.webm`, `.ogg`.
- Cambio realizado: el index incluye como primer slide el video remoto `nature-hero.mp4`.
- Cambio realizado: la landing termo incluye el video local `public/media/gavejo/landing/termo-rain-drops.mp4`.
- Validacion: `npm run check:contract` paso correctamente.

## 2026-05-20 - Carruseles en covers de inicio y landings

- Solicitud: convertir los covers principales del index y landings en carruseles con flechas laterales y puntos de navegacion inferiores.
- Archivos modificados: `src/app/page.tsx`, `src/components/landing/LandingPage.tsx`, `src/components/ui/NeonPlaceholder.tsx`, `src/styles/landing.css` y `src/styles/thermo-landing.css`.
- Archivo creado: `src/components/ui/HeroCoverCarousel.tsx`.
- Cambio realizado: el inicio usa carrusel de imagenes en lugar del video estatico como cover principal.
- Cambio realizado: la landing termo y las landings generales usan carrusel de cover con flechas izquierda/derecha y dots inferiores.
- Decision PC2: se reutilizaron imagenes existentes del proyecto y fallbacks por tipo de landing para evitar depender de assets nuevos.
- Validacion: `npm run check:contract` paso correctamente.
- Pendiente de entorno: preview local completo sigue bloqueado en PC2 por la ruta local inexistente `C:\Users\Edgar`.

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
