import ERR_ROUTE from './_initialize/Routes-error';
import { JOIN_ROUTE } from './_initialize/Routes-join';
import { SYSTEM_ROUTE } from './_initialize/Routes-system';

const ROUTES_PATH = {
  ...JOIN_ROUTE,
  ...SYSTEM_ROUTE,
};

const ROUTE_VALUES = [
  ...(Object.values({ ...ROUTES_PATH, ...ERR_ROUTE }) || []),
];

export { ROUTES_PATH, ROUTE_VALUES };
