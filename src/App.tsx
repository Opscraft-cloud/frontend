import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { UserProfileSettings } from './components/UserProfileSettings'
import { Sidebar } from './components/Sidebar'
import { LineGraph } from './components/LineGraph'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <>
      <Navbar onToggleSidebar={toggleSidebar} />
      <div className="flex min-h-screen">
        <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
        <main className="flex-1 container mx-auto px-4 py-8">
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>
            <TabsContent value="dashboard" className="mt-6">
              <LineGraph />
            </TabsContent>
            <TabsContent value="profile" className="mt-6">
              <UserProfileSettings />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </>
  )
}

export default App
