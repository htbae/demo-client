import { VariantType } from '@/styles/style-type';

type AlertType = Extract<VariantType, 'success' | 'warning' | 'error' | 'info'>;

export type { AlertType };
