/**
 * Registro central de herramientas MCP
 */

import { auditToolSchema, auditToolHandler } from './audit.tool.js';
import { reportsToolSchema, reportsToolHandler } from './reports.tool.js';

/**
 * Lista de todas las herramientas disponibles (schemas)
 */
export const toolSchemas = [auditToolSchema, reportsToolSchema];

/**
 * Mapa de handlers por nombre de herramienta
 */
export const toolHandlers: Record<
  string,
  (args: Record<string, unknown>) => Promise<unknown>
> = {
  audit_accessibility: auditToolHandler,
  list_reports: reportsToolHandler,
};

// Re-exportar schemas individuales
export { auditToolSchema, auditToolHandler };
export { reportsToolSchema, reportsToolHandler };
