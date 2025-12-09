/**
 * Definición de la herramienta audit_accessibility
 */

import type { AuditParams } from '../types/index.js';
import { runAccessibilityAudit } from '../services/audit.service.js';

/**
 * Schema de la herramienta audit_accessibility
 */
export const auditToolSchema = {
  name: 'audit_accessibility',
  description:
    'Ejecuta una auditoría de accesibilidad WCAG en una URL y genera un reporte en formato Markdown con violaciones traducidas al español y soluciones recomendadas',
  inputSchema: {
    type: 'object',
    properties: {
      url: {
        type: 'string',
        description: 'URL a auditar (ej: http://localhost:5173, https://mi-sitio.com)',
      },
      outputDir: {
        type: 'string',
        description: 'Directorio donde guardar el reporte (default: ./reports)',
      },
      wcagLevel: {
        type: 'string',
        enum: ['wcag2a', 'wcag2aa', 'wcag2aaa', 'wcag21a', 'wcag21aa', 'wcag21aaa'],
        description: 'Nivel de WCAG a validar (default: wcag21aa)',
      },
    },
    required: ['url'],
  },
};

/**
 * Handler de la herramienta audit_accessibility
 * @param args - Argumentos recibidos del cliente MCP
 * @returns Resultado de la auditoría
 */
export async function auditToolHandler(args: Record<string, unknown>) {
  const params: AuditParams = {
    url: args.url as string,
    outputDir: args.outputDir as string | undefined,
    wcagLevel: args.wcagLevel as AuditParams['wcagLevel'],
  };

  return runAccessibilityAudit(params);
}
