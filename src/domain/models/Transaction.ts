interface TransactionStatus {
  id: number;
  name: string;
  code: string;
  created_at: string;
  updated_at: string;
}

interface TransactionType {
  id: number;
  name: string;
  code: string;
  created_at: string;
  updated_at: string;
}

export  interface Transaction {
  id: number;
  uuid: string;
  external_id: string;
  amount: number;
  timestamp: string;
  user_id: number;
  transaction_type_id: number;
  transaction_status_id: number;
  created_at: string;
  updated_at: string;
  status: TransactionStatus;
  type: TransactionType;
}

