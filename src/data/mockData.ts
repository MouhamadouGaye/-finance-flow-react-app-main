import {
  User,
  Address,
  BankAccount,
  Transaction,
  Notification,
  Card,
  Loan,
  UserSettings,
  SecuritySettings,
  SupportTicket
} from '@/types';

// Mock user data
export const mockUser: User = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '+15551234567',
  dob: '1990-01-01T00:00:00.000Z',
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'USA'
  },
  kycStatus: 'verified',
  createdAt: '2023-01-01T00:00:00.000Z',
  updatedAt: '2023-01-01T00:00:00.000Z'
};

// Mock bank accounts data
export const mockAccounts: BankAccount[] = [
  {
    id: '1',
    userId: '1',
    accountNumber: '1234567890',
    accountType: 'checking',
    balance: 5000.50,
    currency: 'USD',
    status: 'active',
    createdAt: '2023-01-05T00:00:00.000Z',
    updatedAt: '2023-01-05T00:00:00.000Z'
  },
  {
    id: '2',
    userId: '1',
    accountNumber: '0987654321',
    accountType: 'savings',
    balance: 15000.00,
    currency: 'USD',
    status: 'active',
    createdAt: '2023-01-10T00:00:00.000Z',
    updatedAt: '2023-01-10T00:00:00.000Z'
  },
  {
    id: '3',
    userId: '1',
    accountNumber: '5678901234',
    accountType: 'business',
    balance: 25000.00,
    currency: 'USD',
    status: 'active',
    createdAt: '2023-02-15T00:00:00.000Z',
    updatedAt: '2023-02-15T00:00:00.000Z'
  }
];

// Mock transactions data
export const mockTransactions: Transaction[] = [
  {
    id: '1',
    accountId: '1',
    type: 'deposit',
    amount: 1000.00,
    currency: 'USD',
    status: 'completed',
    timestamp: '2023-01-06T00:00:00.000Z',
    description: 'Salary deposit',
    direction: 'inbound'
  },
  {
    id: '2',
    accountId: '1',
    type: 'withdrawal',
    amount: 50.00,
    currency: 'USD',
    status: 'completed',
    timestamp: '2023-01-07T00:00:00.000Z',
    description: 'Coffee',
    merchant: {
      name: 'Starbucks',
      category: 'Food & Drink'
    },
    direction: 'outbound'
  },
  {
    id: '3',
    accountId: '2',
    type: 'transfer',
    amount: 2000.00,
    currency: 'USD',
    status: 'completed',
    timestamp: '2023-01-08T00:00:00.000Z',
    description: 'Transfer to checking',
    direction: 'outbound'
  },
  {
    id: '4',
    accountId: '1',
    type: 'payment',
    amount: 150.00,
    currency: 'USD',
    status: 'completed',
    timestamp: '2023-01-09T00:00:00.000Z',
    description: 'Credit card payment',
    merchant: {
      name: 'Capital One',
      category: 'Finance'
    },
    direction: 'outbound'
  },
  {
    id: '5',
    accountId: '1',
    type: 'fee',
    amount: 5.00,
    currency: 'USD',
    status: 'completed',
    timestamp: '2023-01-10T00:00:00.000Z',
    description: 'Monthly service fee',
    direction: 'outbound'
  },
  {
    id: '6',
    accountId: '1',
    type: 'refund',
    amount: 25.00,
    currency: 'USD',
    status: 'completed',
    timestamp: '2023-01-11T00:00:00.000Z',
    description: 'Online order refund',
    merchant: {
      name: 'Amazon',
      category: 'Shopping'
    },
    direction: 'inbound'
  }
];

// Mock notifications data
export const mockNotifications: Notification[] = [
  {
    id: '1',
    userId: '1',
    type: 'transaction',
    message: 'New transaction of $1000.00',
    read: false,
    timestamp: '2023-01-06T00:00:00.000Z',
    metadata: {
      transactionId: '1'
    }
  },
  {
    id: '2',
    userId: '1',
    type: 'security',
    message: 'Suspicious activity detected on your account',
    read: false,
    timestamp: '2023-01-07T00:00:00.000Z',
    metadata: {
      ipAddress: '192.168.1.1'
    }
  },
  {
    id: '3',
    userId: '1',
    type: 'promotion',
    message: 'New credit card offer',
    read: true,
    timestamp: '2023-01-08T00:00:00.000Z',
    metadata: {
      offerId: '1'
    }
  },
  {
    id: '4',
    userId: '1',
    type: 'reminder',
    message: 'Upcoming bill payment due',
    read: true,
    timestamp: '2023-01-09T00:00:00.000Z',
    metadata: {
      billId: '1'
    }
  }
];

