import { useEffect, useMemo, useState, useTransition } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ROUTE_VALUES } from './Route-path';
import ProtectedRoute from './_components/ProtectedRoute';

interface RoutesContainerType {
  isSignIn: boolean;
}

const RoutesContainer = ({ isSignIn }: RoutesContainerType) => {
  // Define service
  const [, startTransition] = useTransition();
  const location = useLocation();

  // States
  const [currentLocation, setCurrentLocation] = useState(location);

  // All filtered routes
  const routeComponents = useMemo(() => {
    return ROUTE_VALUES.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        element={<ProtectedRoute {...route} isSignIn={isSignIn} />}
      />
    ));
  }, [isSignIn]);

  // Effects
  useEffect(() => {
    startTransition(() => {
      setCurrentLocation(location);
    });
  }, [location]);

  return <Routes location={currentLocation}>{routeComponents}</Routes>;
};

export { RoutesContainer };
