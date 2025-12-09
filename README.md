# 🧪 Test Accessibility App

**⚠️ PROYECTO DE PRUEBA - NO USAR EN PRODUCCIÓN**

Este proyecto contiene problemas de accesibilidad intencionales para probar el MCP Accessibility Audit.

## Problemas de Accesibilidad Incluidos

### 🖼️ Imágenes
- Imágenes sin atributo `alt`
- Imágenes con `alt` vacío (no decorativas)
- Imágenes con `alt` no descriptivo ("imagen", "foto")
- Alt redundante con "imagen de..."

### 📝 Formularios
- Inputs sin `label` asociado
- Labels sin `htmlFor`
- Inputs sin `id` ni `name`
- Select/Textarea sin label
- Checkbox/Radio sin label
- Radio buttons sin `fieldset/legend`
- Campos requeridos sin indicación
- Errores sin `aria-describedby`

### 🔘 Botones
- `div` usado como botón (sin `role`)
- Botones solo con icono (sin `aria-label`)
- Botones vacíos
- Links usados como botones (`href="#"`)
- `span` como botón
- Botones con `tabindex="-1"`

### 🔗 Enlaces
- Links sin `href`
- Links con `href` vacío
- Links con `href="#"`
- Texto no descriptivo ("clic aquí", "leer más")
- Links que abren nueva ventana sin aviso
- Imagen como link sin `alt`
- Links vacíos

### 🏗️ Estructura
- Salto de niveles de encabezado (h2 → h4)
- Múltiples `h1` en la página
- Listas falsas (sin `ul/ol`)
- Contenido sin landmarks (`nav`, `main`, `aside`)
- Tablas usadas para layout
- `iframe` sin título

### 🎨 Contraste
- Texto con bajo contraste
- Texto pequeño con bajo contraste
- Links sin diferenciación visual
- Información transmitida solo por color
- Placeholder con bajo contraste
- Focus indicator con bajo contraste

### 📊 Tablas
- Tablas sin `th` (encabezados)
- Tablas sin `caption`
- `th` sin `scope`
- Tablas complejas sin `headers/id`

## 🚀 Cómo usar

### 1. Instalar dependencias
```bash
cd test-accessibility-app
npm install
```

### 2. Iniciar el servidor de desarrollo
```bash
npm run dev
```

El servidor se iniciará en `http://localhost:5180`

### 3. Probar con MCP Accessibility Audit

En el MCP Inspector de `mcp-accessibility-audit`:

1. Selecciona la herramienta `audit_accessibility`
2. En **url** escribe: `http://localhost:5180`
3. Haz clic en **Run Tool**
4. Revisa el reporte generado con todas las violaciones

## 📁 Estructura

```
test-accessibility-app/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── components/
│       ├── BadImages.tsx      # Problemas con imágenes
│       ├── BadForms.tsx       # Problemas con formularios
│       ├── BadButtons.tsx     # Problemas con botones
│       ├── BadLinks.tsx       # Problemas con enlaces
│       ├── BadStructure.tsx   # Problemas de estructura
│       ├── BadContrast.tsx    # Problemas de contraste
│       └── BadTables.tsx      # Problemas con tablas
├── index.html                 # Sin lang, viewport restrictivo
├── package.json
└── README.md
```

## 📄 Licencia

MIT - Solo para propósitos de prueba