// Add new mock data for the missing features
export const mockCards: Card[] = [
  {
    id: '1',
    userId: '1',
    cardNumberMasked: '4532 **** **** 1234',
    cardType: 'debit',
    status: 'active',
    expirationDate: '12/27',
    cvvMasked: '***',
    linkedAccountId: '1',
    provider: 'visa',
    createdAt: '2024-01-15T00:00:00Z'
  },
  {
    id: '2',
    userId: '1',
    cardNumberMasked: '5425 **** **** 5678',
    cardType: 'credit',
    status: 'active',
    expirationDate: '09/26',
    cvvMasked: '***',
    linkedAccountId: '2',
    provider: 'mastercard',
    createdAt: '2024-02-20T00:00:00Z'
  },
  {
    id: '3',
    userId: '1',
    cardNumberMasked: '3782 **** **** 9012',
    cardType: 'credit',
    status: 'blocked',
    expirationDate: '03/25',
    cvvMasked: '***',
    linkedAccountId: '1',
    provider: 'amex',
    createdAt: '2024-03-10T00:00:00Z'
  }
];

export const mockLoans: Loan[] = [
  {
    id: '1',
    userId: '1',
    principalAmount: 15000,
    interestRate: 5.5,
    termMonths: 36,
    monthlyPayment: 453.32,
    outstandingBalance: 8200,
    status: 'active',
    issuedDate: '2023-06-15T00:00:00Z',
    dueDate: '2026-06-15T00:00:00Z'
  },
  {
    id: '2',
    userId: '1',
    principalAmount: 25000,
    interestRate: 4.2,
    termMonths: 60,
    monthlyPayment: 465.87,
    outstandingBalance: 18600,
    status: 'active',
    issuedDate: '2023-12-01T00:00:00Z',
    dueDate: '2028-12-01T00:00:00Z'
  }
];

export const mockUserSettings: UserSettings = {
  userId: '1',
  language: 'en',
  theme: 'light',
  notificationPreferences: {
    email: true,
    sms: true,
    push: false
  },
  currency: 'USD'
};

export const mockSecuritySettings: SecuritySettings = {
  userId: '1',
  twoFactorEnabled: true,
  loginAlerts: true,
  deviceList: [
    {
      id: '1',
      name: 'iPhone 15 Pro',
      ip: '192.168.1.100',
      lastUsed: '2024-01-20T10:30:00Z',
      location: 'New York, NY',
      trusted: true
    },
    {
      id: '2',
      name: 'MacBook Pro',
      ip: '192.168.1.101',
      lastUsed: '2024-01-19T15:45:00Z',
      location: 'New York, NY',
      trusted: true
    }
  ]
};

export const mockSupportTickets: SupportTicket[] = [
  {
    id: '1',
    userId: '1',
    subject: 'Unable to transfer funds',
    message: 'I am trying to transfer money to my savings account but getting an error message.',
    status: 'open',
    createdAt: '2024-01-18T09:00:00Z',
    updatedAt: '2024-01-18T09:00:00Z',
    responses: [
      {
        responder: 'support',
        message: 'Thank you for contacting us. We are looking into this issue.',
        timestamp: '2024-01-18T10:30:00Z'
      }
    ]
  },
  {
    id: '2',
    userId: '1',
    subject: 'Card replacement request',
    message: 'My debit card was damaged and I need a replacement.',
    status: 'pending',
    createdAt: '2024-01-15T14:20:00Z',
    updatedAt: '2024-01-16T11:45:00Z',
    responses: [
      {
        responder: 'support',
        message: 'We have processed your card replacement request. You should receive it in 3-5 business days.',
        timestamp: '2024-01-16T11:45:00Z'
      }
    ]
  }
];
