# 🔍 MCP Accessibility Audit

Servidor MCP (Model Context Protocol) para ejecutar auditorías de accesibilidad web siguiendo los estándares WCAG. Genera reportes detallados en español con soluciones recomendadas.

## ✨ Características

- 🔎 **Auditoría automatizada** usando axe-core y Puppeteer
- 🇪🇸 **Reportes en español** con traducciones de violaciones
- 💡 **Soluciones recomendadas** con ejemplos de código
- 📊 **Reportes en Markdown** fáciles de leer y versionar
- 🎯 **Soporte WCAG 2.0 y 2.1** (niveles A, AA, AAA)

## 📋 Requisitos

- Node.js 18.0.0 o superior
- npm 9.0.0 o superior

## 🚀 Instalación

```bash
# Clonar o navegar al proyecto
cd mcp-accessibility-audit

# Instalar dependencias
npm install
```

## 📖 Uso

### Con MCP Inspector (Recomendado para pruebas)

```bash
npm run mcp:inspector
```

Esto abrirá una interfaz web donde puedes:
1. Conectar al servidor
2. Listar herramientas disponibles
3. Ejecutar auditorías

### Con Claude Desktop

Agrega esta configuración a tu `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "accessibility-audit": {
      "command": "npx",
      "args": ["tsx", "src/index.ts"],
      "cwd": "/ruta/a/mcp-accessibility-audit"
    }
  }
}
```

## 🛠️ Herramientas Disponibles

### `audit_accessibility`

Ejecuta una auditoría de accesibilidad en una URL.

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `url` | string | ✅ | URL a auditar |
| `outputDir` | string | ❌ | Directorio para reportes (default: ./reports) |
| `wcagLevel` | string | ❌ | Nivel WCAG (default: wcag21aa) |

### `list_reports`

Lista todos los reportes generados.

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `outputDir` | string | ❌ | Directorio donde buscar (default: ./reports) |

## 📁 Estructura del Proyecto

```
mcp-accessibility-audit/
├── src/
│   ├── index.ts           # Punto de entrada
│   ├── server.ts          # Configuración del servidor MCP
│   ├── tools/             # Definición de herramientas
│   ├── services/          # Lógica de negocio
│   ├── translations/      # Traducciones al español
│   ├── types/             # Tipos TypeScript
│   └── utils/             # Utilidades
├── docs/
│   ├── ARQUITECTURA.md    # Documentación de arquitectura
│   └── GUIA_USO.md        # Guía de uso detallada
├── reports/               # Reportes generados (gitignore)
└── package.json
```

## 🌿 Ramas del Repositorio

| Rama | Contenido |
|------|-----------|
| `master` | Código fuente del servidor MCP Accessibility Audit |
| `test-accessibility-app` | Proyecto React de prueba con problemas de accesibilidad intencionales para validar el MCP |

### Proyecto de Prueba

La rama `test-accessibility-app` contiene una aplicación React + TypeScript con violaciones de accesibilidad intencionales:

- 🖼️ Imágenes sin `alt` o con alt no descriptivo
- 📝 Formularios sin labels asociados
- 🔘 Botones sin texto accesible
- 🔗 Enlaces con texto no descriptivo
- 🏗️ Estructura HTML incorrecta (saltos de encabezados, múltiples h1)
- 🎨 Problemas de contraste de color
- 📊 Tablas sin encabezados

Para usar el proyecto de prueba:

```bash
# Cambiar a la rama de prueba
git checkout test-accessibility-app

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
# Se abrirá en http://localhost:5180

# Luego ejecutar audit_accessibility con url: http://localhost:5180
```

## 📚 Documentación

- [Guía de Uso](./docs/GUIA_USO.md) - Instrucciones detalladas paso a paso

## 📄 Licencia

MIT
