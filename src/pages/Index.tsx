
import DashboardHeader from '@/components/DashboardHeader';
import AccountCards from '@/components/AccountCards';
import TransactionList from '@/components/TransactionList';
import QuickActions from '@/components/QuickActions';
import SpendingInsights from '@/components/SpendingInsights';
import { mockAccounts, mockTransactions } from '@/data/mockData';

const Index = () => {
  return (
    <div className="min-h-screen bg-fintech-gray-light">
      <DashboardHeader />
      
      <main className="p-6 space-y-8">
        <div className="max-w-7xl mx-auto">
          {/* Account Cards Section */}
          <AccountCards accounts={mockAccounts} />
          
          {/* Quick Actions */}
          <QuickActions />
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Transactions - Takes up 2/3 on large screens */}
            <div className="lg:col-span-2">
              <TransactionList transactions={mockTransactions} />
            </div>
            
            {/* Spending Insights - Takes up 1/3 on large screens */}
            <div className="lg:col-span-1">
              <SpendingInsights />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
