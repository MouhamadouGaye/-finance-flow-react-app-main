
// ✅ User & Auth
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string; // ISO Date
  address: Address;
  kycStatus: 'verified' | 'pending' | 'rejected';
  createdAt: string; // ISO Date
  updatedAt: string; // ISO Date
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface AuthSession {
  accessToken: string;
  refreshToken: string;
  expiresIn: number; // in seconds
  user: User;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}

// ✅ Accounts
export interface BankAccount {
  id: string;
  userId: string;
  accountNumber: string;
  accountType: 'checking' | 'savings' | 'business';
  balance: number;
  currency: string;
  status: 'active' | 'frozen' | 'closed';
  createdAt: string;
  updatedAt: string;
}

// ✅ Transactions
export interface Transaction {
  id: string;
  accountId: string;
  type: 'deposit' | 'withdrawal' | 'transfer' | 'payment' | 'fee' | 'refund';
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  timestamp: string;
  description?: string;
  referenceId?: string;
  merchant?: Merchant;
  direction: 'inbound' | 'outbound';
}

export interface Merchant {
  name: string;
  category: string;
  location?: string;
}

// ✅ Cards (Debit / Credit)
export interface Card {
  id: string;
  userId: string;
  cardNumberMasked: string;
  cardType: 'debit' | 'credit';
  status: 'active' | 'inactive' | 'blocked' | 'expired';
  expirationDate: string;
  cvvMasked: string;
  linkedAccountId: string;
  provider: 'visa' | 'mastercard' | 'amex' | 'discover';
  createdAt: string;
}

//✅ Transfers / Payments
export interface TransferRequest {
  fromAccountId: string;
  toAccountNumber: string;
  amount: number;
  currency: string;
  note?: string;
}

export interface PaymentRequest {
  accountId: string;
  merchantId: string;
  amount: number;
  currency: string;
  description?: string;
}

// ✅ Loans / Credit
export interface Loan {
  id: string;
  userId: string;
  principalAmount: number;
  interestRate: number; // e.g., 5.5
  termMonths: number;
  monthlyPayment: number;
  outstandingBalance: number;
  status: 'active' | 'paid' | 'defaulted' | 'cancelled';
  issuedDate: string;
  dueDate: string;
}

export interface LoanApplication {
  userId: string;
  amountRequested: number;
  termMonths: number;
  purpose: string;
  income: number;
  employmentStatus: string;
}

// ✅ Notifications
export interface Notification {
  id: string;
  userId: string;
  type: 'transaction' | 'security' | 'promotion' | 'reminder';
  message: string;
  read: boolean;
  timestamp: string;
  metadata?: Record<string, any>;
}

// ✅ Support & Tickets
export interface SupportTicket {
  id: string;
  userId: string;
  subject: string;
  message: string;
  status: 'open' | 'pending' | 'closed';
  createdAt: string;
  updatedAt: string;
  responses: TicketResponse[];
}

export interface TicketResponse {
  responder: 'user' | 'support';
  message: string;
  timestamp: string;
}

//✅ Settings & Preferences
export interface UserSettings {
  userId: string;
  language: string;
  theme: 'light' | 'dark' | 'system';
  notificationPreferences: NotificationPreferences;
  currency: string;
}

export interface NotificationPreferences {
  email: boolean;
  sms: boolean;
  push: boolean;
}

// ✅ Security
export interface SecuritySettings {
  userId: string;
  twoFactorEnabled: boolean;
  loginAlerts: boolean;
  deviceList: Device[];
}

export interface Device {
  id: string;
  name: string;
  ip: string;
  lastUsed: string;
  location?: string;
  trusted: boolean;
}

//✅ Error Handling (Standardized API Errors)
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}
