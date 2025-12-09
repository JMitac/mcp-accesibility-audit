/**
 * Componente con problemas de accesibilidad en imágenes
 * ❌ Violaciones WCAG intencionales para pruebas
 */

export function BadImages() {
  return (
    <section>
      <h2>🖼️ Imágenes con Problemas <span className="problem-badge">A11Y</span></h2>
      
      {/* ❌ PROBLEMA: Imagen sin alt */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Imagen sin atributo alt:</strong></p>
        <img 
          src="https://via.placeholder.com/200x100?text=Sin+Alt" 
          width="200" 
          height="100"
        />
      </div>

      {/* ❌ PROBLEMA: Imagen con alt vacío pero no es decorativa */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Imagen con alt vacío (no decorativa):</strong></p>
        <img 
          src="https://via.placeholder.com/200x100?text=Alt+Vacio" 
          alt=""
          width="200" 
          height="100"
        />
      </div>

      {/* ❌ PROBLEMA: Imagen con alt no descriptivo */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Imagen con alt no descriptivo:</strong></p>
        <img 
          src="https://via.placeholder.com/200x100?text=Producto" 
          alt="imagen"
          width="200" 
          height="100"
        />
      </div>

      {/* ❌ PROBLEMA: Imagen con alt que dice "imagen de..." */}
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Alt redundante con "imagen de":</strong></p>
        <img 
          src="https://via.placeholder.com/200x100?text=Logo" 
          alt="imagen de logo"
          width="200" 
          height="100"
        />
      </div>
    </section>
  )
}
