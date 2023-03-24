import React from 'react';
import { RouteObject } from 'react-router-dom';

import { Authorization, Tree } from 'pages';

export const publicRouteMap: RouteObject[] = [
  { path: '/authorization', element: <Authorization /> },
];

export const privateRouteMap: RouteObject[] = [
  { path: '/tree', element: <Tree /> },
];
