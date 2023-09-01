import React from 'react';
import { RouteObject } from 'react-router-dom';

import { Authorization, Tree } from 'pages';

export const privateRouteMap: RouteObject[] = [
  { path: '/', element: <Tree /> },
];

export const publicRouteMap: RouteObject[] = [
  { path: '/auth', element: <Authorization /> },
];
