/**
 * Utilidades para manejo de HTML y generación de Markdown
 */

/**
 * Escapa caracteres especiales de HTML para evitar inyección
 * @param text - Texto a escapar
 * @returns Texto con caracteres HTML escapados
 */
export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Genera una tabla Markdown a partir de headers y filas
 * @param headers - Array de encabezados
 * @param rows - Array de arrays con los datos de cada fila
 * @returns Tabla en formato Markdown
 */
export function generateMarkdownTable(
  headers: string[],
  rows: string[][]
): string {
  const headerRow = `| ${headers.join(' | ')} |`;
  const separatorRow = `|${headers.map(() => '-------').join('|')}|`;
  const dataRows = rows.map((row) => `| ${row.join(' | ')} |`).join('\n');

  return `${headerRow}\n${separatorRow}\n${dataRows}`;
}

/**
 * Genera un bloque de código Markdown
 * @param code - Código a mostrar
 * @param language - Lenguaje para syntax highlighting (opcional)
 * @returns Bloque de código en formato Markdown
 */
export function generateCodeBlock(code: string, language = ''): string {
  return `\`\`\`${language}\n${code}\n\`\`\``;
}

/**
 * Genera un bloque colapsable (details/summary) en Markdown
 * @param summary - Texto del resumen (visible)
 * @param content - Contenido colapsado
 * @returns Bloque details en formato HTML/Markdown
 */
export function generateCollapsible(summary: string, content: string): string {
  return `<details>
<summary>${summary}</summary>

${content}

</details>`;
}

/**
 * Genera un blockquote de Markdown
 * @param text - Texto del blockquote
 * @param type - Tipo de blockquote (info, warning, error, success)
 * @returns Blockquote formateado
 */
export function generateBlockquote(
  text: string,
  type: 'info' | 'warning' | 'error' | 'success' = 'info'
): string {
  const icons: Record<string, string> = {
    info: 'ℹ️',
    warning: '⚠️',
    error: '❌',
    success: '✅',
  };

  return `> ${icons[type]} ${text}`;
}
