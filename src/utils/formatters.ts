import { format, parseISO } from 'date-fns';

export const formatDate = (date: string, formatStr: string = 'MMM d, yyyy') => {
  return format(parseISO(date), formatStr);
};

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};