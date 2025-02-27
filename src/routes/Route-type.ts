import { JSX, LazyExoticComponent } from 'react';

/**
 *  - path : 페이지 경로
 *  - element : 페이지 컴포넌트
 *  - isProtected : 페이지 인증 필요여부
 */
interface RouteType {
  path: string;
  element: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  isProtected?: boolean;
}

interface JoinRouteType {
  SIGN_IN: RouteType;
  SIGN_UP: RouteType;
}

interface SystemRouteType {
  USER_LIST: RouteType;
}

interface ErrorRouteType {
  NOT_FOUND: RouteType;
}

export type { RouteType };
export type { JoinRouteType, SystemRouteType, ErrorRouteType };
