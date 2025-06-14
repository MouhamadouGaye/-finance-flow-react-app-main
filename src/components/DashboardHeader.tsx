
import { Bell, Settings, User, CreditCard, PiggyBank, HeadphonesIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { mockUser, mockNotifications } from '@/data/mockData';
import { Link, useNavigate } from 'react-router-dom';

const DashboardHeader = () => {
  const unreadCount = mockNotifications.filter(n => !n.read).length;
  const navigate = useNavigate();
  
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-4">
            <div className="bg-gradient-fintech p-2 rounded-xl">
              <div className="w-8 h-8 bg-fintech-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-fintech-navy">FinTech</h1>
              <p className="text-sm text-fintech-gray">Welcome back, {mockUser.firstName}</p>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/cards" className="flex items-center space-x-2 text-fintech-gray hover:text-fintech-navy transition-colors">
            <CreditCard className="h-4 w-4" />
            <span>Cards</span>
          </Link>
          <Link to="/loans" className="flex items-center space-x-2 text-fintech-gray hover:text-fintech-navy transition-colors">
            <PiggyBank className="h-4 w-4" />
            <span>Loans</span>
          </Link>
          <Link to="/support" className="flex items-center space-x-2 text-fintech-gray hover:text-fintech-navy transition-colors">
            <HeadphonesIcon className="h-4 w-4" />
            <span>Support</span>
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {mockUser.kycStatus === 'verified' && (
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                ✓ Verified
              </Badge>
            )}
          </div>
          
          <Button variant="ghost" size="icon" className="relative" onClick={() => navigate('/notifications')}>
            <Bell className="h-5 w-5" />
            {unreadCount > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 bg-red-500 text-xs flex items-center justify-center">
                {unreadCount}
              </Badge>
            )}
          </Button>
          
          <Button variant="ghost" size="icon" onClick={() => navigate('/settings')}>
            <Settings className="h-5 w-5" />
          </Button>
          
          <Avatar className="h-8 w-8 cursor-pointer" onClick={() => navigate('/settings')}>
            <AvatarFallback className="bg-fintech-teal text-white">
              {mockUser.firstName[0]}{mockUser.lastName[0]}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
