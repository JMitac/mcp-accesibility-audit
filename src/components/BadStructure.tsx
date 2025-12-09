/**
 * Componente con problemas de estructura y semántica
 * ❌ Violaciones WCAG intencionales para pruebas
 */

export function BadStructure() {
  return (
    <section>
      <h2>🏗️ Estructura con Problemas <span className="problem-badge">A11Y</span></h2>
      
      {/* ❌ PROBLEMA: Salto de niveles de encabezado */}
      <div style={{ marginBottom: '15px', padding: '15px', background: '#f9f9f9', borderRadius: '4px' }}>
        <p><strong>Salto de niveles de encabezado:</strong></p>
        <h2>Título nivel 2</h2>
        <h4>Título nivel 4 (saltó el 3)</h4>
        <h6>Título nivel 6 (saltó el 5)</h6>
      </div>

      {/* ❌ PROBLEMA: Múltiples h1 */}
      <div style={{ marginBottom: '15px', padding: '15px', background: '#f9f9f9', borderRadius: '4px' }}>
        <p><strong>Múltiples H1 en la página:</strong></p>
        <h1 style={{ fontSize: '18px' }}>Primer H1</h1>
        <h1 style={{ fontSize: '18px' }}>Segundo H1</h1>
        <h1 style={{ fontSize: '18px' }}>Tercer H1</h1>
      </div>

      {/* ❌ PROBLEMA: Lista sin estructura correcta */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Lista falsa (sin ul/ol):</strong></p>
        <div>
          <div>• Elemento 1</div>
          <div>• Elemento 2</div>
          <div>• Elemento 3</div>
        </div>
      </div>

      {/* ❌ PROBLEMA: Contenido sin landmarks */}
      <div style={{ marginBottom: '15px', padding: '15px', background: '#f9f9f9', borderRadius: '4px' }}>
        <p><strong>Contenido sin landmarks (nav, main, aside):</strong></p>
        <div>
          <div>Esto debería ser un nav</div>
          <div>Esto debería ser el main</div>
          <div>Esto debería ser un aside</div>
        </div>
      </div>

      {/* ❌ PROBLEMA: Texto justificado */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Texto justificado (difícil de leer):</strong></p>
        <p style={{ textAlign: 'justify', maxWidth: '400px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* ❌ PROBLEMA: Uso de tablas para layout */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Tabla usada para layout:</strong></p>
        <table style={{ width: '100%' }}>
          <tbody>
            <tr>
              <td style={{ padding: '10px', background: '#eee' }}>Columna 1</td>
              <td style={{ padding: '10px', background: '#ddd' }}>Columna 2</td>
              <td style={{ padding: '10px', background: '#ccc' }}>Columna 3</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ❌ PROBLEMA: iframe sin título */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>iframe sin título:</strong></p>
        <iframe 
          src="about:blank" 
          width="200" 
          height="100"
          style={{ border: '1px solid #ccc' }}
        ></iframe>
      </div>
    </section>
  )
}
