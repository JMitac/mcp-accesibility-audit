/**
 * Componente con problemas de accesibilidad en formularios
 * ❌ Violaciones WCAG intencionales para pruebas
 */

export function BadForms() {
  return (
    <section>
      <h2>📝 Formularios con Problemas <span className="problem-badge">A11Y</span></h2>
      
      <form>
        {/* ❌ PROBLEMA: Input sin label asociado */}
        <div style={{ marginBottom: '15px' }}>
          <p><strong>Input sin label:</strong></p>
          <input type="text" placeholder="Escribe tu nombre" />
        </div>

        {/* ❌ PROBLEMA: Label sin for/htmlFor */}
        <div style={{ marginBottom: '15px' }}>
          <p><strong>Label sin htmlFor:</strong></p>
          <label>Email:</label>
          <input type="email" id="email-input" />
        </div>

        {/* ❌ PROBLEMA: Input sin identificación */}
        <div style={{ marginBottom: '15px' }}>
          <p><strong>Input sin id ni name:</strong></p>
          <input type="password" />
        </div>

        {/* ❌ PROBLEMA: Select sin label */}
        <div style={{ marginBottom: '15px' }}>
          <p><strong>Select sin label:</strong></p>
          <select>
            <option value="">Selecciona una opción</option>
            <option value="1">Opción 1</option>
            <option value="2">Opción 2</option>
          </select>
        </div>

        {/* ❌ PROBLEMA: Textarea sin label */}
        <div style={{ marginBottom: '15px' }}>
          <p><strong>Textarea sin label:</strong></p>
          <textarea placeholder="Escribe un mensaje..." rows={3}></textarea>
        </div>

        {/* ❌ PROBLEMA: Checkbox sin label */}
        <div style={{ marginBottom: '15px' }}>
          <p><strong>Checkbox sin label:</strong></p>
          <input type="checkbox" /> Acepto los términos
        </div>

        {/* ❌ PROBLEMA: Radio buttons sin fieldset/legend */}
        <div style={{ marginBottom: '15px' }}>
          <p><strong>Radio buttons sin fieldset:</strong></p>
          <input type="radio" name="gender" value="m" /> Masculino
          <input type="radio" name="gender" value="f" /> Femenino
        </div>

        {/* ❌ PROBLEMA: Campo requerido sin indicación */}
        <div style={{ marginBottom: '15px' }}>
          <p><strong>Campo requerido sin aria-required:</strong></p>
          <input type="text" required style={{ borderColor: 'red' }} />
        </div>

        {/* ❌ PROBLEMA: Mensaje de error sin asociación */}
        <div style={{ marginBottom: '15px' }}>
          <p><strong>Error sin aria-describedby:</strong></p>
          <input type="text" style={{ borderColor: 'red' }} />
          <span style={{ color: 'red', fontSize: '12px' }}>Este campo es obligatorio</span>
        </div>
      </form>
    </section>
  )
}
