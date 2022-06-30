import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { authRoutes, publicRoutes } from '../routs';
import { SHOP_ROUTE } from '../utils/constants';

const AppRouter: React.FC = () => {
  const isAuth = false;

  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}
      <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
