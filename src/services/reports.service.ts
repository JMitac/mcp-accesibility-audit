/**
 * Servicio para listar reportes de accesibilidad generados
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

import type { ListReportsParams, McpToolResponse } from '../types/index.js';
import { formatFileSize } from '../utils/formatters.js';

// Obtener __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Lista todos los reportes de accesibilidad generados
 * @param params - Parámetros de búsqueda
 * @returns Respuesta MCP con la lista de reportes
 */
export async function listReports(
  params: ListReportsParams
): Promise<McpToolResponse> {
  const { outputDir = './reports' } = params;

  const absoluteOutputDir = path.isAbsolute(outputDir)
    ? outputDir
    : path.join(__dirname, '..', '..', outputDir);

  try {
    // Verificar si existe el directorio
    if (!fs.existsSync(absoluteOutputDir)) {
      return {
        content: [
          {
            type: 'text',
            text: `📁 No existe el directorio de reportes: ${absoluteOutputDir}\n\nEjecuta una auditoría primero para generar reportes.`,
          },
        ],
      };
    }

    // Obtener archivos .md del directorio
    const files = fs
      .readdirSync(absoluteOutputDir)
      .filter((f: string) => f.endsWith('.md'));

    if (files.length === 0) {
      return {
        content: [
          {
            type: 'text',
            text: '📭 No hay reportes generados aún.\n\nEjecuta `audit_accessibility` para generar tu primer reporte.',
          },
        ],
      };
    }

    // Construir lista de archivos con información
    const fileList = files
      .map((f: string) => {
        const filePath = path.join(absoluteOutputDir, f);
        const stats = fs.statSync(filePath);
        const dateStr = stats.mtime.toLocaleDateString('es-PE', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        });
        const timeStr = stats.mtime.toLocaleTimeString('es-PE', {
          hour: '2-digit',
          minute: '2-digit',
        });
        return `- **${f}**\n  - Tamaño: ${formatFileSize(stats.size)}\n  - Modificado: ${dateStr} ${timeStr}`;
      })
      .join('\n\n');

    return {
      content: [
        {
          type: 'text',
          text: `📋 **Reportes encontrados (${files.length}):**

${fileList}

📍 **Ubicación:** ${absoluteOutputDir}`,
        },
      ],
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);

    return {
      content: [
        {
          type: 'text',
          text: `❌ Error al listar reportes: ${errorMessage}`,
        },
      ],
      isError: true,
    };
  }
}
