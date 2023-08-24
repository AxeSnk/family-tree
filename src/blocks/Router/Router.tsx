import React from 'react';
import { useRoutes } from 'react-router-dom';

import { publicRouteMap, privateRouteMap } from './lib';

const Router: React.FC = () => {
  const user = true;
  const publicElements = useRoutes(publicRouteMap);
  const privateElements = useRoutes(privateRouteMap);

  return user ? privateElements : publicElements;
};

export default Router;
