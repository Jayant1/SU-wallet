import { useState } from 'react'
import { generateMnemonic} from 'bip39'
import './App.css'
import { PrimeReactProvider } from 'primereact/api'
import { Card } from 'primereact/card';
import { Chip } from 'primereact/chip';
import { Button } from 'primereact/button';


function App() {
  
  const [mnemonic, setMnemonic] = useState<string>('');
  return (
    
    <PrimeReactProvider>      
      <Button label="Generate Seed Phrase" onClick={() => setMnemonic(generateMnemonic())}/>      
      <Card title="Seed phrase">
        {
          <div className="card flex flex-wrap gap-2">
            {mnemonic.split(' ').map((word, index) => (
            
              <Chip key={index} label={word} />
            ))}
        </div>
          
        }          
      </Card>
    </PrimeReactProvider>
  )
}

export default App
