/**
 * MCP Accessibility Audit Server
 * 
 * Punto de entrada principal del servidor MCP para auditorías de accesibilidad.
 * 
 * @author MCP Accessibility Team
 * @version 1.0.0
 */

import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { createServer } from './server.js';

/**
 * Función principal que inicia el servidor MCP
 */
async function main(): Promise<void> {
  const server = createServer();
  const transport = new StdioServerTransport();

  await server.connect(transport);

  console.error('🚀 MCP Accessibility Audit Server iniciado');
  console.error('📋 Herramientas disponibles:');
  console.error('   - audit_accessibility: Ejecuta auditoría de accesibilidad');
  console.error('   - list_reports: Lista reportes generados');
}

// Iniciar servidor
main().catch((error) => {
  console.error('❌ Error fatal:', error);
  process.exit(1);
});
