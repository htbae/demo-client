import NotFound from '@/components/views/error/NotFound';
import { ErrorRouteType } from '../Route-type';

const ERR_ROUTE: ErrorRouteType = {
  NOT_FOUND: { path: '*', element: NotFound },
};

export default ERR_ROUTE;
