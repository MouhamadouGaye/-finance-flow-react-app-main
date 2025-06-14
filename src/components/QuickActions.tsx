
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Send, Download, CreditCard, PiggyBank, FileText, Phone } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    {
      icon: <Send className="h-5 w-5" />,
      label: 'Send Money',
      description: 'Transfer to friends',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: <Download className="h-5 w-5" />,
      label: 'Request',
      description: 'Ask for payment',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      label: 'Pay Bills',
      description: 'Utilities & more',
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      icon: <PiggyBank className="h-5 w-5" />,
      label: 'Save',
      description: 'Set money aside',
      color: 'bg-fintech-teal hover:bg-fintech-teal/90'
    },
    {
      icon: <FileText className="h-5 w-5" />,
      label: 'Statements',
      description: 'View history',
      color: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Support',
      description: 'Get help',
      color: 'bg-gray-500 hover:bg-gray-600'
    }
  ];

  return (
    <Card className="card-shadow animate-slide-up">
      <CardHeader>
        <CardTitle className="text-fintech-navy">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className={`h-20 flex flex-col items-center space-y-2 hover:scale-105 transition-all duration-200 ${action.color} text-white border-none`}
            >
              {action.icon}
              <div className="text-center">
                <p className="text-sm font-semibold">{action.label}</p>
                <p className="text-xs opacity-90">{action.description}</p>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
