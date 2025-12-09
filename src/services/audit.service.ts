/**
 * Servicio de auditoría de accesibilidad usando Puppeteer y axe-core
 */

import puppeteer from 'puppeteer';
import { AxePuppeteer } from '@axe-core/puppeteer';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

import type { AuditParams, AxeResults, McpToolResponse } from '../types/index.js';
import { generateMarkdownReport } from './report.service.js';
import { formatDate, countByImpact } from '../utils/formatters.js';

// Obtener __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Ejecuta una auditoría de accesibilidad en la URL especificada
 * @param params - Parámetros de la auditoría
 * @returns Respuesta MCP con el resultado
 */
export async function runAccessibilityAudit(
  params: AuditParams
): Promise<McpToolResponse> {
  const { url, outputDir = './reports', wcagLevel = 'wcag21aa' } = params;

  let browser;

  try {
    console.error(`🔍 Iniciando auditoría de accesibilidad para: ${url}`);

    // Iniciar navegador en modo headless
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });

    // Navegar a la URL
    console.error(`📄 Cargando página...`);
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

    // Ejecutar auditoría con axe-core
    console.error(`🔎 Ejecutando análisis axe-core...`);
    const results = (await new AxePuppeteer(page)
      .withTags([wcagLevel, 'best-practice'])
      .analyze()) as unknown as AxeResults;

    await browser.close();
    browser = null;

    // Generar nombre del archivo con fecha
    const now = new Date();
    const dateStr = formatDate(now);
    const fileName = `REPORTE_ACCESIBILIDAD_${dateStr}.md`;

    // Generar contenido del reporte
    const report = generateMarkdownReport(results, url, now, wcagLevel);

    // Crear directorio si no existe
    const absoluteOutputDir = path.isAbsolute(outputDir)
      ? outputDir
      : path.join(__dirname, '..', '..', outputDir);

    fs.mkdirSync(absoluteOutputDir, { recursive: true });

    // Guardar archivo
    const outputPath = path.join(absoluteOutputDir, fileName);
    fs.writeFileSync(outputPath, report, 'utf-8');

    console.error(`✅ Reporte generado: ${outputPath}`);

    // Preparar resumen para mostrar al usuario
    const summary = `
✅ **Auditoría completada exitosamente**

📁 **Archivo:** ${fileName}
📍 **Ubicación:** ${outputPath}

## Resumen de Resultados

| Categoría | Cantidad |
|-----------|----------|
| ❌ Violaciones | ${results.violations.length} |
| ✅ Aprobados | ${results.passes.length} |
| ⚠️ Requieren revisión | ${results.incomplete.length} |
| ➖ No aplicables | ${results.inapplicable.length} |

${
  results.violations.length > 0
    ? `
### Violaciones por Impacto

${countByImpact(results.violations)}
`
    : ''
}
`;

    return {
      content: [{ type: 'text', text: summary }],
    };
  } catch (error) {
    if (browser) {
      await browser.close();
    }

    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(`❌ Error: ${errorMessage}`);

    return {
      content: [
        {
          type: 'text',
          text: `❌ **Error en la auditoría**

${errorMessage}

**Posibles causas:**
- La URL no es accesible
- El servidor no está corriendo
- Timeout al cargar la página
- La URL es incorrecta`,
        },
      ],
      isError: true,
    };
  }
}
