/**
 * Tipos e interfaces del MCP Accessibility Audit
 */

// ============================================
// Parámetros de las herramientas
// ============================================

/**
 * Parámetros para la herramienta audit_accessibility
 */
export interface AuditParams {
  /** URL de la página a auditar */
  url: string;
  /** Directorio donde guardar el reporte (default: ./reports) */
  outputDir?: string;
  /** Nivel de WCAG a validar (default: wcag21aa) */
  wcagLevel?: WcagLevel;
}

/**
 * Parámetros para la herramienta list_reports
 */
export interface ListReportsParams {
  /** Directorio donde buscar reportes (default: ./reports) */
  outputDir?: string;
}

// ============================================
// Niveles de WCAG
// ============================================

/**
 * Niveles de WCAG soportados
 */
export type WcagLevel =
  | 'wcag2a'
  | 'wcag2aa'
  | 'wcag2aaa'
  | 'wcag21a'
  | 'wcag21aa'
  | 'wcag21aaa';

// ============================================
// Resultados de axe-core
// ============================================

/**
 * Resultados completos de la auditoría axe-core
 */
export interface AxeResults {
  /** Violaciones de accesibilidad encontradas */
  violations: AxeViolation[];
  /** Reglas que pasaron la validación */
  passes: AxeRule[];
  /** Elementos que requieren revisión manual */
  incomplete: AxeRule[];
  /** Reglas que no aplican a la página */
  inapplicable: AxeRule[];
  /** Información del motor de pruebas */
  testEngine: {
    version: string;
  };
  /** Marca de tiempo de la auditoría */
  timestamp: string;
  /** URL auditada */
  url: string;
}

/**
 * Violación de accesibilidad
 */
export interface AxeViolation {
  /** Identificador único de la regla */
  id: string;
  /** Nivel de impacto: critical, serious, moderate, minor */
  impact: string;
  /** Mensaje de ayuda corto */
  help: string;
  /** Descripción detallada */
  description: string;
  /** URL con más información */
  helpUrl: string;
  /** Tags asociados (wcag2a, wcag21aa, etc.) */
  tags: string[];
  /** Elementos del DOM afectados */
  nodes: AxeNode[];
}

/**
 * Regla de accesibilidad (para passes, incomplete, inapplicable)
 */
export interface AxeRule {
  /** Identificador único de la regla */
  id: string;
  /** Mensaje de ayuda corto */
  help: string;
  /** Descripción detallada */
  description: string;
}

/**
 * Nodo del DOM afectado por una violación
 */
export interface AxeNode {
  /** Selectores CSS para ubicar el elemento */
  target: string[];
  /** Resumen del fallo */
  failureSummary?: string;
  /** HTML del elemento */
  html: string;
}

// ============================================
// Traducciones
// ============================================

/**
 * Información traducida de una violación
 */
export interface ViolationTranslation {
  /** Título en español */
  title: string;
  /** Descripción en español */
  description: string;
  /** Problema en español */
  problem: string;
  /** Solución recomendada en español */
  solution: string;
}

// ============================================
// Respuestas del MCP
// ============================================

/**
 * Contenido de respuesta del MCP
 */
export interface McpContent {
  type: 'text';
  text: string;
}

/**
 * Respuesta de una herramienta MCP
 */
export interface McpToolResponse {
  content: McpContent[];
  isError?: boolean;
}
