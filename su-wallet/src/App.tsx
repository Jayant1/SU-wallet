import { useState } from 'react'
import { generateMnemonic } from 'bip39'
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeflex/primeflex.css'; // flex
import { PrimeReactProvider } from 'primereact/api'
import { Card } from 'primereact/card';
import { Chip } from 'primereact/chip';
import { Button } from 'primereact/button';


function App() {
  
  const [mnemonic, setMnemonic] = useState<string>('');
  return (
    
    <PrimeReactProvider>      
      <Button label="Generate Seed Phrase" onClick={() => { setMnemonic(generateMnemonic())}}/>      
      <Card title="Seed phrase" className='bg-pink-700'>
        {          
          <div className="card flex flex-wrap gap-2">
            {mnemonic.split(' ').map((word, i) => (            
              <Chip key={i} label={word} />
            ))}
        </div>
          
        }          
      </Card>
    </PrimeReactProvider>
  )
}

export default App
