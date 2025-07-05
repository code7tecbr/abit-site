import { useState } from 'react'
import AppHeader from './header'
import AppBody from './body'
import AppFooter from './footer'

function App() {
  return (
    <div className="bg-black text-white w-100 p-3" style={{ height: "100vh" }}>
      <div style={{ border: "1px solid red" }}>
        <AppHeader />
      </div>
      <div style={{ border: "1px solid blue" }}>
        <AppBody />
      </div>
      <div style={{ border: "1px solid green" }}>
        <AppFooter />
      </div>
    </div>
  )
}

export default App
