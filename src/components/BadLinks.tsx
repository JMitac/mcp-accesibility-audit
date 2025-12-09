/**
 * Componente con problemas de accesibilidad en enlaces
 * ❌ Violaciones WCAG intencionales para pruebas
 */

export function BadLinks() {
  return (
    <section>
      <h2>🔗 Enlaces con Problemas <span className="problem-badge">A11Y</span></h2>
      
      {/* ❌ PROBLEMA: Link sin href */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Link sin href:</strong></p>
        <a onClick={() => alert('Click!')}>Soy un link sin href</a>
      </div>

      {/* ❌ PROBLEMA: Link con href vacío */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Link con href vacío:</strong></p>
        <a href="">Link con href vacío</a>
      </div>

      {/* ❌ PROBLEMA: Link con href="#" */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Link con href="#":</strong></p>
        <a href="#">Link que no va a ningún lado</a>
      </div>

      {/* ❌ PROBLEMA: Link con texto no descriptivo */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Links con texto no descriptivo:</strong></p>
        <p>Para más información <a href="https://example.com">haz clic aquí</a></p>
        <p>Descarga el documento <a href="https://example.com/doc.pdf">aquí</a></p>
        <p><a href="https://example.com">Leer más</a></p>
      </div>

      {/* ❌ PROBLEMA: Link que abre en nueva ventana sin aviso */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Link que abre en nueva ventana (sin aviso):</strong></p>
        <a href="https://google.com" target="_blank">
          Ir a Google
        </a>
      </div>

      {/* ❌ PROBLEMA: Imagen como link sin alt */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Imagen como link sin alt:</strong></p>
        <a href="https://example.com">
          <img src="https://via.placeholder.com/100x50?text=Link" width="100" height="50" />
        </a>
      </div>

      {/* ❌ PROBLEMA: Link vacío */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Link vacío:</strong></p>
        <a href="https://example.com"></a>
        <span style={{ color: '#999', fontSize: '12px' }}>(hay un link vacío aquí)</span>
      </div>

      {/* ❌ PROBLEMA: Links adyacentes al mismo destino */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Links adyacentes al mismo destino:</strong></p>
        <a href="https://example.com/producto">
          <img src="https://via.placeholder.com/50x50?text=Prod" width="50" height="50" alt="" />
        </a>
        <a href="https://example.com/producto">Ver Producto</a>
      </div>
    </section>
  )
}
