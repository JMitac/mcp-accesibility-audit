import type { ViolationTranslation } from '../types/index.js';

/**
 * Diccionario de traducciones y soluciones para violaciones comunes de accesibilidad.
 * 
 * Cada entrada contiene:
 * - title: Título de la violación en español
 * - description: Descripción del problema en español
 * - problem: Explicación del problema encontrado
 * - solution: Solución recomendada con ejemplos de código
 */
export const violationTranslations: Record<string, ViolationTranslation> = {
  // ============================================
  // Landmarks y estructura
  // ============================================
  
  'landmark-one-main': {
    title: 'El documento debe tener un landmark principal (main)',
    description: 'Asegura que el documento tenga un landmark principal',
    problem: 'El documento no tiene un landmark principal',
    solution: `Envuelve el contenido principal de tu página con la etiqueta \`<main>\` o agrega \`role="main"\` al contenedor principal.

**Ejemplo:**
\`\`\`html
<body>
  <header>...</header>
  <main>
    <!-- Tu contenido principal aquí -->
  </main>
  <footer>...</footer>
</body>
\`\`\``
  },

  'region': {
    title: 'Todo el contenido de la página debe estar contenido en landmarks',
    description: 'Asegura que todo el contenido de la página esté contenido dentro de landmarks',
    problem: 'Hay contenido que no está dentro de ningún landmark',
    solution: `Organiza tu página usando landmarks semánticos:

- \`<header>\` para el encabezado
- \`<nav>\` para la navegación
- \`<main>\` para el contenido principal
- \`<aside>\` para contenido secundario
- \`<footer>\` para el pie de página

**Ejemplo:**
\`\`\`html
<body>
  <header>Logo y navegación principal</header>
  <nav>Menú de navegación</nav>
  <main>Contenido principal</main>
  <aside>Barra lateral</aside>
  <footer>Pie de página</footer>
</body>
\`\`\``
  },

  // ============================================
  // Contraste y colores
  // ============================================

  'color-contrast': {
    title: 'Los elementos deben tener suficiente contraste de color',
    description: 'Asegura que el contraste entre el color de primer plano y el fondo cumpla con los umbrales de WCAG 2 AA',
    problem: 'El contraste de color es insuficiente',
    solution: `Aumenta el contraste entre el texto y el fondo.

**Ratios mínimos requeridos:**
- **4.5:1** para texto normal (menor a 18px)
- **3:1** para texto grande (18px+ o 14px+ en negrita)

**Herramientas para verificar:**
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Contrast Ratio](https://contrast-ratio.com/)

**Ejemplo de corrección:**
\`\`\`css
/* ❌ Incorrecto - bajo contraste */
.texto {
  color: #999999;
  background: #ffffff;
}

/* ✅ Correcto - buen contraste */
.texto {
  color: #595959;
  background: #ffffff;
}
\`\`\``
  },

  // ============================================
  // Imágenes
  // ============================================

  'image-alt': {
    title: 'Las imágenes deben tener texto alternativo',
    description: 'Asegura que los elementos <img> tengan texto alternativo o role="none" o role="presentation"',
    problem: 'La imagen no tiene atributo alt',
    solution: `Agrega el atributo \`alt\` a todas las imágenes.

**Para imágenes informativas:**
\`\`\`html
<img src="grafico-ventas.png" alt="Gráfico de ventas del Q4 2024 mostrando un incremento del 25%">
\`\`\`

**Para imágenes decorativas:**
\`\`\`html
<img src="decoracion.png" alt="" role="presentation">
\`\`\`

**Para imágenes con texto:**
\`\`\`html
<img src="logo.png" alt="Logo de Mi Empresa">
\`\`\``
  },

  // ============================================
  // Botones y enlaces
  // ============================================

  'button-name': {
    title: 'Los botones deben tener un nombre accesible',
    description: 'Asegura que los botones tengan texto discernible',
    problem: 'El botón no tiene un nombre accesible',
    solution: `Agrega texto visible al botón o usa \`aria-label\`.

**Botón con texto:**
\`\`\`html
<button>Enviar formulario</button>
\`\`\`

**Botón con solo icono:**
\`\`\`html
<button aria-label="Cerrar menú">
  <svg><!-- icono de X --></svg>
</button>
\`\`\`

**Botón con icono y texto oculto:**
\`\`\`html
<button>
  <svg aria-hidden="true"><!-- icono --></svg>
  <span class="sr-only">Buscar</span>
</button>
\`\`\``
  },

  'link-name': {
    title: 'Los enlaces deben tener un nombre accesible',
    description: 'Asegura que los enlaces tengan texto discernible',
    problem: 'El enlace no tiene un nombre accesible',
    solution: `Agrega texto descriptivo al enlace.

**Enlace con texto:**
\`\`\`html
<a href="/perfil">Ver mi perfil</a>
\`\`\`

**Enlace con solo icono:**
\`\`\`html
<a href="/home" aria-label="Ir al inicio">
  <svg><!-- icono de casa --></svg>
</a>
\`\`\`

**❌ Evita textos genéricos:**
\`\`\`html
<!-- Incorrecto -->
<a href="/doc.pdf">Click aquí</a>

<!-- Correcto -->
<a href="/doc.pdf">Descargar manual de usuario (PDF)</a>
\`\`\``
  },

  // ============================================
  // HTML y documento
  // ============================================

  'html-has-lang': {
    title: 'El elemento <html> debe tener un atributo lang',
    description: 'Asegura que cada documento HTML tenga un atributo lang',
    problem: 'El elemento <html> no tiene atributo lang',
    solution: `Agrega el atributo \`lang\` al elemento \`<html>\`.

**Ejemplo:**
\`\`\`html
<!DOCTYPE html>
<html lang="es">
  <head>...</head>
  <body>...</body>
</html>
\`\`\`

**Códigos de idioma comunes:**
- \`es\` - Español
- \`en\` - Inglés
- \`pt\` - Portugués
- \`es-PE\` - Español (Perú)
- \`es-MX\` - Español (México)`
  },

  'document-title': {
    title: 'El documento debe tener un elemento <title>',
    description: 'Asegura que cada documento HTML tenga un elemento <title> no vacío',
    problem: 'El documento no tiene título o está vacío',
    solution: `Agrega un título descriptivo en el \`<head>\`.

**Ejemplo:**
\`\`\`html
<head>
  <title>Mi Aplicación - Página de Inicio</title>
</head>
\`\`\`

**Buenas prácticas:**
- Incluye el nombre de la página y el sitio
- Sé específico y descriptivo
- Máximo 60-70 caracteres`
  },

  'meta-viewport': {
    title: 'El zoom y escalado no deben estar deshabilitados',
    description: 'Asegura que el meta viewport permita el zoom del usuario',
    problem: 'El meta viewport deshabilita el zoom',
    solution: `No uses \`maximum-scale=1\` ni \`user-scalable=no\`.

**✅ Correcto:**
\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1">
\`\`\`

**❌ Incorrecto:**
\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
\`\`\`

Los usuarios con baja visión necesitan poder hacer zoom en el contenido.`
  },

  // ============================================
  // Formularios
  // ============================================

  'label': {
    title: 'Los elementos de formulario deben tener etiquetas',
    description: 'Asegura que cada elemento de formulario tenga una etiqueta',
    problem: 'El campo de formulario no tiene una etiqueta asociada',
    solution: `Asocia una etiqueta a cada campo de formulario.

**Usando for/id:**
\`\`\`html
<label for="email">Correo electrónico</label>
<input type="email" id="email" name="email">
\`\`\`

**Envolviendo el input:**
\`\`\`html
<label>
  Correo electrónico
  <input type="email" name="email">
</label>
\`\`\`

**Para campos sin etiqueta visible:**
\`\`\`html
<input type="search" aria-label="Buscar productos" placeholder="Buscar...">
\`\`\``
  },

  // ============================================
  // Encabezados
  // ============================================

  'heading-order': {
    title: 'Los niveles de encabezado deben incrementar de uno en uno',
    description: 'Asegura que la jerarquía de encabezados sea semánticamente correcta',
    problem: 'Los encabezados no siguen un orden jerárquico correcto',
    solution: `Usa encabezados en orden secuencial sin saltar niveles.

**✅ Correcto:**
\`\`\`html
<h1>Título principal</h1>
  <h2>Sección 1</h2>
    <h3>Subsección 1.1</h3>
    <h3>Subsección 1.2</h3>
  <h2>Sección 2</h2>
\`\`\`

**❌ Incorrecto:**
\`\`\`html
<h1>Título principal</h1>
  <h3>Sección 1</h3>  <!-- Saltó h2 -->
  <h4>Subsección</h4>
\`\`\`

Cada página debe tener un solo \`<h1>\`.`
  },

  // ============================================
  // Listas
  // ============================================

  'list': {
    title: 'Las listas deben estar estructuradas correctamente',
    description: 'Asegura que las listas estén estructuradas correctamente',
    problem: 'La lista no está estructurada correctamente',
    solution: `Usa elementos de lista semánticos.

**Lista desordenada:**
\`\`\`html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ul>
\`\`\`

**Lista ordenada:**
\`\`\`html
<ol>
  <li>Primer paso</li>
  <li>Segundo paso</li>
</ol>
\`\`\`

**❌ Evita simular listas con divs:**
\`\`\`html
<!-- Incorrecto -->
<div>• Elemento 1</div>
<div>• Elemento 2</div>
\`\`\``
  },

  // ============================================
  // Teclado y foco
  // ============================================

  'tabindex': {
    title: 'El tabindex no debe ser mayor a 0',
    description: 'Asegura que los valores de tabindex no sean mayores a 0',
    problem: 'Se encontró un tabindex mayor a 0',
    solution: `Usa solo \`tabindex="0"\` o \`tabindex="-1"\`.

**Valores permitidos:**
- \`tabindex="0"\`: Hace el elemento enfocable en el orden natural del DOM
- \`tabindex="-1"\`: Hace el elemento enfocable solo programáticamente

**❌ Evita valores positivos:**
\`\`\`html
<!-- Incorrecto - altera el orden de tabulación -->
<button tabindex="1">Primero</button>
<button tabindex="2">Segundo</button>

<!-- Correcto - usa el orden del DOM -->
<button>Primero</button>
<button>Segundo</button>
\`\`\``
  },

  // ============================================
  // ARIA
  // ============================================

  'aria-hidden-focus': {
    title: 'Los elementos con aria-hidden no deben contener elementos enfocables',
    description: 'Asegura que aria-hidden no se use en elementos enfocables',
    problem: 'Un elemento con aria-hidden contiene elementos enfocables',
    solution: `No uses \`aria-hidden="true"\` en elementos que contengan botones, enlaces u otros elementos interactivos.

**❌ Incorrecto:**
\`\`\`html
<div aria-hidden="true">
  <button>Este botón no será accesible</button>
</div>
\`\`\`

**✅ Correcto:**
\`\`\`html
<div aria-hidden="true">
  <span>Texto decorativo</span>
</div>
<button>Botón accesible</button>
\`\`\`

Si necesitas ocultar algo visualmente pero mantenerlo accesible, usa CSS.`
  },

  // ============================================
  // IDs
  // ============================================

  'duplicate-id': {
    title: 'Los IDs deben ser únicos',
    description: 'Asegura que cada atributo id sea único',
    problem: 'Se encontraron IDs duplicados en la página',
    solution: `Asegúrate de que cada elemento tenga un ID único.

**❌ Incorrecto:**
\`\`\`html
<div id="contenido">Sección 1</div>
<div id="contenido">Sección 2</div>
\`\`\`

**✅ Correcto:**
\`\`\`html
<div id="contenido-1">Sección 1</div>
<div id="contenido-2">Sección 2</div>
\`\`\`

**Tip:** En React, usa keys únicos y genera IDs dinámicamente si es necesario.`
  },

  'duplicate-id-aria': {
    title: 'Los IDs usados en atributos ARIA deben ser únicos',
    description: 'Asegura que los IDs referenciados por ARIA sean únicos',
    problem: 'Un ID referenciado por ARIA está duplicado',
    solution: `Los IDs usados en \`aria-labelledby\`, \`aria-describedby\`, etc. deben ser únicos.

**❌ Incorrecto:**
\`\`\`html
<span id="error">Error en campo</span>
<input aria-describedby="error">

<span id="error">Otro error</span>  <!-- ID duplicado -->
<input aria-describedby="error">
\`\`\`

**✅ Correcto:**
\`\`\`html
<span id="error-email">Error en email</span>
<input aria-describedby="error-email">

<span id="error-password">Error en contraseña</span>
<input aria-describedby="error-password">
\`\`\``
  }
};
