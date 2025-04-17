import { useState } from 'react'
import Lightning from './Lightning';
function App() {

  return (
    <>
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Lightning
          hue={220}
          xOffset={0}
          speed={1}
          intensity={1}
          size={1}
        />
      </div>
    </>
  )
}

export default App
