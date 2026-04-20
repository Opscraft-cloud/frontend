import { useState } from 'react'
import Shadtest from './components/Shadtest'
import { Navbar } from './components/Navbar'
import { UserProfileSettings } from './components/UserProfileSettings'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <UserProfileSettings />
      </main>
    </>
  )
}

export default App
