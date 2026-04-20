import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { UserProfileSettings } from './components/UserProfileSettings'
import { Sidebar } from './components/Sidebar'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <>
      <Navbar onToggleSidebar={toggleSidebar} />
      <div className="flex min-h-screen">
        <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
        <main className="flex-1 container mx-auto px-4 py-8">
          <UserProfileSettings />
        </main>
      </div>
    </>
  )
}

export default App
