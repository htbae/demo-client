interface ListType<T> {
  total: number;
  list: T[];
}

type HttpParamType<T> = T & { fields?: string };

type StatusType = 'COMPLETED' | 'RUNNING' | 'WAITING' | 'FAILED' | 'READY';

type DateType = string;

export type { ListType, HttpParamType, DateType, StatusType };
