
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { User, Bell, Shield, Globe, Palette } from 'lucide-react';
import { useState } from 'react';
import { mockUser, mockUserSettings, mockSecuritySettings } from '@/data/mockData';

const Settings = () => {
  const [userSettings, setUserSettings] = useState(mockUserSettings);
  const [securitySettings, setSecuritySettings] = useState(mockSecuritySettings);

  return (
    <div className="min-h-screen bg-fintech-gray-light p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-fintech-navy">Settings</h1>
          <p className="text-fintech-gray">Manage your account preferences and security</p>
        </div>

        {/* Profile Settings */}
        <Card className="card-shadow">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <User className="h-5 w-5 text-fintech-teal" />
              <CardTitle className="text-fintech-navy">Profile Information</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue={mockUser.firstName} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue={mockUser.lastName} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue={mockUser.email} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" defaultValue={mockUser.phone} />
            </div>
            <Button className="bg-fintech-teal hover:bg-fintech-teal/90">Save Changes</Button>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card className="card-shadow">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Palette className="h-5 w-5 text-fintech-teal" />
              <CardTitle className="text-fintech-navy">Preferences</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label>Theme</Label>
                <p className="text-sm text-fintech-gray">Choose your preferred theme</p>
              </div>
              <Select defaultValue={userSettings.theme}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label>Language</Label>
                <p className="text-sm text-fintech-gray">Select your language</p>
              </div>
              <Select defaultValue={userSettings.language}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label>Currency</Label>
                <p className="text-sm text-fintech-gray">Default currency display</p>
              </div>
              <Select defaultValue={userSettings.currency}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="GBP">GBP</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="card-shadow">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Bell className="h-5 w-5 text-fintech-teal" />
              <CardTitle className="text-fintech-navy">Notifications</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label>Email Notifications</Label>
                <p className="text-sm text-fintech-gray">Receive notifications via email</p>
              </div>
              <Switch defaultChecked={userSettings.notificationPreferences.email} />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label>SMS Notifications</Label>
                <p className="text-sm text-fintech-gray">Receive notifications via SMS</p>
              </div>
              <Switch defaultChecked={userSettings.notificationPreferences.sms} />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label>Push Notifications</Label>
                <p className="text-sm text-fintech-gray">Receive push notifications</p>
              </div>
              <Switch defaultChecked={userSettings.notificationPreferences.push} />
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="card-shadow">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-fintech-teal" />
              <CardTitle className="text-fintech-navy">Security</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-fintech-gray">Add extra security to your account</p>
              </div>
              <Switch defaultChecked={securitySettings.twoFactorEnabled} />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label>Login Alerts</Label>
                <p className="text-sm text-fintech-gray">Get notified of new login attempts</p>
              </div>
              <Switch defaultChecked={securitySettings.loginAlerts} />
            </div>
            <Separator />
            <div>
              <Label>Change Password</Label>
              <p className="text-sm text-fintech-gray mb-4">Update your account password</p>
              <Button variant="outline">Change Password</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
