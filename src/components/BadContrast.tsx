/**
 * Componente con problemas de contraste y colores
 * ❌ Violaciones WCAG intencionales para pruebas
 */

export function BadContrast() {
  return (
    <section>
      <h2>🎨 Contraste con Problemas <span className="problem-badge">A11Y</span></h2>
      
      {/* ❌ PROBLEMA: Texto con bajo contraste */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Texto con bajo contraste:</strong></p>
        <p style={{ color: '#999999', background: '#ffffff' }}>
          Texto gris claro sobre fondo blanco (ratio ~2.8:1)
        </p>
        <p style={{ color: '#cccccc', background: '#ffffff' }}>
          Texto gris muy claro sobre fondo blanco (ratio ~1.6:1)
        </p>
        <p style={{ color: '#777777', background: '#aaaaaa' }}>
          Texto gris sobre fondo gris (muy bajo contraste)
        </p>
      </div>

      {/* ❌ PROBLEMA: Texto pequeño con bajo contraste */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Texto pequeño con bajo contraste:</strong></p>
        <p style={{ color: '#888888', fontSize: '12px' }}>
          Texto pequeño (12px) con color gris - necesita ratio 4.5:1 mínimo
        </p>
      </div>

      {/* ❌ PROBLEMA: Link sin diferenciación visual */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Link sin diferenciación visual:</strong></p>
        <p>
          Este es un texto normal y <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>este es un link</a> que 
          no se distingue del texto normal.
        </p>
      </div>

      {/* ❌ PROBLEMA: Información solo por color */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Información transmitida solo por color:</strong></p>
        <p>Estado de los servidores:</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><span style={{ color: 'green' }}>●</span> Servidor 1</li>
          <li><span style={{ color: 'red' }}>●</span> Servidor 2</li>
          <li><span style={{ color: 'yellow' }}>●</span> Servidor 3</li>
        </ul>
        <p style={{ fontSize: '12px', color: '#666' }}>
          (Sin texto que indique el estado, solo color)
        </p>
      </div>

      {/* ❌ PROBLEMA: Placeholder con bajo contraste */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Placeholder con bajo contraste:</strong></p>
        <input 
          type="text" 
          placeholder="Texto placeholder muy claro"
          style={{ 
            padding: '10px',
            width: '300px',
            border: '1px solid #ccc'
          }}
        />
        <style>{`
          input::placeholder {
            color: #dddddd;
          }
        `}</style>
      </div>

      {/* ❌ PROBLEMA: Botón deshabilitado sin suficiente contraste */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Botón deshabilitado con bajo contraste:</strong></p>
        <button 
          disabled
          style={{ 
            padding: '10px 20px',
            background: '#f0f0f0',
            color: '#cccccc',
            border: '1px solid #e0e0e0',
            cursor: 'not-allowed'
          }}
        >
          Botón Deshabilitado
        </button>
      </div>

      {/* ❌ PROBLEMA: Focus indicator con bajo contraste */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Focus indicator con bajo contraste:</strong></p>
        <button 
          style={{ 
            padding: '10px 20px',
            background: '#007bff',
            color: 'white',
            border: 'none',
            outline: '2px solid #99ccff'
          }}
        >
          Focus con bajo contraste
        </button>
      </div>
    </section>
  )
}
