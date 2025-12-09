/**
 * Componente con problemas de accesibilidad en tablas
 * ❌ Violaciones WCAG intencionales para pruebas
 */

export function BadTables() {
  return (
    <section>
      <h2>📊 Tablas con Problemas <span className="problem-badge">A11Y</span></h2>
      
      {/* ❌ PROBLEMA: Tabla sin encabezados */}
      <div style={{ marginBottom: '20px' }}>
        <p><strong>Tabla sin th (encabezados):</strong></p>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr style={{ background: '#f5f5f5' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>Nombre</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>Email</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>Rol</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>Juan Pérez</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>juan@email.com</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>Admin</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>María García</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>maria@email.com</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>Usuario</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ❌ PROBLEMA: Tabla sin caption */}
      <div style={{ marginBottom: '20px' }}>
        <p><strong>Tabla sin caption (título):</strong></p>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#333', color: 'white' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Producto</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Precio</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Stock</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>Laptop</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$999</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>15</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>Mouse</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$29</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>50</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ❌ PROBLEMA: Tabla con th sin scope */}
      <div style={{ marginBottom: '20px' }}>
        <p><strong>Tabla con th sin scope:</strong></p>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#007bff', color: 'white' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Mes</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Ventas</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Gastos</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Beneficio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th style={{ padding: '10px', border: '1px solid #ddd', background: '#f5f5f5' }}>Enero</th>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$10,000</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$7,000</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$3,000</td>
            </tr>
            <tr>
              <th style={{ padding: '10px', border: '1px solid #ddd', background: '#f5f5f5' }}>Febrero</th>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$12,000</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$8,000</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$4,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ❌ PROBLEMA: Tabla compleja sin headers/id */}
      <div style={{ marginBottom: '20px' }}>
        <p><strong>Tabla compleja sin asociación headers/id:</strong></p>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#28a745', color: 'white' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }} rowSpan={2}>Región</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }} colSpan={2}>Q1</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }} colSpan={2}>Q2</th>
            </tr>
            <tr style={{ background: '#28a745', color: 'white' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Ventas</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Meta</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Ventas</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Meta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th style={{ padding: '10px', border: '1px solid #ddd', background: '#f5f5f5' }}>Norte</th>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$50K</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$45K</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$55K</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$50K</td>
            </tr>
            <tr>
              <th style={{ padding: '10px', border: '1px solid #ddd', background: '#f5f5f5' }}>Sur</th>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$40K</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$42K</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$48K</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$45K</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
