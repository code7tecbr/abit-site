import { useState } from 'react'
import AppHeader from './header'
import AppBody from './body'
import AppFooter from './footer'

function App() {
  return (
    <div className="bg-black text-white w-100 p-3">
      <div>
        <AppHeader />
      </div>
      <div className="h-100">
        <AppBody />
      </div>
      <div>
        <AppFooter />
      </div>
    </div>
  )
}

export default App
