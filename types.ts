
export interface NewsUpdate {
  id: string;
  date: string;
  title: string;
  content: string;
  severity: 'urgent' | 'info';
}

export interface Receipt {
  id: string;
  weekRange: string;
  amount: string;
  date: string;
  status: 'Completed' | 'Processing';
  proofUrl?: string;
}

export interface NavLink {
  name: string;
  href: string;
}
