
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, Send, Download } from 'lucide-react';
import { useState } from 'react';
import { BankAccount } from '@/types';

interface AccountCardsProps {
  accounts: BankAccount[];
}

const AccountCards = ({ accounts }: AccountCardsProps) => {
  const [showBalance, setShowBalance] = useState(true);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getAccountTypeColor = (type: string) => {
    switch (type) {
      case 'checking':
        return 'from-blue-600 to-blue-700';
      case 'savings':
        return 'from-green-600 to-green-700';
      case 'business':
        return 'from-purple-600 to-purple-700';
      default:
        return 'from-gray-600 to-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-fintech-navy">Your Accounts</h2>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowBalance(!showBalance)}
          className="flex items-center space-x-2"
        >
          {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          <span>{showBalance ? 'Hide' : 'Show'} Balance</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {accounts.map((account) => (
          <Card key={account.id} className="overflow-hidden card-shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up">
            <div className={`h-2 bg-gradient-to-r ${getAccountTypeColor(account.accountType)}`} />
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-fintech-navy capitalize">
                    {account.accountType} Account
                  </h3>
                  <p className="text-sm text-fintech-gray">{account.accountNumber}</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  account.status === 'active' ? 'bg-green-500' : 'bg-red-500'
                }`} />
              </div>

              <div className="mb-6">
                <p className="text-sm text-fintech-gray mb-1">Available Balance</p>
                <p className="text-3xl font-bold text-fintech-navy">
                  {showBalance ? formatCurrency(account.balance) : '••••••'}
                </p>
              </div>

              <div className="flex space-x-3">
                <Button size="sm" className="flex-1 bg-fintech-teal hover:bg-fintech-teal/90">
                  <Send className="h-4 w-4 mr-2" />
                  Send
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Request
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AccountCards;
