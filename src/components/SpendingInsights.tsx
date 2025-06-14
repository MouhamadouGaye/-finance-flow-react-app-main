
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, TrendingDown } from 'lucide-react';

const SpendingInsights = () => {
  const categories = [
    {
      name: 'Entertainment',
      amount: 189.98,
      budget: 300,
      color: 'bg-purple-500',
      trend: 'up',
      percentage: 12
    },
    {
      name: 'Groceries',
      amount: 245.67,
      budget: 400,
      color: 'bg-green-500',
      trend: 'down',
      percentage: -8
    },
    {
      name: 'Food & Drink',
      amount: 167.50,
      budget: 200,
      color: 'bg-orange-500',
      trend: 'up',
      percentage: 15
    },
    {
      name: 'Transportation',
      amount: 89.30,
      budget: 150,
      color: 'bg-blue-500',
      trend: 'down',
      percentage: -5
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <Card className="card-shadow animate-slide-up">
      <CardHeader>
        <CardTitle className="text-fintech-navy">Spending Insights</CardTitle>
        <p className="text-sm text-fintech-gray">This month vs last month</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {categories.map((category, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${category.color}`} />
                <span className="font-medium text-fintech-navy">{category.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-semibold">
                  {formatCurrency(category.amount)}
                </span>
                <div className={`flex items-center space-x-1 ${
                  category.trend === 'up' ? 'text-red-500' : 'text-green-500'
                }`}>
                  {category.trend === 'up' ? 
                    <TrendingUp className="h-3 w-3" /> : 
                    <TrendingDown className="h-3 w-3" />
                  }
                  <span className="text-xs font-medium">
                    {Math.abs(category.percentage)}%
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <Progress 
                value={(category.amount / category.budget) * 100} 
                className="h-2"
              />
              <div className="flex justify-between text-xs text-fintech-gray">
                <span>{formatCurrency(category.amount)} spent</span>
                <span>of {formatCurrency(category.budget)} budget</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SpendingInsights;
