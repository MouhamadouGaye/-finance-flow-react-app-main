
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { DollarSign, Calendar, Percent, Plus } from 'lucide-react';
import { mockLoans } from '@/data/mockData';

const Loans = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active': return <Badge className="bg-green-500">Active</Badge>;
      case 'paid': return <Badge className="bg-blue-500">Paid</Badge>;
      case 'defaulted': return <Badge variant="destructive">Defaulted</Badge>;
      case 'cancelled': return <Badge variant="secondary">Cancelled</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-fintech-gray-light p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-fintech-navy">Loans</h1>
            <p className="text-fintech-gray">Manage your loans and credit</p>
          </div>
          <Button className="bg-fintech-teal hover:bg-fintech-teal/90">
            <Plus className="h-4 w-4 mr-2" />
            Apply for Loan
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockLoans.map((loan) => {
            const progressPercentage = ((loan.principalAmount - loan.outstandingBalance) / loan.principalAmount) * 100;
            
            return (
              <Card key={loan.id} className="card-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-fintech-navy">Personal Loan</CardTitle>
                    {getStatusBadge(loan.status)}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <DollarSign className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-fintech-gray">Principal</p>
                        <p className="font-semibold">{formatCurrency(loan.principalAmount)}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Percent className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-fintech-gray">Interest Rate</p>
                        <p className="font-semibold">{loan.interestRate}%</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-fintech-gray">Loan Progress</span>
                      <span className="text-sm font-medium">{progressPercentage.toFixed(1)}% paid</span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                    <div className="flex justify-between text-xs text-fintech-gray mt-1">
                      <span>Paid: {formatCurrency(loan.principalAmount - loan.outstandingBalance)}</span>
                      <span>Remaining: {formatCurrency(loan.outstandingBalance)}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-fintech-gray">Monthly Payment</p>
                      <p className="font-semibold text-lg">{formatCurrency(loan.monthlyPayment)}</p>
                    </div>
                    <div>
                      <p className="text-fintech-gray">Term</p>
                      <p className="font-semibold">{loan.termMonths} months</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-sm">
                    <Calendar className="h-4 w-4 text-fintech-gray" />
                    <span className="text-fintech-gray">Due Date:</span>
                    <span className="font-medium">{new Date(loan.dueDate).toLocaleDateString()}</span>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button variant="outline" className="flex-1">View Details</Button>
                    <Button className="flex-1 bg-fintech-teal hover:bg-fintech-teal/90">Make Payment</Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Loans;
