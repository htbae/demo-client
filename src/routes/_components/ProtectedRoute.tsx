import { Suspense } from 'react';
import { RouteType } from '../Route-type';
import { Navigate } from 'react-router-dom';
import { ROUTES_PATH } from '../Route-path';

interface ProtectedRouteType extends RouteType {
  isSignIn: boolean;
}

const ProtectedRoute = (props: ProtectedRouteType) => {
  // Extract props
  const { isProtected = true, isSignIn } = props;

  const isPassed = isSignIn || !isProtected;

  if (isPassed) {
    return <Suspense fallback={<></>}>{<props.element />}</Suspense>;
  }
  // Redirect to sign in page
  return <Navigate to={ROUTES_PATH.SIGN_IN.path} />;
};

export default ProtectedRoute;
