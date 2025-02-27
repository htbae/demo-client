import React from 'react';
import { SystemRouteType } from '../Route-type';
import { ROUTE_PREFIX } from '../Route-constants';

const UserList = React.lazy(() =>
  import('@/components/views/system/user/UserList').then((module) => ({
    default: module.default,
  }))
);

const SYSTEM_ROUTE: SystemRouteType = {
  USER_LIST: {
    path: `${ROUTE_PREFIX.SYS}/user`,
    element: UserList,
  },
};

export { SYSTEM_ROUTE };
