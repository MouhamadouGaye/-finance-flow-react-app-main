import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Phone, Mail, Clock, Plus } from 'lucide-react';
import { useState } from 'react';
import { mockSupportTickets } from '@/data/mockData';

const Support = () => {
  const [newTicket, setNewTicket] = useState({
    subject: '',
    message: ''
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open': return <Badge className="bg-green-500">Open</Badge>;
      case 'pending': return <Badge className="bg-orange-500">Pending</Badge>;
      case 'closed': return <Badge variant="secondary">Closed</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New ticket:', newTicket);
    setNewTicket({ subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-fintech-gray-light p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-fintech-navy">Support Center</h1>
          <p className="text-fintech-gray">Get help when you need it</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Options */}
          <div className="space-y-6">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-fintech-navy">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Phone Support</p>
                    <p className="text-sm text-fintech-gray">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors cursor-pointer">
                  <Mail className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-sm text-fintech-gray">help@fintech.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors cursor-pointer">
                  <MessageCircle className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium">Live Chat</p>
                    <p className="text-sm text-fintech-gray">Available 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Create New Ticket */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-fintech-navy flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  New Ticket
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={newTicket.subject}
                      onChange={(e) => setNewTicket({ ...newTicket, subject: e.target.value })}
                      placeholder="Brief description of your issue"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={newTicket.message}
                      onChange={(e) => setNewTicket({ ...newTicket, message: e.target.value })}
                      placeholder="Describe your issue in detail"
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-fintech-teal hover:bg-fintech-teal/90">
                    Submit Ticket
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Existing Tickets */}
          <div className="lg:col-span-2">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-fintech-navy">Your Tickets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockSupportTickets.map((ticket) => (
                    <div key={ticket.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-fintech-navy">{ticket.subject}</h3>
                        {getStatusBadge(ticket.status)}
                      </div>
                      <p className="text-fintech-gray text-sm mb-3 line-clamp-2">
                        {ticket.message}
                      </p>
                      <div className="flex items-center justify-between text-sm text-fintech-gray">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>Created {new Date(ticket.createdAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{ticket.responses.length} responses</span>
                        </div>
                      </div>
                      <div className="mt-3">
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
