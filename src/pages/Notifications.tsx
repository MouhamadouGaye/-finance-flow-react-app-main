
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, CheckCircle, AlertTriangle, Gift, Clock } from 'lucide-react';
import { mockNotifications } from '@/data/mockData';

const Notifications = () => {
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'transaction': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'security': return <AlertTriangle className="h-5 w-5 text-orange-500" />;
      case 'promotion': return <Gift className="h-5 w-5 text-purple-500" />;
      case 'reminder': return <Clock className="h-5 w-5 text-blue-500" />;
      default: return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const formatTimeAgo = (timestamp: string) => {
    const diff = Date.now() - new Date(timestamp).getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'Just now';
  };

  return (
    <div className="min-h-screen bg-fintech-gray-light p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-fintech-navy">Notifications</h1>
            <p className="text-fintech-gray">Stay updated with your account activity</p>
          </div>
          <Button variant="outline">Mark All as Read</Button>
        </div>

        <div className="space-y-4">
          {mockNotifications.map((notification) => (
            <Card key={notification.id} className={`card-shadow transition-all hover:shadow-lg ${!notification.read ? 'border-l-4 border-l-fintech-teal bg-blue-50/50' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="capitalize">
                        {notification.type}
                      </Badge>
                      <span className="text-sm text-fintech-gray">
                        {formatTimeAgo(notification.timestamp)}
                      </span>
                    </div>
                    <p className="text-fintech-navy font-medium mb-1">
                      {notification.message}
                    </p>
                    {!notification.read && (
                      <div className="mt-3">
                        <Button size="sm" variant="ghost" className="text-fintech-teal">
                          Mark as Read
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
