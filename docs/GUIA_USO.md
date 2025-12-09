# 📖 Guía de Uso - MCP Accessibility Audit

Esta guía explica paso a paso cómo instalar, configurar y utilizar el servidor MCP de auditoría de accesibilidad.

---

## 📋 Tabla de Contenidos

1. [Introducción](#introducción)
2. [Requisitos Previos](#requisitos-previos)
3. [Instalación](#instalación)
4. [Configuración](#configuración)
5. [Uso con MCP Inspector](#uso-con-mcp-inspector)
6. [Uso con Claude Desktop](#uso-con-claude-desktop)
7. [Uso con VS Code](#uso-con-vs-code)
8. [Herramientas Disponibles](#herramientas-disponibles)
9. [Interpretación de Reportes](#interpretación-de-reportes)
10. [Niveles de WCAG](#niveles-de-wcag)
11. [Solución de Problemas](#solución-de-problemas)
12. [Glosario de Términos Técnicos](#glosario-de-términos-técnicos)

---

## Introducción

### ¿Qué es este proyecto?

Es un **servidor MCP** que permite ejecutar auditorías de accesibilidad web de forma automatizada. Analiza páginas web y genera reportes detallados en español con:

- ❌ Violaciones encontradas
- ✅ Reglas aprobadas
- 💡 Soluciones recomendadas

### ¿Para quién es?

- **Desarrolladores frontend** que quieren verificar la accesibilidad de sus aplicaciones
- **QA/Testers** que necesitan validar cumplimiento de estándares
- **Equipos de desarrollo** que quieren integrar accesibilidad en su flujo de trabajo

### ¿Qué problema resuelve?

Automatiza el proceso de auditoría de accesibilidad que normalmente requiere:
1. Abrir herramientas de desarrollo del navegador
2. Ejecutar extensiones como Lighthouse o axe
3. Interpretar resultados en inglés
4. Documentar manualmente los hallazgos

Con este MCP, todo se hace con un solo comando y el reporte se genera automáticamente en español.

---

## Requisitos Previos

### Software necesario

| Software | Versión Mínima | ¿Cómo verificar? | ¿Para qué se usa? |
|----------|----------------|------------------|-------------------|
| **Node.js** | 18.0.0 | `node --version` | Ejecutar el servidor |
| **npm** | 9.0.0 | `npm --version` | Instalar dependencias |

### Verificar instalación

Abre una terminal y ejecuta:

```bash
# Verificar Node.js
node --version
# Debe mostrar: v18.x.x o superior

# Verificar npm
npm --version
# Debe mostrar: 9.x.x o superior
```

### ¿No tienes Node.js?

1. Ve a [nodejs.org](https://nodejs.org/)
2. Descarga la versión **LTS** (Long Term Support)
3. Ejecuta el instalador
4. Reinicia tu terminal

---

## Instalación

### Paso 1: Clonar o copiar el proyecto

Si el proyecto está en un repositorio:

```bash
git clone <url-del-repositorio>
cd mcp-accessibility-audit
```

Si tienes la carpeta localmente, navega a ella:

```bash
cd d:\deploys\frontend-exchange-rimac\mcp-accessibility-audit
```

### Paso 2: Instalar dependencias

```bash
npm install
```

Este comando descarga todas las librerías necesarias:

| Dependencia | Propósito |
|-------------|-----------|
| `@modelcontextprotocol/sdk` | SDK para crear servidores MCP |
| `puppeteer` | Controla el navegador para cargar páginas |
| `@axe-core/puppeteer` | Motor de análisis de accesibilidad |
| `tsx` | Ejecuta TypeScript directamente |

### Paso 3: Verificar instalación

```bash
npm run mcp:start
```

Deberías ver:
```
🚀 MCP Accessibility Audit Server iniciado
```

Presiona `Ctrl+C` para detener el servidor.

---

## Configuración

### Configuración por defecto

El servidor funciona sin configuración adicional con estos valores:

| Parámetro | Valor por defecto | Descripción |
|-----------|-------------------|-------------|
| Directorio de reportes | `./reports` | Donde se guardan los reportes |
| Nivel WCAG | `wcag21aa` | Estándar de accesibilidad a validar |

### Personalizar configuración

Puedes cambiar los valores al ejecutar cada auditoría (ver sección [Herramientas Disponibles](#herramientas-disponibles)).

---

## Uso con MCP Inspector

El **MCP Inspector** es una herramienta visual para probar servidores MCP. Es la forma más fácil de usar este proyecto.

### Paso 1: Iniciar el Inspector

```bash
npm run mcp:inspector
```

Esto abrirá automáticamente una ventana en tu navegador.

### Paso 2: Conectar al servidor

1. Verifica que los campos estén configurados:
   - **Transport Type**: `STDIO`
   - **Command**: `npx`
   - **Arguments**: `tsx src/index.ts`

2. Haz clic en el botón **"Connect"**

3. Espera a que aparezca **"Connected"** en verde

### Paso 3: Listar herramientas

1. Haz clic en la pestaña **"Tools"**
2. Haz clic en el botón **"List Tools"**
3. Verás las herramientas disponibles:
   - `audit_accessibility`
   - `list_reports`

### Paso 4: Ejecutar una auditoría

1. Haz clic en **"audit_accessibility"**
2. En el panel derecho, llena los campos:

   | Campo | Valor | Requerido |
   |-------|-------|-----------|
   | **url** | `http://localhost:5173` | ✅ Sí |
   | **outputDir** | `./reports` | ❌ No (opcional) |
   | **wcagLevel** | `wcag21aa` | ❌ No (opcional) |

3. Haz clic en **"Run Tool"**
4. Espera a que termine (puede tomar 10-30 segundos)
5. El reporte se genera en la carpeta `reports/`

### Paso 5: Ver el reporte

Abre el archivo generado:
```
reports/REPORTE_ACCESIBILIDAD_DD-MM-YYYY.md
```

---

## Uso con Claude Desktop

**Claude Desktop** es la aplicación de escritorio de Anthropic que soporta MCP de forma nativa.

### Paso 1: Localizar archivo de configuración

| Sistema Operativo | Ubicación del archivo |
|-------------------|----------------------|
| **Windows** | `%APPDATA%\Claude\claude_desktop_config.json` |
| **macOS** | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| **Linux** | `~/.config/Claude/claude_desktop_config.json` |

> **Tip Windows:** Presiona `Win + R`, escribe `%APPDATA%\Claude` y presiona Enter.

### Paso 2: Editar configuración

Abre el archivo `claude_desktop_config.json` y agrega:

```json
{
  "mcpServers": {
    "accessibility-audit": {
      "command": "npx",
      "args": ["tsx", "src/index.ts"],
      "cwd": "D:/deploys/frontend-exchange-rimac/mcp-accessibility-audit"
    }
  }
}
```

> ⚠️ **Importante:** Cambia la ruta `cwd` a la ubicación real del proyecto en tu computadora.

### Paso 3: Reiniciar Claude Desktop

1. Cierra completamente Claude Desktop
2. En Windows: Verifica en la bandeja del sistema que no esté corriendo
3. Vuelve a abrir Claude Desktop

### Paso 4: Verificar conexión

En Claude Desktop, escribe:

> "¿Qué herramientas de MCP tienes disponibles?"

Claude debería responder mencionando `audit_accessibility` y `list_reports`.

### Paso 5: Ejecutar auditoría

Escribe en Claude:

> "Ejecuta una auditoría de accesibilidad en http://localhost:5173"

Claude ejecutará la herramienta y te mostrará el resumen.

---

## Uso con VS Code

Puedes usar este MCP en VS Code con la extensión **Continue**.

### Paso 1: Instalar Continue

1. Abre VS Code
2. Ve a Extensiones (`Ctrl+Shift+X`)
3. Busca "Continue"
4. Instala la extensión de [Continue.dev](https://continue.dev/)

### Paso 2: Configurar MCP

1. Abre la configuración de Continue
2. Agrega el servidor MCP con la misma configuración que Claude Desktop

### Paso 3: Usar

En el chat de Continue, pide ejecutar la auditoría de accesibilidad.

---

## Herramientas Disponibles

### 1. `audit_accessibility`

Ejecuta una auditoría de accesibilidad en una URL.

#### Parámetros

| Parámetro | Tipo | Requerido | Descripción | Ejemplo |
|-----------|------|-----------|-------------|---------|
| `url` | string | ✅ Sí | URL de la página a auditar | `http://localhost:5173` |
| `outputDir` | string | ❌ No | Carpeta donde guardar el reporte | `./reports` |
| `wcagLevel` | string | ❌ No | Nivel de WCAG a validar | `wcag21aa` |

#### Valores de `wcagLevel`

| Valor | Significado |
|-------|-------------|
| `wcag2a` | WCAG 2.0 Nivel A (mínimo) |
| `wcag2aa` | WCAG 2.0 Nivel AA (recomendado) |
| `wcag2aaa` | WCAG 2.0 Nivel AAA (máximo) |
| `wcag21a` | WCAG 2.1 Nivel A |
| `wcag21aa` | WCAG 2.1 Nivel AA (por defecto) |
| `wcag21aaa` | WCAG 2.1 Nivel AAA |

#### Ejemplo de uso

```
URL: http://localhost:3000/login
wcagLevel: wcag21aa
```

#### Salida

- Resumen en pantalla con cantidad de violaciones
- Archivo Markdown en `reports/REPORTE_ACCESIBILIDAD_DD-MM-YYYY.md`

---

### 2. `list_reports`

Lista todos los reportes de accesibilidad generados.

#### Parámetros

| Parámetro | Tipo | Requerido | Descripción | Ejemplo |
|-----------|------|-----------|-------------|---------|
| `outputDir` | string | ❌ No | Carpeta donde buscar reportes | `./reports` |

#### Salida

Lista de archivos con nombre, tamaño y fecha de creación.

---

## Interpretación de Reportes

### Estructura del reporte

```markdown
# 📊 Reporte de Accesibilidad

## Información General
- URL auditada
- Fecha y hora
- Nivel WCAG validado

## 📈 Resumen Ejecutivo
- Total de violaciones
- Reglas aprobadas
- Elementos que requieren revisión

## ❌ Violaciones Encontradas
- Detalle de cada violación
- Elementos afectados
- Solución recomendada

## ✅ Reglas Aprobadas
- Lista de reglas que pasaron
```

### Niveles de impacto

| Nivel | Icono | Significado | Prioridad |
|-------|-------|-------------|-----------|
| **Crítico** | 🔴 | Bloquea completamente el acceso a usuarios con discapacidad | Corregir inmediatamente |
| **Serio** | 🟠 | Dificulta significativamente el uso | Corregir pronto |
| **Moderado** | 🟡 | Causa inconvenientes | Corregir cuando sea posible |
| **Menor** | 🟢 | Mejora recomendada | Considerar para futuro |

### Ejemplo de violación

```markdown
### 1. El documento debe tener un landmark principal (main)

| Propiedad | Valor |
|-----------|-------|
| **ID** | `landmark-one-main` |
| **Impacto** | 🟡 **Moderado** |

**Elementos afectados (1):**

**Problema:** El documento no tiene un landmark principal

#### 💡 Solución Recomendada

Envuelve el contenido principal de tu página con la etiqueta <main>:
```html
<main>
  <!-- Tu contenido principal aquí -->
</main>
```
```

---

## Niveles de WCAG

### ¿Qué es WCAG?

**WCAG** (Web Content Accessibility Guidelines) son las pautas internacionales para hacer contenido web accesible a personas con discapacidades.

### Niveles de conformidad

| Nivel | Descripción | ¿Cuándo usarlo? |
|-------|-------------|-----------------|
| **A** | Requisitos mínimos básicos | Mínimo legal en algunos países |
| **AA** | Requisitos intermedios | **Recomendado para la mayoría** |
| **AAA** | Requisitos máximos | Sitios especializados en accesibilidad |

### ¿Qué nivel elegir?

- **Para proyectos nuevos:** `wcag21aa` (por defecto)
- **Para cumplimiento legal:** Consulta la legislación de tu país
- **Para máxima accesibilidad:** `wcag21aaa`

---

## Solución de Problemas

### Error: "Cannot find module"

**Causa:** Las dependencias no están instaladas.

**Solución:**
```bash
npm install
```

---

### Error: "ECONNREFUSED" o "Connection refused"

**Causa:** La URL que intentas auditar no está accesible.

**Solución:**
1. Verifica que tu servidor de desarrollo esté corriendo
2. Abre la URL en un navegador para confirmar que funciona
3. Verifica que el puerto sea correcto

---

### Error: "Timeout"

**Causa:** La página tarda demasiado en cargar.

**Solución:**
1. Verifica tu conexión a internet
2. Intenta con una página más simple
3. Verifica que la URL sea correcta

---

### Error: "Browser closed unexpectedly"

**Causa:** Problema con Puppeteer o Chromium.

**Solución:**
```bash
# Reinstalar puppeteer
npm uninstall puppeteer
npm install puppeteer
```

---

### El reporte no se genera

**Causa:** Error durante la auditoría.

**Solución:**
1. Revisa los mensajes de error en la terminal
2. Verifica que la URL sea accesible
3. Verifica permisos de escritura en la carpeta `reports/`

---

### El MCP no conecta en Claude Desktop

**Causa:** Configuración incorrecta o Claude no reiniciado.

**Solución:**
1. Verifica que el JSON sea válido (usa un validador online)
2. Verifica que la ruta `cwd` exista y sea correcta
3. Cierra completamente Claude Desktop (incluyendo bandeja del sistema)
4. Vuelve a abrir Claude Desktop

---

## Glosario de Términos Técnicos

### A

| Término | Definición |
|---------|------------|
| **Accesibilidad web** | Práctica de hacer sitios web utilizables por todas las personas, incluyendo aquellas con discapacidades visuales, auditivas, motoras o cognitivas |
| **ARIA** | Accessible Rich Internet Applications - Conjunto de atributos HTML que mejoran la accesibilidad de contenido dinámico |
| **axe-core** | Motor de código abierto desarrollado por Deque Systems para detectar problemas de accesibilidad automáticamente |

### C

| Término | Definición |
|---------|------------|
| **CLI** | Command Line Interface - Interfaz de línea de comandos, donde escribes comandos de texto |

### D

| Término | Definición |
|---------|------------|
| **Dependencia** | Librería o paquete externo que el proyecto necesita para funcionar |

### H

| Término | Definición |
|---------|------------|
| **Handler** | Función que procesa una solicitud y devuelve una respuesta |
| **Headless** | Modo de ejecución de un navegador sin interfaz gráfica visible, usado para automatización |

### L

| Término | Definición |
|---------|------------|
| **Landmark** | Región semántica de una página web que ayuda a la navegación (header, main, nav, footer, aside) |
| **LTS** | Long Term Support - Versión de software con soporte extendido, más estable |

### M

| Término | Definición |
|---------|------------|
| **MCP** | Model Context Protocol - Protocolo que permite a modelos de IA (como Claude) interactuar con herramientas y servicios externos |
| **Markdown** | Lenguaje de marcado ligero para formatear texto, usado en GitHub, documentación, etc. |

### N

| Término | Definición |
|---------|------------|
| **Node.js** | Entorno de ejecución de JavaScript fuera del navegador |
| **npm** | Node Package Manager - Gestor de paquetes para Node.js |

### P

| Término | Definición |
|---------|------------|
| **Puppeteer** | Librería de Node.js que permite controlar navegadores Chrome/Chromium programáticamente |

### S

| Término | Definición |
|---------|------------|
| **Schema** | Definición de la estructura de datos que una función o API acepta como entrada |
| **SDK** | Software Development Kit - Conjunto de herramientas para desarrollar software |
| **STDIO** | Standard Input/Output - Canales estándar de entrada y salida de un programa |

### T

| Término | Definición |
|---------|------------|
| **Terminal** | Aplicación para ejecutar comandos de texto (CMD, PowerShell, Bash) |
| **Tool (MCP)** | Función ejecutable que un servidor MCP expone para que los clientes la utilicen |
| **TypeScript** | Lenguaje de programación que extiende JavaScript con tipos estáticos |

### U

| Término | Definición |
|---------|------------|
| **URL** | Uniform Resource Locator - Dirección web (ej: https://ejemplo.com) |

### W

| Término | Definición |
|---------|------------|
| **WCAG** | Web Content Accessibility Guidelines - Pautas de accesibilidad para contenido web, publicadas por el W3C |

---

## 📚 Referencias Adicionales

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Guía rápida oficial
- [axe-core Rules](https://dequeuniversity.com/rules/axe/) - Documentación de reglas
- [Model Context Protocol](https://modelcontextprotocol.io/) - Documentación oficial de MCP
- [Puppeteer Documentation](https://pptr.dev/) - Documentación de Puppeteer

---

## 🆘 ¿Necesitas ayuda?

1. Revisa la sección [Solución de Problemas](#solución-de-problemas)
2. Consulta el archivo `ARQUITECTURA.md` para entender la estructura
3. Abre un issue en el repositorio del proyecto

---

*Guía actualizada: Diciembre 2024*
