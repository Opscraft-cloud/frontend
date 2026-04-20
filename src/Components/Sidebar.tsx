import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  Home,
  BarChart3,
  Settings,
  Users,
  FileText,
  User,
} from "lucide-react"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

const navItems = [
  { name: "Dashboard", icon: Home, href: "#" },
  { name: "Analytics", icon: BarChart3, href: "#" },
  { name: "Users", icon: Users, href: "#" },
  { name: "Reports", icon: FileText, href: "#" },
  { name: "Settings", icon: Settings, href: "#" },
]

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const handleProfileSettings = () => {
    window.location.hash = "#profile-settings"
  }

  const handleLogout = () => {
    alert("Logged out!")
  }

  return (
    <div
      className={cn(
        "h-[calc(100vh-4rem)] bg-white border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col",
        isOpen ? "w-64" : "w-16"
      )}
    >
      <div className="flex flex-col h-full">
        {/* Toggle Button */}
        <div className="flex justify-end p-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="h-8 w-8"
          >
            {isOpen ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-2 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors",
                isOpen ? "justify-start" : "justify-center"
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {isOpen && <span className="ml-3">{item.name}</span>}
            </a>
          ))}
        </nav>

        {/* User Profile at Bottom */}
        <div className="p-2 border-t border-gray-200">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "w-full h-10 px-3 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors",
                  isOpen ? "justify-start" : "justify-center"
                )}
              >
                <User className="h-5 w-5 flex-shrink-0" />
                {isOpen && <span className="ml-3">Profile</span>}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem onClick={handleProfileSettings}>
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}