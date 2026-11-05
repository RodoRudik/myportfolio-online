# Guía de Cloudflare Web Analytics

**Proyecto:** Rodolfo Espinosa — Portfolio  
**Hosting actual:** GitHub Pages  
**URL publicada:** https://rodorudik.github.io/myportfolio-online/

## 1. ¿Para qué sirve?

Cloudflare Web Analytics es una herramienta gratuita de analítica web orientada a la privacidad. Se instala mediante un pequeño script JavaScript (llamado *beacon*) y permite consultar métricas de visitas, páginas vistas y rendimiento desde el panel de Cloudflare. No es necesario trasladar el hosting ni cambiar los DNS para usar la instalación manual.

Documentación oficial: https://developers.cloudflare.com/web-analytics/about/

## 2. Qué mide y qué significan las métricas

En el panel de Web Analytics encontrarás, entre otras, estas métricas principales:

- **Visits (visitas):** una visita se registra cuando una página vista procede de otro sitio web o de un enlace directo. Una visita puede incluir varias páginas vistas. No equivale necesariamente a una persona única.
- **Page views (páginas vistas):** respuestas HTML satisfactorias que Cloudflare registra. En una aplicación SPA, la medición de las navegaciones internas depende de la compatibilidad del seguimiento SPA.
- **Page load time (tiempo de carga):** tiempo que tarda la página en cargarse desde la perspectiva del navegador del visitante.
- **Core Web Vitals:** indicadores relacionados con la experiencia de carga, interactividad y estabilidad visual.

No interpretes visitas o páginas vistas como un recuento exacto de personas. Bloqueadores, navegadores con protección estricta, fallos de red y otras condiciones pueden impedir que algunos datos lleguen a Cloudflare.

Referencia oficial de métricas: https://developers.cloudflare.com/web-analytics/data-metrics/high-level-metrics/

## 3. Crear el sitio en Cloudflare

1. Crea una cuenta o inicia sesión en https://dash.cloudflare.com/.
2. Abre **Web Analytics** desde el panel de Cloudflare (puede aparecer dentro de **Analytics & Logs**).
3. Selecciona **Add a site**.
4. En el campo **Set up hostname**, introduce el hostname del portfolio: `rodorudik.github.io`.
   - Introduce solamente el hostname, no `https://` ni la ruta `/myportfolio-online/`.
   - El portfolio está publicado en un subdirectorio de `github.io`; Cloudflare configura el sitio por hostname, no por la ruta del repositorio. Si tienes otros sitios publicados bajo el mismo hostname `rodorudik.github.io`, sus datos podrían mezclarse en el mismo conjunto. Tenlo presente al interpretar las estadísticas.
5. Selecciona el hostname sugerido y confirma con **Done**.
6. En **Manage site**, copia el snippet JavaScript que Cloudflare genera para ese sitio. El token es específico de ese registro; no reutilices el de otro hostname.

Guía oficial de instalación: https://developers.cloudflare.com/web-analytics/get-started/

## 4. Añadir el beacon al proyecto Vite + React

El sitio está publicado en GitHub Pages y no está servido a través del proxy de Cloudflare. Por tanto, se debe usar la **instalación manual**.

1. Abre el archivo `index.html` de la raíz del proyecto (el que utiliza Vite, junto a `package.json`).
2. Pega el snippet exacto que Cloudflare proporciona antes de la etiqueta de cierre `</body>`.
3. Conserva el `type="module"` y el `data-cf-beacon` que incluya el snippet generado. No inventes ni sustituyas el token.
4. Guarda los cambios, ejecuta `npm run build` y publica el resultado en GitHub Pages mediante el procedimiento habitual del proyecto.

Ejemplo ilustrativo únicamente (el token es ficticio; debes reemplazarlo por el snippet real del panel):

```html
<script
  type="module"
  src="https://static.cloudflareinsights.com/beacon.min.js"
  data-cf-beacon='{"token": "REEMPLAZAR_POR_EL_TOKEN_REAL"}'
></script>
```

