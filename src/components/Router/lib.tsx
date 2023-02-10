import React from 'react';
import { RouteObject } from 'react-router-dom';

import { Authorization } from 'pages';

export const routeMap: RouteObject[] = [
  { path: '/authorization', element: <Authorization /> },
];
