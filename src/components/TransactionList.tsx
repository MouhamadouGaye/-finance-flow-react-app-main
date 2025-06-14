
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, ArrowDownLeft, MoreHorizontal } from 'lucide-react';
import { Transaction } from '@/types';

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList = ({ transactions }: TransactionListProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(Math.abs(amount));
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTransactionIcon = (direction: string, type: string) => {
    if (direction === 'outbound' || type === 'withdrawal') {
      return <ArrowUpRight className="h-4 w-4 text-red-500" />;
    }
    return <ArrowDownLeft className="h-4 w-4 text-green-500" />;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category?: string) => {
    const iconClass = "w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold";
    
    switch (category?.toLowerCase()) {
      case 'entertainment':
        return <div className={`${iconClass} bg-purple-500`}>🎬</div>;
      case 'groceries':
        return <div className={`${iconClass} bg-green-500`}>🛒</div>;
      case 'food & drink':
        return <div className={`${iconClass} bg-orange-500`}>☕</div>;
      default:
        return <div className={`${iconClass} bg-fintech-teal`}>💳</div>;
    }
  };

  return (
    <Card className="card-shadow animate-slide-up">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-fintech-navy">Recent Transactions</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              {transaction.merchant ? 
                getCategoryIcon(transaction.merchant.category) :
                <div className="w-10 h-10 rounded-full bg-fintech-teal flex items-center justify-center">
                  {getTransactionIcon(transaction.direction, transaction.type)}
                </div>
              }
              
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <p className="font-medium text-fintech-navy">
                    {transaction.merchant?.name || transaction.description || 'Transaction'}
                  </p>
                  <Badge variant="secondary" className={getStatusColor(transaction.status)}>
                    {transaction.status}
                  </Badge>
                </div>
                <p className="text-sm text-fintech-gray">
                  {formatDate(transaction.timestamp)}
                  {transaction.merchant?.location && ` • ${transaction.merchant.location}`}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className={`font-semibold ${
                  transaction.direction === 'outbound' ? 'text-red-600' : 'text-green-600'
                }`}>
                  {transaction.direction === 'outbound' ? '-' : '+'}
                  {formatCurrency(transaction.amount)}
                </p>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TransactionList;
