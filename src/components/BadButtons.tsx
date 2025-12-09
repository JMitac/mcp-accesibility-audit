/**
 * Componente con problemas de accesibilidad en botones
 * ❌ Violaciones WCAG intencionales para pruebas
 */

export function BadButtons() {
  return (
    <section>
      <h2>🔘 Botones con Problemas <span className="problem-badge">A11Y</span></h2>
      
      {/* ❌ PROBLEMA: Div usado como botón sin role ni keyboard */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Div como botón (sin role):</strong></p>
        <div 
          onClick={() => alert('Click!')}
          style={{ 
            padding: '10px 20px', 
            background: '#007bff', 
            color: 'white',
            display: 'inline-block',
            cursor: 'pointer',
            borderRadius: '4px'
          }}
        >
          Soy un div clickeable
        </div>
      </div>

      {/* ❌ PROBLEMA: Botón sin texto accesible */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Botón solo con icono (sin aria-label):</strong></p>
        <button style={{ padding: '10px 15px', fontSize: '18px' }}>
          🔍
        </button>
        <button style={{ padding: '10px 15px', fontSize: '18px', marginLeft: '10px' }}>
          ❌
        </button>
        <button style={{ padding: '10px 15px', fontSize: '18px', marginLeft: '10px' }}>
          ✏️
        </button>
      </div>

      {/* ❌ PROBLEMA: Botón vacío */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Botón vacío:</strong></p>
        <button style={{ padding: '10px 20px' }}></button>
      </div>

      {/* ❌ PROBLEMA: Link usado como botón */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Link como botón (href="#"):</strong></p>
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); alert('Click!'); }}
          style={{ 
            padding: '10px 20px', 
            background: '#28a745', 
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px'
          }}
        >
          Soy un link que actúa como botón
        </a>
      </div>

      {/* ❌ PROBLEMA: Span como botón */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Span como botón:</strong></p>
        <span 
          onClick={() => alert('Click!')}
          style={{ 
            padding: '10px 20px', 
            background: '#dc3545', 
            color: 'white',
            cursor: 'pointer',
            borderRadius: '4px'
          }}
        >
          Soy un span clickeable
        </span>
      </div>

      {/* ❌ PROBLEMA: Botón con tabindex negativo */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Botón con tabindex="-1":</strong></p>
        <button tabIndex={-1} style={{ padding: '10px 20px' }}>
          No puedo recibir focus con Tab
        </button>
      </div>
    </section>
  )
}
