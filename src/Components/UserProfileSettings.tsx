import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

interface UserProfile {
  name: string
  email: string
  bio: string
  avatar: string
}

interface UserSettings {
  notifications: boolean
  darkMode: boolean
  emailUpdates: boolean
}

export function UserProfileSettings() {
  const [profile, setProfile] = useState<UserProfile>({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "A passionate developer.",
    avatar: "",
  })

  const [settings, setSettings] = useState<UserSettings>({
    notifications: true,
    darkMode: false,
    emailUpdates: true,
  })

  const handleProfileChange = (field: keyof UserProfile, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }))
  }

  const handleSettingsChange = (field: keyof UserSettings, value: boolean) => {
    setSettings(prev => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    // Here you would typically save to a backend or local storage
    console.log("Profile:", profile)
    console.log("Settings:", settings)
    alert("Profile and settings saved!")
  }

  return (
    <div id="profile-settings" className="max-w-2xl mx-auto p-6 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={profile.name}
              onChange={(e) => handleProfileChange("name", e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={profile.email}
              onChange={(e) => handleProfileChange("email", e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <Label htmlFor="bio">Bio</Label>
            <Input
              id="bio"
              value={profile.bio}
              onChange={(e) => handleProfileChange("bio", e.target.value)}
              placeholder="Tell us about yourself"
            />
          </div>
          <div>
            <Label htmlFor="avatar">Avatar URL</Label>
            <Input
              id="avatar"
              value={profile.avatar}
              onChange={(e) => handleProfileChange("avatar", e.target.value)}
              placeholder="Enter avatar URL"
            />
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h2 className="text-2xl font-bold mb-4">Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications">Enable Notifications</Label>
            <Switch
              id="notifications"
              checked={settings.notifications}
              onCheckedChange={(checked) => handleSettingsChange("notifications", checked)}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="darkMode">Dark Mode</Label>
            <Switch
              id="darkMode"
              checked={settings.darkMode}
              onCheckedChange={(checked) => handleSettingsChange("darkMode", checked)}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="emailUpdates">Email Updates</Label>
            <Switch
              id="emailUpdates"
              checked={settings.emailUpdates}
              onCheckedChange={(checked) => handleSettingsChange("emailUpdates", checked)}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleSave}>Save Changes</Button>
      </div>
    </div>
  )
}