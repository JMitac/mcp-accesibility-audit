/**
 * Definición de la herramienta list_reports
 */

import type { ListReportsParams } from '../types/index.js';
import { listReports } from '../services/reports.service.js';

/**
 * Schema de la herramienta list_reports
 */
export const reportsToolSchema = {
  name: 'list_reports',
  description: 'Lista todos los reportes de accesibilidad generados, mostrando nombre, tamaño y fecha de modificación',
  inputSchema: {
    type: 'object',
    properties: {
      outputDir: {
        type: 'string',
        description: 'Directorio donde buscar reportes (default: ./reports)',
      },
    },
  },
};

/**
 * Handler de la herramienta list_reports
 * @param args - Argumentos recibidos del cliente MCP
 * @returns Lista de reportes encontrados
 */
export async function reportsToolHandler(args: Record<string, unknown>) {
  const params: ListReportsParams = {
    outputDir: args.outputDir as string | undefined,
  };

  return listReports(params);
}
