# Portafolio — Alfonso Mena

**En vivo: https://alfonsomenadev-del.github.io**

Sitio personal en HTML, CSS y JavaScript puro. Sin dependencias, sin build, sin `npm install`.

## Publicar cambios

Está en GitHub Pages sobre la rama `main`. Cada push se publica solo en un par de minutos:

```bash
git add -A && git commit -m "describe tu cambio" && git push
```

## Cómo verlo

Haz doble clic en `index.html`. Ya está.

## Estructura

```
Portafolio/
├── index.html        ← todo el contenido (aquí editas textos)
├── css/styles.css    ← todos los estilos
├── js/main.js        ← menú móvil, animaciones, formulario
├── img/              ← pon aquí tus capturas de proyectos
└── cv.pdf            ← tu CV (ya copiado desde Descargas)
```

> Si actualizas tu CV, reemplaza `cv.pdf` conservando ese nombre y el botón
> "Descargar CV" seguirá funcionando sin tocar el HTML.

## Qué editar (busca los comentarios `==== EDITA ESTO ====`)

| Qué | Dónde |
|---|---|
| Tu nombre, título y descripción SEO | `index.html`, dentro de `<head>` |
| Texto del hero | `index.html`, sección `#inicio` |
| Links de GitHub y LinkedIn | `index.html`, bloque `.hero__socials` |
| Tu historia y datos numéricos | `index.html`, sección `#sobre-mi` — ya escritos desde tu CV |
| Proyectos | `index.html`, sección `#proyectos` — ya llenos, ver abajo |
| Skills | `index.html`, sección `#skills` — ya llenos con tu stack real |
| Experiencia laboral | `index.html`, sección `#experiencia` — desde tu CV |
| Títulos y certificaciones | `index.html`, sección `#formacion` — desde tu CV |
| Correo (aparece en 3 sitios) | `index.html` ×2 y `js/main.js` ×1 |

### Agregar un trabajo o una certificación

En `#experiencia`, copia un `<li class="timeline__item reveal">` completo: el punto de
la línea de tiempo se dibuja solo. En `#formacion`, copia un `<li class="cred">`.
En ambos casos el orden es del más reciente al más antiguo.
| Color de acento | `css/styles.css`, variable `--accent` (línea ~18) |

## Proyectos incluidos

Los siete proyectos ya están escritos con datos reales. Falta ponerles captura y link:

| # | Proyecto | Stack | Captura |
|---|---|---|---|
| 1 | Familia MC — Tienda online | .NET 9, EF Core, SQL Server | ⬜ falta `img/familiamc.jpg` |
| 2 | PuraVisión — CRM móvil | Kotlin, Compose, Room, Firebase | ⬜ falta `img/puravision-crm.jpg` |
| 3 | Chanchito — Finanzas personales | Expo, React Native, TypeScript | ⬜ falta `img/chanchito.jpg` |
| 4 | Comparador de precios + bot | Python, SQLite, Telegram | ⬜ falta `img/comparador-precios.jpg` |
| 5 | ERP Comida Rápida — POS | Electron, SQLite | ⬜ falta `img/erp-comida-rapida.jpg` |
| 6 | ControlÓptica — ERP de operativos | Electron, React 19, ExcelJS | ⬜ falta `img/controloptica.jpg` |
| 7 | Óptica Puravisión — Sitio web | .NET 9, ASP.NET Core MVC | ✅ desde producción |

El sitio de Puravisión está en vivo en **https://puravisionoptica.com** y su tarjeta
ya enlaza ahí.

### Poner la captura

En la tarjeta, reemplaza esta línea:

```html
<span class="card__placeholder">img/familiamc.jpg</span>
```

por:

```html
<img src="img/familiamc.jpg" alt="Tienda online Familia MC">
```

Tamaño recomendado: **1200×750 px**, en `.jpg` o `.webp`. Mientras no haya imagen el
hueco se queda chico a propósito; al poner el `<img>` recupera solo el formato 16:10.

### Poner los links

Cada tarjeta trae su bloque `.card__links` **comentado**, porque ninguno de los
proyectos tiene todavía repo público ni demo en línea. Cuando subas uno, quita los
`<!--` y `-->` de esa tarjeta y cambia `URL_REPO` / `URL_DEMO` por la dirección real.

### Agregar un proyecto nuevo

Copia un bloque `<article class="card reveal">…</article>` completo y cambia el contenido.

### Cambiar el color

En `css/styles.css`, línea ~18:

```css
--accent:      #2f5d50;   /* verde tinta */
--accent-soft: #eef3f1;   /* la versión clarita del mismo color */
```

Cambia los dos juntos para que el resaltado del hero combine.

## Activar el formulario de contacto

Ahora mismo el formulario abre tu cliente de correo. Para que llegue a tu bandeja sin salir del sitio:

1. Crea una cuenta gratis en [formspree.io](https://formspree.io)
2. Crea un formulario nuevo y copia el ID que te dan
3. En `index.html`, reemplaza `TU_ID_AQUI` por ese ID

## Publicarlo gratis

**Opción rápida — Netlify Drop:** entra a [app.netlify.com/drop](https://app.netlify.com/drop) y arrastra la carpeta `Portafolio`. Listo, sitio en línea.

**Opción con GitHub Pages:**

```bash
git init
git add .
git commit -m "Portafolio inicial"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/portafolio.git
git push -u origin main
```

Luego en GitHub: **Settings → Pages → Source: main / (root) → Save**.
Tu sitio queda en `https://TU-USUARIO.github.io/portafolio`.

## Incluido

- Seis secciones: sobre mí, proyectos, experiencia, skills, formación y contacto
- Línea de tiempo de experiencia con puntos sobre el eje
- Diseño responsive (móvil, tablet, escritorio)
- Menú hamburguesa con cierre por `Escape`
- Animaciones de entrada al hacer scroll
- Link de navegación activo según la sección visible
- Accesibilidad: skip link, foco visible, `prefers-reduced-motion`
- Meta tags para SEO y vista previa al compartir
- Estilos de impresión
