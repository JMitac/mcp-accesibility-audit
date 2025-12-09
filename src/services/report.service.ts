/**
 * Servicio de generación de reportes de accesibilidad en formato Markdown
 */

import type { AxeResults, AxeViolation, ViolationTranslation } from '../types/index.js';
import { violationTranslations } from '../translations/violations.js';
import {
  formatDateLocale,
  formatTimeLocale,
  getImpactBadge,
} from '../utils/formatters.js';
import { escapeHtml } from '../utils/html.js';

/**
 * Obtiene la información traducida de una violación
 * @param violation - Violación de axe-core
 * @returns Información traducida o valores por defecto
 */
function getViolationInfo(violation: AxeViolation): ViolationTranslation {
  const translation = violationTranslations[violation.id];
  
  if (translation) {
    return translation;
  }

  // Valores por defecto si no hay traducción disponible
  return {
    title: violation.help,
    description: violation.description,
    problem: 'Se encontró un problema de accesibilidad',
    solution: `Consulta la documentación para más detalles: ${violation.helpUrl}`,
  };
}

/**
 * Genera el reporte de accesibilidad en formato Markdown
 * @param results - Resultados de la auditoría axe-core
 * @param url - URL auditada
 * @param date - Fecha de la auditoría
 * @param wcagLevel - Nivel de WCAG validado
 * @returns Contenido del reporte en Markdown
 */
export function generateMarkdownReport(
  results: AxeResults,
  url: string,
  date: Date,
  wcagLevel: string
): string {
  const dateStr = formatDateLocale(date);
  const timeStr = formatTimeLocale(date);

  let md = `# 📊 Reporte de Accesibilidad

## Información General

| Campo | Valor |
|-------|-------|
| **URL Auditada** | ${url} |
| **Fecha** | ${dateStr} |
| **Hora** | ${timeStr} |
| **Nivel WCAG** | ${wcagLevel.toUpperCase()} |
| **Motor** | axe-core v${results.testEngine.version} |

---

## 📈 Resumen Ejecutivo

| Métrica | Cantidad | Estado |
|---------|----------|--------|
| Violaciones | ${results.violations.length} | ${results.violations.length === 0 ? '✅' : '❌'} |
| Reglas Aprobadas | ${results.passes.length} | ✅ |
| Requieren Revisión Manual | ${results.incomplete.length} | ⚠️ |
| No Aplicables | ${results.inapplicable.length} | ➖ |

`;

  // Sección de violaciones
  md += `---

## ❌ Violaciones Encontradas

`;

  if (results.violations.length === 0) {
    md += `> ✅ **¡Excelente!** No se encontraron violaciones de accesibilidad.\n\n`;
  } else {
    md += `> ⚠️ Se encontraron **${results.violations.length} violaciones** que deben ser corregidas.\n\n`;

    results.violations.forEach((violation, index) => {
      const info = getViolationInfo(violation);
      
      md += `### ${index + 1}. ${info.title}

| Propiedad | Valor |
|-----------|-------|
| **ID** | \`${violation.id}\` |
| **Impacto** | ${getImpactBadge(violation.impact)} |
| **Descripción** | ${info.description} |
| **WCAG** | ${violation.tags.filter((t) => t.startsWith('wcag')).join(', ') || 'N/A'} |
| **Documentación** | [Ver más información](${violation.helpUrl}) |

**Elementos afectados (${violation.nodes.length}):**

`;

      // Mostrar máximo 5 elementos afectados
      violation.nodes.slice(0, 5).forEach((node, nodeIndex) => {
        md += `<details>
<summary>${nodeIndex + 1}. <code>${escapeHtml(node.target.join(' > '))}</code></summary>

\`\`\`html
${node.html}
\`\`\`

**Problema:** ${info.problem}

</details>

`;
      });

      // Agregar sección de solución
      md += `
#### 💡 Solución Recomendada

${info.solution}

`;

      if (violation.nodes.length > 5) {
        md += `> ... y ${violation.nodes.length - 5} elementos más.\n\n`;
      }

      md += `---

`;
    });
  }

  // Sección de elementos que requieren revisión manual
  if (results.incomplete.length > 0) {
    md += `## ⚠️ Requieren Revisión Manual

Los siguientes elementos no pudieron ser evaluados automáticamente y requieren verificación humana:

| Regla | Descripción |
|-------|-------------|
`;

    results.incomplete.forEach((item) => {
      md += `| \`${item.id}\` | ${item.help} |\n`;
    });

    md += `\n`;
  }

  // Sección de reglas aprobadas (colapsada para no ocupar mucho espacio)
  md += `---

## ✅ Reglas Aprobadas

<details>
<summary>Ver ${results.passes.length} reglas que pasaron la validación</summary>

| Regla | Descripción |
|-------|-------------|
`;

  results.passes.forEach((pass) => {
    md += `| \`${pass.id}\` | ${pass.help} |\n`;
  });

  md += `
</details>

---

## 📚 Referencias

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Guía rápida oficial
- [axe-core Rules](https://dequeuniversity.com/rules/axe/) - Documentación de reglas
- [Deque University](https://dequeuniversity.com/) - Recursos de aprendizaje

---

*Reporte generado automáticamente con [axe-core](https://github.com/dequelabs/axe-core) v${results.testEngine.version}*
`;

  return md;
}
