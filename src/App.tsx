import { BadImages } from './components/BadImages'
import { BadForms } from './components/BadForms'
import { BadButtons } from './components/BadButtons'
import { BadLinks } from './components/BadLinks'
import { BadStructure } from './components/BadStructure'
import { BadContrast } from './components/BadContrast'
import { BadTables } from './components/BadTables'

function App() {
  return (
    <div className="container">
      <h1>🧪 Test Accessibility App</h1>
      <p style={{ marginBottom: '20px', color: '#666' }}>
        ⚠️ Este sitio contiene problemas de accesibilidad intencionales para probar el MCP Accessibility Audit.
      </p>
      
      <BadImages />
      <BadForms />
      <BadButtons />
      <BadLinks />
      <BadStructure />
      <BadContrast />
      <BadTables />
    </div>
  )
}

export default App