No añadas el snippet dos veces. Cloudflare indica que debe existir un solo snippet de Web Analytics por página.

## 5. Consultar los resultados

1. Inicia sesión en https://dash.cloudflare.com/.
2. Abre **Web Analytics**.
3. Selecciona el sitio `rodorudik.github.io`.
4. Selecciona el intervalo de fechas que quieras analizar.
5. Revisa primero **Visits** y **Page views** para conocer el tráfico general.
6. Después revisa las páginas/rutas disponibles y los indicadores de rendimiento para identificar qué contenido se consulta y si la carga es adecuada.

Los primeros datos pueden tardar unos minutos en aparecer. No esperes que el panel muestre datos históricos anteriores a la instalación.

## 6. Consideración importante: React Router con HashRouter

Este portfolio utiliza `HashRouter`, por lo que las rutas internas tienen una forma similar a:

- `https://rodorudik.github.io/myportfolio-online/#/`
- `https://rodorudik.github.io/myportfolio-online/#/case-study`

Cloudflare documenta el seguimiento automático de aplicaciones SPA mediante Soft Navigations API, Navigation API o History API (`pushState` y `popstate`). Su documentación no garantiza expresamente que los cambios de fragmento de `HashRouter` se registren como páginas vistas independientes.

Por eso, después de instalar el beacon, hay que hacer una prueba real:

1. Abre el portfolio publicado en una ventana normal.
2. Entra en Home y luego navega a Case Study usando el menú/enlace interno.
3. Espera unos minutos y revisa el panel.
4. Comprueba si se reflejan ambas vistas/rutas.

Si Cloudflare registra la carga inicial pero no las navegaciones internas, no significa que el beacon esté mal instalado: puede ser una limitación de la detección automática de navegación de esta combinación SPA + HashRouter. En ese caso evaluaremos una solución compatible antes de cambiar el router o añadir código adicional.

Documentación oficial de SPA: https://developers.cloudflare.com/web-analytics/get-started/web-analytics-spa/

## 7. Limitaciones que conviene conocer

- Los bloqueadores de anuncios o de rastreo pueden bloquear el beacon y producir cifras inferiores al tráfico real.
- Cloudflare Web Analytics no es una herramienta de grabación de sesiones ni muestra qué persona concreta visitó el portfolio.
- La documentación indica que el acceso a datos históricos de Web Analytics es de hasta seis meses.
- No ofrece actualmente soporte para eventos personalizados ni registra parámetros UTM en sus informes estándar.
- Los datos recibidos durante los últimos siete días se conservan sin muestreo; después se agregan y pueden utilizar muestreo para los informes de largo plazo.

Preguntas frecuentes oficiales: https://developers.cloudflare.com/web-analytics/faq/

## 8. Privacidad

Cloudflare describe Web Analytics como una herramienta que no recopila ni utiliza datos personales de los visitantes. Aun así, el propietario del sitio debe revisar sus obligaciones legales y el contenido de su aviso de privacidad según el país y el contexto en que opere. Esta guía no constituye asesoramiento legal.

## 9. Lista de verificación

- [ ] Crear el registro de Web Analytics para `rodorudik.github.io`.
- [ ] Copiar el snippet real generado por Cloudflare.
- [ ] Añadirlo una sola vez en `index.html`, antes de `</body>`.
- [ ] Ejecutar `npm run build` sin errores.
- [ ] Publicar el portfolio actualizado en GitHub Pages.
- [ ] Visitar el sitio publicado y comprobar que llegan datos al panel.
- [ ] Probar Home → Case Study para verificar el seguimiento de rutas con `HashRouter`.
- [ ] Anotar que cualquier otro proyecto alojado bajo `rodorudik.github.io` puede compartir el hostname y afectar la lectura de métricas.

---

**Nota de mantenimiento:** si se cambia el hostname público del portfolio o se modifica la forma de alojamiento, revisar la configuración del sitio y el snippet de Cloudflare.
