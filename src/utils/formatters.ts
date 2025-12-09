/**
 * Utilidades de formateo para fechas, tamaños y badges
 */

/**
 * Formatea una fecha en formato DD-MM-YYYY
 * @param date - Fecha a formatear
 * @returns Fecha formateada como string
 */
export function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

/**
 * Formatea una fecha en formato localizado para Perú
 * @param date - Fecha a formatear
 * @returns Fecha formateada (ej: "08/12/2024")
 */
export function formatDateLocale(date: Date): string {
  return date.toLocaleDateString('es-PE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

/**
 * Formatea una hora en formato localizado para Perú
 * @param date - Fecha de la cual extraer la hora
 * @returns Hora formateada (ej: "14:30")
 */
export function formatTimeLocale(date: Date): string {
  return date.toLocaleTimeString('es-PE', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * Formatea un tamaño de archivo en bytes a una unidad legible
 * @param bytes - Tamaño en bytes
 * @returns Tamaño formateado (ej: "1.5 KB", "2.3 MB")
 */
export function formatFileSize(bytes: number): string {
  if (bytes < 1024) {
    return `${bytes} B`;
  }
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/**
 * Obtiene el badge de impacto con emoji y texto en español
 * @param impact - Nivel de impacto (critical, serious, moderate, minor)
 * @returns Badge formateado con emoji
 */
export function getImpactBadge(impact: string): string {
  const badges: Record<string, string> = {
    critical: '🔴 **Crítico**',
    serious: '🟠 **Serio**',
    moderate: '🟡 **Moderado**',
    minor: '🟢 **Menor**',
  };
  return badges[impact] || `⚪ ${impact}`;
}

/**
 * Cuenta las violaciones por nivel de impacto
 * @param violations - Array de violaciones
 * @returns String formateado con conteo por impacto
 */
export function countByImpact(violations: Array<{ impact: string }>): string {
  const counts: Record<string, number> = {
    critical: 0,
    serious: 0,
    moderate: 0,
    minor: 0,
  };

  violations.forEach((v) => {
    if (counts[v.impact] !== undefined) {
      counts[v.impact]++;
    }
  });

  return Object.entries(counts)
    .filter(([, count]) => count > 0)
    .map(([impact, count]) => `- ${getImpactBadge(impact)}: ${count}`)
    .join('\n');
}
