
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Lock, Unlock, Eye, EyeOff, Plus } from 'lucide-react';
import { useState } from 'react';
import { mockCards } from '@/data/mockData';

const Cards = () => {
  const [showNumbers, setShowNumbers] = useState(false);

  const getCardColor = (provider: string) => {
    switch (provider) {
      case 'visa': return 'from-blue-600 to-blue-700';
      case 'mastercard': return 'from-orange-600 to-red-600';
      case 'amex': return 'from-green-600 to-green-700';
      case 'discover': return 'from-purple-600 to-purple-700';
      default: return 'from-gray-600 to-gray-700';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active': return <Badge className="bg-green-500">Active</Badge>;
      case 'inactive': return <Badge variant="secondary">Inactive</Badge>;
      case 'blocked': return <Badge variant="destructive">Blocked</Badge>;
      case 'expired': return <Badge variant="outline">Expired</Badge>;
      default: return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-fintech-gray-light p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-fintech-navy">Cards</h1>
            <p className="text-fintech-gray">Manage your debit and credit cards</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => setShowNumbers(!showNumbers)}
              className="flex items-center space-x-2"
            >
              {showNumbers ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              <span>{showNumbers ? 'Hide' : 'Show'} Numbers</span>
            </Button>
            <Button className="bg-fintech-teal hover:bg-fintech-teal/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Card
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {mockCards.map((card) => (
            <Card key={card.id} className="overflow-hidden card-shadow-lg">
              <div className={`h-48 bg-gradient-to-r ${getCardColor(card.provider)} p-6 text-white relative`}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm opacity-80 capitalize">{card.cardType} Card</p>
                    <p className="text-xs opacity-60 uppercase">{card.provider}</p>
                  </div>
                  {getStatusBadge(card.status)}
                </div>
                
                <div className="mt-8">
                  <p className="text-2xl font-mono tracking-wider">
                    {showNumbers ? card.cardNumberMasked : '•••• •••• •••• ••••'}
                  </p>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                  <div>
                    <p className="text-xs opacity-60">EXPIRES</p>
                    <p className="text-sm">{card.expirationDate}</p>
                  </div>
                  <div>
                    <p className="text-xs opacity-60">CVV</p>
                    <p className="text-sm">{showNumbers ? card.cvvMasked : '•••'}</p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-fintech-gray">Status</span>
                    <span className="capitalize">{card.status}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-fintech-gray">Created</span>
                    <span>{new Date(card.createdAt).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex space-x-2 pt-4">
                    {card.status === 'active' ? (
                      <Button variant="outline" size="sm" className="flex-1">
                        <Lock className="h-4 w-4 mr-2" />
                        Block
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" className="flex-1">
                        <Unlock className="h-4 w-4 mr-2" />
                        Unblock
                      </Button>
                    )}
                    <Button variant="outline" size="sm" className="flex-1">
                      Settings
                    </Button>
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

export default Cards;
