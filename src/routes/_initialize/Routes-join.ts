import React from 'react';
import { JoinRouteType } from '../Route-type';
import { ROUTE_PREFIX } from '../Route-constants';

const Signin = React.lazy(() =>
  import('@/components/views/join/SignIn').then((module) => ({
    default: module.default,
  }))
);

const Signup = React.lazy(() =>
  import('@/components/views/join/SignUp').then((module) => ({
    default: module.default,
  }))
);

const JOIN_ROUTE: JoinRouteType = {
  SIGN_IN: {
    path: `${ROUTE_PREFIX.JOIN}/sign-in`,
    element: Signin,
    isProtected: false,
  },
  SIGN_UP: {
    path: `${ROUTE_PREFIX.JOIN}/sign-up`,
    element: Signup,
    isProtected: false,
  },
};

export { JOIN_ROUTE };
